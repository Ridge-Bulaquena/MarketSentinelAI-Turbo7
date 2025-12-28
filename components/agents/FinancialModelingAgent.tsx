
import React from 'react';

const FinancialModelingAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">💵</span>
      <h4 className="font-bold text-white">Financial Modeling Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Profit Runway</span>
        <span className="text-blue-400">36 MO</span>
      </div>
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-[90%]"></div>
      </div>
      <p className="text-[10px] text-slate-400 italic">Automated cash-flow projection updated daily.</p>
    </div>
  </div>
);

export default FinancialModelingAgent;
