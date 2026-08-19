import React, { useState } from 'react';

export default function PitchReport() {
  const [searchTerm, setSearchTerm] = useState('');

  const venues = [
    // --- INDIA ---
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
    {
      id: 4,
      name: 'Narendra Modi Stadium',
      location: 'Ahmedabad, India',
      pitchType: 'Hard Pitch / True Bounce',
      avgFirstInnings: 175,
      paceAssistance: '50%',
      spinAssistance: '50%',
      tossDecision: 'Bowl First (58% Win Rate)',
      keyInsight: 'Red and black soil strips behave differently; lights assist swing initially.',
    },
    {
      id: 5,
      name: 'MA Chidambaram Stadium (Chepauk)',
      location: 'Chennai, India',
      pitchType: 'Dry / Spin Friendly',
      avgFirstInnings: 162,
      paceAssistance: '30%',
      spinAssistance: '70%',
      tossDecision: 'Bat First (55% Win Rate)',
      keyInsight: 'Slows down drastically as the match progresses; spinners dominate middle overs.',
    },
    {
      id: 6,
      name: 'Arun Jaitley Stadium',
      location: 'Delhi, India',
      pitchType: 'Slow & Low / Dry',
      avgFirstInnings: 166,
      paceAssistance: '35%',
      spinAssistance: '65%',
      tossDecision: 'Bat First (52% Win Rate)',
      keyInsight: 'Tends to grip for slower bowlers and spinners, making stroke-making harder later.',
    },

    // --- AUSTRALIA ---
    {
      id: 7,
      name: 'Melbourne Cricket Ground (MCG)',
      location: 'Melbourne, Australia',
      pitchType: 'Pace & Bounce / Drop-in',
      avgFirstInnings: 160,
      paceAssistance: '75%',
      spinAssistance: '25%',
      tossDecision: 'Bowl First (58% Win Rate)',
      keyInsight: 'Extensive bounce aids tall fast bowlers; large boundaries require smart placement.',
    },
    {
      id: 8,
      name: 'Sydney Cricket Ground (SCG)',
      location: 'Sydney, Australia',
      pitchType: 'Dry / Spin Friendly',
      avgFirstInnings: 165,
      paceAssistance: '40%',
      spinAssistance: '60%',
      tossDecision: 'Bat First (55% Win Rate)',
      keyInsight: 'Historically one of the few Australian pitches that deteriorates to assist spinners.',
    },
    {
      id: 9,
      name: 'The Gabba',
      location: 'Brisbane, Australia',
      pitchType: 'Green Seamer / Steep Bounce',
      avgFirstInnings: 170,
      paceAssistance: '85%',
      spinAssistance: '15%',
      tossDecision: 'Bowl First (65% Win Rate)',
      keyInsight: 'Extra bounce and lateral movement test openers thoroughly during early sessions.',
    },
    {
      id: 10,
      name: 'Adelaide Oval',
      location: 'Adelaide, Australia',
      pitchType: 'True Batting / Good Bounce',
      avgFirstInnings: 172,
      paceAssistance: '60%',
      spinAssistance: '40%',
      tossDecision: 'Bat First (56% Win Rate)',
      keyInsight: 'Famous for drop-in pitches that reward disciplined stroke play and wrist spin.',
    },
    {
      id: 11,
      name: 'Perth Stadium (Optus Stadium)',
      location: 'Perth, Australia',
      pitchType: 'Fast, Bouncy & Lethal',
      avgFirstInnings: 158,
      paceAssistance: '90%',
      spinAssistance: '10%',
      tossDecision: 'Bowl First (60% Win Rate)',
      keyInsight: 'Fastest pitch in world cricket; extra pace and bounce keep fast bowlers heavily engaged.',
    },

    // --- ENGLAND ---
    {
      id: 12,
      name: "Lord's Cricket Ground",
      location: 'London, England',
      pitchType: 'Slope & Seam Friendly',
      avgFirstInnings: 245,
      paceAssistance: '80%',
      spinAssistance: '20%',
      tossDecision: 'Bowl First (60% Win Rate)',
      keyInsight: 'Famous slope dictates movement; overcast conditions turn it into a paradise for swing.',
    },
    {
      id: 13,
      name: 'Trent Bridge',
      location: 'Nottingham, England',
      pitchType: 'Seam & Swing Haven',
      avgFirstInnings: 280,
      paceAssistance: '85%',
      spinAssistance: '15%',
      tossDecision: 'Bowl First (65% Win Rate)',
      keyInsight: 'The ball tends to swing consistently through the air for longer durations here.',
    },
    {
      id: 14,
      name: 'The Oval',
      location: 'London, England',
      pitchType: 'Batting / Wear-and-Tear Spin',
      avgFirstInnings: 260,
      paceAssistance: '60%',
      spinAssistance: '40%',
      tossDecision: 'Bowl First (55% Win Rate)',
      keyInsight: 'Excellent for batting early on, but wears out on days 4 and 5 to favor spinners.',
    },
    {
      id: 15,
      name: 'Headingley',
      location: 'Leeds, England',
      pitchType: 'Seam Movement / High Drama',
      avgFirstInnings: 250,
      paceAssistance: '82%',
      spinAssistance: '18%',
      tossDecision: 'Bowl First (68% Win Rate)',
      keyInsight: 'Pitches here react heavily to overhead conditions, giving seamers sharp lateral movement.',
    },

    // --- SOUTH AFRICA ---
    {
      id: 16,
      name: 'Newlands',
      location: 'Cape Town, South Africa',
      pitchType: 'Seam & Bounce',
      avgFirstInnings: 250,
      paceAssistance: '80%',
      spinAssistance: '20%',
      tossDecision: 'Bowl First (60% Win Rate)',
      keyInsight: 'Stunning backdrop with lively seam movement and consistent carry for quicks.',
    },
    {
      id: 17,
      name: 'Wanderers Stadium',
      location: 'Johannesburg, South Africa',
      pitchType: 'True Bounce / High Altitude',
      avgFirstInnings: 180,
      paceAssistance: '85%',
      spinAssistance: '15%',
      tossDecision: 'Bat First (52% Win Rate)',
      keyInsight: 'Known as the "Bullring"; high altitude creates sharp carry and bounce.',
    },
    {
      id: 18,
      name: 'Kingsmead',
      location: 'Durban, South Africa',
      pitchType: 'Balanced / Coastal Moisture',
      avgFirstInnings: 165,
      paceAssistance: '70%',
      spinAssistance: '30%',
      tossDecision: 'Bowl First (58% Win Rate)',
      keyInsight: 'Early morning moisture assists seamers before flattening out into a good contest.',
    },

    // --- NEW ZEALAND ---
    {
      id: 19,
      name: 'Eden Park',
      location: 'Auckland, New Zealand',
      pitchType: 'Short Boundaries / Flat',
      avgFirstInnings: 185,
      paceAssistance: '55%',
      spinAssistance: '45%',
      tossDecision: 'Bowl First (60% Win Rate)',
      keyInsight: 'Notoriously short straight boundaries invite high six-counts and power-hitting.',
    },
    {
      id: 20,
      name: 'Basin Reserve',
      location: 'Wellington, New Zealand',
      pitchType: 'Windy / Green Seamer',
      avgFirstInnings: 270,
      paceAssistance: '85%',
      spinAssistance: '15%',
      tossDecision: 'Bowl First (65% Win Rate)',
      keyInsight: 'Crosswinds heavily impact ball flight; green strips offer lateral movement for pacers.',
    },
    {
      id: 21,
      name: 'Hagley Oval',
      location: 'Christchurch, New Zealand',
      pitchType: 'Green Track / Swing Friendly',
      avgFirstInnings: 255,
      paceAssistance: '80%',
      spinAssistance: '20%',
      tossDecision: 'Bowl First (58% Win Rate)',
      keyInsight: 'Green grass cover provides initial seam movement, rewarding disciplined line and length.',
    },

    // --- PAKISTAN & UAE ---
    {
      id: 22,
      name: 'Gaddafi Stadium',
      location: 'Lahore, Pakistan',
      pitchType: 'Flat & Batting Paradise',
      avgFirstInnings: 178,
      paceAssistance: '40%',
      spinAssistance: '60%',
      tossDecision: 'Bat First (55% Win Rate)',
      keyInsight: 'True bounce allows stroke-play to flow easily, though spinners feature later.',
    },
    {
      id: 23,
      name: 'Rawalpindi Cricket Stadium',
      location: 'Rawalpindi, Pakistan',
      pitchType: 'Flat Deck / Low Seam',
      avgFirstInnings: 190,
      paceAssistance: '45%',
      spinAssistance: '55%',
      tossDecision: 'Bowl First (53% Win Rate)',
      keyInsight: 'Historically produces high-scoring affairs with minimal assistance for fast bowlers.',
    },
    {
      id: 24,
      name: 'Dubai International Stadium',
      location: 'Dubai, UAE',
      pitchType: 'Slow & Low / Sluggish',
      avgFirstInnings: 155,
      paceAssistance: '35%',
      spinAssistance: '65%',
      tossDecision: 'Bowl First (68% Win Rate)',
      keyInsight: 'Dew factor under lights makes chasing heavily favored; slower variations rule.',
    },
    {
      id: 25,
      name: 'Sharjah Cricket Stadium',
      location: 'Sharjah, UAE',
      pitchType: 'Dry / Low Scoring',
      avgFirstInnings: 148,
      paceAssistance: '30%',
      spinAssistance: '70%',
      tossDecision: 'Bowl First (65% Win Rate)',
      keyInsight: 'Compact dimensions offset by dry pitches that promote heavy spin dominance.',
    },

    // --- WEST INDIES ---
    {
      id: 26,
      name: 'Kensington Oval',
      location: 'Bridgetown, Barbados',
      pitchType: 'Bouncy & Athletic',
      avgFirstInnings: 152,
      paceAssistance: '70%',
      spinAssistance: '30%',
      tossDecision: 'Bat First (52% Win Rate)',
      keyInsight: 'Provides genuine pace and bounce for quicks with true carry to the keeper.',
    },
    {
      id: 27,
      name: 'Brian Lara Cricket Academy',
      location: 'Tarouba, Trinidad and Tobago',
      pitchType: 'Low & Slow / Grrip',
      avgFirstInnings: 145,
      paceAssistance: '40%',
      spinAssistance: '60%',
      tossDecision: 'Bowl First (60% Win Rate)',
      keyInsight: 'Struggles for high totals; slow surfaces encourage cutters and spin.',
    },

    // --- SRI LANKA & BANGLADESH ---
    {
      id: 28,
      name: 'R. Premadasa Stadium',
      location: 'Colombo, Sri Lanka',
      pitchType: 'Turning Track / Subcontinent',
      avgFirstInnings: 156,
      paceAssistance: '25%',
      spinAssistance: '75%',
      tossDecision: 'Bat First (54% Win Rate)',
      keyInsight: 'A spinners paradise; surfaces grip early and assist turn throughout the match.',
    },
    {
      id: 29,
      name: 'Sher-e-Bangla National Stadium',
      location: 'Dhaka, Bangladesh',
      pitchType: 'Low, Slow & Turning',
      avgFirstInnings: 142,
      paceAssistance: '20%',
      spinAssistance: '80%',
      tossDecision: 'Bat First (58% Win Rate)',
      keyInsight: 'Notoriously slow scoring rates where finger spinners dictate proceedings.',
    }
  ];

  // Filter venues based on user input in the search bar
  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.pitchType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Global Pitch & Venue Intelligence</h2>
          <p className="mt-1 text-sm text-slate-400">
            Surface conditions, pace/spin breakdown, and historical toss trends across worldwide venues ({venues.length} stadiums tracked).
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search stadium, city, country, pitch..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950/60 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>
      </div>

      {/* Venue Pitch Grid */}
      {filteredVenues.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
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
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 text-right max-w-[130px] truncate">
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
      ) : (
        <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">No venues found matching "{searchTerm}". Try searching for another stadium or city.</p>
        </div>
      )}
    </div>
  );
}