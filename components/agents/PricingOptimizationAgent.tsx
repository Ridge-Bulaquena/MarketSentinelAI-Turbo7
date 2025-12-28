
import React from 'react';

const PricingOptimizationAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">💰</span>
      <h4 className="font-bold text-white">Pricing Optimization Agent</h4>
    </div>
    <div className="space-y-2 text-[10px]">
      <div className="flex justify-between">
         <span className="text-slate-500">Elasticity Score</span>
         <span className="text-amber-400">0.84</span>
      </div>
      <div className="bg-slate-800 h-1 rounded-full">
         <div className="bg-amber-400 h-full w-2/3"></div>
      </div>
      <p className="text-slate-400 italic">Optimal price point detected for SaaS Tier B.</p>
    </div>
  </div>
);

export default PricingOptimizationAgent;
