
import React from 'react';
import { ArrowRight, Sparkles, MoveUpRight, Globe2, Rocket, BarChart, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-28 sm:pt-44 pb-16 sm:pb-32 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="reveal reveal-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-lg shadow-indigo-500/5">
            <Sparkles size={14} className="animate-pulse text-indigo-400" />
            <span className="truncate">Global Growth Partners 2024</span>
          </div>

          <h1 className="reveal reveal-up delay-100 text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] tracking-tighter text-white mb-10 uppercase">
            WE CAPTURE <br />
            <span className="gradient-text italic">MARKETS.</span>
          </h1>
          
          <p className="reveal reveal-up delay-200 max-w-2xl text-lg sm:text-xl text-slate-400 mb-14 leading-relaxed font-medium px-4">
            Elite web engineering and aggressive SEO strategies designed to transform 
            your business into a dominant market force.
          </p>

          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <a 
              href="#contact" 
              onClick={(e) => scrollToId(e, '#contact')}
              className="w-full sm:w-auto px-12 py-6 accent-gradient text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.6)] text-center"
            >
              Dominate Now
            </a>
            <a 
              href="#ai-strategy" 
              onClick={(e) => scrollToId(e, '#ai-strategy')}
              className="group flex items-center justify-center gap-3 text-white font-black text-xs tracking-[0.2em] uppercase hover:text-indigo-400 transition-all py-3 border-b-2 border-transparent hover:border-indigo-500/20"
            >
              Free AI Roadmap <MoveUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-indigo-500" />
            </a>
          </div>

          <div className="reveal reveal-up delay-400 mt-16 flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-emerald-500" /> Verified Results</span>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <span className="flex items-center gap-2">Data-Driven Execution</span>
          </div>
        </div>

        <div className="mt-24 sm:mt-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Rocket size={24} className="text-indigo-400" />, title: "Hyper-Growth", label: "Outscale your competitors overnight" },
            { icon: <Globe2 size={24} className="text-purple-400" />, title: "Global Reach", label: "Next-gen web infrastructure" },
            { icon: <BarChart size={24} className="text-pink-400" />, title: "Precision ROI", label: "Marketing that pays for itself" }
          ].map((item, i) => (
            <div key={i} className={`reveal reveal-up delay-${(i + 4) * 100} glass-card p-10 rounded-[3rem] group h-full relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500 group-hover:border-indigo-500/20">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-3 tracking-tight uppercase">{item.title}</h3>
              <p className="text-slate-500 font-bold text-sm tracking-wide leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
