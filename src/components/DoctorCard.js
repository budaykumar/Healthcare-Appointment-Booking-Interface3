import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="border rounded-lg p-4 shadow-md text-center">
      <img src={doctor.image} alt={doctor.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
      <h3 className="text-lg font-semibold">{doctor.name}</h3>
      <p className="text-sm text-gray-600">{doctor.specialization}</p>
      <p className={`text-sm mt-1 font-medium ${
        doctor.availability.includes("Available") ? 'text-green-600' : 'text-red-500'
      }`}>
        {doctor.availability}
      </p>
      <Link to={`/doctor/${doctor.id}`} className="inline-block mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        View Profile
      </Link>
    </div>
  );
}

export default DoctorCard;
