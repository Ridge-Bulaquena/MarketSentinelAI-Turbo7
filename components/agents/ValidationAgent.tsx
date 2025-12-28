
import React from 'react';

const ValidationAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">🛡️</span>
      <h4 className="font-bold text-white">Validation Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Node Consistency</span>
        <span className="text-emerald-400">100%</span>
      </div>
      <div className="flex gap-0.5">
         {Array.from({ length: 24 }).map((_, i) => (
           <div key={i} className="w-px h-4 bg-emerald-500/60"></div>
         ))}
      </div>
      <p className="text-[10px] text-slate-400 italic">Recursive cross-check nominal across all 125 nodes.</p>
    </div>
  </div>
);

export default ValidationAgent;
