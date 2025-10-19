# 🎬 YouTube Connect Hub

A full-stack **YouTube video uploader app** built with **React + Node.js + Express + Google OAuth2 + YouTube Data API**.  
It allows users to securely log in with their Google account and upload videos directly to their YouTube channel through a custom UI.

---

## 🚀 Features

- 🔐 **Google OAuth2 Login** — Connect your YouTube account securely.
- 🎥 **Video Upload System** — Upload videos with title, description, and privacy settings.
- ⚙️ **Backend (Node.js + Express)** — Handles authentication and YouTube API requests.
- 💾 **Multer Integration** — Upload videos from local storage.
- 🧩 **Frontend (React)** — Clean, responsive form-based interface for upload.
- 📡 **YouTube Data API v3 Integration** — Direct communication with YouTube.
- 💬 **Real-time status feedback** — Alerts for login and upload success.

---

## 🏗️ Tech Stack

| Category | Technologies Used |
|-----------|------------------|
| Frontend | React, Axios |
| Backend | Node.js, Express |
| Auth | Google OAuth2 |
| API | YouTube Data API v3 |
| File Upload | Multer |
| Hosting | Localhost (can be deployed to Vercel/Render) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone git@github.com:Suraj051198/YouTube-Connect-Hub.git
```

### 2️⃣ Install backend dependencies
```bash
cd "YouTube Connect Hub"
npm install
```

### 3️⃣ Create Google Cloud OAuth credentials
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Enable **YouTube Data API v3**
- Create **OAuth2.0 Client ID**
- Set redirect URI:  
  `http://localhost:5000/oauth2callback`

### 4️⃣ Add credentials in your backend
In your `server.js` or `.env`:
```env
CLIENT_ID=your_client_id_here
CLIENT_SECRET=your_client_secret_here
REDIRECT_URI=http://localhost:5000/oauth2callback
```

### 5️⃣ Run the backend server
```bash
node server.js
```

### 6️⃣ Run the frontend (React app)
```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 How It Works

1. User clicks **“Login with Google”**
2. OAuth popup opens → user grants access to YouTube
3. Access token saved in backend memory
4. User selects a video and adds title + description
5. App uploads the video to YouTube using YouTube Data API

---

## 📸 Screenshots

> *(Add your screenshots here)*

| Login | Upload Form | Upload Success |
|-------|--------------|----------------|
| ![Login](assets/login.png) | ![Form](assets/upload-form.png) | ![Success](assets/success.png) |

---

## 🧑‍💻 Developer Info

**👤 Author:** [Suraj Sonawane](https://github.com/Suraj051198)  
**📧 Contact:** surajsonawane172@gmail.com  
**🔗 Repo:** [YouTube Connect Hub](https://github.com/Suraj051198/YouTube-Connect-Hub)

---

## 🏁 Future Enhancements

- 🔄 Refresh token & session storage
- 📊 Upload progress bar
- 📅 Scheduled uploads
- 🌐 Multi-platform posting (Instagram, LinkedIn, etc.)

---

## 📜 License

This project is open-source under the **MIT License**.

---

⭐ **If you like this project, don’t forget to star it on GitHub!**
