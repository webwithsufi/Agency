
import React, { useRef, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';

interface BlogPostProps {
  post: {
    title: string;
    category: string;
    author: string;
    date: string;
    content: string;
  };
  onBack: (targetId?: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href') || '';
        onBack(targetId);
      }
    };

    const contentEl = contentRef.current;
    if (contentEl) {
      contentEl.addEventListener('click', handleLinkClick);
    }

    return () => {
      if (contentEl) {
        contentEl.removeEventListener('click', handleLinkClick);
      }
    };
  }, [onBack]);

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 sm:py-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <button 
        onClick={() => onBack()}
        className="flex items-center gap-2 text-indigo-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-widest mb-10 sm:mb-12 hover:text-white transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Nexus Growth
      </button>

      <header className="mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-6 sm:mb-8 border border-emerald-500/20">
          {post.category}
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 sm:mb-10 leading-[1] sm:leading-[0.95]">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 pb-8 sm:pb-12 border-b border-white/10">
          <div className="flex items-center gap-2">
            <User size={14} className="text-indigo-500" />
            <span className="text-white">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>6 min read</span>
          </div>
          <button className="hidden sm:flex items-center gap-2 ml-auto hover:text-indigo-400 transition-colors">
            <Share2 size={14} /> Share Guide
          </button>
        </div>
      </header>

      <div className="prose-container" ref={contentRef}>
        <style dangerouslySetInnerHTML={{ __html: `
          .prose-container h2 { font-size: 1.5rem; font-weight: 800; color: white; margin-top: 2.5rem; margin-bottom: 1.25rem; letter-spacing: -0.02em; }
          @media (min-width: 640px) { .prose-container h2 { font-size: 2rem; } }
          .prose-container h3 { font-size: 1.25rem; font-weight: 700; color: #e2e8f0; margin-top: 1.75rem; margin-bottom: 0.75rem; }
          @media (min-width: 640px) { .prose-container h3 { font-size: 1.5rem; } }
          .prose-container p { font-size: 1rem; line-height: 1.7; color: #94a3b8; margin-bottom: 1.25rem; font-weight: 500; }
          @media (min-width: 640px) { .prose-container p { font-size: 1.125rem; line-height: 1.8; } }
          .prose-container blockquote { border-left: 3px solid #6366f1; padding-left: 1.25rem; font-style: italic; color: #cbd5e1; margin: 2rem 0; font-size: 1.125rem; }
          @media (min-width: 640px) { .prose-container blockquote { border-left-width: 4px; padding-left: 1.5rem; font-size: 1.25rem; } }
          .prose-container ul, .prose-container ol { margin-bottom: 1.75rem; color: #94a3b8; list-style-position: outside; padding-left: 1.25rem; }
          .prose-container ul { list-style-type: disc; }
          .prose-container ol { list-style-type: decimal; }
          .prose-container li { margin-bottom: 0.6rem; padding-left: 0.25rem; line-height: 1.6; }
          .prose-container strong { color: white; font-weight: 700; }
          .prose-container a { color: #818cf8; text-decoration: none; font-weight: 700; border-bottom: 1px solid rgba(129, 140, 248, 0.3); transition: all 0.2s; }
          .prose-container a:hover { color: white; border-bottom-color: white; }
        `}} />
        <div 
          className="text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <div className="mt-20 sm:mt-32 p-8 sm:p-12 glass-card rounded-[2rem] sm:rounded-[3rem] text-center bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
        <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">Want these results?</h4>
        <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg font-medium">Let's implement these strategies together and scale your growth.</p>
        <button 
          onClick={() => {
            onBack('#contact');
          }}
          className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 accent-gradient text-white rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-transform"
        >
          Book a Consultation
        </button>
      </div>
    </div>
  );
};
