
import React from 'react';

const Penetration: React.FC = () => (
  <div className="p-4 bg-slate-950 rounded-3xl border border-slate-800">
     <div className="flex justify-between mb-4">
        <span className="text-xs font-bold text-slate-400">Total Addressable Market</span>
        <span className="text-xs font-mono text-emerald-400">38.2% ACHIEVED</span>
     </div>
     <div className="relative h-4 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
        <div className="absolute top-0 left-0 bottom-0 bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{width: '38.2%'}}></div>
     </div>
     <div className="grid grid-cols-3 gap-2 mt-4 text-center">
        <div><p className="text-[10px] text-slate-600">US</p><p className="text-xs font-bold text-white">62%</p></div>
        <div><p className="text-[10px] text-slate-600">EU</p><p className="text-xs font-bold text-white">45%</p></div>
        <div><p className="text-[10px] text-slate-600">APAC</p><p className="text-xs font-bold text-white">12%</p></div>
     </div>
  </div>
);

export default Penetration;
