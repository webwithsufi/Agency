
import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Loader2 } from 'lucide-react';

interface BlogProps {
  onReadPost: (post: any) => void;
}

export const Blog: React.FC<BlogProps> = ({ onReadPost }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Growth Insights...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Growth Insights</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">Expertise shared. <br/><span className="gradient-text italic">Success scaled.</span></h3>
        <p className="text-slate-500 max-w-xl text-lg font-medium">
          Professional strategies written by our growth leads to help you understand the digital landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="glass-card rounded-[3rem] overflow-hidden group flex flex-col h-full">
            <div className="p-8 md:p-10 flex flex-col h-full">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-6 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 w-fit">
                {post.category}
              </span>
              <h4 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                {post.excerpt}
              </p>
              
              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <button 
                  onClick={() => onReadPost(post)}
                  className="text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group/btn"
                >
                  Read Full Guide <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToId(post.target)}
                  className="text-slate-600 hover:text-emerald-400 transition-colors"
                  title="Related Service"
                >
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button 
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-all border-b border-white/10 pb-1"
        >
          Want a custom strategy for your niche? Let's talk
        </button>
      </div>
    </div>
  );
};
