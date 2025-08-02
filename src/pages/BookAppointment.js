import { useParams } from 'react-router-dom';
import { useState } from 'react';
import doctors from '../data/doctors';

function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(id));
  const [form, setForm] = useState({ name: '', email: '', datetime: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Book with {doctor?.name}</h2>
      {submitted ? (
        <p className="text-green-600 font-medium text-center">Appointment booked successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="datetime-local"
            required
            className="w-full p-2 border rounded"
            value={form.datetime}
            onChange={(e) => setForm({ ...form, datetime: e.target.value })}
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
}

export default BookAppointment;
