
import React, { useState, useEffect } from 'react';
import { Star, Quote, Loader2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 flex flex-col items-center justify-center min-h-[300px]">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-4" />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Loading Success Stories...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-20 reveal reveal-up">
        <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Client Success</h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase">Built for Success. <br/><span className="gradient-text italic">Trusted by Leaders.</span></h3>
        <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium leading-relaxed">
          See why fast-growing companies choose Nexus Growth to lead their digital transformation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className={`reveal reveal-up delay-${(idx + 1) * 200} p-10 glass-card rounded-[3rem] border-white/5 relative group hover:bg-white/[0.03] transition-all duration-500`}
          >
            <Quote className="absolute top-8 right-10 text-white/5 w-16 h-16 group-hover:text-indigo-500/10 transition-colors" />
            <div className="flex gap-1 mb-8">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-300 mb-10 italic leading-relaxed text-lg font-medium relative z-10">"{t.content}"</p>
            <div className="flex items-center gap-5 pt-8 border-t border-white/5">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 blur-md opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white/10 relative z-10 object-cover" />
              </div>
              <div>
                <h5 className="text-white font-black text-sm uppercase tracking-tight">{t.name}</h5>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
