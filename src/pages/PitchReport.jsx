import React from 'react';

export default function PitchReport() {
  const venues = [
    {
      id: 1,
      name: 'Wankhede Stadium',
      location: 'Mumbai, India',
      pitchType: 'Batting Friendly / Red Soil',
      avgFirstInnings: 185,
      paceAssistance: '45%',
      spinAssistance: '55%',
      tossDecision: 'Bowl First (62% Win Rate)',
      keyInsight: 'High bounce early on, but turns significantly in the second innings under lights.',
    },
    {
      id: 2,
      name: 'M. Chinnaswamy Stadium',
      location: 'Bengaluru, India',
      pitchType: 'High Scoring / Small Boundaries',
      avgFirstInnings: 192,
      paceAssistance: '30%',
      spinAssistance: '70%',
      tossDecision: 'Bowl First (70% Win Rate)',
      keyInsight: 'Short boundaries make defending targets tough. Expect high boundary percentages.',
    },
    {
      id: 3,
      name: 'Eden Gardens',
      location: 'Kolkata, India',
      pitchType: 'Balanced / Grass Cover',
      avgFirstInnings: 168,
      paceAssistance: '65%',
      spinAssistance: '35%',
      tossDecision: 'Bat First (54% Win Rate)',
      keyInsight: 'Early seam movement for fast bowlers in the powerplay before flattening out.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Pitch & Venue Intelligence</h2>
        <p className="mt-1 text-sm text-slate-400">
          Surface conditions, pace/spin breakdown, and historical toss trends across active venues.
        </p>
      </div>

      {/* Venue Pitch Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{venue.name}</h3>
                  <p className="text-xs text-slate-400">{venue.location}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {venue.pitchType}
                </span>
              </div>

              <div className="space-y-3 my-4">
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Avg 1st Innings:</span>
                  <span className="font-bold text-white">{venue.avgFirstInnings} runs</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Optimal Strategy:</span>
                  <span className="font-semibold text-emerald-400">{venue.tossDecision}</span>
                </div>
              </div>

              {/* Pace vs Spin Bar */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>Pace ({venue.paceAssistance})</span>
                  <span>Spin ({venue.spinAssistance})</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: venue.paceAssistance }}
                  />
                  <div
                    className="bg-emerald-400 h-full"
                    style={{ width: venue.spinAssistance }}
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60 italic">
              "{venue.keyInsight}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}