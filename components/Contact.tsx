
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowLeft, ChevronDown } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    "Custom Website Building",
    "Google Ranking (SEO)",
    "Google Ads (PPC)",
    "Facebook & Social Ads",
    "Full Brand Marketing",
    "Sales & Lead Generation",
    "Other / General Inquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="reveal reveal-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            Contact Nexus
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tighter leading-tight">Ready to outpace <br />your competition?</h3>
          <p className="text-slate-400 mb-10 sm:mb-12 text-base sm:text-lg font-medium leading-relaxed max-w-lg">
            Our specialists help brands scale through high-end web development and marketing systems. 
            Send us your query and let's build something great.
          </p>

          <div className="space-y-6 sm:space-y-8">
            {[
              { icon: <Mail size={20} />, label: "Email", value: "dmwithsufi@gmail.com", color: "text-indigo-400" },
              { icon: <Phone size={20} />, label: "Voice", value: "+1 (555) 890-2341", color: "text-purple-400" },
              { icon: <MapPin size={20} />, label: "HQ", value: "Available Globally", color: "text-pink-400" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 sm:gap-5 group cursor-pointer">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shrink-0`}>
                  {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-slate-500 mb-0.5 sm:mb-1">{item.label}</p>
                  <p className="text-white font-bold text-sm sm:text-base truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 sm:p-10 md:p-14 rounded-[2.5rem] sm:rounded-[3.5rem] relative overflow-hidden reveal reveal-right">
          {submitted ? (
            <div className="text-center py-10 sm:py-12 animate-in fade-in zoom-in duration-700">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                <CheckCircle size={40} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Success!</h4>
              <p className="text-slate-400 font-medium mb-10 leading-relaxed text-sm sm:text-base">
                Your message has been sent. We'll get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="flex items-center gap-2 mx-auto text-indigo-400 font-bold hover:text-white transition-colors uppercase text-[10px] tracking-widest"
              >
                <ArrowLeft size={14} /> Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Service Interest</label>
                <div className="relative">
                  <select 
                    required 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#020617]">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#020617]">{service}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Project Goals</label>
                <textarea rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none placeholder:text-slate-700" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-4 sm:py-5 accent-gradient text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-2xl shadow-indigo-600/20 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Initiate Contact'} <Send size={16} />
              </button>
              <p className="text-[9px] text-center text-slate-600 font-bold uppercase tracking-widest">
                Direct to: dmwithsufi@gmail.com
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
