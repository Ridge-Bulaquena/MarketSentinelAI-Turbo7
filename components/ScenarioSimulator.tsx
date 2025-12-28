
import React from 'react';
import { ScenarioState } from '../types';

interface SimulatorProps {
  scenario: ScenarioState;
  setScenario: React.Dispatch<React.SetStateAction<ScenarioState>>;
}

const ScenarioSimulator: React.FC<SimulatorProps> = ({ scenario, setScenario }) => {
  const updateScenario = (key: keyof ScenarioState, val: number) => {
    setScenario(prev => ({ ...prev, [key]: val }));
  };

  const calculateROI = (modifier: number) => {
    const base = 14.2;
    const impact = (scenario.consumerSpending * 0.15) + (scenario.innovationRate * 0.2) - (scenario.interestRates * 0.5) - (scenario.marketVolatility * 0.1);
    return (base + impact * modifier).toFixed(2);
  };

  const controls = [
    { key: 'marketVolatility' as keyof ScenarioState, label: 'Market Volatility', color: 'accent-orange-500' },
    { key: 'competitorAggression' as keyof ScenarioState, label: 'Competitor Aggression', color: 'accent-red-500' },
    { key: 'innovationRate' as keyof ScenarioState, label: 'Innovation Rate', color: 'accent-purple-500' },
    { key: 'consumerSpending' as keyof ScenarioState, label: 'Consumer Spending', color: 'accent-emerald-500' },
    { key: 'supplyChainStability' as keyof ScenarioState, label: 'Supply Chain Stability', color: 'accent-blue-500' },
  ];

  return (
    <div className="bg-slate-900/40 border border-slate-800/50 rounded-3xl p-8 shadow-2xl h-full backdrop-blur-md">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-500">🕹️</span> Market Simulator
          </h3>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] mt-1">Stochastic Modeling Core</p>
        </div>
        <button 
          onClick={() => setScenario({
            marketVolatility: 30,
            competitorAggression: 50,
            interestRates: 4.5,
            consumerSpending: 70,
            supplyChainStability: 85,
            innovationRate: 60
          })}
          className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white transition-all"
          title="Reset Parameters"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="space-y-8">
        {controls.map(control => (
          <div key={control.key} className="space-y-3 group">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{control.label}</span>
              <span className="font-mono text-white font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">{scenario[control.key]}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              step="1"
              value={scenario[control.key]}
              onChange={(e) => updateScenario(control.key, parseInt(e.target.value))}
              className={`w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer hover:bg-slate-700 transition-colors ${control.color}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-4">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] text-center mb-6">Multi-Scenario ROI Forecast</h4>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Worst Case', modifier: 0.4, color: 'text-rose-500', bg: 'bg-rose-500/5' },
            { label: 'Target', modifier: 1.0, color: 'text-blue-400', bg: 'bg-blue-500/5' },
            { label: 'Bull Case', modifier: 1.6, color: 'text-emerald-400', bg: 'bg-emerald-500/5' },
          ].map(item => (
            <div key={item.label} className={`${item.bg} border border-slate-800 rounded-2xl p-4 text-center group hover:border-slate-600 transition-all`}>
              <p className="text-[9px] text-slate-500 uppercase font-bold mb-2">{item.label}</p>
              <p className={`text-lg font-bold font-mono ${item.color}`}>+{calculateROI(item.modifier)}%</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
        <div className="flex items-start gap-3">
          <span className="text-blue-500 text-sm mt-0.5">💡</span>
          <p className="text-[10px] text-slate-400 leading-relaxed italic">
            Scenario analysis suggests increasing <span className="text-blue-400 font-bold">Innovation Rate</span> by 15% offsets the projected impact of <span className="text-rose-400 font-bold">Market Volatility</span> by factor of 2.1x.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScenarioSimulator;
