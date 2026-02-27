
import React from 'react';
import { Shield, Lightbulb, Users, Target, Rocket, Award } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    { icon: <Shield className="text-blue-400" />, title: "Radical Transparency", text: "We don't hide behind jargon. You get clear reports and honest feedback on your growth." },
    { icon: <Lightbulb className="text-amber-400" />, title: "Relentless Innovation", text: "We use the latest AI and tech tools to ensure your business stays ahead of the curve." },
    { icon: <Award className="text-emerald-400" />, title: "Result-First Thinking", text: "Clicks are nice, but sales are better. Everything we do is measured by your ROI." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 sm:py-32 border-b border-white/5 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Our Story & Mission</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tighter leading-[1.1] sm:leading-tight">
            Built by engineers. <br />
            <span className="gradient-text italic">Driven by results.</span>
          </h3>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 font-medium">
            Nexus Growth Agency wasn't born in a boardroom. It was born in the trenches of high-performance web engineering. 
            I started this agency after seeing too many businesses waste thousands on beautiful websites that simply didn't sell.
          </p>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 font-medium">
            Our mission is simple: To bridge the gap between elite tech and aggressive marketing. We treat your business as our own, 
            applying the same psychological tactics and sub-second performance standards that we use for our global partners.
          </p>
          <div className="flex gap-8 sm:gap-10">
            <div className="reveal reveal-up delay-200">
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">15+</p>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">Global Partners</p>
            </div>
            <div className="reveal reveal-up delay-300">
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">100%</p>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">Success Rate</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div key={i} className={`reveal reveal-right delay-${(i + 1) * 200} glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] flex gap-4 sm:gap-6 items-start group`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {React.cloneElement(v.icon as React.ReactElement, { size: 20 })}
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{v.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
