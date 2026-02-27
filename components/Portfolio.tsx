
import React from 'react';
import { ExternalLink, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    client: "TechFlow SaaS",
    type: "SaaS Platform",
    problem: "Struggling with high bounce rates and low trial conversions due to slow load times and confusing UX.",
    solution: "Full rebuild using Next.js and Tailwind CSS with a focus on 'Conversion-First' design and sub-second performance.",
    result: "40% increase in engagement and 60% improvement in load time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    stats: ["+40% Engagement", "-60% Load Time"]
  },
  {
    client: "UrbanStyle E-commerce",
    type: "Fashion Retail",
    problem: "Low organic visibility and high customer acquisition costs (CAC) through paid ads.",
    solution: "Aggressive SEO strategy targeting high-intent long-tail keywords and technical SEO optimization.",
    result: "300% growth in organic traffic and 25% reduction in CAC.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    stats: ["300% Traffic Growth", "-25% CAC"]
  },
  {
    client: "GlobaLync Logistics",
    type: "B2B Services",
    problem: "Outdated digital presence that failed to build trust with enterprise-level clients.",
    solution: "Premium corporate identity overhaul and a high-performance web infrastructure with interactive tracking tools.",
    result: "100% increase in enterprise leads and established market authority.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    stats: ["+100% Leads", "Market Authority"]
  }
];

export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-32">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Case Studies</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">Results that <span className="gradient-text italic">speak louder.</span></h3>
        <p className="text-slate-500 max-w-xl text-lg font-medium">
          We don't just design; we solve business problems. Explore how we've helped brands dominate their markets.
        </p>
      </div>

      <div className="grid gap-12 sm:gap-20">
        {caseStudies.map((study, i) => (
          <div key={i} className={`reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center group`}>
            <div className={`relative rounded-[3rem] overflow-hidden glass-card border-white/5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <img 
                src={study.image} 
                alt={study.client}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 flex gap-3">
                {study.stats.map((stat, idx) => (
                  <div key={idx} className="px-4 py-2 rounded-full bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-[10px] font-black uppercase tracking-widest">
                    {stat}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-4 inline-block">{study.type}</span>
                <h4 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">{study.client}</h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">The Problem</p>
                      <p className="text-slate-400 text-sm leading-relaxed font-medium">{study.problem}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">Our Solution</p>
                      <p className="text-slate-400 text-sm leading-relaxed font-medium">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">Business Impact</p>
                      <p className="text-white text-base leading-relaxed font-bold">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-3 text-white font-black text-xs tracking-[0.2em] uppercase hover:text-indigo-400 transition-all group/btn">
                View Full Case Study <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-indigo-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center reveal reveal-up">
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-6 glass-card rounded-full text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all border-white/10"
        >
          Want results like these? Let's talk
        </button>
      </div>
    </div>
  );
};
