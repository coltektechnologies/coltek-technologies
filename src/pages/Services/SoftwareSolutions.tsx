// Main page for showcasing web development and software solutions

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TechStack from "@/components/TechStack";
import ServicesCTA from "@/components/ServicesCTA";
import { 
  Code, 
  Server, 
  Database, 
  Cloud,
  Layers3,
  ShoppingBag,
  Maximize2,
  LayoutGrid,
  Plug,
  Zap,
} from "lucide-react";

const SoftwareSolutions = () => {
  
  const developmentSteps = [
    {
      title: "Discovery & Research",
      description: "We begin by understanding your business goals, target audience, and technical requirements. Through collaborative workshops and detailed analysis, we create a comprehensive project roadmap that aligns with your vision and objectives.",
      position: "left" as const,
    },
    {
      title: "Planning & Strategy",
      description: "Our team develops a detailed project roadmap, including timelines, milestones, and resource allocation. We establish clear communication channels and define success metrics to ensure seamless project execution throughout the development lifecycle.",
      position: "right" as const,
    },
    {
      title: "Design & Prototyping",
      description: "We create intuitive user interfaces and interactive prototypes that bring your vision to life. Our designers work closely with you to ensure the solution not only looks great but provides an exceptional user experience across all devices.",
      position: "left" as const,
    },
    {
      title: "Development & Integration",
      description: "Our developers build robust, scalable solutions using best practices and modern technologies. We integrate all necessary systems, APIs, and third-party services seamlessly to create a cohesive solution that meets your specific business needs.",
      position: "right" as const,
    },
    {
      title: "Testing & Quality Assurance",
      description: "Extensive testing ensures your solution is bug-free and performs flawlessly across all platforms. We conduct rigorous unit tests, integration tests, and user acceptance testing to guarantee the highest quality standards before launch.",
      position: "left" as const,
    },
    {
      title: "Launch & Support",
      description: "We handle the deployment process and provide comprehensive training for your team. Our ongoing support and maintenance ensure your solution continues to perform optimally and evolves with your growing business needs over time.",
      position: "right" as const,
    },
  ];

  const techCategories = [
    {
      name: "Frontend",
      icon: Code,
      techs: ["React", "Vue.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      icon: Server,
      techs: ["Node.js", "Python", "PHP", "JAVA", "Express.js", "Django"],
    },
    {
      name: "Database",
      icon: Database,
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"],
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    },
  ];

  return (
    <div className="page-container min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION - Dark Indigo/Violet theme */}
      <section className="hero-section relative text-white py-24 px-4 overflow-hidden" style={{
        background: 'linear-gradient(45deg, #1e1b4b 0%, #4c1d95 50%, #9333ea 100%)' 
      }}>
        <div className="hero-bg-decorations absolute inset-0 opacity-10">
          <div className="decoration-circle absolute top-20 right-20 w-96 h-96 bg-violet-300 rounded-full blur-3xl animate-pulse-slow" />
          <div className="decoration-circle absolute bottom-32 left-32 w-96 h-96 bg-indigo-300 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
        </div>
        
        <div className="hero-content-wrapper relative z-10 container mx-auto max-w-7xl">
          <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="hero-left-content max-w-xl animate-fade-in-left">
              <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Web Development Solutions
              </h1>
              
              <p className="hero-description text-lg text-white/95 leading-relaxed mb-8">
                Transform your digital presence with cutting-edge web applications. 
                We create **responsive**, **scalable**, and **user-centric** websites that drive 
                business growth and deliver exceptional experiences.
              </p>

              {/* Stats grid */}
              <div className="stats-grid grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: "300+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "50+", label: "Expert Developers" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="stat-card bg-indigo-900/40 backdrop-blur-md border border-violet-400/30 rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-indigo-800/60 shadow-lg"
                  >
                    <div className="stat-number text-3xl font-bold mb-1 text-white">{stat.number}</div>
                    <div className="stat-label text-xs text-violet-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="cta-buttons-container flex flex-wrap gap-3">
                <Button asChild>
                  <Link 
                    to="/contact"
                    className="flex items-center justify-center h-11 px-8 py-6 bg-violet-500 text-white hover:bg-violet-600 font-semibold rounded-xl text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 shadow-lg shadow-violet-500/50"
                  >
                    Start Your Project
                  </Link>
                </Button>
                <Button asChild>
                  <Link 
                    to="/services"
                    className="flex items-center justify-center h-11 px-8 py-6 border-2 border-white text-white hover:bg-white/10 rounded-xl text-base transition-all duration-300 hover:scale-105"
                  >
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
            {/* LEFT CONTENT END */}

            {/* RIGHT CONTENT (CODE PREVIEW) - FIX: Darker background for contrast */}
            <div className="hero-right-content relative animate-fade-in-right">
              <div 
                className="code-preview-container rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105 border border-violet-400/50"
                style={{
                  // FIX: Changed to a solid, very dark background for maximum contrast
                  background: 'rgba(15, 23, 42, 0.95)', // slate-900 with high opacity
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Browser dots */}
                <div className="browser-controls flex gap-2 mb-6">
                  <div className="dot w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="dot w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="dot w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                {/* Code content */}
                <div 
                  className="code-content font-mono text-sm space-y-2 rounded-lg p-4"
                  style={{
                    // FIX: Adjusted inner code block background to be slightly lighter than the container for visual separation
                    background: 'rgba(30, 41, 59, 0.8)', // slate-800 with opacity
                  }}
                >
                  {[
                    { num: 1, line: '<span class="text-purple-300">const</span> <span class="text-cyan-300">website</span> = {' },
                    { num: 2, line: '  <span class="text-green-300">responsive:</span> <span class="text-orange-300">true</span>,' },
                    { num: 3, line: '  <span class="text-green-300">performance:</span> <span class="text-orange-300">\'optimized\'</span>,' },
                    { num: 4, line: '  <span class="text-green-300">design:</span> <span class="text-orange-300">\'modern\'</span>,' },
                    { num: 5, line: '  <span class="text-green-300">security:</span> <span class="text-orange-300">\'enterprise-grade\'</span>' },
                    { num: 6, line: '};' },
                    { num: 7, line: '' },
                    { num: 8, line: '<span class="text-blue-300">buildAmazingWebsite</span>(website);' }
                  ].map((code, idx) => (
                    <div key={idx} className="code-line flex animate-code-appear" style={{ animationDelay: `${idx * 100}ms` }}>
                      <span className="line-number text-gray-400 mr-4">{code.num}</span>
                      <span className="code-text" dangerouslySetInnerHTML={{ __html: code.line }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* RIGHT CONTENT (CODE PREVIEW) END */}
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* WHAT WE BUILD SECTION - Clean, light gray background */}
      <section className="services-section py-20 px-4" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f9f9fb 50%, #f3f4f6 100%)' 
      }}>
        <div className="services-content-wrapper container mx-auto max-w-6xl">
          {/* Section header */}
          <h2 className="section-title text-4xl font-bold text-center mb-3 text-gray-900">What We Build</h2>
          <p className="section-subtitle text-center text-gray-600 mb-16">
            Comprehensive web development services tailored to your business needs
          </p>

          {/* Services grid */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers3,
                title: "Custom Web Applications",
                description: "Tailored web solutions built with modern frameworks to match your unique business requirements and workflows.",
                features: ["Business management systems", "Customer portals", "Internal tools & dashboards", "SaaS platforms"],
                iconGradient: "from-indigo-600 to-violet-500",
              },
              {
                icon: ShoppingBag,
                title: "E-Commerce Solutions",
                description: "Powerful online stores with seamless shopping experiences and robust payment integrations.",
                features: ["Custom shopping carts", "Payment gateway integration", "Inventory management", "Order tracking systems"],
                iconGradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Maximize2,
                title: "Responsive Design",
                description: "Mobile-first websites that provide perfect experiences across all devices and screen sizes.",
                features: ["Mobile optimization", "Touch-first interfaces", "Cross-browser compatibility", "Progressive Web Apps (PWA)"],
                iconGradient: "from-green-500 to-emerald-500",
              },
              {
                icon: LayoutGrid,
                title: "UI/UX Design",
                description: "Beautiful, intuitive interfaces designed with user experience and conversion optimization in mind.",
                features: ["User research & testing", "Wireframing & prototyping", "Brand identity design", "Interactive animations"],
                iconGradient: "from-violet-500 to-indigo-500",
              },
              {
                icon: Plug,
                title: "API Development",
                description: "Robust RESTful and GraphQL APIs for seamless data exchange and third-party integrations.",
                features: ["RESTful API design", "GraphQL implementations", "Third-party integrations", "API documentation"],
                iconGradient: "from-yellow-500 to-amber-500",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Lightning-fast websites optimized for speed and superior user experiences.",
                features: ["Page speed optimization", "SEO best practices", "Code splitting & lazy loading", "CDN implementation"],
                iconGradient: "from-cyan-500 to-blue-500",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="service-card bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform hover:-translate-y-2 group"
                >
                  {/* Icon container */}
                  <div className={`icon-container w-16 h-16 bg-gradient-to-br ${item.iconGradient} rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <IconComponent className="icon w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="service-title text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  
                  <p className="service-description text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  
                  {/* Features list */}
                  <ul className="features-list space-y-2">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="feature-item flex items-start gap-2 text-sm text-gray-700">
                        {/* Feature bullet color matches the primary theme (indigo/violet) */}
                        <span className="feature-bullet w-1.5 h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex-shrink-0 mt-1.5"></span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* WHAT WE BUILD SECTION END */}

      {/* TECH STACK SECTION */}
      <TechStack 
        categories={techCategories} 
        themeColor="indigo" 
      />
      {/* TECH STACK SECTION END */}

      {/* DEVELOPMENT PROCESS SECTION */}
      <DevelopmentProcess steps={developmentSteps} />
      {/* DEVELOPMENT PROCESS SECTION END */}

      {/* SERVICES CTA SECTION */}
      <ServicesCTA />
      {/* SERVICES CTA SECTION END */}

      <Footer />
      
      {/* ANIMATIONS */}
      <style>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes code-appear {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        
        .animate-code-appear {
          animation: code-appear 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default SoftwareSolutions;