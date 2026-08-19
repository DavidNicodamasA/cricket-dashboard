import React from 'react';
import PreviousPredictionsChatbot from '../components/PreviousPredictionsChatbot';

export default function PreviousPredictions() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Previous Predictions Chat Assistant</h2>
        <p className="text-sm text-slate-400">
          Query past match results, evaluation metrics, and AI breakdown reports conversationally.
        </p>
      </div>

      {/* Interactive Chatbot Container */}
      <PreviousPredictionsChatbot />
    </div>
  );
}