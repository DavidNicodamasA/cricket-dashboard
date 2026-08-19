import React from 'react';

export default function PlayersPage() {
  const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      team: 'RCB / India',
      role: 'Top-order Batter',
      matches: 237,
      runs: 7263,
      avg: '37.25',
      sr: '130.02',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jasprit Bumrah',
      team: 'MI / India',
      role: 'Fast Bowler',
      matches: 120,
      wickets: 145,
      economy: '7.39',
      avg: '23.30',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Rashid Khan',
      team: 'GT / Afghanistan',
      role: 'Spin Bowler',
      matches: 109,
      wickets: 139,
      economy: '6.67',
      avg: '20.76',
      status: 'Active',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Player Database</h2>
        <p className="mt-1 text-sm text-slate-400">
          Track individual player telemetry, strike rates, bowling averages, and career analytics.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Player</th>
                <th className="py-3 px-4">Team</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Matches</th>
                <th className="py-3 px-4">Key Metric</th>
                <th className="py-3 px-4">Economy / SR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {players.map((player) => (
                <tr key={player.id} className="hover:bg-slate-800/30 transition">
                  <td className="py-3.5 px-4 font-semibold text-white">{player.name}</td>
                  <td className="py-3.5 px-4 text-slate-300">{player.team}</td>
                  <td className="py-3.5 px-4 text-slate-400">{player.role}</td>
                  <td className="py-3.5 px-4 text-slate-300">{player.matches}</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">
                    {player.runs ? `${player.runs} Runs` : `${player.wickets} Wickets`}
                  </td>
                  <td className="py-3.5 px-4 text-orange-400 font-medium">
                    {player.sr ? `SR: ${player.sr}` : `Econ: ${player.economy}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}