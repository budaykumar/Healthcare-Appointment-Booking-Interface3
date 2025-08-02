# 🏥 NirogGyan - Healthcare Appointment Booking Interface

A simple, responsive web application built with React, Tailwind CSS, and Node.js that allows users to browse doctors, view their profiles, and book appointments. The backend is mocked using Express.js with JSON file storage.

---


## 🚀 Features

- View a list of doctors with profile images, specialization, and availability
- Navigate to individual doctor profiles
- Book an appointment via a form (name, email, date/time)
- Persist appointments using backend POST API
- Responsive design using Tailwind CSS

---

## 🛠️ Tools & Libraries Used

### 🔷 Frontend
- **React** – for building the user interface
- **React Router DOM** – for page routing
- **Tailwind CSS** – for styling and responsiveness
- **JavaScript** – for logic and interactivity

### 🔶 Backend (Optional)
- **Node.js** – runtime environment
- **Express.js** – backend API framework
- **fs module** – for file-based JSON storage

---

## 🧩 Folder Structure

project-root/
├── niroggyan-frontend/ # React app
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Doctor List, Profile, Booking Form
│ │ ├── data/ # doctors.js (local fallback data)
│ │ └── App.js # Routing
│ └── tailwind.config.js # Tailwind setup
│
├── niroggyan-backend/ # Express server
│ ├── data/
│ │ ├── doctors.json
│ │ └── appointments.json
│ └── server.js

yaml
Copy
Edit

---

## 💡 Improvements With More Time

- ✅ Integrate a real database like **PostgreSQL** or **MongoDB**
- ✅ Add **Admin Dashboard** to view all appointments
- ✅ Enable **email/SMS notification** after booking
- ✅ Add **authentication** for users and doctors
- ✅ Improve **form validations** and input UX
- ✅ Use **context or Redux** for shared state management
- ✅ Add **search + filter** functionality by specialization, location, availability

---

## ⚠️ Challenges Faced & Solutions

| Challenge | Solution |
|----------|----------|
| Tailwind not working initially | Installed & configured `tailwind.config.js`, imported styles into `index.css`, and restarted the dev server |
| CORS error during fetch | Added `cors` middleware to Express server |
| Booking data not saving | Implemented `fs.readFile` and `fs.writeFile` properly in Express POST route |
| React routing not showing content | Confirmed `BrowserRouter` and dynamic `:id` routes in `App.js` |
| Local JSON data not loading | Used absolute imports or fixed path in `doctors.js` |

---

## 🧪 How to Run Locally

### 🔧 Frontend (React)

```bash
cd niroggyan-frontend
npm install
npm start
🛠️ Backend (Express)
bash
Copy
Edit
cd niroggyan-backend
npm install
node server.js
App runs at:

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/doctors and /api/appointments