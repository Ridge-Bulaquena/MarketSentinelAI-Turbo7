
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Command Center', icon: '⚡', desc: 'Global Oversight' },
    { id: 'intelligence', label: 'Intel Matrix', icon: '🛰️', desc: '125 Analytic Nodes' },
    { id: 'strategy', label: 'Sim Lab', icon: '📊', desc: 'ROI Simulations' },
    { id: 'risk', label: 'Agent Nexus', icon: '🛡️', desc: 'Meta-Agent Board' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#020617] text-slate-200">
      {/* Sidebar */}
      <div className="w-20 lg:w-72 border-r border-slate-800/50 flex flex-col bg-[#020617] z-20">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <span className="text-white font-black text-2xl">M</span>
            </div>
            <div className="hidden lg:block">
              <h1 className="text-lg font-bold tracking-tight text-white">MarketSentinel</h1>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-mono font-bold">Autonomous IQ</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                activeTab === tab.id 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[inset_0_0_20px_rgba(37,99,235,0.05)]' 
                  : 'text-slate-500 hover:bg-slate-800/40 hover:text-slate-300'
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {tab.icon}
              </span>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-bold leading-none">{tab.label}</p>
                <p className="text-[10px] opacity-50 mt-1 font-medium">{tab.desc}</p>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-6 mt-auto">
          <div className="hidden lg:block p-4 bg-slate-900/30 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">System Health</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-400">Analytic Nodes</span>
                <span className="text-emerald-400 font-mono">125 SYNCED</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[100%] shadow-[0_0_8px_#10b981]"></div>
              </div>
              <p className="text-[9px] text-slate-600 italic mt-2 leading-tight">
                Market ingestion active. Strategic foresight nominal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,_rgba(30,58,138,0.1),_transparent_50%)]">
        <header className="h-16 border-b border-slate-800/50 flex items-center justify-between px-8 bg-[#020617]/50 backdrop-blur-xl z-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <div className="h-4 w-px bg-slate-800"></div>
            <div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-slate-500">
               <span>NODES: 125 ONLINE</span>
               <span>|</span>
               <span>AGENTS: 12 NOMINAL</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              <span className="text-[10px] font-mono font-bold text-slate-300">SYSTEM STABLE</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
