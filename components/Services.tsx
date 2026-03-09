
import React from 'react';
import { Search, Code, TrendingUp, MousePointer2, Users, Target } from 'lucide-react';

const services = [
  {
    slug: "web-engineering",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "Web Engineering",
    description: "Fast, responsive, SEO-optimized websites designed to grow your business. We solve the 'slow site' problem that kills 40% of your potential sales.",
    outcome: "Sub-second load times & higher conversion rates.",
    longDescription: "In today's digital landscape, your website is your most important salesperson. If it's slow, clunky, or hard to navigate, you're losing money every single second. Our web engineering team doesn't just build websites; we build high-performance growth engines. We focus on core web vitals, mobile-first design, and conversion-centric architecture to ensure your visitors stay and convert.",
    features: [
      "Custom React & Next.js Development",
      "Performance Optimization (90+ PageSpeed Score)",
      "Mobile-First Responsive Design",
      "SEO-Friendly Architecture",
      "Secure & Scalable Infrastructure"
    ],
    benefits: [
      "Reduced bounce rates with lightning-fast load times",
      "Improved search engine rankings through technical excellence",
      "Higher conversion rates with intuitive user experiences",
      "Future-proof technology stack that scales with your business"
    ]
  },
  {
    slug: "aggressive-seo",
    icon: <Search className="w-6 h-6 text-indigo-400" />,
    title: "Aggressive SEO",
    description: "We don't just 'do SEO'. We dominate search results. We solve the 'invisibility' problem by putting your brand where the high-intent traffic is.",
    outcome: "Top 3 rankings for high-value keywords.",
    longDescription: "SEO is not a one-time task; it's a constant battle for visibility. Our 'Aggressive SEO' strategy is designed to not just participate in search results, but to dominate them. We combine deep technical audits, high-authority link building, and content strategies that align with user intent to push your brand to the top of Google for the keywords that actually drive revenue.",
    features: [
      "Deep Technical SEO Audits",
      "Competitor Keyword Gap Analysis",
      "High-Authority Link Building",
      "Content Strategy & Optimization",
      "Local SEO Domination"
    ],
    benefits: [
      "Sustainable organic traffic growth",
      "Increased brand authority and trust",
      "Lower long-term customer acquisition costs",
      "Visibility where your customers are searching"
    ]
  },
  {
    slug: "ppc-management",
    icon: <Target className="w-6 h-6 text-pink-400" />,
    title: "PPC Management",
    description: "Stop wasting money on clicks that don't convert. We manage your Google & Meta ads with a focus on ROAS and lead quality.",
    outcome: "Lower CAC and higher quality leads.",
    longDescription: "Paid advertising can be a black hole for your budget if not managed with precision. We take a data-first approach to PPC, focusing on Return on Ad Spend (ROAS) rather than just clicks. By optimizing your funnels, refining your targeting, and constantly testing ad creatives, we ensure every dollar you spend on Google, Meta, or LinkedIn is working hard to grow your bottom line.",
    features: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads for B2B Growth",
      "A/B Testing & Creative Optimization",
      "Conversion Tracking & Attribution"
    ],
    benefits: [
      "Immediate traffic and lead generation",
      "Highly targeted audience reach",
      "Measurable ROI and transparent reporting",
      "Scalable growth through predictable ad spend"
    ]
  },
  {
    slug: "social-growth",
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Social Growth",
    description: "We find your perfect customers where they hang out. Our ads stop the scroll and turn social media users into loyal fans of your brand.",
    outcome: "Increased brand awareness & engagement.",
    longDescription: "Social media is the modern-day town square. To grow here, you need more than just posts; you need a community and a presence that demands attention. Our social growth strategies focus on creating high-impact content and targeted ad campaigns that resonate with your audience, building a loyal following that eventually converts into paying customers.",
    features: [
      "Social Media Strategy & Planning",
      "Content Creation & Curation",
      "Community Management & Engagement",
      "Influencer Partnership Management",
      "Paid Social Campaign Execution"
    ],
    benefits: [
      "Stronger brand identity and recognition",
      "Direct engagement with your target audience",
      "Viral potential for organic reach",
      "Building a community of brand advocates"
    ]
  },
  {
    slug: "growth-strategy",
    icon: <TrendingUp className="w-6 h-6 text-teal-400" />,
    title: "Growth Strategy",
    description: "A complete roadmap for your digital expansion. We solve the 'random acts of marketing' problem with a data-driven plan.",
    outcome: "Clear path to 2x-5x revenue growth.",
    longDescription: "Most businesses fail to scale because they lack a cohesive strategy. They try 'random acts of marketing' and hope something sticks. We provide a comprehensive growth roadmap that aligns your product, marketing, and sales efforts. By analyzing your data and identifying the biggest levers for growth, we create a plan that takes you from where you are to where you want to be.",
    features: [
      "Comprehensive Market Research",
      "Customer Persona Development",
      "Full-Funnel Strategy Design",
      "Data Analysis & Growth Modeling",
      "Quarterly Growth Roadmaps"
    ],
    benefits: [
      "Elimination of wasted marketing spend",
      "Clear, actionable steps for scaling",
      "Alignment across all business departments",
      "Data-backed confidence in your growth path"
    ]
  },
  {
    slug: "conversion-optimization",
    icon: <MousePointer2 className="w-6 h-6 text-orange-400" />,
    title: "Conversion Optimization",
    description: "We turn your existing traffic into more revenue. We solve the 'leaky bucket' problem by optimizing every touchpoint on your site.",
    outcome: "Immediate boost in sales from existing traffic.",
    longDescription: "Getting traffic is only half the battle. If your visitors aren't converting, you're leaving money on the table. Conversion Rate Optimization (CRO) is the science of understanding why visitors aren't taking action and fixing it. We use heatmaps, user testing, and rigorous A/B testing to plug the leaks in your sales funnel and maximize the value of every visitor.",
    features: [
      "User Behavior Analysis & Heatmaps",
      "A/B & Multivariate Testing",
      "Landing Page Design & Optimization",
      "Checkout Process Streamlining",
      "Copywriting & UX Improvements"
    ],
    benefits: [
      "Increased revenue without increasing traffic",
      "Lower customer acquisition costs",
      "Better understanding of customer behavior",
      "Improved overall user experience"
    ]
  }
];

interface ServicesProps {
  onSelectService?: (service: any) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 sm:py-32">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-16 sm:mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">How We Help You Grow</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Everything you need to <br/><span className="gradient-text">win more clients.</span></h3>
        </div>
        <p className="text-slate-500 max-w-sm text-lg sm:text-sm font-medium leading-relaxed">
          No confusing tech talk. Just real results, more customers, and a professional website that works for your business 24/7.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => onSelectService?.(service)}
            className="group p-8 sm:p-10 glass-card rounded-[2rem] sm:rounded-[2.5rem] flex flex-col h-full cursor-pointer hover:border-indigo-500/30 transition-all duration-500"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-all duration-500">
              {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h4>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-[15px] font-medium mb-6">
              {service.description}
            </p>
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                Outcome: {service.outcome}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Learn More <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
