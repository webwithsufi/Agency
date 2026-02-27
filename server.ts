
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock Database / Data
  const blogPosts = [
    {
      id: "seo-strategy-2024",
      category: "SEO Strategy",
      title: "Why Your Local Business Isn't Ranking #1 on Google in 2024",
      author: "Sufi (Growth Lead)",
      date: "March 15, 2024",
      image: "https://picsum.photos/seed/seo2024/1200/630",
      excerpt: "The rules of SEO have changed. If you're still relying on old keyword stuffing, you're invisible. Learn the new 'Entity-Based' SEO model...",
      content: `
        <h2>The Death of Keyword Stuffing</h2>
        <p>In 2024, Google's algorithms have evolved beyond simple keyword matching. The search engine now uses <strong>Entity-Based Search</strong>, which focuses on relationships between topics rather than just strings of text. If you want to rank, you need to prove you are an authority in your niche.</p>
        
        <h3>The Importance of E-E-A-T</h3>
        <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are the pillars of modern SEO. At Nexus Growth, we focus on building these signals through high-quality backlinking and technical site audits. You can explore our <a href="#ai-strategy" class="text-indigo-400 font-bold">AI Strategy Engine</a> to see how we map out authority.</p>
        
        <blockquote>"Search engines don't rank websites; they rank answers."</blockquote>
        
        <h3>3 Steps to Dominate Local Search</h3>
        <ol>
          <li><strong>Optimized Google Business Profile:</strong> Ensure your NAP (Name, Address, Phone) data is identical across the web.</li>
          <li><strong>Hyper-Local Content:</strong> Write about events and issues specific to your city to anchor your entity in a geographic location.</li>
          <li><strong>Core Web Vitals:</strong> Google prioritizes sites that load fast and offer a smooth user experience.</li>
        </ol>
        <p>Need a professional touch? Check out our <a href="#services" class="text-indigo-400 font-bold">Google Ranking (SEO) Services</a> to get started.</p>
      `,
      target: "services"
    },
    {
      id: "site-speed-sales",
      category: "Web Development",
      title: "The 3-Second Rule: How Site Speed is Killing Your Sales",
      author: "Nexus Engineering Team",
      date: "April 02, 2024",
      image: "https://picsum.photos/seed/speed/1200/630",
      excerpt: "Every millisecond your site takes to load, you lose 7% of your conversions. Here's how high-performance code turns visitors into buyers.",
      content: `
        <h2>Milliseconds Mean Millions</h2>
        <p>Amazon found that every 100ms of latency cost them 1% in sales. For a small business, a 3-second delay is often the difference between a new customer and a bounce. Our web development philosophy is built on <strong>performance first</strong>.</p>
        
        <h3>Why Modern Frameworks Matter</h3>
        <p>Using legacy builders like WordPress with 50+ plugins creates "Code Bloat." We utilize clean, modern stacks (like React and Next.js) to ensure your site is lightning fast out of the box. Our <a href="#services" class="text-indigo-400 font-bold">Web Engineering team</a> specializes in these high-performance architectures.</p>
        
        <h3>The Conversion Funnel</h3>
        <p>A fast site isn't just for SEO; it's for trust. A professional, snappy website tells the customer that your business is competent. When a site lags, the user feels a psychological "friction" that stops them from clicking 'Buy Now'.</p>
        
        <p>Discover how we build high-speed assets in our <a href="#services" class="text-indigo-400 font-bold">Custom Website Building</a> section.</p>
      `,
      target: "services"
    },
    {
      id: "profitable-ads",
      category: "Advertising",
      title: "Stop Wasting Money: The Math Behind Profitable Google Ads",
      author: "Ad-Ops Specialist",
      date: "April 10, 2024",
      image: "https://picsum.photos/seed/ads/1200/630",
      excerpt: "Most agencies focus on CPC. We focus on CPA. Discover the secret to scaling your budget without losing your profit margins.",
      content: `
        <h2>The Vanity Metric Trap</h2>
        <p>Many agencies will brag about low "Cost Per Click" (CPC). But if those clicks don't convert, they are worthless. At Nexus, we track the metrics that matter: <strong>ROAS (Return on Ad Spend)</strong> and <strong>CPA (Cost Per Acquisition)</strong>.</p>
        
        <h3>The 'Intent' Advantage</h3>
        <p>Unlike Social Media ads, where you interrupt someone's scrolling, Google Ads catch people while they are actively looking for a solution. This is "High Intent" traffic. The math is simple: target the right intent + high-converting landing page = Profit.</p>
        
        <h3>Scaling Without Breaking</h3>
        <p>When you double your ad budget, you shouldn't expect to double your work. You should expect to double your automation. We use AI-driven bidding strategies to ensure your budget is spent at the peak hours for your industry. Check out our <a href="#ai-strategy" class="text-indigo-400 font-bold">AI Roadmap tool</a> to see your potential scale.</p>
        
        <p>Ready to scale? Explore our <a href="#services" class="text-indigo-400 font-bold">Google Ads (PPC) Management</a>.</p>
      `,
      target: "services"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO at TechFlow",
      image: "https://picsum.photos/seed/sarah/100/100",
      content: "Nexus Growth completely transformed our online presence. Our traffic grew by 300% in 4 months after their SEO overhaul.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Founder of UrbanStyle",
      image: "https://picsum.photos/seed/marcus/100/100",
      content: "The custom dashboard they built for us is a work of art. High-performance code that actually delivers sales.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director at GlobaLync",
      image: "https://picsum.photos/seed/elena/100/100",
      content: "Professional, data-driven, and incredibly responsive. They are the only agency we trust with our digital strategy.",
      rating: 5
    }
  ];

  // API Routes
  app.get("/api/posts", (req, res) => {
    res.json(blogPosts);
  });

  app.get("/api/testimonials", (req, res) => {
    res.json(testimonials);
  });

  app.get("/api/posts/:id", (req, res) => {
    const post = blogPosts.find(p => p.id === req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, service, message } = req.body;
    
    // In a real app, you'd save to DB and send an email
    console.log("New Contact Form Submission:", { name, email, service, message });
    
    // Simulate processing
    setTimeout(() => {
      res.json({ success: true, message: "Inquiry received. Our growth team will contact you shortly." });
    }, 1000);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
