const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const doctors = require('./data/doctors.json');
const appointmentsPath = path.join(__dirname, 'data', 'appointments.json');

const app = express();
app.use(cors());
app.use(express.json());

// GET all doctors
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

// POST new appointment
app.post('/api/appointments', (req, res) => {
  const { patientName, email, dateTime, doctorId } = req.body;

  if (!patientName || !email || !dateTime || !doctorId) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newAppointment = {
    id: Date.now(),
    patientName,
    email,
    dateTime,
    doctorId
  };

  fs.readFile(appointmentsPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read appointments.json', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const appointments = JSON.parse(data);
    appointments.push(newAppointment);

    fs.writeFile(appointmentsPath, JSON.stringify(appointments, null, 2), (err) => {
      if (err) {
        console.error('Failed to save appointment', err);
        return res.status(500).json({ error: 'Failed to save appointment' });
      }

      res.status(201).json({ message: 'Appointment booked successfully!', appointment: newAppointment });
    });
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
