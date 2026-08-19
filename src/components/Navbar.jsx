import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <Link to="/" className="text-lg font-bold tracking-tight text-white sm:text-xl">
          Neoera<span className="text-orange-500">.Cricket</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 text-xs font-semibold text-slate-300 md:flex sm:text-sm">
          <Link to="/" className="transition hover:text-orange-400">Home</Link>
          <Link to="/pitch-report" className="transition hover:text-orange-400">Pitch Report</Link>
          <Link to="/players" className="transition hover:text-orange-400">Players</Link>
          <Link to="/teams" className="transition hover:text-orange-400">Teams</Link>
        </div>

        {/* Desktop Authentication Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:text-white"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-orange-500"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle Navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-slate-900 px-4 pt-2 pb-4 space-y-3 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            to="/pitch-report"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-orange-400"
          >
            Pitch Report
          </Link>
          <Link
            to="/players"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-orange-400"
          >
            Players
          </Link>
          <Link
            to="/teams"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-orange-400"
          >
            Teams
          </Link>
          <div className="pt-2 flex flex-col gap-2 border-t border-slate-800">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center rounded-lg border border-slate-700 py-2 text-xs font-semibold text-slate-200"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="w-full text-center rounded-lg bg-orange-600 py-2 text-xs font-semibold text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}