
import React from 'react';
import { Zap, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onShowPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowPrivacy }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/5 pt-20 pb-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Zap size={18} className="text-white fill-current" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase">Nexus<span className="text-indigo-400">Growth</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
              Empowering global brands through high-performance digital strategy and precision engineering.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-lg"><Twitter size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-lg"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-lg"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">Our Agency</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-bold">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">About Our Mission</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">Our Services</a></li>
              <li><a href="#blog" onClick={(e) => scrollToSection(e, '#blog')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">Growth Insights</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">Work With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">Services</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-bold">
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">SEO Mastery</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">Web Engineering</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">Google & FB Ads</a></li>
              <li><a href="#ai-strategy" onClick={(e) => scrollToSection(e, '#ai-strategy')} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">AI Roadmaps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">Direct Contact</h4>
            <p className="text-xs text-gray-500 mb-4 font-bold uppercase tracking-widest leading-relaxed">Ready to scale? <br/>dmwithsufi@gmail.com</p>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
              >
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-600 font-black uppercase tracking-[0.2em]">
          <p>© 2024 Nexus Growth Agency. All results are data-driven.</p>
          <div className="flex gap-6">
            <button onClick={onShowPrivacy} className="hover:text-white transition-colors uppercase tracking-widest">Privacy</button>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
