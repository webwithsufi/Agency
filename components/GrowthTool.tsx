
import React, { useState } from 'react';
import { Sparkles, Loader2, Send, Terminal, ArrowRight, AlertCircle, RefreshCw, Cpu } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

interface StrategyResult {
  title: string;
  points: string[];
  timeline: string;
  priority: 'High' | 'Medium' | 'Low';
}

export const GrowthTool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<StrategyResult[] | null>(null);

  const generateStrategy = async () => {
    if (!niche || loading) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{
          parts: [{
            text: `You are an elite Digital Growth Consultant for Nexus Growth Agency.
            A potential high-ticket client in the niche: "${niche}" is looking for a scaling roadmap.
            
            Generate a sophisticated, data-driven strategy consisting of exactly 3 pillars.
            Use industry terms like "Entity-Based SEO", "Conversion Rate Optimization (CRO)", "High-Intent PPC", and "Modern Component Architecture".
            The tone must be professional, authoritative, and result-oriented.
            
            Format the response as a JSON array of objects with keys: title, points (array of 4 specific bullets), timeline (e.g., "Months 1-3"), and priority ("High").`
          }]
        }],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                points: { type: Type.ARRAY, items: { type: Type.STRING } },
                timeline: { type: Type.STRING },
                priority: { type: Type.STRING }
              },
              required: ["title", "points", "timeline", "priority"]
            }
          }
        }
      });

      const text = response.text;
      if (!text) throw new Error("Cloud synchronization failed. Please try again.");
      
      const data = JSON.parse(text);
      setResult(data);
    } catch (err: any) {
      console.error("AI Engine Error:", err);
      setError(err.message || "Failed to connect to the Nexus AI Core.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative glass-card p-8 sm:p-20 rounded-[4rem] border-indigo-500/10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Cpu size={180} className="text-indigo-500" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl accent-gradient flex items-center justify-center mx-auto mb-10 shadow-[0_25px_50px_-12px_rgba(99,102,241,0.5)] border border-white/20">
            <Sparkles size={40} className="text-white animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tighter uppercase">AI Strategy Engine</h2>
          <p className="text-slate-400 text-lg font-medium px-4 max-w-2xl mx-auto leading-relaxed">
            Harness the power of our proprietary Nexus Intelligence to generate a bespoke growth roadmap for your industry in seconds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mb-20 relative z-10">
          <input 
            type="text"
            placeholder="Enter your industry (e.g. Luxury Real Estate, B2B SaaS)"
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-bold text-lg"
            value={niche}
            onChange={(e) => {
              setNiche(e.target.value);
              if (error) setError(null);
            }}
            onKeyDown={(e) => e.key === 'Enter' && generateStrategy()}
          />
          <button 
            onClick={generateStrategy}
            disabled={loading || !niche}
            className="px-12 py-5 accent-gradient text-white rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-95 disabled:opacity-50 shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)] text-sm whitespace-nowrap"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Terminal size={20} />}
            {loading ? 'Synthesizing...' : 'Analyze Market'}
          </button>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-16 p-6 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-start gap-5 animate-in fade-in slide-in-from-top-4 duration-300">
            <AlertCircle className="text-red-400 shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h5 className="text-red-400 font-black text-xs uppercase tracking-[0.2em] mb-2">Nexus Core Error</h5>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{error}</p>
              <button 
                onClick={generateStrategy}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-red-400 transition-colors"
              >
                <RefreshCw size={12} /> Restart Nexus Engine
              </button>
            </div>
          </div>
        )}

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in zoom-in duration-1000 relative z-10">
            {result.map((strategy, i) => (
              <div key={i} className="p-8 sm:p-10 bg-white/[0.02] border border-white/5 rounded-[3.5rem] hover:border-indigo-500/30 transition-all flex flex-col h-full group">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {strategy.priority} Priority
                  </span>
                  <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{strategy.timeline}</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-8 leading-tight group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                  {strategy.title}
                </h4>
                <ul className="space-y-6 flex-grow mb-12">
                  {strategy.points.map((p, idx) => (
                    <li key={idx} className="flex gap-4 text-sm text-slate-400 leading-relaxed font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                      {p}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="mt-auto w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 group/btn hover:border-indigo-500/50 shadow-lg"
                >
                  Implement Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
