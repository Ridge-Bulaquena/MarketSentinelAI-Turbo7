
import React from 'react';

const MarketSentimentAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">🧠</span>
      <h4 className="font-bold text-white">Market Sentiment Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Public Mood</span>
        <span className="text-purple-400">OPTIMISTIC</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`h-4 flex-1 rounded-sm ${i < 8 ? 'bg-purple-500/50' : 'bg-slate-800'}`}></div>
        ))}
      </div>
      <p className="text-[10px] text-slate-400 italic">Processing 1.2M social nodes per minute.</p>
    </div>
  </div>
);

export default MarketSentimentAgent;
