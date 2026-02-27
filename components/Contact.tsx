import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, ArrowLeft, ChevronDown, AlertTriangle, Copy, Check, Zap, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('');
  const [copied, setCopied] = useState(false);

  const services = [
    "Custom Website Building",
    "Google Ranking (SEO)",
    "Google Ads (PPC)",
    "Facebook & Social Ads",
    "Full Brand Marketing",
    "Sales & Lead Generation",
    "Other / General Inquiry"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error(result.error || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dmwithsufi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="reveal reveal-left sticky top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
            <Zap size={12} /> Priority Access
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">
            Let's build your <br /><span className="gradient-text italic">digital empire.</span>
          </h3>
          <p className="text-slate-400 mb-10 text-lg font-medium leading-relaxed max-w-lg">
            Ready to stop playing small? Our team specializes in aggressive growth strategies for ambitious brands. Expect a response within 4 hours.
          </p>

          <div className="space-y-6">
            <div onClick={copyEmail} className="flex items-center gap-5 group cursor-pointer w-fit p-4 rounded-3xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shrink-0 border-indigo-500/20">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">Direct Line</p>
                <div className="flex items-center gap-2">
                  <p className="text-white font-bold text-lg">dmwithsufi@gmail.com</p>
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 group p-4 rounded-3xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shrink-0 border-purple-500/20">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">Global HQ</p>
                <p className="text-white font-bold text-lg">Direct Growth Desk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-[3rem] relative overflow-hidden reveal reveal-right border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent shadow-2xl">
          {submitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-700">
              <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
                <CheckCircle size={48} className="animate-bounce" />
              </div>
              <h4 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">Transmission Received</h4>
              <p className="text-slate-400 font-medium mb-12 leading-relaxed text-lg">
                Your data has been encrypted and sent to our growth team. Check your inbox shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="flex items-center gap-2 mx-auto text-indigo-400 font-black hover:text-white transition-colors uppercase text-xs tracking-widest"
              >
                <ArrowLeft size={16} /> New Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                <ShieldCheck size={20} className="text-indigo-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secure Consultation Form</span>
              </div>

              {error && (
                <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-400 text-sm font-bold animate-in fade-in slide-in-from-top-2">
                  <AlertTriangle size={20} className="shrink-0" /> {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Your Identity</label>
                  <input 
                    id="contact-name"
                    name="name"
                    required 
                    type="text" 
                    aria-required="true"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700 font-medium" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Work Email</label>
                  <input 
                    id="contact-email"
                    name="email"
                    required 
                    type="email" 
                    aria-required="true"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700 font-medium" 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-service" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Service Tier</label>
                  <div className="relative">
                    <select 
                      id="contact-service"
                      name="service"
                      required 
                      aria-required="true"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled className="bg-[#020617]">Select expertise required...</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#020617]">{service}</option>
                      ))}
                    </select>
                    <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-budget" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Project Budget</label>
                  <div className="relative">
                    <select 
                      id="contact-budget"
                      name="budget"
                      required 
                      aria-required="true"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled className="bg-[#020617]">Select budget range...</option>
                      <option value="5k-15k" className="bg-[#020617]">$5,000 - $15,000</option>
                      <option value="15k-50k" className="bg-[#020617]">$15,000 - $50,000</option>
                      <option value="50k-150k" className="bg-[#020617]">$50,000 - $150,000</option>
                      <option value="150k+" className="bg-[#020617]">$150,000+</option>
                    </select>
                    <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Project Brief</label>
                <textarea 
                  id="contact-message"
                  name="message"
                  rows={4} 
                  required 
                  aria-required="true"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none placeholder:text-slate-700 font-medium" 
                  placeholder="Tell us about your current bottlenecks and growth targets..."
                ></textarea>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-5 accent-gradient text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 transition-all hover:scale-[1.01] hover:brightness-110 active:scale-95 shadow-[0_20px_50px_-15px_rgba(99,102,241,0.5)] disabled:opacity-50"
              >
                {loading ? 'Encrypting & Sending...' : 'Get a Free Proposal'} <Send size={18} />
              </button>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px bg-white/5 flex-1" />
                <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={12} className="text-emerald-500" /> SSL Secured
                </span>
                <div className="h-px bg-white/5 flex-1" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};