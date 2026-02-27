
import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 sm:py-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-widest mb-10 sm:mb-12 hover:text-white transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Nexus Growth
      </button>

      <header className="mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-6 sm:mb-8 border border-indigo-500/20">
          <Shield size={12} /> Legal Documentation
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 sm:mb-10 leading-[1] sm:leading-[0.95]">
          Privacy <span className="gradient-text italic">Policy.</span>
        </h1>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">Last Updated: February 24, 2024</p>
      </header>

      <div className="prose-container">
        <style dangerouslySetInnerHTML={{ __html: `
          .prose-container h2 { font-size: 1.5rem; font-weight: 800; color: white; margin-top: 2.5rem; margin-bottom: 1.25rem; letter-spacing: -0.02em; display: flex; align-items: center; gap: 0.75rem; }
          @media (min-width: 640px) { .prose-container h2 { font-size: 2rem; } }
          .prose-container p { font-size: 1rem; line-height: 1.7; color: #94a3b8; margin-bottom: 1.25rem; font-weight: 500; }
          @media (min-width: 640px) { .prose-container p { font-size: 1.125rem; line-height: 1.8; } }
          .prose-container ul { margin-bottom: 1.75rem; color: #94a3b8; list-style-position: outside; padding-left: 1.25rem; list-style-type: disc; }
          .prose-container li { margin-bottom: 0.6rem; padding-left: 0.25rem; line-height: 1.6; }
          .prose-container strong { color: white; font-weight: 700; }
        `}} />
        
        <div className="text-slate-300 space-y-8">
          <section>
            <h2><Eye size={24} className="text-indigo-500" /> 1. Information We Collect</h2>
            <p>At Nexus Growth Agency, we collect information that you provide directly to us when you fill out our strategy forms, contact us, or sign up for our insights. This may include:</p>
            <ul>
              <li><strong>Identity Data:</strong> Name, job title, and company name.</li>
              <li><strong>Contact Data:</strong> Email address and phone number.</li>
              <li><strong>Project Data:</strong> Information regarding your business bottlenecks, growth targets, and marketing budget.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns on our website.</li>
            </ul>
          </section>

          <section>
            <h2><Lock size={24} className="text-purple-500" /> 2. How We Use Your Data</h2>
            <p>We use the collected data to provide elite growth services and maintain our high standards of client interaction:</p>
            <ul>
              <li>To generate bespoke AI-driven growth roadmaps.</li>
              <li>To communicate regarding project inquiries and consultations.</li>
              <li>To improve our website engineering and user experience.</li>
              <li>To send relevant industry insights and agency updates (you can opt-out at any time).</li>
            </ul>
          </section>

          <section>
            <h2><Shield size={24} className="text-emerald-500" /> 3. Data Security</h2>
            <p>Nexus Growth employs industry-standard encryption and security protocols to protect your data. We treat your business information as a high-value asset. We do not sell, trade, or rent your personal identification information to others.</p>
          </section>

          <section>
            <h2><FileText size={24} className="text-amber-500" /> 4. Your Rights</h2>
            <p>You have the right to access, correct, or request the deletion of your personal data. If you wish to exercise these rights or have questions about our data practices, please contact our Growth Desk at dmwithsufi@gmail.com.</p>
          </section>

          <section className="pt-10 border-t border-white/5">
            <p className="text-sm italic text-slate-500">
              By using the Nexus Growth website, you signify your acceptance of this policy. We reserve the right to update this policy as the digital landscape evolves.
            </p>
          </section>
        </div>
      </div>

      <div className="mt-20 p-8 sm:p-12 glass-card rounded-[2rem] sm:rounded-[3rem] text-center bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
        <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">Questions?</h4>
        <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg font-medium">Our legal and growth teams are here to ensure your peace of mind.</p>
        <a 
          href="mailto:dmwithsufi@gmail.com"
          className="inline-block px-10 sm:px-12 py-4 sm:py-5 accent-gradient text-white rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-transform"
        >
          Contact Growth Desk
        </a>
      </div>
    </div>
  );
};
