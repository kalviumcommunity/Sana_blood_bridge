import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">BloodBridge</h1>
      <nav>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/register">Register</Link>
        <Link className="mr-4" to="/donor-dashboard">Donor Dashboard</Link>
        <Link className="mr-4" to="/request">Request Blood</Link>
        <Link className="mr-4" to="/hospital-dashboard">Hospital Dashboard</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
    </header>
  );
};

export default Header;
