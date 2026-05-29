Team Task Manager
A full-stack MERN application for managing teams, projects, and tasks with authentication and role-based access.
---
Features
User Signup & Login
JWT Authentication
Create Projects
Create & Assign Tasks
Mark Tasks as Completed
Delete Tasks
Admin Dashboard
Modern Responsive UI
MongoDB Database Integration
---
Tech Stack
Frontend
React.js
React Router DOM
Axios
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
---
Folder Structure
team-task-manager
│
├── frontend
│ ├── src
│ └── package.json
│
├── backend
│ ├── routes
│ ├── models
│ ├── controllers
│ └── package.json
│
└── README.md
---
Installation
Clone Repository
```bash

Backend Setup
```bash
cd backend
npm install
npm start
```
---
Frontend Setup
```bash
cd frontend
npm install
npm start
```
---
Environment Variables
Create `.env` inside backend folder:
```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```
---
API Endpoints
Authentication
POST `/api/auth/signup`
POST `/api/auth/login`
Projects
GET `/api/project/all`
POST `/api/project/create`
Tasks
GET `/api/task/all`
POST `/api/task/create`
PUT `/api/task/update/:id`
DELETE `/api/task/delete/:id`
---
Deployment
Frontend
Vercel
Backend
Render
Database
MongoDB Atlas
---
Screenshots
Add screenshots here after deployment.
---
Author
Aishwarya Reddy
