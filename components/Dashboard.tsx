
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { ScenarioState, MarketAlert } from '../types';

const timelineData = [
  { date: 'Q1', growth: 12, adoption: 45, sentiment: 60 },
  { date: 'Q2', growth: 18, adoption: 52, sentiment: 65 },
  { date: 'Q3', growth: 15, adoption: 68, sentiment: 58 },
  { date: 'Q4', growth: 22, adoption: 75, sentiment: 72 },
  { date: 'Q1 25', growth: 30, adoption: 82, sentiment: 80 },
];

const alerts: MarketAlert[] = [
  { id: '1', type: 'critical', title: 'Competitor Price Drop', message: 'Main rival slashed prices by 15% in EU market.', timestamp: '2m ago', agent: 'Pricing Optimization' as any, impact: 'High' },
  { id: '2', type: 'warning', title: 'Regulatory Shift', message: 'New data privacy laws proposed in Brazil.', timestamp: '15m ago', agent: 'News & Regulatory' as any, impact: 'Medium' },
  { id: '3', type: 'success', title: 'New Market Gap', message: 'Underserved demand for AI-driven logistics in MENA.', timestamp: '1h ago', agent: 'Market Opportunity' as any, impact: 'High' },
];

interface DashboardProps {
  scenario: ScenarioState;
}

const Dashboard: React.FC<DashboardProps> = ({ scenario }) => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Market Sentiment', value: '78.4%', trend: '+4.2%', color: 'text-blue-400' },
          { label: 'Risk Exposure', value: 'Low-Mid', trend: '-12%', color: 'text-emerald-400' },
          { label: 'Innovation Velocity', value: 'High', trend: '+18.5%', color: 'text-purple-400' },
          { label: 'Competitor Pressure', value: 'Moderate', trend: '+5%', color: 'text-orange-400' },
        ].map(stat => (
          <div key={stat.label} className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="w-12 h-12 rounded-full border-2 border-slate-400"></div>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
              <span className={`text-xs font-mono font-bold ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Timeline */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/50 rounded-3xl p-8 shadow-2xl relative">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-500">📈</span> Adoption & Sentiment Forecast
              </h3>
              <p className="text-xs text-slate-500 mt-1">AI-driven predictive timeline for next 12 months</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold text-slate-400">DAILY</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-full text-[10px] font-bold">WEEKLY</span>
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="growth" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorGrowth)" />
                <Area type="monotone" dataKey="adoption" stroke="#10b981" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Real-time Alert Panel */}
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-3xl p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-500">🔔</span> Intelligence Alerts
            </h3>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {alerts.map(alert => (
              <div key={alert.id} className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                    alert.type === 'critical' ? 'bg-rose-500/10 text-rose-500' :
                    alert.type === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-400'
                  }`}>
                    {alert.type}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{alert.timestamp}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-200 mb-1 group-hover:text-blue-400 transition-colors">{alert.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{alert.message}</p>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-600 font-mono italic">via {alert.agent}</span>
                  <span className={`font-bold ${alert.impact === 'High' ? 'text-rose-400' : 'text-slate-400'}`}>IMPACT: {alert.impact}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-slate-800/50 hover:bg-slate-800 text-slate-400 text-xs font-bold rounded-xl transition-all border border-slate-700/50">
            VIEW ALL LOGS
          </button>
        </div>
      </div>

      {/* Market Map Placeholder Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-slate-900/40 border border-slate-800/50 rounded-3xl p-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5 select-none pointer-events-none">
              <h1 className="text-9xl font-black">SCANNER</h1>
           </div>
           <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
             <span className="text-emerald-500">🌍</span> Global Market Penetration Map
           </h3>
           <div className="aspect-[21/9] bg-slate-950/50 rounded-2xl border border-slate-800/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              {/* Abstract Dot Map */}
              <div className="relative w-full h-full flex items-center justify-center">
                 {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-4 h-4 bg-blue-500/40 rounded-full animate-pulse border border-blue-400/50 shadow-[0_0_15px_#3b82f6]"
                      style={{ 
                        top: `${Math.random() * 80 + 10}%`, 
                        left: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${Math.random() * 2}s` 
                      }}
                    ></div>
                 ))}
                 <div className="z-10 text-center">
                    <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em]">Active Node Cluster: APAC/NA/EMEA</p>
                    <div className="mt-4 flex gap-8 justify-center">
                       <div className="text-center">
                          <p className="text-2xl font-bold font-mono text-white">1,402</p>
                          <p className="text-[10px] text-slate-600 uppercase">Competitive Nodes</p>
                       </div>
                       <div className="text-center">
                          <p className="text-2xl font-bold font-mono text-blue-400">842</p>
                          <p className="text-[10px] text-slate-600 uppercase">Opportunity Points</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-3xl p-8">
           <h3 className="text-lg font-bold mb-6">Price Elasticity</h3>
           <div className="space-y-6">
              {[
                { label: 'Consumer Tech', value: 85, trend: 'High' },
                { label: 'B2B SaaS', value: 42, trend: 'Medium' },
                { label: 'Logistics', value: 18, trend: 'Low' },
              ].map(item => (
                <div key={item.label} className="space-y-2">
                   <div className="flex justify-between text-xs font-mono uppercase">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-blue-400">{item.value}%</span>
                   </div>
                   <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                      <div className="bg-blue-600 h-full rounded-full shadow-[0_0_10px_#3b82f6]" style={{ width: `${item.value}%` }}></div>
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-8 p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-[10px] text-slate-500 italic leading-relaxed text-center">
                AI Recommendation: Optimal pricing pivot for Tech segment detected at +4.5% margin increase.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;