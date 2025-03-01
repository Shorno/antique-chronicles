# The Antique Chronicles

## Overview
The Antique Chronicles is a web application that allows users to explore, add, and manage artifacts. It provides a platform for users to register, log in, and interact with various artifacts.

## Screenshot
![Screenshot](https://res.cloudinary.com/def3zwztt/image/upload/v1738736266/all-devices-black_dl3zs4.png)

## Key Features
- **User Authentication:** Sign Up, Login, Logout
- **User Authorization:** Protected Routes using JWT Tokens
- **Artifact Management:** Add, View, and Update Artifacts
- **Responsive Design**
- **404 Page:** Custom Not Found routes

## npm Packages Used
- **react-router:** Declarative routing for React
- **zustand:** A small, fast, and scalable bearbones state-management solution
- **firebase:** Firebase authentication and other services
- **react-hot-toast:** A React library to add beautiful notifications to your app
- **framer-motion:** A library to power production-ready animations
- **lucide-react:** A collection of simply beautiful open-source icons for React

## Backend Repository Overview
The backend repository manages the server-side operations of the Antique Chronicles application. It is built using JavaScript and provides APIs for user authentication, artifact management, and other core functionalities.

### Backend Technologies Used
- **JavaScript**
- **Node.js**
- **Express**
- **MongoDB**

### Backend Repository URL
[Antique Chronicles Backend](https://github.com/Shorno/antique-chronicles-backend)

## Setup Guide

### Frontend
1. **Clone the frontend repository:**
```bash
git clone https://github.com/Shorno/antique-chronicles.git
```

2. **Navigate to the project directory:**
```bash
cd antique-chronicles
```

3. **Install frontend dependencies:**
```bash
npm install
```

4. **Start the frontend development server:**
```bash
npm start
```

### Backend
1. **Clone the backend repository:**
```bash
git clone https://github.com/Shorno/antique-chronicles-backend.git
```

2. **Navigate to the backend project directory:**
```bash
cd antique-chronicles-backend
```

3. **Install backend dependencies:**
```bash
npm install
```

4. **Start the backend server:**
```bash
npm start
```

## Environment Variables

### Frontend
Create a `.env` file in the root directory of the frontend repository and add the following environment variables:

```plaintext
VITE_BASE_API_URL=your_api_url
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

### Backend
Create a `.env` file in the root directory of the backend repository and add the following environment variables:

```plaintext
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

## Live Project Link
[The Antique Chronicles](https://antique-chronicles.vercel.app)


## Relevant Resources
- [Antique Chronicles GitHub Repository](https://github.com/Shorno/antique-chronicles)
- [Antique Chronicles Backend GitHub Repository](https://github.com/Shorno/antique-chronicles-backend)
