
export enum AgentType {
  COMPETITOR = 'Competitor Insights',
  PRODUCT = 'Product Forecast',
  PRICING = 'Pricing Optimization',
  SENTIMENT = 'Market Sentiment',
  TREND = 'Trend Prediction',
  INVESTMENT = 'Investment Risk',
  SUPPLY_CHAIN = 'Supply Chain',
  SCENARIO = 'Scenario Simulation',
  CUSTOMER = 'Customer Analytics',
  MARKETING = 'Marketing Insights',
  FINANCIAL = 'Financial Modeling',
  VALIDATION = 'Cross-Check Validation'
}

export interface IntelligenceModule {
  id: string;
  name: string;
  description: string;
  stat: string;
  trend: 'up' | 'down' | 'neutral';
  componentPath?: string;
}

export interface FeatureDefinition {
  id: string;
  title: string;
  icon: string;
  impact: 'High' | 'Medium' | 'Critical';
  description: string;
  modules: IntelligenceModule[];
}

export interface ScenarioState {
  marketVolatility: number;
  competitorAggression: number;
  interestRates: number;
  consumerSpending: number;
  supplyChainStability: number;
  innovationRate: number;
}

export interface MarketAlert {
  id: string;
  type: 'critical' | 'warning' | 'success';
  title: string;
  message: string;
  timestamp: string;
  agent: AgentType;
  impact: 'High' | 'Medium' | 'Critical';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  agent?: AgentType;
  timestamp: Date;
}
