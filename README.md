# Login App

## Overview

The **Login App** is a modern and secure user authentication system designed to handle user login and registration with advanced security measures. Built using the latest web technologies, this application leverages:

- **Vite** for a fast and optimized development experience with React.
- **React** for a responsive and dynamic user interface.
- **TailwindCSS** to create a sleek and customizable design system.
- **Firebase** to manage user authentication with ease and security.
- **MongoDB Atlas** for scalable and flexible database management.
- **Google reCAPTCHA** to protect against automated abuse and ensure real users are interacting with the system.

The app implements a robust authentication workflow, including user registration, login, and session management. Firebase handles the authentication logic, while Google reCAPTCHA adds an extra layer of protection against bots and automated scripts. MongoDB Atlas stores user data securely, and the application is styled with TailwindCSS for a modern look and feel.

## Key features include:

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Responsive Design**: Modern, responsive UI built with TailwindCSS.
- **Database Integration**: MongoDB Atlas for reliable and scalable data storage.
- **Security Measures**: Google reCAPTCHA integration to prevent automated sign-ups and login attempts.
- Fast and modern development setup with Vite

## Technologies

- **Frontend**: React, TailwindCSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Firebase
- **Security**: Google reCAPTCHA
- **Stack**: MERN (MongoDB, Express.js, React, Node.js)

## Setup and Installation
**Prerequisites**
- Node.js (v16 or later)
- MongoDB Atlas account
- Firebase account
- Google reCAPTCHA API key

  **Frontend Setup**
  - Clone the Repository
 git clone https://github.com/yourusername/login-app.git
cd login-app

  - Navigate to Frontend Directory
 cd frontend

  - Install Dependencies
 npm install

  - Configure Firebase
Go to the Firebase Console.
Create a new project or use an existing one.
Enable Email/Password authentication in the Firebase Authentication settings.
Generate a new web app and copy the Firebase configuration object.

- Create .env File
Create a .env file in the frontend directory and add your Firebase configuration:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
RECAPTCHA_SITE_KEY=your_site_key

- Setup Google reCAPTCHA
Go to the Google reCAPTCHA Dashboard.
Register your site to get the site key and secret key.
Add these keys to your .env file in the frontend directory:
RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
  
- Run the Frontend Application
npm run dev

**Backend Setup**

- Navigate to Backend Directory
cd ../backend

- Install Dependencies
npm install

- Configure MongoDB Atlas
Go to the MongoDB Atlas Dashboard.
Create a new cluster and database.
Create a database user with appropriate permissions.
Copy the connection string.

- Create .env File
Create a .env file in the backend directory and add your MongoDB connection string:
MONGO_URI=your_mongodb_connection_string

- Run the Backend Server
npm start

**Access the Application**

Open your browser and navigate to http://localhost:3000 to access the Login App. You should be able to register, log in, and use the features of the application.

**Contact**

For any questions or feedback, please contact samikshawankar808@gmail.com
   
