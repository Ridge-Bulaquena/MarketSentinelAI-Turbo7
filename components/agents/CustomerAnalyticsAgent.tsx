
import React from 'react';

const CustomerAnalyticsAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">👥</span>
      <h4 className="font-bold text-white">Customer Analytics Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Retention Forecast</span>
        <span className="text-emerald-400">+2.5%</span>
      </div>
      <div className="h-6 flex items-end gap-0.5">
         {[4,6,3,8,5,9,10,7].map((h, i) => (
           <div key={i} className="flex-1 bg-emerald-500/30 rounded-t-sm" style={{height: `${h*10}%`}}></div>
         ))}
      </div>
      <p className="text-[10px] text-slate-400 italic">Early churn warning system active for Enterprise-A.</p>
    </div>
  </div>
);

export default CustomerAnalyticsAgent;
