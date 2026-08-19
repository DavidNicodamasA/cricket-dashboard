import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeDashboard() {
  const stats = [
    { label: 'Total Matches Analyzed', value: '142', change: '+12% this month' },
    { label: 'Top Win-Ratio Venue', value: 'Wankhede Stadium', change: '68% Chasing Wins' },
    { label: 'Average 1st Inn Score', value: '174 runs', change: 'T20 Format' },
    { label: 'Active Player Profiles', value: '320+', change: 'Updated Live' },
  ];

  const recentMatches = [
    { id: 1, teams: 'IND vs AUS', venue: 'M. Chinnaswamy Stadium', result: 'IND won by 6 wickets', type: 'T20I' },
    { id: 2, teams: 'ENG vs SA', venue: "Lord's", result: 'ENG won by 24 runs', type: 'ODI' },
    { id: 3, teams: 'CSK vs MI', venue: 'Wankhede Stadium', result: 'CSK won by 5 wickets', type: 'IPL' },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Responsive Header Banner */}
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 p-5 md:p-6 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Welcome to Neoera Analytics</h2>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Real-time match insights, pitch evaluations, and player telemetry performance metrics.
          </p>
        </div>

        {/* Action Buttons for Authentication */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/login"
            className="w-full text-center sm:w-auto rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="w-full text-center sm:w-auto rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-500"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Quick Metrics Grid - Adapts from 1 col (mobile) to 4 col (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 sm:p-5 backdrop-blur-md transition hover:border-slate-700"
          >
            <p className="text-xs font-medium text-slate-400 truncate">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-white sm:mt-2 sm:text-2xl">{stat.value}</p>
            <span className="mt-1 inline-block text-[11px] sm:text-xs font-semibold text-orange-400">
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      {/* Recent Match Performance Table - Mobile Swipeable Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-xl">
        <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">Recent Match Insights</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                <th className="py-3 px-3 sm:px-4">Match</th>
                <th className="py-3 px-3 sm:px-4">Venue</th>
                <th className="py-3 px-3 sm:px-4">Format</th>
                <th className="py-3 px-3 sm:px-4">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
              {recentMatches.map((match) => (
                <tr key={match.id} className="transition hover:bg-slate-800/30">
                  <td className="py-3 px-3 sm:px-4 font-semibold text-white whitespace-nowrap">{match.teams}</td>
                  <td className="py-3 px-3 sm:px-4 text-slate-300 whitespace-nowrap">{match.venue}</td>
                  <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                    <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-300 sm:text-xs">
                      {match.type}
                    </span>
                  </td>
                  <td className="py-3 px-3 sm:px-4 font-medium text-emerald-400 whitespace-nowrap">{match.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}