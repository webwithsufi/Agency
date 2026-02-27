
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-in fade-in zoom-in duration-1000 relative z-10">
            {result.map((strategy, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col h-full"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Card Background with Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative flex flex-col h-full p-8 sm:p-10 bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] hover:border-indigo-500/40 transition-all duration-500 shadow-2xl overflow-hidden">
                  {/* Technical Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold shrink-0">
                        0{i + 1}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                        strategy.priority === 'High' 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}>
                        {strategy.priority} Priority
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] text-slate-500 font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <RefreshCw size={10} className="animate-spin-slow shrink-0" />
                      <span className="whitespace-nowrap">{strategy.timeline}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-6 leading-tight group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                    {strategy.title}
                  </h4>

                  {/* Points List */}
                  <div className="space-y-4 flex-grow mb-10">
                    {strategy.points.map((p, idx) => (
                      <div key={idx} className="flex gap-4 group/point">
                        <div className="mt-1.5 shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/point:scale-150 transition-transform shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium group-hover/point:text-slate-300 transition-colors">
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    onClick={scrollToContact}
                    className="relative overflow-hidden w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:bg-indigo-600 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Deploy Strategy <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>

                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
