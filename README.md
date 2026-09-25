# MERN Authentication System

A full-stack authentication application built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**. The project demonstrates how a React frontend communicates with a Node.js/Express backend through REST APIs to perform user registration and authentication.

## Features

* User registration with name, email, and password
* User login using email and password
* Server-side request validation using Joi
* Password hashing using bcrypt
* JWT-based authentication
* 24-hour JWT token expiration
* MongoDB database integration using Mongoose
* Duplicate email detection
* Login and signup error handling
* Logout functionality
* Browser localStorage for token and user information
* React Router-based navigation
* Toast notifications using React Toastify
* CORS configuration for frontend-backend communication
* Environment variables using dotenv

## c

### Signup Flow

```text
User enters name, email and password
              ↓
        React Signup Form
              ↓
       POST /auth/signup
              ↓
        Joi Validation
              ↓
     Check existing user
              ↓
       bcrypt password hash
              ↓
       Save user to MongoDB
              ↓
       Signup successful
```

### Login Flow

```text
User enters email and password
              ↓
         POST /auth/login
              ↓
        Joi Validation
              ↓
       Find user in MongoDB
              ↓
       bcrypt password check
              ↓
          Generate JWT
              ↓
      Return token to React
              ↓
      Store token in localStorage
              ↓
          Navigate to Home
```

## Backend Structure

```text
backend/
├── controllers/
│   └── AuthController.js
├── middlewares/
│   └── AuthValidation.js
├── models/
│   ├── db.js
│   └── user.js
├── routes/
│   └── AuthRouter.js
├── index.js
└── .env
```

## Frontend Structure

```text
frontend/
└── src/
    ├── pages/
    │   ├── Login.js
    │   ├── Signup.js
    │   └── Home.js
    ├── App.js
    ├── index.js
    ├── index.css
    ├── App.css
    └── utils.js
```

## API Endpoints

| Method | Endpoint       | Purpose                           |
| ------ | -------------- | --------------------------------- |
| POST   | `/auth/signup` | Register a new user               |
| POST   | `/auth/login`  | Authenticate an existing user     |
| GET    | `/ping`        | Check backend server availability |

## Security

The project uses multiple security-related mechanisms:

* **bcrypt** for password hashing
* **JWT** for authentication tokens
* **Joi** for request validation
* **dotenv** for environment configuration
* **MongoDB unique email constraint** to prevent duplicate accounts

## Learning Outcomes

This project provided practical experience with:

* MERN stack architecture
* REST API development
* React state management
* React Router
* Express middleware
* MongoDB and Mongoose
* Authentication and authorization concepts
* Password hashing
* JWT authentication
* API integration using Fetch
* Form validation
* Client-side session handling
* Frontend-backend communication


👨‍💻 Developer
Ayush Kumar

MCA | Full Stack / MERN Stack Developer

⭐ If you find this project useful, consider giving the repository a star!

  
