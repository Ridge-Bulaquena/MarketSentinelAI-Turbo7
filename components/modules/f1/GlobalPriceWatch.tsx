
import React from 'react';

const GlobalPriceWatch: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
        <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">North America</p>
        <p className="text-xl font-mono text-white">$499.00 <span className="text-xs text-slate-600">STABLE</span></p>
      </div>
      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
        <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">European Union</p>
        <p className="text-xl font-mono text-rose-400">€449.00 <span className="text-xs text-rose-500 animate-pulse">▼ -15%</span></p>
      </div>
    </div>
    <div className="h-24 w-full bg-slate-900/50 rounded-xl border border-slate-800 flex items-center justify-center">
       <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Pricing Heatmap Stream Active</div>
    </div>
  </div>
);

export default GlobalPriceWatch;
