
import React from 'react';

const InvestmentRiskAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">⚖️</span>
      <h4 className="font-bold text-white">Investment Risk Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>VaR Index</span>
        <span className="text-rose-400">LOW</span>
      </div>
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div className="bg-rose-500 h-full w-[15%] shadow-[0_0_8px_#f43f5e]"></div>
      </div>
      <p className="text-[10px] text-slate-400 italic">Exposure to regulatory shift minimized to 0.4%.</p>
    </div>
  </div>
);

export default InvestmentRiskAgent;
