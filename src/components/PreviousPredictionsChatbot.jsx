import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Trophy, CheckCircle2, XCircle, Calendar, BarChart2, RefreshCw } from 'lucide-react';

// Mock Historical Database
const matchDatabase = [
  {
    id: 'M-101',
    teams: 'India vs Australia',
    date: '15 Aug 2026',
    venue: 'Wankhede Stadium, Mumbai',
    predictedWinner: 'India',
    actualWinner: 'India',
    accuracy: '92%',
    status: 'Correct',
    score: 'AUS 184/6 (20.0) | IND 188/4 (19.2)',
    summary: 'India chased down 185 with 4 balls remaining. The AI model correctly predicted an India victory after over 10 based on run-rate acceleration trends.'
  },
  {
    id: 'M-102',
    teams: 'England vs South Africa',
    date: '10 Aug 2026',
    venue: 'Lord\'s, London',
    predictedWinner: 'England',
    actualWinner: 'South Africa',
    accuracy: '45%',
    status: 'Incorrect',
    score: 'SA 295/8 (50.0) | ENG 263/10 (46.2)',
    summary: 'South Africa won by 32 runs due to a middle-order collapse by England. Model failed to anticipate seam movement under lights.'
  },
  {
    id: 'M-103',
    teams: 'India vs Pakistan',
    date: '02 Aug 2026',
    venue: 'M. Chinnaswamy, Bengaluru',
    predictedWinner: 'India',
    actualWinner: 'India',
    accuracy: '95%',
    status: 'Correct',
    score: 'IND 212/4 (20.0) | PAK 184/9 (20.0)',
    summary: 'High-scoring encounter where India defended 212. Model accurately flagged high dew impact and 200+ first-innings target.'
  }
];

export default function PreviousPredictionsChatbot() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am your **Historical Prediction Analyst**. Ask me about past matches, model accuracy, or specific team reports (e.g., *'Show report for India vs Australia'* or *'What is your overall accuracy?'*).",
      report: null
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Process Query and Return Match Data
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let botResponse = '';
      let matchReport = null;

      if (lowerQuery.includes('accuracy') || lowerQuery.includes('performance') || lowerQuery.includes('stats')) {
        botResponse = "### Overall Historical Model Performance\n* **Total Predictions Analyzed:** 24 Matches\n* **Correct Outcomes:** 20 Matches\n* **Overall Model Accuracy:** **83.3%**\n* **Best Performing Format:** T20 International (88% Accuracy)";
      } else {
        // Find matching match record
        const foundMatch = matchDatabase.find((m) =>
          m.teams.toLowerCase().includes(lowerQuery) ||
          m.venue.toLowerCase().includes(lowerQuery) ||
          m.predictedWinner.toLowerCase().includes(lowerQuery)
        );

        if (foundMatch) {
          botResponse = `Here is the historical prediction report for **${foundMatch.teams}**:`;
          matchReport = foundMatch;
        } else {
          botResponse = `I couldn't find a past record matching **"${query}"**. Try asking about **"India vs Australia"**, **"England vs South Africa"**, or **"Overall accuracy"**.`;
        }
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, report: matchReport }
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="flex flex-col h-[650px] bg-slate-950 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Previous Match Prediction Bot</h3>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Historical Database Connected
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

      {/* Quick Prompt Chips */}
      <div className="bg-slate-900/50 px-6 py-2.5 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-slate-500 flex-shrink-0">Suggestions:</span>
        {[
          'India vs Australia',
          'England vs South Africa',
          'Overall model accuracy',
          'India vs Pakistan'
        ].map((promptText, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(promptText)}
            className="px-3 py-1 bg-slate-800/80 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 border border-slate-700 text-slate-300 rounded-full whitespace-nowrap transition-all"
          >
            {promptText}
          </button>
        ))}
      </div>

      {/* Messages Stream */}
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

              {/* Render Detailed Match Report Card inside chat */}
              {msg.report && (
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-white text-sm">{msg.report.teams}</span>
                    {msg.report.status === 'Correct' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Accurate ({msg.report.accuracy})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-semibold">
                        <XCircle className="w-3.5 h-3.5" /> Missed ({msg.report.accuracy})
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{msg.report.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      <span>Winner: <strong className="text-white">{msg.report.actualWinner}</strong></span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 font-mono text-[11px] text-emerald-400">
                    {msg.report.score}
                  </div>

                  <div className="bg-slate-800/40 p-2.5 rounded-lg border border-slate-800 text-slate-300">
                    <div className="flex items-center gap-1 text-emerald-400 font-semibold mb-1">
                      <BarChart2 className="w-3.5 h-3.5" /> AI Prediction Breakdown:
                    </div>
                    <p className="leading-normal">{msg.report.summary}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-400 text-xs bg-slate-900 border border-slate-800 w-fit px-4 py-2 rounded-2xl">
            <Bot className="w-4 h-4 text-emerald-400 animate-bounce" />
            <span>Analyzing match archives...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask for match history (e.g., 'India vs Australia' or 'Accuracy')..."
          className="flex-1 bg-slate-950 border border-slate-800 text-xs text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-500"
        />
        <button
          onClick={() => handleSend()}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-3 rounded-xl flex items-center justify-center transition-all"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}