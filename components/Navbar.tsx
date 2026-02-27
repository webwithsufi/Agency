
import React, { useState, useEffect } from 'react';
import { Menu, Zap, Sparkles, X, ArrowRight, BookOpen, Info } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to prevent layout ghosting
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about', icon: <Info size={12} className="text-blue-400" /> },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Insights', href: '#blog', icon: <BookOpen size={12} className="text-emerald-400" /> },
    { name: 'AI Strategy', href: '#ai-strategy', icon: <Sparkles size={12} className="text-indigo-400" /> },
  ];

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 px-4 transition-all duration-500 ${scrolled ? 'top-2 md:top-4' : 'top-4 md:top-8'} pointer-events-none`}>
        <nav className={`max-w-6xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 px-4 md:px-6 ${
          scrolled 
            ? 'py-2.5 md:py-3 bg-gray-950/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]' 
            : 'py-4 bg-transparent border border-transparent'
        }`}>
          <a href="#" onClick={(e) => scrollToSection(e, '#')} className="flex items-center gap-2 group cursor-pointer shrink-0">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg accent-gradient flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Zap size={16} className="text-white fill-current md:size-[18px]" />
            </div>
            <span className="text-base md:text-lg font-extrabold tracking-tighter text-white uppercase">Nexus</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                {link.icon}{link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:flex px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-white text-black text-[9px] md:text-[10px] font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
            >
              Start Project
            </a>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-white p-2 hover:bg-white/5 rounded-full transition-colors md:hidden"
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 md:hidden ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#020617] border-l border-white/10 flex flex-col transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-indigo-500" />
              <span className="text-lg font-black tracking-tighter text-white uppercase">NEXUS</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-2 bg-white/5 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
            <div className="space-y-6">
              <p className="text-[10px] font-black tracking-[0.3em] text-indigo-500 uppercase">Navigation</p>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-3xl font-bold text-gray-300 hover:text-white transition-all flex items-center justify-between group active:scale-95"
                >
                  {link.name}
                  <ArrowRight size={24} className="text-indigo-500 opacity-50" />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8 space-y-6">
              <div className="h-px bg-white/5" />
              <div className="space-y-4">
                <p className="text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase">Direct Access</p>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full py-5 accent-gradient rounded-2xl text-center font-black text-white text-xs tracking-[0.2em] shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3"
                >
                  START PROJECT <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
