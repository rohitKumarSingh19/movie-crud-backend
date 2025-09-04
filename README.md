# movie-crud-backend
# 🎬 Movie CRUD API (Node.js + Express + MongoDB)

A professional **RESTful API** for managing movies with **user authentication (JWT)**.  
Users can register, log in, and manage movies (Create, Read, Update, Delete).

---

## 🚀 Features
- User **registration** and **login** with JWT authentication
- Secure **password hashing** with bcrypt
- **CRUD operations** for movies:
  - Create a movie (🔒 protected)
  - Get all movies (🌍 public)
  - Get single movie by ID (🌍 public)
  - Update a movie (🔒 protected)
  - Delete a movie (🔒 protected)
- Middleware for:
  - Error handling
  - Logging requests
  - JWT authentication

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)**
- **bcrypt.js**

---

## 📂 Project Structure

movie-crud-backend/
│── controllers/
│ ├── userController.js
│ └── movieController.js
│
│── middleware/
│ ├── authMiddleware.js
│ ├── errorHandler.js
│ └── loggerMiddleware.js
│
│── models/
│ ├── User.js
│ └── Movie.js
│
│── routes/
│ ├── userRoutes.js
│ └── movieRoutes.js
│
│── database/
│ └── db.js
│
│── server.js
│── .env
│── package.json
│── README.md


---

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/rohitKumarSingh19/movie-crud-backend.git
cd movie-crud-backend

Install dependencies
-npm install

Setup environment variables (.env)
PORT=8001
MONGO_URI=mongodb://127.0.0.1:27017/movie_crud
JWT_SECRET=your_jwt_secret_key

Start the server
npm run dev   # with nodemon (if installed)
npm start     # normal run

📌 API Endpoints
| Method | Endpoint              | Access | Description         |
| ------ | --------------------- | ------ | ------------------- |
| POST   | `/api/users/register` | Public | Register a new user |
| POST   | `/api/users/login`    | Public | Login and get JWT   |

🎬 Movies
| Method | Endpoint          | Access  | Description     |
| ------ | ----------------- | ------- | --------------- |
| GET    | `/api/movies`     | Public  | Get all movies  |
| GET    | `/api/movies/:id` | Public  | Get movie by ID |
| POST   | `/api/movies`     | Private | Create a movie  |
| PUT    | `/api/movies/:id` | Private | Update a movie  |
| DELETE | `/api/movies/:id` | Private | Delete a movie  |

🔮 Future Improvements

Role-based authorization (Admin/User)

User can only modify their own movies

Input validation with express-validator

Unit tests with Jest

👨‍💻 Author

Rohit Kumar Singh

