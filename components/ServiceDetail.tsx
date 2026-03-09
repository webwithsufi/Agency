
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetailProps {
  service: {
    slug: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    outcome: string;
    longDescription: string;
    features: string[];
    benefits: string[];
  };
  onBack: (targetId?: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${service.title} | SF Growth Agency`;
    window.scrollTo(0, 0);
    
    return () => {
      document.title = originalTitle;
    };
  }, [service]);

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 sm:py-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <button 
        onClick={() => onBack()}
        className="flex items-center gap-2 text-indigo-400 font-bold uppercase text-[10px] tracking-widest mb-12 hover:text-white transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
      </button>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8">
            {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
            {service.title}
          </h1>
          
          <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20 mb-12">
            Primary Outcome: {service.outcome}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {service.longDescription}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8 rounded-[2.5rem] border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-indigo-400" size={20} />
              Key Features
            </h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 font-medium">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-[2.5rem] border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ArrowRight className="text-emerald-400" size={20} />
              Business Benefits
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 font-medium">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 p-10 sm:p-16 glass-card rounded-[3rem] text-center bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Ready to scale your <span className="gradient-text">{service.title}?</span></h2>
        <p className="text-slate-400 mb-10 text-lg font-medium max-w-2xl mx-auto">
          Stop guessing and start growing. Our team of experts is ready to implement these strategies for your business today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onBack('#contact')}
            className="px-10 py-5 accent-gradient text-white rounded-full font-black text-xs uppercase tracking-widest shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-transform"
          >
            Get a Free Audit
          </button>
          <button 
            onClick={() => onBack('#contact')}
            className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};
