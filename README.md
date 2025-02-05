# The Antique Chronicles

## Overview
The Antique Chronicles is a web application that allows users to explore, add, and manage artifacts. It provides a platform for users to register, log in, and interact with various artifacts.

## Screenshot
*(Add screenshot here if available)*

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
Navigate to the project directory:
bash
Copy
Edit
cd antique-chronicles
Install frontend dependencies:
bash
Copy
Edit
npm install
Start the frontend development server:
bash
Copy
Edit
npm start
Backend
Clone the backend repository:
bash
Copy
Edit
git clone https://github.com/Shorno/antique-chronicles-backend.git
Navigate to the backend project directory:
bash
Copy
Edit
cd antique-chronicles-backend
Install backend dependencies:
bash
Copy
Edit
npm install
Start the backend server:
bash
Copy
Edit
npm start
Environment Variables
Frontend
Create a .env file in the root directory of the frontend repository and add the following environment variables:

plaintext
Copy
Edit
VITE_BASE_API_URL=your_api_url
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_API_KEY=your_firebase_api_key
Backend
Create a .env file in the root directory of the backend repository and add the following environment variables:

plaintext
Copy
Edit
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
Live Project Link
The Antique Chronicles
(Insert live project link here if available)

Relevant Resources
Antique Chronicles GitHub Repository
Antique Chronicles Backend GitHub Repository
