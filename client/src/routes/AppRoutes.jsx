import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DonorRegistration from '../pages/DonorRegistration';
import DonorDashboard from '../pages/DonorDashboard';
import RequestBlood from '../pages/RequestBlood';
import HospitalDashboard from '../pages/HospitalDashboard';
import AdminPanel from '../pages/AdminPanel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<DonorRegistration />} />
      <Route path="/donor-dashboard" element={<DonorDashboard />} />
      <Route path="/request" element={<RequestBlood />} />
      <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default AppRoutes;