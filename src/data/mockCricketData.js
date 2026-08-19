export const cricketData = {
  formats: ['T20', 'ODI', 'Test'],
  
  overview: {
    liveMatch: {
      teams: "India vs Australia",
      format: "T20 International",
      status: "LIVE",
      score: "IND: 184/4 (19.2 Ov) | AUS: 180/7 (20 Ov)",
      summary: "India won by 4 wickets in a last-over thriller!",
      venue: "Melbourne Cricket Ground"
    },
    topPerformers: [
      { name: "Virat Kohli", role: "Batter", stat: "68 Runs (42b)", format: "T20" },
      { name: "Jasprit Bumrah", role: "Bowler", stat: "3/24 (4 Ov)", format: "T20" },
      { name: "Rohit Sharma", role: "Batter", stat: "125 Runs (94b)", format: "ODI" },
      { name: "Pat Cummins", role: "Bowler", stat: "5/38 (14.2 Ov)", format: "Test" }
    ]
  },

  teams: {
    T20: [
      { id: 1, name: "India", ranking: 1, rating: 270, matches: 48, won: 34, captain: "Suryakumar Yadav" },
      { id: 2, name: "Australia", ranking: 2, rating: 262, matches: 42, won: 28, captain: "Mitchell Marsh" },
      { id: 3, name: "England", ranking: 3, rating: 254, matches: 45, won: 27, captain: "Jos Buttler" },
      { id: 4, name: "South Africa", ranking: 4, rating: 248, matches: 39, won: 23, captain: "Aiden Markram" }
    ],
    ODI: [
      { id: 1, name: "India", ranking: 1, rating: 122, matches: 30, won: 22, captain: "Rohit Sharma" },
      { id: 2, name: "Australia", ranking: 2, rating: 118, matches: 28, won: 19, captain: "Pat Cummins" },
      { id: 3, name: "Pakistan", ranking: 3, rating: 112, matches: 26, won: 16, captain: "Babar Azam" },
      { id: 4, name: "New Zealand", ranking: 4, rating: 108, matches: 25, won: 15, captain: "Kane Williamson" }
    ],
    Test: [
      { id: 1, name: "Australia", ranking: 1, rating: 124, matches: 22, won: 15, captain: "Pat Cummins" },
      { id: 2, name: "India", ranking: 2, rating: 116, matches: 24, won: 14, captain: "Rohit Sharma" },
      { id: 3, name: "England", ranking: 3, rating: 105, matches: 28, won: 13, captain: "Ben Stokes" },
      { id: 4, name: "New Zealand", ranking: 4, rating: 101, matches: 20, won: 10, captain: "Kane Williamson" }
    ]
  },

  players: [
    { id: 1, name: "Virat Kohli", team: "India", role: "Batter", runs: 8848, average: 53.4, strikeRate: 138.2, format: "T20" },
    { id: 2, name: "Jasprit Bumrah", team: "India", role: "Bowler", wickets: 89, economy: 6.55, average: 17.7, format: "T20" },
    { id: 3, name: "Travis Head", team: "Australia", role: "Batter", runs: 2450, average: 42.1, strikeRate: 155.6, format: "T20" },
    { id: 4, name: "Kane Williamson", team: "New Zealand", role: "Batter", runs: 8743, average: 54.8, strikeRate: 52.3, format: "Test" },
    { id: 5, name: "Pat Cummins", team: "Australia", role: "Bowler", wickets: 269, economy: 2.82, average: 22.4, format: "Test" }
  ],

  venues: [
    { id: 1, name: "Melbourne Cricket Ground (MCG)", city: "Melbourne", capacity: 100024, pitchType: "Balanced (Pace & Bounce)", avgScore: 165 },
    { id: 2, name: "Wankhede Stadium", city: "Mumbai", capacity: 33108, pitchType: "Batting Friendly (High Scoring)", avgScore: 180 },
    { id: 3, name: "Lord's Cricket Ground", city: "London", capacity: 31100, pitchType: "Seam & Swing Supportive", avgScore: 290 }
  ]
};