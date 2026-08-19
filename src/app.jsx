import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import HomeDashboard from './pages/HomeDashboard';
import PitchReport from './pages/PitchReport';
import PlayersPage from './pages/PlayersPage';
import TeamsPage from './pages/TeamsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

// Glassmorphic layout wrapper for authenticated pages
function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <HomeDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pitch-report"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <PitchReport />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/players"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <PlayersPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/teams"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <TeamsPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Wildcard Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}