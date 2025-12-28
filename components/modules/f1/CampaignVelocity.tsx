
import React from 'react';

const CampaignVelocity: React.FC = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-end">
       <div className="space-y-1">
          <p className="text-4xl font-black text-white">+24%</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">Aggregated Ad Momentum</p>
       </div>
       <div className="h-10 w-24 bg-blue-600/10 border border-blue-500/30 rounded flex items-center justify-center">
          <span className="text-[10px] font-bold text-blue-400">TRENDING UP</span>
       </div>
    </div>
    <div className="h-20 flex gap-1 items-end">
       {Array.from({ length: 32 }).map((_, i) => (
         <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-500 rounded-t-sm" style={{height: `${Math.random()*100}%`}}></div>
       ))}
    </div>
  </div>
);

export default CampaignVelocity;
