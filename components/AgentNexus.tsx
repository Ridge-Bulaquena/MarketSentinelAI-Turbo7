
import React, { Suspense, lazy } from 'react';
import { AGENTS_META } from '../constants';

// Strategy to allow 120+ file loading without performance degradation
const agentComponents: Record<string, React.LazyExoticComponent<any>> = {
  'CompetitorInsightsAgent.tsx': lazy(() => import('./agents/CompetitorInsightsAgent')),
  'ProductForecastAgent.tsx': lazy(() => import('./agents/ProductForecastAgent')),
  'PricingOptimizationAgent.tsx': lazy(() => import('./agents/PricingOptimizationAgent')),
  'MarketSentimentAgent.tsx': lazy(() => import('./agents/MarketSentimentAgent')),
  'TrendPredictionAgent.tsx': lazy(() => import('./agents/TrendPredictionAgent')),
  'InvestmentRiskAgent.tsx': lazy(() => import('./agents/InvestmentRiskAgent')),
  'SupplyChainAgent.tsx': lazy(() => import('./agents/SupplyChainAgent')),
  'ScenarioSimulationAgent.tsx': lazy(() => import('./agents/ScenarioSimulationAgent')),
  'CustomerAnalyticsAgent.tsx': lazy(() => import('./agents/CustomerAnalyticsAgent')),
  'MarketingInsightsAgent.tsx': lazy(() => import('./agents/MarketingInsightsAgent')),
  'FinancialModelingAgent.tsx': lazy(() => import('./agents/FinancialModelingAgent')),
  'ValidationAgent.tsx': lazy(() => import('./agents/ValidationAgent')),
};

const AgentNexus: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Agent Nexus</h2>
          <p className="text-slate-500 mt-2">12 Autonomous Meta-Agents coordinating market intelligence.</p>
        </div>
        <div className="flex items-center gap-4 bg-slate-900/50 px-6 py-3 rounded-2xl border border-slate-800">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Board Sync: Nominal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {AGENTS_META.map(agent => {
          const Component = agentComponents[agent.file];
          return (
            <Suspense key={agent.id} fallback={
              <div className="h-48 bg-slate-900/40 border border-slate-800 animate-pulse rounded-3xl"></div>
            }>
              <Component />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default AgentNexus;
