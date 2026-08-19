import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Search, RefreshCw, Activity, Award, Calendar, Zap } from 'lucide-react';

// Comprehensive Mock Player Database
const playersDatabase = [
  {
    id: 1,
    name: 'Virat Kohli',
    team: 'RCB / India',
    role: 'Top-order Batter',
    matches: 237,
    runs: 7263,
    avg: '37.25',
    sr: '130.02',
    fifties: 50,
    hundreds: 7,
    highestScore: '113*',
    status: 'Active',
    recentForm: ['84', '42', '113', '12', '55'],
    insight: 'Exceptional record chasing targets with an average above 48 in winning run-chases.'
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
    bestBowling: '5/10',
    status: 'Active',
    recentForm: ['3/14', '2/22', '1/18', '4/12', '2/28'],
    insight: 'Maintains an elite death-overs (overs 16-20) economy rate of 7.12.'
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
    bestBowling: '4/24',
    status: 'Active',
    recentForm: ['2/19', '3/15', '1/24', '0/28', '2/20'],
    insight: 'Lowest overall economy rate among active middle-overs spin bowlers.'
  },
  {
    id: 4,
    name: 'Rohit Sharma',
    team: 'MI / India',
    role: 'Opening Batter',
    matches: 243,
    runs: 6211,
    avg: '29.57',
    sr: '130.82',
    fifties: 42,
    hundreds: 2,
    highestScore: '109*',
    status: 'Active',
    recentForm: ['68', '11', '45', '105', '23'],
    insight: 'High powerplay strike rate (142.5) over the last two seasons.'
  },
  {
    id: 5,
    name: 'Travis Head',
    team: 'SRH / Australia',
    role: 'Aggressive Opener',
    matches: 25,
    runs: 890,
    avg: '38.69',
    sr: '182.40',
    fifties: 5,
    hundreds: 1,
    highestScore: '102',
    status: 'Active',
    recentForm: ['89', '31', '102', '56', '0'],
    insight: 'Averages 24 runs in the first 2 overs of powerplay matches.'
  }
];

export default function PlayersPage() {
  const [searchFilter, setSearchFilter] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Welcome to the **Player Telemetry Assistant**. Ask me about any player's career metrics, recent form, or bowling/batting breakdowns (e.g., *'Give me a detailed report on Virat Kohli'* or *'Show me Jasprit Bumrah's stats'*).",
      playerReport: null
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Filter player table
  const filteredPlayers = playersDatabase.filter(
    (p) =>
      p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.team.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.role.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // Handle chatbot queries
  const handleSendMessage = (queryText) => {
    const text = queryText || input;
    if (!text.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerQuery = text.toLowerCase();
      
      // Match player from query
      const foundPlayer = playersDatabase.find((p) =>
        lowerQuery.includes(p.name.toLowerCase()) ||
        p.name.toLowerCase().split(' ').some((part) => lowerQuery.includes(part))
      );

      let botResponse = '';
      let playerReport = null;

      if (foundPlayer) {
        botResponse = `Here is the comprehensive performance telemetry report for **${foundPlayer.name}**:`;
        playerReport = foundPlayer;
      } else if (lowerQuery.includes('all') || lowerQuery.includes('list') || lowerQuery.includes('summary')) {
        botResponse = `We currently have **${playersDatabase.length} players** indexed in our telemetry database: ${playersDatabase.map(p => p.name).join(', ')}.`;
      } else {
        botResponse = `I couldn't find a recorded history profile matching **"${text}"**. Try querying active players like **"Virat Kohli"**, **"Jasprit Bumrah"**, or **"Rashid Khan"**.`;
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, playerReport }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Page Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Player Database & Telemetry</h2>
          <p className="mt-1 text-sm text-slate-400">
            Track individual player metrics, strike rates, bowling averages, and AI career breakdowns.
          </p>
        </div>

        {/* Search input for table */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            placeholder="Search player or team..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      {/* Interactive Player Table */}
      <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-xl">
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
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
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
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => handleSendMessage(`Show report for ${player.name}`)}
                        className="px-3 py-1.5 text-xs font-semibold bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 rounded-lg border border-emerald-500/20 transition-all"
                      >
                        Ask Bot
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-6 text-center text-slate-500 text-sm">
                    No matching player records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Embedded Telemetry Chatbot */}
      <div className="flex flex-col h-[600px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Chatbot Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Player Telemetry AI Assistant</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Connected to Player Historical Database
              </p>
            </div>
          </div>

          <button
            onClick={() => setMessages([messages[0]])}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg text-xs flex items-center gap-1 transition-all"
            title="Reset Chat"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="bg-slate-900/50 px-6 py-2.5 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-500 flex-shrink-0">Quick Queries:</span>
          {['Virat Kohli report', 'Jasprit Bumrah bowling', 'Rashid Khan metrics', 'Travis Head stats'].map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(chip)}
              className="px-3 py-1 bg-slate-800/80 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 border border-slate-700 text-slate-300 rounded-full whitespace-nowrap transition-all"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 max-w-[85%] ${
                msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-emerald-400 border border-slate-700'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className="space-y-3">
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-emerald-500 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Player Report Card embedded inside Chat response */}
                {msg.playerReport && (
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4 text-xs text-slate-300">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h4 className="font-bold text-white text-base">{msg.playerReport.name}</h4>
                        <p className="text-slate-400 text-[11px]">{msg.playerReport.team} • {msg.playerReport.role}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold rounded-full text-[11px]">
                        {msg.playerReport.status}
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-500 block text-[10px] uppercase">Matches</span>
                        <strong className="text-white text-sm">{msg.playerReport.matches}</strong>
                      </div>

                      {msg.playerReport.runs ? (
                        <>
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-slate-500 block text-[10px] uppercase">Runs</span>
                            <strong className="text-emerald-400 text-sm">{msg.playerReport.runs}</strong>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-slate-500 block text-[10px] uppercase">Average</span>
                            <strong className="text-white text-sm">{msg.playerReport.avg}</strong>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-slate-500 block text-[10px] uppercase">Strike Rate</span>
                            <strong className="text-amber-400 text-sm">{msg.playerReport.sr}</strong>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-slate-500 block text-[10px] uppercase">Wickets</span>
                            <strong className="text-emerald-400 text-sm">{msg.playerReport.wickets}</strong>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-slate-500 block text-[10px] uppercase">Economy</span>
                            <strong className="text-amber-400 text-sm">{msg.playerReport.economy}</strong>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-slate-500 block text-[10px] uppercase">Best Bowling</span>
                            <strong className="text-white text-sm">{msg.playerReport.bestBowling}</strong>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Recent Form */}
                    <div className="space-y-1.5">
                      <span className="text-slate-400 font-medium text-[11px] flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" /> Recent Innings/Spell Form:
                      </span>
                      <div className="flex gap-1.5 overflow-x-auto">
                        {msg.playerReport.recentForm.map((score, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] font-mono text-slate-200"
                          >
                            {score}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* AI Key Insight */}
                    <div className="bg-slate-800/40 p-2.5 rounded-lg border border-slate-800 text-slate-300">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1 mb-0.5 text-[11px]">
                        <Zap className="w-3.5 h-3.5" /> AI Telemetry Insight:
                      </span>
                      <p className="leading-relaxed">{msg.playerReport.insight}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-xs bg-slate-900 border border-slate-800 w-fit px-4 py-2 rounded-2xl">
              <Bot className="w-4 h-4 text-emerald-400 animate-bounce" />
              <span>Fetching player database records...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Controls */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about a player (e.g., 'Virat Kohli stats' or 'Jasprit Bumrah')..."
            className="flex-1 bg-slate-950 border border-slate-800 text-xs text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-500"
          />
          <button
            onClick={() => handleSendMessage()}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-3 rounded-xl flex items-center justify-center transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}