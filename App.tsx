
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AgentChat from './components/AgentChat';
import ScenarioSimulator from './components/ScenarioSimulator';
import IntelligenceSuite from './components/IntelligenceSuite';
import AgentNexus from './components/AgentNexus';
import { ScenarioState } from './types';
import { getMarketSummary } from './services/geminiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [marketBriefing, setMarketBriefing] = useState<{ text: string; sources: any[] }>({
    text: 'Synchronizing with global market ingestion nodes...',
    sources: []
  });
  const [scenario, setScenario] = useState<ScenarioState>({
    marketVolatility: 30,
    competitorAggression: 50,
    interestRates: 4.5,
    consumerSpending: 70,
    supplyChainStability: 85,
    innovationRate: 60
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getMarketSummary();
      setMarketBriefing(data);
    };
    fetchSummary();
  }, []);

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="flex h-full">
        <div className="flex-1 h-full overflow-y-auto">
          {/* Global Market Briefing (Sticky on Dashboard only) */}
          {activeTab === 'dashboard' && (
            <div className="p-8 pb-0">
               <div className="bg-blue-600/5 border border-blue-500/10 rounded-3xl p-6 flex items-start gap-4 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <div className="text-2xl mt-1">🎙️</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-center mb-1">
                        <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em]">Autonomous Market Briefing</h4>
                        <span className="text-[10px] font-mono text-slate-600 uppercase">Live Intel Stream</span>
                     </div>
                     <p className="text-sm text-slate-300 leading-relaxed font-medium">
                       "{marketBriefing.text}"
                     </p>
                     {/* Listing sources extracted from grounding chunks */}
                     {marketBriefing.sources.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {marketBriefing.sources.map((source, i) => (
                            source.web && (
                              <a 
                                key={i} 
                                href={source.web.uri} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full hover:bg-blue-500/20 transition-colors"
                              >
                                {source.web.title || 'Source'}
                              </a>
                            )
                          ))}
                        </div>
                     )}
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'dashboard' && <Dashboard scenario={scenario} />}
          
          {/* Intelligence Matrix (Deep 25 Features x 5 Modules) */}
          {activeTab === 'intelligence' && <IntelligenceSuite />}

          {activeTab === 'strategy' && (
            <div className="p-8 h-full flex flex-col space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
               <div className="flex-1 flex gap-8">
                  <div className="flex-1">
                     <div className="mb-6">
                        <h2 className="text-3xl font-bold text-white tracking-tight text-center">Strategy Simulation Lab</h2>
                        <p className="text-slate-500 text-sm mt-1 text-center">Multi-scenario ROI modeling and portfolio optimization core.</p>
                     </div>
                     <Dashboard scenario={scenario} />
                  </div>
                  <div className="w-96 flex-shrink-0">
                     <ScenarioSimulator scenario={scenario} setScenario={setScenario} />
                  </div>
               </div>
            </div>
          )}

          {/* Agent Nexus (12 Agents View) */}
          {activeTab === 'risk' && <AgentNexus />}
        </div>

        {/* Persistent Advisory Board Chat */}
        <div className="w-96 flex-shrink-0 hidden xl:block shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-10">
          <AgentChat />
        </div>
      </div>
    </Layout>
  );
};

export default App;