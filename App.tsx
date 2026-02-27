
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { GrowthTool } from './components/GrowthTool.tsx';
import { Blog } from './components/Blog.tsx';
import { BlogPost } from './components/BlogPost.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PrivacyPolicy } from './components/PrivacyPolicy.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPost, setCurrentPost] = useState<any>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.05, // More aggressive trigger
      rootMargin: '50px' // Start animation before it enters viewport
    });

    const setupObserver = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        // If element is already in viewport or very close, show it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('visible');
        }
        observer.observe(el);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial setup
    const timer = setTimeout(setupObserver, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [currentPost, showPrivacy]);

  const handleReadBlog = (post: any) => {
    setCurrentPost(post);
    setShowPrivacy(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowPrivacy = () => {
    setShowPrivacy(true);
    setCurrentPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = (targetId?: string) => {
    setCurrentPost(null);
    setShowPrivacy(false);
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  if (showPrivacy) {
    return (
      <div className="min-h-screen bg-[#020617] selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar scrolled={true} />
        <main className="pt-20">
          <PrivacyPolicy onBack={() => handleBackToHome()} />
        </main>
        <Footer onShowPrivacy={handleShowPrivacy} />
      </div>
    );
  }

  if (currentPost) {
    return (
      <div className="min-h-screen bg-[#020617] selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar scrolled={true} />
        <main className="pt-20">
          <BlogPost post={currentPost} onBack={handleBackToHome} />
        </main>
        <Footer onShowPrivacy={handleShowPrivacy} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      <div 
        className="fixed top-0 left-0 h-1 accent-gradient z-[100] transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Animated Background Spheres */}
      <div className="aurora-sphere w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-600/20 -top-20 -left-20" />
      <div className="aurora-sphere w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-purple-600/10 top-[40%] -right-20" />
      <div className="aurora-sphere w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-blue-600/10 -bottom-20 left-[20%]" />

      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="ai-strategy" className="py-20 relative">
          <div className="absolute inset-0 bg-indigo-500/[0.02] -z-10" />
          <GrowthTool />
        </section>
        <section id="blog">
          <Blog onReadPost={handleReadBlog} />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer onShowPrivacy={handleShowPrivacy} />
    </div>
  );
};

export default App;
