import { Button } from "@/components/ui/button";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TechStack from "@/components/TechStack";
import ServicesCTA from "@/components/ServicesCTA";
import { Globe, Code, Server, Database, Cloud } from "lucide-react";

const SoftwareSolutions = () => {
  // ========== DEVELOPMENT STEPS DATA ==========
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
  // ========== END DEVELOPMENT STEPS DATA ==========


  // ========== TECH STACK DATA ==========
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
  // ========== END TECH STACK DATA ==========


  return (
    <div className="page-container min-h-screen">
      
      {/* ========== HERO SECTION START ========== */}
      <section className="hero-section relative bg-gradient-to-br from-[#0A1628] via-[#1a2847] to-[#2a3f6f] text-white py-24 px-4 overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="hero-background-decorations absolute inset-0 opacity-5">
          <div className="decoration-blur-circle-top absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
          <div className="decoration-blur-circle-bottom absolute bottom-32 left-32 w-48 h-48 bg-purple-400 rounded-full blur-3xl" />
        </div>
        
        <div className="hero-content-wrapper relative z-10 container mx-auto max-w-7xl">
          <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left content */}
            <div className="hero-text-content max-w-xl">
              <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Web Development Solutions
              </h1>
              
              <p className="hero-description text-lg text-white/80 leading-relaxed mb-8">
                Transform your digital presence with cutting-edge web applications. 
                We create responsive, scalable, and user-centric websites that drive 
                business growth and deliver exceptional experiences.
              </p>

              {/* Stats - 3 in a row */}
              <div className="hero-stats-grid grid grid-cols-3 gap-4 mb-8">
                <div className="stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="stat-number text-3xl font-bold mb-1">300+</div>
                  <div className="stat-label text-xs text-white/70">Projects Delivered</div>
                </div>
                <div className="stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="stat-number text-3xl font-bold mb-1">98%</div>
                  <div className="stat-label text-xs text-white/70">Client Satisfaction</div>
                </div>
                <div className="stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="stat-number text-3xl font-bold mb-1">50+</div>
                  <div className="stat-label text-xs text-white/70">Expert Developers</div>
                </div>
              </div>

              {/* CTA Buttons - 2 in 1 row with gradient and shadow */}
              <div className="hero-cta-buttons flex flex-wrap gap-3">
                <Button 
                  size="lg" 
                  className="cta-button-primary text-white font-medium rounded-lg px-6 border-0"
                  style={{
                    background: 'linear-gradient(to right, #111C4C 0%, #141E48 94%)',
                    boxShadow: '0px 2px 4px 0px #00D9FD',
                  }}
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  className="cta-button-secondary text-white font-medium rounded-lg px-6 border-0"
                  style={{
                    background: 'linear-gradient(to right, #111C4C 0%, #141E48 94%)',
                    boxShadow: '0px 2px 4px 0px #00D9FD',
                  }}
                >
                  View Services
                </Button>
              </div>
            </div>

            {/* Right side - Code Preview Box */}
            <div className="hero-code-preview-wrapper relative">
              <div 
                className="code-preview-outer-box rounded-2xl p-6 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #2E386D 0%, #1D2753 100%)',
                  border: '1px solid #646060',
                }}
              >
                {/* Browser dots */}
                <div className="browser-dots flex gap-2 mb-6">
                  <div className="dot-red w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="dot-yellow w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="dot-green w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Code content - inner box */}
                <div 
                  className="code-preview-inner-box font-mono text-sm space-y-2 rounded-lg p-4"
                  style={{
                    background: 'linear-gradient(135deg, #3F4978 0%, #1D2753 100%)',
                  }}
                >
                  <div className="code-line flex">
                    <span className="line-number text-gray-500 mr-4">1</span>
                    <span className="keyword text-purple-400">const</span>
                    <span className="variable text-blue-300"> website</span>
                    <span className="syntax text-white"> = {'{'}</span>
                  </div>
                  <div className="code-line flex">
                    <span className="line-number text-gray-500 mr-4">2</span>
                    <span className="property text-green-300 ml-4">  responsive:</span>
                    <span className="value text-orange-300"> true</span>
                    <span className="syntax text-white">,</span>
                  </div>
                  <div className="code-line flex">
                    <span className="line-number text-gray-500 mr-4">3</span>
                    <span className="property text-green-300 ml-4">  performance:</span>
                    <span className="value text-orange-300"> 'optimized'</span>
                    <span className="syntax text-white">,</span>
                  </div>
                  <div className="code-line flex">
                    <span className="line-number text-gray-500 mr-4">4</span>
                    <span className="property text-green-300 ml-4">  design:</span>
                    <span className="value text-orange-300"> 'modern'</span>
                    <span className="syntax text-white">,</span>
                  </div>
                  <div className="code-line flex">
                    <span className="line-number text-gray-500 mr-4">5</span>
                    <span className="property text-green-300 ml-4">  security:</span>
                    <span className="value text-orange-300"> 'enterprise-grade'</span>
                  </div>
                  <div className="code-line flex">
                    <span className="line-number text-gray-500 mr-4">6</span>
                    <span className="syntax text-white">{'}'}</span>
                    <span className="syntax text-white">;</span>
                  </div>
                  <div className="code-line flex mt-4">
                    <span className="line-number text-gray-500 mr-4">7</span>
                    <span className="empty-line text-white"></span>
                  </div>
                  <div className="code-line flex">
                    <span className="line-number text-gray-500 mr-4">8</span>
                    <span className="function text-blue-400">buildAmazingWebsite</span>
                    <span className="syntax text-white">(website);</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* ========== HERO SECTION END ========== */}


      {/* ========== WHAT WE BUILD SECTION START ========== */}
      <section className="what-we-build-section py-20 px-4 bg-gray-50">
        <div className="section-content-wrapper container mx-auto max-w-6xl">
          
          <h2 className="section-title text-4xl font-bold text-center mb-3 text-black">
            What We Build
          </h2>
          
          <p className="section-subtitle text-center text-gray-600 mb-16">
            Comprehensive web development services tailored to your business needs
          </p>

          {/* Grid: 2 rows x 3 columns */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Applications",
                description: "Tailored web solutions built with modern frameworks to match your unique business requirements and workflows.",
                features: ["Business management systems", "Customer portals", "Internal tools & dashboards", "SaaS platforms"],
                gradient: "from-blue-500 to-purple-600",
                borderColor: "#8B5CF6",
              },
              {
                title: "E-Commerce Solutions",
                description: "Powerful online stores with seamless shopping experiences and robust payment integrations.",
                features: ["Custom shopping carts", "Payment gateway integration", "Inventory management", "Order tracking systems"],
                gradient: "from-purple-500 to-pink-600",
                borderColor: "#EC4899",
              },
              {
                title: "Responsive Design",
                description: "Mobile-first websites that provide perfect experiences across all devices and screen sizes.",
                features: ["Mobile optimization", "Touch-first interfaces", "Cross-browser compatibility", "Progressive Web Apps (PWA)"],
                gradient: "from-blue-500 to-cyan-600",
                borderColor: "#06B6D4",
              },
              {
                title: "UI/UX Design",
                description: "Beautiful, intuitive interfaces designed with user experience and conversion optimization in mind.",
                features: ["User research & testing", "Wireframing & prototyping", "Brand identity design", "Interactive animations"],
                gradient: "from-purple-500 to-indigo-600",
                borderColor: "#6366F1",
              },
              {
                title: "API Development",
                description: "Robust RESTful and GraphQL APIs for seamless data exchange and third-party integrations.",
                features: ["RESTful API design", "GraphQL implementations", "Third-party integrations", "API documentation"],
                gradient: "from-blue-500 to-teal-600",
                borderColor: "#14B8A6",
              },
              {
                title: "Performance Optimization",
                description: "Lightning-fast websites optimized for speed and superior user experiences.",
                features: ["Page speed optimization", "SEO best practices", "Code splitting & lazy loading", "CDN implementation"],
                gradient: "from-purple-500 to-blue-600",
                borderColor: "#3B82F6",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Colored bottom border */}
                <div 
                  className="card-bottom-accent absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ backgroundColor: item.borderColor }}
                />
                
                {/* Icon with gradient */}
                <div 
                  className={`service-icon w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${item.gradient}`}
                >
                  <Globe className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="service-title text-xl font-bold mb-3 text-black">
                  {item.title}
                </h3>
                
                <p className="service-description text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Features list */}
                <ul className="service-features-list space-y-2">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="feature-item flex items-start gap-2 text-sm text-gray-700">
                      <span className="feature-bullet text-purple-600 mt-0.5">•</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      {/* ========== WHAT WE BUILD SECTION END ========== */}


      {/* ========== TECH STACK SECTION START ========== */}
      <TechStack categories={techCategories} />
      {/* ========== TECH STACK SECTION END ========== */}


      {/* ========== DEVELOPMENT PROCESS SECTION START ========== */}
      <DevelopmentProcess steps={developmentSteps} />
      {/* ========== DEVELOPMENT PROCESS SECTION END ========== */}


      {/* ========== CTA SECTION START ========== */}
      <ServicesCTA
        primaryButtonText="Start Your Project"
        secondaryButtonText="Schedule a Call"
      />
      {/* ========== CTA SECTION END ========== */}

      
    </div>
  );
};

export default SoftwareSolutions;