
import React from 'react';
import { Search, Code, TrendingUp, MousePointer2, Users, Target } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "Web Engineering",
    description: "Fast, responsive, SEO-optimized websites designed to grow your business. We solve the 'slow site' problem that kills 40% of your potential sales.",
    outcome: "Sub-second load times & higher conversion rates."
  },
  {
    icon: <Search className="w-6 h-6 text-indigo-400" />,
    title: "Aggressive SEO",
    description: "We don't just 'do SEO'. We dominate search results. We solve the 'invisibility' problem by putting your brand where the high-intent traffic is.",
    outcome: "Top 3 rankings for high-value keywords."
  },
  {
    icon: <Target className="w-6 h-6 text-pink-400" />,
    title: "PPC Management",
    description: "Stop wasting money on clicks that don't convert. We manage your Google & Meta ads with a focus on ROAS and lead quality.",
    outcome: "Lower CAC and higher quality leads."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Social Growth",
    description: "We find your perfect customers where they hang out. Our ads stop the scroll and turn social media users into loyal fans of your brand.",
    outcome: "Increased brand awareness & engagement."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-400" />,
    title: "Growth Strategy",
    description: "A complete roadmap for your digital expansion. We solve the 'random acts of marketing' problem with a data-driven plan.",
    outcome: "Clear path to 2x-5x revenue growth."
  },
  {
    icon: <MousePointer2 className="w-6 h-6 text-orange-400" />,
    title: "Conversion Optimization",
    description: "We turn your existing traffic into more revenue. We solve the 'leaky bucket' problem by optimizing every touchpoint on your site.",
    outcome: "Immediate boost in sales from existing traffic."
  }
];

export const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">How We Help You Grow</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Everything you need to <br/><span className="gradient-text">win more clients.</span></h3>
        </div>
        <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
          No confusing tech talk. Just real results, more customers, and a professional website that works for your business 24/7.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className={`reveal reveal-up delay-${(index % 3) * 100} group p-10 glass-card rounded-[2.5rem] flex flex-col h-full`}>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-all duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h4>
            <p className="text-slate-500 leading-relaxed text-[15px] font-medium mb-6">
              {service.description}
            </p>
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-widest border border-emerald-500/20">
                Outcome: {service.outcome}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={scrollToContact}
                className="text-indigo-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
              >
                Get Started <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
