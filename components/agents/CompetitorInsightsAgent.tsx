
import React from 'react';

const CompetitorInsightsAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">🔍</span>
      <h4 className="font-bold text-white">Competitor Insights Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Active Threads</span>
        <span className="text-blue-400">124</span>
      </div>
      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-3/4"></div>
      </div>
      <p className="text-[10px] text-slate-400 italic">Tracking real-time price drops in EU sector.</p>
    </div>
  </div>
);

export default CompetitorInsightsAgent;
