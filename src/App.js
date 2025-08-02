import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">NirogGyan Healthcare</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/book/:id" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
