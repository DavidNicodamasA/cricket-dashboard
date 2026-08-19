import React from 'react';

export default function PlayerCard({ player }) {
  // Fallback defaults if props aren't provided yet
  const {
    name = "Player Name",
    team = "Team / Nation",
    role = "All-Rounder",
    matches = 0,
    runs = 0,
    wickets = 0,
    average = "0.0",
    strikeRate = "0.0",
  } = player || {};

  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-xs text-slate-400">{team}</p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
            {role}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 text-xs">
          <div>
            <span className="text-slate-400 block">Matches</span>
            <span className="text-sm font-semibold text-white">{matches}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Avg</span>
            <span className="text-sm font-semibold text-white">{average}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Total Runs</span>
            <span className="text-sm font-semibold text-emerald-400">{runs}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Wickets</span>
            <span className="text-sm font-semibold text-cyan-400">{wickets}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-slate-800/60 text-xs">
        <span className="text-slate-400">Strike Rate:</span>
        <span className="font-semibold text-orange-400">{strikeRate}</span>
      </div>
    </div>
  );
}