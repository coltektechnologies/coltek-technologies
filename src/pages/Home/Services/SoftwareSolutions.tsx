import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TechStack from "@/components/TechStack";
import ServicesCTA from "@/components/ServicesCTA";
import { Globe, Code, Server, Database, Cloud } from "lucide-react";

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
    <div className="page-container min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section relative bg-gradient-to-br from-[#0A1628] via-[#1a2847] to-[#2a3f6f] text-white py-24 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl animate-fade-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Web Development Solutions
              </h1>
              
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Transform your digital presence with cutting-edge web applications. 
                We create responsive, scalable, and user-centric websites that drive 
                business growth and deliver exceptional experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: "300+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "50+", label: "Expert Developers" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  asChild
                  size="lg" 
                  className="text-white font-medium rounded-lg px-6 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(to right, #111C4C 0%, #141E48 94%)',
                    boxShadow: '0px 2px 4px 0px #00D9FD',
                  }}
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-white font-medium rounded-lg px-6 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(to right, #111C4C 0%, #141E48 94%)',
                    boxShadow: '0px 2px 4px 0px #00D9FD',
                  }}
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Code Preview */}
            <div className="relative animate-fade-in-right">
              <div 
                className="rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #2E386D 0%, #1D2753 100%)',
                  border: '1px solid #646060',
                }}
              >
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div 
                  className="font-mono text-sm space-y-2 rounded-lg p-4"
                  style={{
                    background: 'linear-gradient(135deg, #3F4978 0%, #1D2753 100%)',
                  }}
                >
                  {[
                    { num: 1, line: '<span class="text-purple-400">const</span> <span class="text-blue-300">website</span> = {' },
                    { num: 2, line: '  <span class="text-green-300">responsive:</span> <span class="text-orange-300">true</span>,' },
                    { num: 3, line: '  <span class="text-green-300">performance:</span> <span class="text-orange-300">\'optimized\'</span>,' },
                    { num: 4, line: '  <span class="text-green-300">design:</span> <span class="text-orange-300">\'modern\'</span>,' },
                    { num: 5, line: '  <span class="text-green-300">security:</span> <span class="text-orange-300">\'enterprise-grade\'</span>' },
                    { num: 6, line: '};' },
                    { num: 7, line: '' },
                    { num: 8, line: '<span class="text-blue-400">buildAmazingWebsite</span>(website);' }
                  ].map((code, idx) => (
                    <div key={idx} className="flex animate-code-appear" style={{ animationDelay: `${idx * 100}ms` }}>
                      <span className="text-gray-500 mr-4">{code.num}</span>
                      <span dangerouslySetInnerHTML={{ __html: code.line }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-3 text-black">What We Build</h2>
          <p className="text-center text-gray-600 mb-16">
            Comprehensive web development services tailored to your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="service-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform hover:-translate-y-2 group"
              >
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: item.borderColor }}
                />
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${item.gradient} transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <Globe className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-black">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <ul className="space-y-2">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-purple-600 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack categories={techCategories} />
      <DevelopmentProcess steps={developmentSteps} />
      <ServicesCTA />
      <Footer />
      
      <style jsx>{`
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