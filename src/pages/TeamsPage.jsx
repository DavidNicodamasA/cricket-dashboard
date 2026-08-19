import React from 'react';

export default function TeamsPage() {
  const teams = [
    {
      id: 1,
      name: 'Mumbai Indians',
      code: 'MI',
      titles: 5,
      winRate: '56.4%',
      form: ['W', 'W', 'L', 'W', 'L'],
      homeVenue: 'Wankhede Stadium',
    },
    {
      id: 2,
      name: 'Chennai Super Kings',
      code: 'CSK',
      titles: 5,
      winRate: '58.1%',
      form: ['W', 'L', 'W', 'W', 'W'],
      homeVenue: 'M. A. Chidambaram Stadium',
    },
    {
      id: 3,
      name: 'Gujarat Titans',
      code: 'GT',
      titles: 1,
      winRate: '62.5%',
      form: ['L', 'W', 'W', 'L', 'W'],
      homeVenue: 'Narendra Modi Stadium',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Franchise & Team Profiles</h2>
        <p className="mt-1 text-sm text-slate-400">
          Historical win percentages, titles won, home ground dominance, and current form trends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">{team.name}</h3>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-orange-400 border border-slate-700">
                {team.code}
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                <span>Championship Titles:</span>
                <span className="font-bold text-amber-400">{team.titles}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                <span>Overall Win Rate:</span>
                <span className="font-bold text-emerald-400">{team.winRate}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                <span>Home Stadium:</span>
                <span className="font-medium text-slate-200">{team.homeVenue}</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-medium mb-2">Recent Form (Last 5)</p>
              <div className="flex space-x-2">
                {team.form.map((res, i) => (
                  <span
                    key={i}
                    className={`w-7 h-7 flex items-center justify-center rounded-md text-xs font-bold ${
                      res === 'W'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {res}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}