const express = require('express');
const { google } = require('googleapis');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Multer setup for local file upload
const upload = multer({ dest: 'uploads/' });

// Google OAuth setup
const CLIENT_ID = "939701409607-ks7cht7cc6qf3hfpsdfqck0f4kb7govk.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:5000/oauth2callback";

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
const SCOPES = ['https://www.googleapis.com/auth/youtube.upload', 'https://www.googleapis.com/auth/youtube.force-ssl'];

let tokens = null;

// Step 1: Google login URL
app.get('/auth', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  });
  res.json({ url: authUrl });
});

// Step 2: OAuth callback
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.send("❌ No code returned from Google!");

  try {
    const response = await oauth2Client.getToken(code);
    tokens = response.tokens;
    oauth2Client.setCredentials(tokens);

    res.send(`
      <script>
        window.opener.postMessage("success", "http://localhost:3000");
        window.close();
      </script>
      <h3>Login successful! You can close this window.</h3>
    `);
  } catch (error) {
    console.error(error);
    res.status(400).send("❌ OAuth error.");
  }
});

// Step 3: Upload video
app.post('/upload', upload.single('video'), async (req, res) => {
  if (!tokens) return res.status(401).send("⚠️ Please login first via /auth");

  const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

  const { title, description, privacyStatus } = req.body;
  const filePath = req.file.path;

  try {
    const response = await youtube.videos.insert({
      part: ['snippet', 'status'],
      requestBody: {
        snippet: { title, description },
        status: { privacyStatus: privacyStatus || 'private' }
      },
      media: { body: fs.createReadStream(filePath) }
    });

    // Delete temp file
    fs.unlinkSync(filePath);

    res.send({ message: "✅ Video uploaded!", data: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to upload video.");
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
