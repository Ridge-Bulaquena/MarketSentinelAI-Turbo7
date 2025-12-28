
import React, { useState, useRef, useEffect } from 'react';
import { AgentType, ChatMessage } from '../types';
import { AGENTS_META } from '../constants';
import { getAgentResponse } from '../services/geminiService';

const AgentChat: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentType>(AgentType.COMPETITOR);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.slice(-5).map(m => ({ role: m.role, content: m.content }));
    const responseText = await getAgentResponse(selectedAgent, input, history);

    const assistantMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseText,
      agent: selectedAgent,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  const currentAgentData = AGENTS_META.find(a => a.name === selectedAgent);

  return (
    <div className="flex flex-col h-full bg-[#020617] border-l border-slate-800/50">
      {/* Digital Advisory Board Header */}
      <div className="p-6 border-b border-slate-800/50 bg-slate-900/20 backdrop-blur-md">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-4">Digital Advisory Board</h4>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-2xl border border-slate-700 shadow-xl">
            {currentAgentData?.icon}
          </div>
          <div className="flex-1 min-w-0">
            <select 
              className="bg-transparent border-none text-slate-100 font-bold text-sm outline-none cursor-pointer hover:text-blue-400 transition-colors w-full p-0"
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value as AgentType)}
            >
              {Object.values(AgentType).map(type => (
                <option key={type} value={type} className="bg-slate-900 text-slate-200">{type}</option>
              ))}
            </select>
            <p className="text-[10px] text-slate-500 truncate mt-0.5">{currentAgentData?.desc}</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-3xl opacity-50">
               {currentAgentData?.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-300">Consulting {selectedAgent} Agent</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed italic">
                "Ask about market threats, price elasticity, or strategic ROI projections."
              </p>
            </div>
          </div>
        )}
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[90%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.2)]' 
                  : 'bg-slate-900 border border-slate-800/50 text-slate-200'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
              <div className="text-[9px] font-mono opacity-40 mt-3 flex justify-between items-center uppercase tracking-tighter">
                <span>{msg.role === 'assistant' ? msg.agent : 'DIRECTIVE'}</span>
                <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-slate-900/50 border border-slate-800 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Processing Intelligence...</span>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-slate-800/50 bg-slate-900/10">
        <div className="relative group">
          <input 
            type="text" 
            className="w-full bg-slate-950 border border-slate-800 group-focus-within:border-blue-500/50 rounded-2xl pl-5 pr-14 py-4 text-sm outline-none transition-all placeholder:text-slate-600"
            placeholder={`Ask the ${selectedAgent} Board...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            className="absolute right-2 top-2 bottom-2 aspect-square bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all disabled:opacity-50 flex items-center justify-center shadow-lg shadow-blue-600/20"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-slate-600 text-center mt-4 uppercase tracking-[0.2em] font-medium">
          Secure Encrypted Analysis Tunnel Active
        </p>
      </div>
    </div>
  );
};

export default AgentChat;
