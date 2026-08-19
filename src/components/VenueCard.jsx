import React from 'react';

export default function VenueCard({ venue }) {
  // Fallback defaults if props aren't provided yet
  const {
    name = "Venue Name",
    location = "City, Country",
    pitchType = "Balanced",
    avgFirstInnings = 0,
    pacePercentage = "50%",
    spinPercentage = "50%",
    tossRecommendation = "Bowl First",
  } = venue || {};

  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-xs text-slate-400">{location}</p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {pitchType}
          </span>
        </div>

        <div className="space-y-2.5 my-4 text-xs">
          <div className="flex justify-between text-slate-300 pb-2 border-b border-slate-800/80">
            <span>Avg 1st Innings:</span>
            <span className="font-bold text-white">{avgFirstInnings} runs</span>
          </div>
          <div className="flex justify-between text-slate-300 pb-2 border-b border-slate-800/80">
            <span>Toss Recommendation:</span>
            <span className="font-semibold text-orange-400">{tossRecommendation}</span>
          </div>
        </div>

        {/* Pace vs Spin Distribution Bar */}
        <div className="space-y-1.5 my-3">
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>Pace ({pacePercentage})</span>
            <span>Spin ({spinPercentage})</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
            <div
              className="bg-cyan-500 h-full"
              style={{ width: pacePercentage }}
            />
            <div
              className="bg-emerald-400 h-full"
              style={{ width: spinPercentage }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}