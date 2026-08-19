import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Pitch Report', path: '/pitch-report' },
    { name: 'Players', path: '/players' },
    { name: 'Teams', path: '/teams' },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900/60 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
          Neoera Cricket Analysis
        </h1>
        
        {/* Navigation Links */}
        <div className="flex space-x-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleSignOut}
        className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition"
      >
        Sign Out
      </button>
    </nav>
  );
}