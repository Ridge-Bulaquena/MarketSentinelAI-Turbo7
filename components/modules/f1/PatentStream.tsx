
import React from 'react';

const PatentStream: React.FC = () => (
  <div className="space-y-3">
    {[
      { id: 'US12.441', title: 'Optical Mesh Neural Layer', status: 'GRANTED' },
      { id: 'EU88.922', title: 'Low-Latency Heat Transfer', status: 'PENDING' }
    ].map(p => (
      <div key={p.id} className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex justify-between items-center">
        <div>
          <p className="text-[10px] text-blue-500 font-mono">{p.id}</p>
          <p className="text-xs text-slate-300 font-bold">{p.title}</p>
        </div>
        <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">{p.status}</span>
      </div>
    ))}
  </div>
);

export default PatentStream;
