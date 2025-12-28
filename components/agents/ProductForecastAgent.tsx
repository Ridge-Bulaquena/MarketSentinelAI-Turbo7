
import React from 'react';

const ProductForecastAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">📦</span>
      <h4 className="font-bold text-white">Product Forecast Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Prediction Accuracy</span>
        <span className="text-emerald-400">98.2%</span>
      </div>
      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
        <div className="bg-emerald-500 h-full w-11/12"></div>
      </div>
      <p className="text-[10px] text-slate-400 italic">Projecting Q3 hardware lifecycle shift.</p>
    </div>
  </div>
);

export default ProductForecastAgent;
