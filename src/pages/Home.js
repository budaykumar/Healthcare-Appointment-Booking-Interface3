import { useEffect, useState } from "react";
import {Link } from 'react-router-dom';

function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Failed to fetch doctors", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Doctors List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="p-4 border rounded shadow">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-lg font-semibold text-center">{doctor.name}</h2>
            <p className="text-center text-sm text-gray-600">{doctor.specialization}</p>
            <p className="text-center text-green-500">{doctor.availability}</p>
            < Link to={`/book/${doctor.id}`}
                className="inline-block mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;