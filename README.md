# Simple Blog Website using MERN Stack

This is a full-stack MERN blog application that allows users to create, edit, view, and delete blogs. It includes user authentication, authorization, form validations, and secure password storage. This project is designed to provide a seamless blogging experience with responsive design across all platforms.

## Features

- **User Registration & Login**: Secure registration and login functionality with form validations.
- **JWT Authentication**: User sessions are managed using JSON Web Tokens (JWT) for secure access control.
- **Password Security**: Passwords are hashed using `bcryptjs` for added security.
- **Create, Edit, and Delete Blogs**: Authenticated users can create blogs, view them on the homepage, and edit or delete them as needed.
- **Database Integration**: Blog data is stored and updated in a MongoDB database, ensuring persistent and reliable data management.
- **Responsive Design**: The application is optimized for all devices using Bootstrap and Material UI components for a seamless user experience.

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/) with `react-router-dom` for client-side routing.
  - [Formik](https://formik.org/) for form validation and handling.
  - [Bootstrap](https://getbootstrap.com/) for responsive design across devices.
  - [Material UI](https://mui.com/) for styling and UI components.

- **Backend**:
  - [Express](https://expressjs.com/) - Node.js framework for handling server logic.
  - [Mongoose](https://mongoosejs.com/) - ODM for MongoDB to manage data models and database operations.
  - [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) - Used for secure token-based authentication.
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Library for hashing passwords.
  - [cors](https://www.npmjs.com/package/cors) - Middleware to enable Cross-Origin Resource Sharing.
  - [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management.

- **Database**:
  - [MongoDB](https://www.mongodb.com/) - NoSQL database for efficient data storage and retrieval.

## Project Structure

```plaintext
├── client              # Frontend code
│   ├── src             
│   │   ├── components  # Reusable UI components
│   │   ├── pages       # Application pages (Login, Register, Home, etc.)
│   │   ├── services    # API services and HTTP requests
│   │   └── App.js      # Main React application entry point
├── server              # Backend code
│   ├── config          # Configuration files (database, JWT secret)
│   ├── controllers     # Route controllers for handling requests
│   ├── models          # Mongoose schemas for data
│   ├── routes          # Express routes for API endpoints
│   └── app.js          # Main server entry point
└── .env                # Environment variables
└── README.md           # Project documentation
```

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/simple-blog-website.git
   cd simple-blog-website
   ```

2. **Backend Setup**:
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `server` directory and configure the following:
     ```
     MONGO_URI=<Your MongoDB URI>
     JWT_SECRET=<Your JWT Secret Key>
     ```
   - Start the server:
     ```bash
     node index.js
     ```

3. **Frontend Setup**:
   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend application:
     ```bash
     npm run dev
     ```

## Usage

1. **Register** a new account or **log in** with existing credentials.
2. **Create a Blog**: Use the "Create Blog" form to add a new blog. It will be displayed on the homepage and saved to the database.
3. **Edit or Delete Blogs**: Each blog has options for editing or deleting. Click "Edit" to modify a blog, or "Delete" to remove it.
---
