
import React from 'react';
import { ArrowRight, Sparkles, MoveUpRight, Globe2, Rocket, BarChart } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-32 sm:pt-44 pb-20 sm:pb-32 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="reveal reveal-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 sm:mb-10">
            <Sparkles size={14} className="animate-pulse" />
            <span className="truncate">Scale Beyond Boundaries</span>
          </div>

          <h1 className="reveal reveal-up delay-100 text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black leading-[0.9] sm:leading-[0.85] tracking-tighter text-white mb-8 sm:mb-10 uppercase">
            GET MORE <br />
            <span className="gradient-text italic">CUSTOMERS.</span>
          </h1>
          
          <p className="reveal reveal-up delay-200 max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 mb-10 sm:mb-14 leading-relaxed font-medium px-2 sm:px-4">
            We bridge the gap between imagination and market dominance 
            with elite web development and hyper-targeted SEO strategy.
          </p>

          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="#contact" 
              onClick={(e) => scrollToId(e, '#contact')}
              className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 accent-gradient text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(99,102,241,0.5)] text-center"
            >
              Build My Brand
            </a>
            <a 
              href="#ai-strategy" 
              onClick={(e) => scrollToId(e, '#ai-strategy')}
              className="group flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-indigo-400 transition-colors py-2"
            >
              AI Growth Engine <MoveUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-24 sm:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Rocket size={24} className="text-indigo-400" />, title: "Market Dominance", label: "Outperform your competition" },
            { icon: <Globe2 size={24} className="text-purple-400" />, title: "Global Reach", label: "Fast, modern web engineering" },
            { icon: <BarChart size={24} className="text-pink-400" />, title: "Precision SEO", label: "Focus on ROI-driven traffic" }
          ].map((item, i) => (
            <div key={i} className={`reveal reveal-up delay-${(i + 4) * 100} glass-card p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] group h-full ${i === 2 && 'sm:col-span-2 lg:col-span-1'}`}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
