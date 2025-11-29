import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TechStack from "@/components/TechStack";
import ServicesCTA from "@/components/ServicesCTA";
import { 
  Zap, 
  DollarSign, 
  Target, 
  Clock,
  Brain,
  TrendingUp,
  MessageSquare,
  Eye,
  Code,
  Server,
  Database,
  Cloud
} from "lucide-react";

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

  return (
    <div className="page-container min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section relative text-white py-24 px-4 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #111C4C 0%, #33123F 100%)'
      }}>
        {/* Animated Background - Right Side */}
        <div className="absolute inset-0">
          {/* Concentric circles */}
          <div className="absolute top-1/2 right-48 transform -translate-y-1/2">
            {[
              { size: 80, color: '#8B5CF6', delay: '0s' },
              { size: 64, color: '#A78BFA', delay: '0.5s' },
              { size: 48, color: '#C4B5FD', delay: '1s' }
            ].map((circle, idx) => (
              <div
                key={idx}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-full animate-pulse-ring"
                style={{ 
                  width: `${circle.size * 4}px`,
                  height: `${circle.size * 4}px`,
                  borderColor: circle.color,
                  animationDelay: circle.delay
                }}
              />
            ))}
            
            {/* Center glow with brain */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center animate-glow"
              style={{ background: 'radial-gradient(circle, #A78BFA 0%, #8B5CF6 50%, #7C3AED 100%)' }}
            >
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Floating orbs */}
          {[
            { pos: "top-28 right-56", size: 12, delay: "0s" },
            { pos: "top-48 right-32", size: 16, delay: "0.5s" },
            { pos: "top-36 right-72", size: 10, delay: "1s" },
            { pos: "bottom-40 right-64", size: 14, delay: "1.5s" },
            { pos: "top-56 right-44", size: 8, delay: "2s" },
            { pos: "bottom-56 right-40", size: 12, delay: "2.5s" }
          ].map((orb, idx) => (
            <div 
              key={idx}
              className={`absolute ${orb.pos} rounded-full animate-float-orb`}
              style={{ 
                width: `${orb.size * 4}px`,
                height: `${orb.size * 4}px`,
                background: 'radial-gradient(circle, #A78BFA 0%, #8B5CF6 100%)', 
                filter: 'blur(3px)',
                animationDelay: orb.delay
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl animate-fade-in-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                   style={{ 
                     background: 'rgba(139, 92, 246, 0.2)',
                     border: '1px solid rgba(196, 181, 253, 0.3)'
                   }}>
                <Brain className="w-4 h-4 text-purple-300" />
                <span className="text-sm font-medium">AI-Powered Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                AI & ML Automation Services
              </h1>
              
              <p className="text-base text-white/90 leading-relaxed mb-8">
                Transform your business with intelligent automation. Leverage cutting-edge 
                artificial intelligence and machine learning to streamline operations, 
                enhance decision-making, and unlock unprecedented efficiency.
              </p>

              {/* Stats/Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { Icon: Zap, title: "50% Faster Processing", gradient: "from-purple-500 to-purple-600" },
                  { Icon: DollarSign, title: "40% Cost Reduction", gradient: "from-yellow-500 to-orange-600" },
                  { Icon: Target, title: "99% Accuracy Rate", gradient: "from-purple-500 to-indigo-600" },
                  { Icon: Clock, title: "24/7 Automation", gradient: "from-indigo-500 to-purple-600" }
                ].map((benefit, idx) => (
                  <div 
                    key={idx}
                    className="backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ 
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(167, 139, 250, 0.2)'
                    }}
                  >
                    <div 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${benefit.gradient}`}
                    >
                      <benefit.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-semibold">{benefit.title}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  asChild
                  size="lg" 
                  className="text-white font-semibold rounded-lg px-8 py-6 text-base border-0 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #6B0FDF 0%, #281543 100%)',
                    boxShadow: '0 4px 14px 0 rgba(107, 15, 223, 0.4)'
                  }}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-base transition-all duration-300 hover:scale-105"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Space for decorations */}
            <div className="relative hidden lg:block h-96"></div>
          </div>
        </div>
      </section>

      {/* AI/ML SOLUTIONS SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-3 text-black">
            Our AI & ML Solutions
          </h2>
          
          <p className="text-center text-gray-600 mb-16">
            Comprehensive artificial intelligence services to revolutionize your business operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                iconGradient: "from-purple-500 to-indigo-600",
                borderColor: "#8B5CF6",
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
                iconGradient: "from-blue-500 to-cyan-600",
                borderColor: "#06B6D4",
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
                iconGradient: "from-green-500 to-teal-600",
                borderColor: "#14B8A6",
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
                iconGradient: "from-pink-500 to-rose-600",
                borderColor: "#EC4899",
              },
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform hover:-translate-y-2 group"
                >
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: solution.borderColor }}
                  />
                  
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${solution.iconGradient} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-purple-600 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TechStack categories={techCategories} />
      <DevelopmentProcess steps={developmentSteps} />
      <ServicesCTA
        primaryButtonText="Get AI Consultation"
        secondaryButtonText="Request Demo"
      />
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
        
        @keyframes pulse-ring {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(167, 139, 250, 0.8);
          }
        }
        
        @keyframes float-orb {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-float-orb {
          animation: float-orb 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIML;