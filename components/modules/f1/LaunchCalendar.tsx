
import React from 'react';

const LaunchCalendar: React.FC = () => (
  <div className="space-y-4">
    {[
      { date: 'Oct 14', event: 'Rival-X SaaS v2.0', prob: '95%' },
      { date: 'Nov 02', event: 'GenericCorp Hardware Pivot', prob: '78%' },
      { date: 'Dec 21', event: 'MegaSoft Quarterly Patch', prob: '99%' },
    ].map(item => (
      <div key={item.event} className="flex items-center gap-4 p-3 bg-slate-950 rounded-xl border border-slate-800/50 hover:border-blue-500/30 transition-all">
        <div className="bg-slate-900 px-3 py-1 rounded text-[10px] font-mono text-blue-400">{item.date}</div>
        <div className="flex-1 text-sm font-bold text-slate-200">{item.event}</div>
        <div className="text-[10px] font-mono text-slate-500">PROB: {item.prob}</div>
      </div>
    ))}
  </div>
);

export default LaunchCalendar;
