
import React from 'react';

const SupplyChainAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">⛓️</span>
      <h4 className="font-bold text-white">Supply Chain Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Fragility Score</span>
        <span className="text-amber-400">STABLE</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[1,2,3,4].map(i => <div key={i} className="h-2 bg-emerald-500/40 rounded-sm"></div>)}
      </div>
      <p className="text-[10px] text-slate-400 italic">Monitoring Red Sea shipping disruptions live.</p>
    </div>
  </div>
);

export default SupplyChainAgent;
