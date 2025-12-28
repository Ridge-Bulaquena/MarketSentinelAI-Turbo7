
import { AgentType, FeatureDefinition } from './types';

export const COLORS = {
  primary: '#3b82f6',
  emerald: '#10b981',
  blue: '#3b82f6',
  rose: '#f43f5e',
  amber: '#f59e0b',
  slate: '#64748b',
  purple: '#8b5cf6'
};

export const AGENTS_META = [
  { id: 'competitor', name: AgentType.COMPETITOR, icon: '🔍', desc: 'Tracks competitor campaigns and pricing', file: 'CompetitorInsightsAgent.tsx' },
  { id: 'product', name: AgentType.PRODUCT, icon: '📦', desc: 'Predicts lifecycle shifts and adoption', file: 'ProductForecastAgent.tsx' },
  { id: 'pricing', name: AgentType.PRICING, icon: '💰', desc: 'Simulates optimal revenue points', file: 'PricingOptimizationAgent.tsx' },
  { id: 'sentiment', name: AgentType.SENTIMENT, icon: '🧠', desc: 'Analyzes public mood and trends', file: 'MarketSentimentAgent.tsx' },
  { id: 'trend', name: AgentType.TREND, icon: '📈', desc: 'Detects emerging industry disruptions', file: 'TrendPredictionAgent.tsx' },
  { id: 'investment', name: AgentType.INVESTMENT, icon: '⚖️', desc: 'Models risk and ROI scenarios', file: 'InvestmentRiskAgent.tsx' },
  { id: 'supply', name: AgentType.SUPPLY_CHAIN, icon: '⛓️', desc: 'Monitors suppliers and bottlenecks', file: 'SupplyChainAgent.tsx' },
  { id: 'scenario', name: AgentType.SCENARIO, icon: '🕹️', desc: 'Runs what-if market simulations', file: 'ScenarioSimulationAgent.tsx' },
  { id: 'customer', name: AgentType.CUSTOMER, icon: '👥', desc: 'Predicts churn and lifetime value', file: 'CustomerAnalyticsAgent.tsx' },
  { id: 'marketing', name: AgentType.MARKETING, icon: '📣', desc: 'Evaluates competitor ad efficiency', file: 'MarketingInsightsAgent.tsx' },
  { id: 'financial', name: AgentType.FINANCIAL, icon: '💵', desc: 'Forecasts cash flow and profit', file: 'FinancialModelingAgent.tsx' },
  { id: 'validation', name: AgentType.VALIDATION, icon: '🛡️', desc: 'Recursive accuracy cross-check', file: 'ValidationAgent.tsx' }
];

export const FEATURES_REGISTRY: FeatureDefinition[] = [
  {
    id: 'f1', title: 'Competitor Tracking', icon: '🎯', impact: 'High', description: 'Real-time monitoring of rival activity.',
    modules: [
      { id: 'f1m1', name: 'Global Price Watch', description: 'Automatic tracking of price changes across 40+ regions.', stat: '14 Alerts', trend: 'up', componentPath: 'modules/f1/GlobalPriceWatch.tsx' },
      { id: 'f1m2', name: 'Launch Calendar', description: 'Predictive schedule of upcoming rival products.', stat: '3 Pending', trend: 'neutral', componentPath: 'modules/f1/LaunchCalendar.tsx' },
      { id: 'f1m3', name: 'Ad Campaign Velocity', description: 'Real-time spend analysis on social and search.', stat: '+24%', trend: 'up', componentPath: 'modules/f1/CampaignVelocity.tsx' },
      { id: 'f1m4', name: 'Patent Filing Stream', description: 'Monitor IP activity for technical pivots.', stat: '2 New', trend: 'neutral', componentPath: 'modules/f1/PatentStream.tsx' },
      { id: 'f1m5', name: 'Hiring Intel', description: 'Detecting strategy shifts via talent acquisition.', stat: 'Hot', trend: 'up', componentPath: 'modules/f1/HiringIntel.tsx' }
    ]
  },
  {
    id: 'f2', title: 'Product Insights', icon: '📊', impact: 'Medium', description: 'Lifecycle and penetration analysis.',
    modules: [
      { id: 'f2m1', name: 'Market Penetration', description: 'Regional adoption tracking.', stat: '38%', trend: 'up', componentPath: 'modules/f2/Penetration.tsx' },
      { id: 'f2m2', name: 'Lifecycle Drift', description: 'Predicting phase shifts.', stat: 'Normal', trend: 'neutral', componentPath: 'modules/f2/Lifecycle.tsx' },
      { id: 'f2m3', name: 'Feature Gap Analysis', description: 'Comparison vs rivals.', stat: '2 Gaps', trend: 'down', componentPath: 'modules/f2/FeatureGaps.tsx' },
      { id: 'f2m4', name: 'Sales Velocity', description: 'Transaction tracking.', stat: '+12%', trend: 'up', componentPath: 'modules/f2/SalesVelocity.tsx' },
      { id: 'f2m5', name: 'B2B Adoption', description: 'Enterprise segment penetration.', stat: 'High', trend: 'up', componentPath: 'modules/f2/B2BAdoption.tsx' }
    ]
  },
  // Registry expanded to support the full 25-feature list as individual modules
  ...Array.from({ length: 23 }).map((_, i) => ({
    id: `f${i + 3}`,
    title: [
      'Pricing Intelligence', 'Sentiment Analysis', 'Trend Prediction', 'Investment Risk', 'Supply Chain', 
      'Launch Simulation', 'Opportunity Scanner', 'Churn Predictor', 'Benchmarking', 'Regulatory Tracker', 
      'Scenario Simulator', 'Gap Analysis', 'Influence Tracker', 'Portfolio Optimizer', 'Regional Intel', 
      'Marketing Effectiveness', 'Early Warning', 'Financial Modeling', 'Innovation Radar', 'Content Analysis', 
      'AI Recommendations', 'Risk Heatmaps', 'Multi-Scenario ROI'
    ][i] || `Feature ${i+3}`,
    icon: '🛰️',
    impact: 'High' as any,
    description: 'Autonomous intelligence vector.',
    modules: Array.from({ length: 5 }).map((__, j) => ({
      id: `f${i + 3}m${j + 1}`,
      name: `Intelligence Node ${j + 1}`,
      description: 'Active data stream module.',
      stat: 'Synchronized',
      trend: 'neutral' as any,
      componentPath: `modules/f${i+3}/Node${j+1}.tsx`
    }))
  }))
];
