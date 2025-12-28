
import React from 'react';

const ScenarioSimulationAgent: React.FC = () => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl group hover:border-blue-500/50 transition-all">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">🕹️</span>
      <h4 className="font-bold text-white">Scenario Simulation Agent</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>Parallel Worlds</span>
        <span className="text-blue-400">1,024 RUNNING</span>
      </div>
      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
         <div className="bg-blue-600 h-full w-full animate-pulse"></div>
      </div>
      <p className="text-[10px] text-slate-400 italic">Modelling "Competitor Exit" scenario probability.</p>
    </div>
  </div>
);

export default ScenarioSimulationAgent;
