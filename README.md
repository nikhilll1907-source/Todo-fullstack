# 📝 Fullstack Todo App

A simple and clean fullstack Todo application built using **React** and **Express**. Users can sign up, log in, and manage their daily tasks efficiently.

---

## 🌐 Live Demo

👉 https://todo-fullstack-orcin.vercel.app/

---

## 🚀 Tech Stack

### Frontend

* React
* Axios
* React Router

### Backend

* Node.js
* Express
* JWT Authentication

---

## ✨ Features

* 🔐 User Signup & Login
* 📝 Add Todos
* 📋 View Todos
* ❌ Delete Todos
* 🔒 Protected Routes (Auth required)

---

## 📁 Project Structure

```
todo-app/
│
├── client/          # React frontend
├── server/          # Express backend
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

---

### 2. Backend Setup

```bash
cd server
npm install
npm start
```

---

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Auth

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| POST   | /signup  | Register user |
| POST   | /login   | Login user    |

### Todos

| Method | Endpoint      | Description   |
| ------ | ----------    | ------------- |
| GET    | /todos        | Get all todos |
| POST   | /add-todo     | Add todo      |
| DELETE | /todos/:id    | Delete todo   |

---

## 🛡️ Authentication

* Uses JWT for secure login
* Protected routes require token

---

## 🧑‍💻 Author

* Nikhil kumar
* GitHub: https://github.com/nikhilll1907-source

---

## 📄 License

MIT License

---

## 💡 Future Improvements

* ✏️ Edit todos
* 📅 Add due dates
* 🌙 Dark mode
* 📱 Better mobile UI

---

⭐ If you like this project, consider giving it a star!

