
import React from 'react';

const MarketingInsightsAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">📣</span>
      <h4 className="font-bold text-white">Marketing Insights Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Competitor Spend</span>
        <span className="text-rose-400">ELEVATED</span>
      </div>
      <div className="bg-slate-950 p-1.5 rounded flex justify-between items-center">
         <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></div>
         <span className="text-[8px] text-slate-500 font-mono">DETECTED: $2M SWEEP BY RIVAL-X</span>
      </div>
      <p className="text-[10px] text-slate-400 italic">Mapping social engagement velocity in real-time.</p>
    </div>
  </div>
);

export default MarketingInsightsAgent;
