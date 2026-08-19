import React from 'react';

export default function HomeDashboard() {
  const stats = [
    { label: 'Total Matches Analyzed', value: '142', change: '+12% this month' },
    { label: 'Top Win-Ratio Venue', value: 'Wankhede Stadium', change: '68% Chasing Wins' },
    { label: 'Average 1st Inn Score', value: '174 runs', change: 'T20 Format' },
    { label: 'Active Player Profiles', value: '320+', change: 'Updated Live' },
  ];

  const recentMatches = [
    { id: 1, teams: 'IND vs AUS', venue: 'M. Chinnaswamy Stadium', result: 'IND won by 6 wickets', type: 'T20I' },
    { id: 2, teams: 'ENG vs SA', venue: 'Lord\'s', result: 'ENG won by 24 runs', type: 'ODI' },
    { id: 3, teams: 'CSK vs MI', venue: 'Wankhede Stadium', result: 'CSK won by 5 wickets', type: 'IPL' },
  ];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Welcome to Neoera Analytics</h2>
        <p className="mt-1 text-sm text-slate-400">
          Real-time match insights, pitch evaluations, and player telemetry performance metrics.
        </p>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 transition"
          >
            <p className="text-xs font-medium text-slate-400">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
            <span className="text-xs font-semibold text-orange-400 mt-1 inline-block">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Recent Match Performance Table */}
      <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Match Insights</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Match</th>
                <th className="py-3 px-4">Venue</th>
                <th className="py-3 px-4">Format</th>
                <th className="py-3 px-4">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {recentMatches.map((match) => (
                <tr key={match.id} className="hover:bg-slate-800/30 transition">
                  <td className="py-3.5 px-4 font-semibold text-white">{match.teams}</td>
                  <td className="py-3.5 px-4 text-slate-300">{match.venue}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                      {match.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">{match.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}