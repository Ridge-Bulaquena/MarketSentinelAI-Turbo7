
import React from 'react';

const TrendPredictionAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">📈</span>
      <h4 className="font-bold text-white">Trend Prediction Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Emergent Sigmas</span>
        <span className="text-emerald-400">4 DETECTED</span>
      </div>
      <div className="h-6 w-full bg-slate-950 rounded border border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-emerald-500/50"></div>
      </div>
      <p className="text-[10px] text-slate-400 italic">Detecting macro pivot in energy storage tech.</p>
    </div>
  </div>
);

export default TrendPredictionAgent;
