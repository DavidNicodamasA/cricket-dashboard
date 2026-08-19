import React, { useState } from 'react';

// Comprehensive 10-team dataset with squad info & playing 11
const iplTeamsData = [
  {
    id: 'mi',
    name: 'Mumbai Indians',
    code: 'MI',
    titles: 5,
    winRate: '56.4%',
    form: ['W', 'W', 'L', 'W', 'L'],
    homeVenue: 'Wankhede Stadium',
    playing11: [
      { name: 'Rohit Sharma', role: 'Batter' },
      { name: 'Ishan Kishan', role: 'WK-Batter' },
      { name: 'Suryakumar Yadav', role: 'Batter' },
      { name: 'Tilak Varma', role: 'Batter' },
      { name: 'Hardik Pandya', role: 'All-Rounder (C)' },
      { name: 'Tim David', role: 'Finisher' },
      { name: 'Mohammad Nabi', role: 'All-Rounder' },
      { name: 'Gerald Coetzee', role: 'Bowler' },
      { name: 'Piyush Chawla', role: 'Bowler' },
      { name: 'Jasprit Bumrah', role: 'Bowler' },
      { name: 'Nuwan Thushara', role: 'Bowler' },
    ],
  },
  {
    id: 'csk',
    name: 'Chennai Super Kings',
    code: 'CSK',
    titles: 5,
    winRate: '58.1%',
    form: ['W', 'L', 'W', 'W', 'W'],
    homeVenue: 'M. A. Chidambaram Stadium',
    playing11: [
      { name: 'Ruturaj Gaikwad', role: 'Batter (C)' },
      { name: 'Rachin Ravindra', role: 'All-Rounder' },
      { name: 'Ajinkya Rahane', role: 'Batter' },
      { name: 'Shivam Dube', role: 'All-Rounder' },
      { name: 'MS Dhoni', role: 'WK-Batter' },
      { name: 'Ravindra Jadeja', role: 'All-Rounder' },
      { name: 'Sameer Rizvi', role: 'Batter' },
      { name: 'Shardul Thakur', role: 'Bowler' },
      { name: 'Deepak Chahar', role: 'Bowler' },
      { name: 'Maheesh Theekshana', role: 'Bowler' },
      { name: 'Matheesha Pathirana', role: 'Bowler' },
    ],
  },
  {
    id: 'rcb',
    name: 'Royal Challengers Bengaluru',
    code: 'RCB',
    titles: 0,
    winRate: '48.2%',
    form: ['W', 'W', 'W', 'L', 'L'],
    homeVenue: 'M. Chinnaswamy Stadium',
    playing11: [
      { name: 'Virat Kohli', role: 'Batter' },
      { name: 'Faf du Plessis', role: 'Batter (C)' },
      { name: 'Rajat Patidar', role: 'Batter' },
      { name: 'Glenn Maxwell', role: 'All-Rounder' },
      { name: 'Cameron Green', role: 'All-Rounder' },
      { name: 'Dinesh Karthik', role: 'WK-Batter' },
      { name: 'Mahipal Lomror', role: 'Batter' },
      { name: 'Karn Sharma', role: 'Bowler' },
      { name: 'Mohammed Siraj', role: 'Bowler' },
      { name: 'Yash Dayal', role: 'Bowler' },
      { name: 'Lockie Ferguson', role: 'Bowler' },
    ],
  },
  {
    id: 'kkr',
    name: 'Kolkata Knight Riders',
    code: 'KKR',
    titles: 3,
    winRate: '51.8%',
    form: ['W', 'W', 'L', 'W', 'W'],
    homeVenue: 'Eden Gardens',
    playing11: [
      { name: 'Philip Salt', role: 'WK-Batter' },
      { name: 'Sunil Narine', role: 'All-Rounder' },
      { name: 'Venkatesh Iyer', role: 'Batter' },
      { name: 'Shreyas Iyer', role: 'Batter (C)' },
      { name: 'Rinku Singh', role: 'Batter' },
      { name: 'Andre Russell', role: 'All-Rounder' },
      { name: 'Ramandeep Singh', role: 'All-Rounder' },
      { name: 'Mitchell Starc', role: 'Bowler' },
      { name: 'Harshit Rana', role: 'Bowler' },
      { name: 'Varun Chakaravarthy', role: 'Bowler' },
      { name: 'Vaibhav Arora', role: 'Bowler' },
    ],
  },
  {
    id: 'gt',
    name: 'Gujarat Titans',
    code: 'GT',
    titles: 1,
    winRate: '62.5%',
    form: ['L', 'W', 'W', 'L', 'W'],
    homeVenue: 'Narendra Modi Stadium',
    playing11: [
      { name: 'Shubman Gill', role: 'Batter (C)' },
      { name: 'Wriddhiman Saha', role: 'WK-Batter' },
      { name: 'Sai Sudharsan', role: 'Batter' },
      { name: 'David Miller', role: 'Batter' },
      { name: 'Azmatullah Omarzai', role: 'All-Rounder' },
      { name: 'Rahul Tewatia', role: 'All-Rounder' },
      { name: 'Rashid Khan', role: 'Bowler' },
      { name: 'Ravisrinivasan Sai Kishore', role: 'Bowler' },
      { name: 'Umesh Yadav', role: 'Bowler' },
      { name: 'Mohit Sharma', role: 'Bowler' },
      { name: 'Noor Ahmad', role: 'Bowler' },
    ],
  },
  {
    id: 'rr',
    name: 'Rajasthan Royals',
    code: 'RR',
    titles: 1,
    winRate: '50.6%',
    form: ['W', 'L', 'W', 'W', 'L'],
    homeVenue: 'Sawai Mansingh Stadium',
    playing11: [
      { name: 'Yashasvi Jaiswal', role: 'Batter' },
      { name: 'Jos Buttler', role: 'Batter' },
      { name: 'Sanju Samson', role: 'WK-Batter (C)' },
      { name: 'Riyan Parag', role: 'Batter' },
      { name: 'Shimron Hetmyer', role: 'Batter' },
      { name: 'Dhruv Jurel', role: 'WK-Batter' },
      { name: 'Ravichandran Ashwin', role: 'All-Rounder' },
      { name: 'Trent Boult', role: 'Bowler' },
      { name: 'Avesh Khan', role: 'Bowler' },
      { name: 'Sandeep Sharma', role: 'Bowler' },
      { name: 'Yuzvendra Chahal', role: 'Bowler' },
    ],
  },
  {
    id: 'srh',
    name: 'Sunrisers Hyderabad',
    code: 'SRH',
    titles: 1,
    winRate: '47.9%',
    form: ['W', 'W', 'L', 'W', 'W'],
    homeVenue: 'Rajiv Gandhi Intl Stadium',
    playing11: [
      { name: 'Travis Head', role: 'Batter' },
      { name: 'Abhishek Sharma', role: 'All-Rounder' },
      { name: 'Aiden Markram', role: 'Batter' },
      { name: 'Nitish Kumar Reddy', role: 'All-Rounder' },
      { name: 'Heinrich Klaasen', role: 'WK-Batter' },
      { name: 'Abdul Samad', role: 'Batter' },
      { name: 'Shahbaz Ahmed', role: 'All-Rounder' },
      { name: 'Pat Cummins', role: 'Bowler (C)' },
      { name: 'Bhuvneshwar Kumar', role: 'Bowler' },
      { name: 'Jaydev Unadkat', role: 'Bowler' },
      { name: 'T. Natarajan', role: 'Bowler' },
    ],
  },
  {
    id: 'lsg',
    name: 'Lucknow Super Giants',
    code: 'LSG',
    titles: 0,
    winRate: '54.5%',
    form: ['L', 'W', 'L', 'W', 'L'],
    homeVenue: 'Ekana Cricket Stadium',
    playing11: [
      { name: 'KL Rahul', role: 'WK-Batter (C)' },
      { name: 'Quinton de Kock', role: 'WK-Batter' },
      { name: 'Marcus Stoinis', role: 'All-Rounder' },
      { name: 'Nicholas Pooran', role: 'Batter' },
      { name: 'Deepak Hooda', role: 'Batter' },
      { name: 'Ayush Badoni', role: 'Batter' },
      { name: 'Krunal Pandya', role: 'All-Rounder' },
      { name: 'Ravi Bishnoi', role: 'Bowler' },
      { name: 'Naveen-ul-Haq', role: 'Bowler' },
      { name: 'Yash Thakur', role: 'Bowler' },
      { name: 'Mayank Yadav', role: 'Bowler' },
    ],
  },
  {
    id: 'dc',
    name: 'Delhi Capitals',
    code: 'DC',
    titles: 0,
    winRate: '45.1%',
    form: ['W', 'L', 'W', 'L', 'W'],
    homeVenue: 'Arun Jaitley Stadium',
    playing11: [
      { name: 'Prithvi Shaw', role: 'Batter' },
      { name: 'Jake Fraser-McGurk', role: 'Batter' },
      { name: 'Shai Hope', role: 'Batter' },
      { name: 'Rishabh Pant', role: 'WK-Batter (C)' },
      { name: 'Tristan Stubbs', role: 'Batter' },
      { name: 'Axar Patel', role: 'All-Rounder' },
      { name: 'Abishek Porel', role: 'WK-Batter' },
      { name: 'Kuldeep Yadav', role: 'Bowler' },
      { name: 'Khaleel Ahmed', role: 'Bowler' },
      { name: 'Mukesh Kumar', role: 'Bowler' },
      { name: 'Ishant Sharma', role: 'Bowler' },
    ],
  },
  {
    id: 'pk',
    name: 'Punjab Kings',
    code: 'PBKS',
    titles: 0,
    winRate: '44.3%',
    form: ['L', 'L', 'W', 'L', 'W'],
    homeVenue: 'PCA Stadium, Mullanpur',
    playing11: [
      { name: 'Shikhar Dhawan', role: 'Batter (C)' },
      { name: 'Jonny Bairstow', role: 'Batter' },
      { name: 'Prabhsimran Singh', role: 'Batter' },
      { name: 'Sam Curran', role: 'All-Rounder' },
      { name: 'Jitesh Sharma', role: 'WK-Batter' },
      { name: 'Shashank Singh', role: 'Batter' },
      { name: 'Ashutosh Sharma', role: 'Batter' },
      { name: 'Harpreet Brar', role: 'All-Rounder' },
      { name: 'Kagiso Rabada', role: 'Bowler' },
      { name: 'Rahul Chahar', role: 'Bowler' },
      { name: 'Arshdeep Singh', role: 'Bowler' },
    ],
  },
];

export default function TeamsPage() {
  const [myTeamId, setMyTeamId] = useState('mi');
  const [oppTeamId, setOppTeamId] = useState('csk');

  const myTeam = iplTeamsData.find((t) => t.id === myTeamId);
  const oppTeam = iplTeamsData.find((t) => t.id === oppTeamId);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Franchise & Team Profiles</h2>
        <p className="mt-1 text-sm text-slate-400">
          Select your team and opponent to compare squad statistics and projected Playing 11 lineups.
        </p>
      </div>

      {/* Team Selector Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl">
        {/* My Team Selector */}
        <div>
          <label className="block text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
            Select My Team
          </label>
          <select
            value={myTeamId}
            onChange={(e) => setMyTeamId(e.target.value)}
            className="w-full bg-slate-950 text-white border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
          >
            {iplTeamsData.map((team) => (
              <option key={team.id} value={team.id} disabled={team.id === oppTeamId}>
                {team.name} ({team.code})
              </option>
            ))}
          </select>
        </div>

        {/* Opposite Team Selector */}
        <div>
          <label className="block text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
            Select Opposite Team
          </label>
          <select
            value={oppTeamId}
            onChange={(e) => setOppTeamId(e.target.value)}
            className="w-full bg-slate-950 text-white border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition"
          >
            {iplTeamsData.map((team) => (
              <option key={team.id} value={team.id} disabled={team.id === myTeamId}>
                {team.name} ({team.code})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison & Playing 11 View */}
      {myTeam && oppTeam && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My Team Profile */}
            <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-orange-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">My Team</span>
                  <h3 className="text-xl font-bold text-white">{myTeam.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30">
                  {myTeam.code}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Championship Titles:</span>
                  <span className="font-bold text-amber-400">{myTeam.titles}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Win Rate:</span>
                  <span className="font-bold text-emerald-400">{myTeam.winRate}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Home Stadium:</span>
                  <span className="font-medium text-slate-200">{myTeam.homeVenue}</span>
                </div>
              </div>

              {/* Playing 11 List */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Projected Playing XI ({myTeam.code})
                </h4>
                <div className="space-y-1.5">
                  {myTeam.playing11.map((player, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        <span className="text-xs text-slate-500 mr-2">{idx + 1}.</span>
                        {player.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {player.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Opposite Team Profile */}
            <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-red-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xs font-bold text-red-400 tracking-wider uppercase">Opposite Team</span>
                  <h3 className="text-xl font-bold text-white">{oppTeam.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/30">
                  {oppTeam.code}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Championship Titles:</span>
                  <span className="font-bold text-amber-400">{oppTeam.titles}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Win Rate:</span>
                  <span className="font-bold text-emerald-400">{oppTeam.winRate}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Home Stadium:</span>
                  <span className="font-medium text-slate-200">{oppTeam.homeVenue}</span>
                </div>
              </div>

              {/* Playing 11 List */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Projected Playing XI ({oppTeam.code})
                </h4>
                <div className="space-y-1.5">
                  {oppTeam.playing11.map((player, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        <span className="text-xs text-slate-500 mr-2">{idx + 1}.</span>
                        {player.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {player.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}