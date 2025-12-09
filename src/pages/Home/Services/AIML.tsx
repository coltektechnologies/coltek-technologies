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
  Brain,
  TrendingUp,
  MessageSquare,
  Eye,
  Sparkles,
  Network,
  Cpu,
  Zap,
  BarChart3,
} from "lucide-react";
import type { LucideProps } from "lucide-react"; 
import type { ForwardRefExoticComponent, RefAttributes } from 'react';


interface OrbitingItem {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  angle: number;
  color: string;
  size: string;
}

const AIML = () => {
  const developmentSteps = [
    {
      title: "Discovery & Research",
      description: "Identify AI/ML opportunities within your business processes. We analyze your data, define use cases, and establish success metrics for measurable impact.",
      position: "left" as const,
    },
    {
      title: "Planning & Strategy",
      description: "Design a comprehensive AI strategy aligned with your business objectives. We define data requirements, select appropriate algorithms, and plan infrastructure needs.",
      position: "right" as const,
    },
    {
      title: "Design & Prototyping",
      description: "Create proof-of-concept models to validate feasibility. We experiment with different approaches and fine-tune parameters to achieve optimal results.",
      position: "left" as const,
    },
    {
      title: "Development & Integration",
      description: "Build production-ready AI models with robust data pipelines. We integrate models into your existing systems ensuring seamless operation and scalability.",
      position: "right" as const,
    },
    {
      title: "Testing & Quality Assurance",
      description: "Validate model accuracy, performance, and reliability through extensive testing. We ensure ethical AI practices and compliance with data privacy regulations.",
      position: "left" as const,
    },
    {
      title: "Launch & Support",
      description: "Deploy AI solutions with continuous monitoring and improvement. Our team provides ongoing model training, performance optimization, and technical support.",
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

  const orbitingItems: OrbitingItem[] = [
    { Icon: Network, angle: 0, color: "text-purple-400", size: "w-12 h-12" },
    { Icon: BarChart3, angle: 60, color: "text-blue-400", size: "w-10 h-10" },
    { Icon: Cpu, angle: 120, color: "text-indigo-400", size: "w-12 h-12" },
    { Icon: Sparkles, angle: 180, color: "text-pink-400", size: "w-10 h-10" },
    { Icon: TrendingUp, angle: 240, color: "text-cyan-400", size: "w-12 h-12" },
    { Icon: Eye, angle: 300, color: "text-purple-400", size: "w-10 h-10" }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ===================================================================
        START: HERO SECTION
        ===================================================================
      */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white py-20 lg:py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1={`${20 + i * 8}%`}
                y1="20%"
                x2={`${30 + i * 6}%`}
                y2="80%"
                stroke="url(#gradient)"
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse-slow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-pulse-slow"
              style={{
                left: `${15 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/20">
                <Sparkles className="w-4 h-4 text-purple-300" strokeWidth={2} />
                <span className="text-sm font-medium text-purple-100">AI-Powered Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform with
                <span className="block mt-2 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                  AI & Machine Learning
                </span>
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                Unlock unprecedented efficiency with intelligent automation. Leverage cutting-edge 
                artificial intelligence and machine learning to streamline operations, 
                enhance decision-making, and accelerate business growth.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Zap, title: "50% Faster", subtitle: "Processing", gradient: "from-purple-500 to-indigo-500" },
                  { icon: TrendingUp, title: "40% Cost", subtitle: "Reduction", gradient: "from-blue-500 to-cyan-500" },
                  { icon: BarChart3, title: "99% Accuracy", subtitle: "Rate", gradient: "from-indigo-500 to-purple-500" },
                  { icon: Cpu, title: "24/7", subtitle: "Automation", gradient: "from-purple-500 to-pink-500" }
                ].map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div 
                      key={idx}
                      // Increased background opacity and slightly reduced padding for better contrast and shorter length
                      className="group bg-slate-800/80 rounded-xl p-3 border border-purple-400/30 transform transition-all duration-300 hover:scale-105 hover:bg-slate-700/80 shadow-xl shadow-black/30"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1 bg-gradient-to-br ${benefit.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                        <BenefitIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-lg font-bold mb-0.5">{benefit.title}</div>
                      <div className="text-xs text-purple-200">{benefit.subtitle}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 border-0"
                >
                  <Link to="/contact">Get Started →</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full px-8 py-6 text-base border border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Link to="/services">Explore Solutions</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in-up animation-delay-300">
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
                  
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-full w-48 h-48 border border-white/30 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-500">
                    <Brain className="w-24 h-24 text-purple-300" strokeWidth={1.5} />
                  </div>
                </div>

                {orbitingItems.map((item, idx) => {
                  const IconComp = item.Icon; 
                  const radius = 160;
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={idx}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        animationDelay: `${idx * 0.3}s`
                      }}
                    >
                      <div className={`bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-lg hover:scale-110 transition-transform duration-300 ${item.size}`}>
                        <IconComp className={`w-full h-full ${item.color}`} strokeWidth={2} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================================================================
        END: HERO SECTION
        ===================================================================
      */}

      {/* ===================================================================
        START: OUR AI & ML SOLUTIONS
        ===================================================================
      */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            {/* Font size and styling improved: text-4xl -> text-5xl, text-xl -> text-2xl */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900">
              Our AI & ML Solutions
            </h2>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive artificial intelligence services to revolutionize your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Intelligent Process Automation",
                description: "Automate repetitive tasks and complex workflows with AI-powered RPA systems that learn and adapt over time.",
                features: [
                  "Document processing & OCR",
                  "Data entry automation",
                  "Email & communication handling",
                  "Workflow orchestration"
                ],
                icon: Brain,
                gradient: "from-purple-500 to-indigo-600",
                glowColor: "rgba(139, 92, 246, 0.3)",
              },
              {
                title: "Predictive Analytics",
                description: "Harness the power of machine learning to forecast trends, predict outcomes, and make data-driven decisions.",
                features: [
                  "Sales forecasting",
                  "Customer behavior prediction",
                  "Risk assessment models",
                  "Demand planning"
                ],
                icon: TrendingUp,
                gradient: "from-blue-500 to-cyan-600",
                glowColor: "rgba(59, 130, 246, 0.3)",
              },
              {
                title: "Natural Language Processing",
                description: "Build intelligent chatbots and virtual assistants that understand and respond to human language naturally.",
                features: [
                  "AI chatbots & assistants",
                  "Sentiment analysis",
                  "Text classification",
                  "Language translation"
                ],
                icon: MessageSquare,
                gradient: "from-emerald-500 to-teal-600",
                glowColor: "rgba(16, 185, 129, 0.3)",
              },
              {
                title: "Computer Vision",
                description: "Implement visual recognition systems that analyze images and videos to extract meaningful insights.",
                features: [
                  "Object detection & recognition",
                  "Facial recognition",
                  "Image classification",
                  "Video analytics"
                ],
                icon: Eye,
                gradient: "from-pink-500 to-rose-600",
                glowColor: "rgba(236, 72, 153, 0.3)",
              },
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              
              return (
                <div
                  key={index}
                  // Card background changed to slightly off-white/shadowed for better distinction from section background (from-white to-indigo-50)
                  className="group relative bg-white/90 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-indigo-200/50 overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `radial-gradient(circle at top, ${solution.glowColor}, transparent 70%)` }}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${solution.gradient} shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-5 text-base leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {solution.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${solution.gradient} mt-1.5 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ===================================================================
        END: OUR AI & ML SOLUTIONS
        ===================================================================
      */}

      {/* ===================================================================
        START: AI CAPABILITIES
        ===================================================================
      */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              AI Capabilities
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Cutting-edge technologies powering intelligent solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Learning",
                description: "Advanced neural networks for complex pattern recognition and decision-making",
                icon: Network,
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                title: "Machine Learning",
                description: "Automated learning systems that improve performance over time",
                icon: Brain,
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                title: "Data Analytics",
                description: "Transform raw data into actionable insights and predictions",
                icon: BarChart3,
                gradient: "from-indigo-500 to-purple-600",
              },
              {
                title: "Neural Networks",
                description: "Sophisticated algorithms mimicking human brain processing",
                icon: Cpu,
                gradient: "from-pink-500 to-rose-600",
              },
              {
                title: "Natural Language",
                description: "Understanding and generating human language naturally",
                icon: MessageSquare,
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "Computer Vision",
                description: "Visual intelligence for image and video analysis",
                icon: Eye,
                gradient: "from-orange-500 to-amber-600",
              },
            ].map((capability, index) => {
              const CapIcon = capability.icon;
              
              return (
                <div
                  key={index}
                  // Card background changed to distinct dark gray color (bg-slate-900/70) for separation from the section's purple/blue gradient
                  className="group relative bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 transition-all duration-500 hover:bg-slate-800/80 hover:border-purple-400 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20" 
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${capability.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <CapIcon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {capability.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ===================================================================
        END: AI CAPABILITIES
        ===================================================================
      */}

      {/* ===================================================================
        START: TECHNOLOGIES WE USE (TechStack Component)
        ===================================================================
      */}
      {/* Note: The TechStack component controls its own card background. We ensure the component is passed the necessary theme props. */}
      <TechStack categories={techCategories} themeColor="purple" />
      {/* ===================================================================
        END: TECHNOLOGIES WE USE (TechStack Component)
        ===================================================================
      */}

      {/* ===================================================================
        START: DEVELOPMENT PROCESS
        ===================================================================
      */}
      <DevelopmentProcess steps={developmentSteps} />
      {/* ===================================================================
        END: DEVELOPMENT PROCESS
        ===================================================================
      */}

      <ServicesCTA
        primaryButtonText="Get AI Consultation"
        secondaryButtonText="Request Demo"
      />

      <Footer />
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AIML;