# 📌 Pinterest Clone - MERN Stack

A **full-stack Pinterest Clone** built using **MERN (MongoDB, Express.js, React.js, Node.js)** that allows users to **create, update, read, and delete (CRUD) posts (pins)**. This project features a secure authentication system and an intuitive user experience similar to Pinterest.

---

## 📂 Project Structure

The project is organized into two main folders:

- **client/** → Contains the React frontend  
- **server/** → Contains the Express backend  

---

## 🚀 Features

✅ **User Authentication** – JWT-based secure login/signup  
✅ **Create & Upload Pins** – Upload images and create pins  
✅ **Edit & Delete Pins** – Modify or remove your saved pins  
✅ **Responsive Design** – Works on all screen sizes  
✅ **Optimized API** – Fast API responses & database queries  
✅ **Cloudinary Image Upload** – Secure image hosting  
✅ **Email Notifications** – Email-based alerts & account verification  

---

## 🛠 Tech Stack

### **Frontend (Client)**
- React.js with Hooks & Context API
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation

### **Backend (Server)**
- Node.js & Express.js
- MongoDB & Mongoose ORM
- JWT Authentication & bcrypt for security
- Cloudinary for image uploads
- Nodemailer for email services

---

## 📂 Folder Structure

```
📌 Pinterest-Clone/
│── 📁 client/             # Frontend React application
│── 📁 server/             # Backend Express API
│── 📄 README.md           # Project documentation
│── 📄 .gitignore          # Ignore files for Git
```

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/CodeFiroz/pinterest-clone.git
cd pinterest-clone
```

### **2️⃣ Install Dependencies**
Navigate into both `client` and `server` folders and install dependencies:

#### **For Backend (Server)**
```bash
cd server
npm install
```

#### **For Frontend (Client)**
```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables (Server)

Create a `.env` file inside the **server/** folder and add the following:

```env
CLOUDINARY_API_KEY = your_cloudinary_api_key
CLOUDINARY_API_SECRET = your_cloudinary_api_secret
CLOUDINARY_CLOUD_NAME = your_cloudinary_cloud_name

PORT = 3000
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret
NODE_ENV = development
FRONTEND_URL = http://localhost:5173

EMAIL_USER = your_email@example.com
EMAIL_PASS = your_email_password
```

---

## 🚀 Running the Project

### **1️⃣ Start the Backend**
```bash
cd server
npm run dev
```

### **2️⃣ Start the Frontend**
```bash
cd client
npm run dev
```

> The **frontend** will run on `http://localhost:5173` and the **backend** on `http://localhost:3000`

---



## 🖼 Cloudinary Image Upload

This project integrates **Cloudinary** for image hosting. Make sure to add your **Cloudinary API keys** in the `.env` file inside the **server/** directory.

---

## 🤝 Contributing

Contributions are welcome! If you find any bugs or have suggestions, feel free to open an issue or submit a pull request.

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-branch`)
3. **Commit your changes** (`git commit -m "Add new feature"`)
4. **Push to GitHub** (`git push origin feature-branch`)
5. **Open a pull request**

---

## 📩 Contact

👤 **Firoz Ansari**  
📧 Email: [info@cwsindia.co.in](mailto:info@cwsindia.co.in)  
🔗 GitHub: [github.com/CodeFiroz](https://github.com/CodeFiroz)  
📸 Instagram: [@faiz.stuffs](https://www.instagram.com/faiz.stuffs)  

---

### ⭐ **Don't forget to give this repo a star if you found it helpful!** 🚀🌟
