# Health and Fitness Tracker

## Description

The **Health and Fitness Tracker** is a full-stack web application that allows users to log their exercises, set fitness goals, and track progress over time. The application features authentication, data visualization using charts, and the ability to monitor fitness goals and progress.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Routes](#api-routes)
- [Frontend Structure](#frontend-structure)
- [Backend Structure](#backend-structure)

## Tech Stack

**Frontend:**
- React
- Axios (for API calls)
- React Router DOM
- JWT Decode
- Chart.js (for data visualization)

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose for ORM)
- JWT for authentication
- bcrypt.js for password hashing

## Features

1. **Authentication:**
   - Users can register and log in using JWT-based authentication.
   - Passwords are hashed using bcrypt for security.
   
2. **Exercise Logging:**
   - Users can log exercises with details like type, duration, date, and calories burned.

3. **Goal Setting:**
   - Users can set fitness goals (e.g., run 5km) and view or delete them.

4. **Progress Tracking:**
   - Users can view progress over time with charts that visualize their fitness journey.

5. **Responsive Design:**
   - The application is designed to be mobile-friendly.

## Installation

1. **Clone the repository:**
   git clone https://github.com/your-username/health-fitness-tracker.git
   
Running the Application
Backend:
Environment Variables:
Set up a .env file in the backend folder:
MONGO_URI=your-mongo-db-connection-string
JWT_SECRET=your-jwt-secret
PORT=5000
Frontend:
The frontend will run on http://localhost:3000 and the backend on http://localhost:5000.

Environment Variables
In the backend directory, create a .env file with the following content:

MONGO_URI=your-mongo-db-connection-string
JWT_SECRET=your-jwt-secret
PORT=5000
API Routes
User Routes
POST /api/register - Register a new user.
POST /api/login - Log in with a registered user.
Exercise Routes
POST /api/exercises - Log a new exercise.
GET /api/exercises - Get a list of logged exercises.
Goal Routes
POST /api/goals - Set a new fitness goal.
GET /api/goals - Get a list of user fitness goals.
DELETE /api/goals/:id - Delete a specific goal.
Progress Routes
GET /api/progress - Get the progress data for a user, filtered by date or type.
Frontend Structure:
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   ├── Exercises/
│   │   │   ├── ExerciseForm.js
│   │   │   ├── ExerciseList.js
│   │   ├── Goals/
│   │   │   ├── GoalForm.js
│   │   │   ├── GoalList.js
│   │   ├── Progress/
│   │   │   ├── ProgressChart.js
│   ├── App.js
│   ├── index.js
│   └── services/
│       ├── api.js
│       ├── auth.js
Backend Structure
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── exerciseController.js
│   ├── goalController.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Exercise.js
│   ├── Goal.js
├── routes/
│   ├── authRoutes.js
│   ├── exerciseRoutes.js
│   ├── goalRoutes.js
├── .env
├── server.js
Additional Features
Notifications: Send reminders for upcoming fitness goals using a scheduled task (e.g., node-cron).
Social Sharing: Allow users to share their fitness progress on social media platforms.
License
This project is licensed under the MIT License.

### How to use this README

- Update placeholders like `your-username`, `your-mongo-db-connection-string`, and `your-jwt-secret` with actual values.
- This README is structured to guide developers through setting up and understanding your project.






