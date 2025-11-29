import { Button } from "@/components/ui/button";
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
  // ========== DEVELOPMENT STEPS DATA ==========
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
      <section className="hero-section relative text-white py-24 px-4 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #111C4C 0%, #33123F 100%)'
      }}>
        
        {/* Background decorative elements - RIGHT SIDE */}
        <div className="hero-background-decorations absolute inset-0">
          {/* Concentric circles on the right */}
          <div className="decoration-circles-wrapper absolute top-1/2 right-48 transform -translate-y-1/2">
            {/* Outermost circle */}
            <div className="decoration-circle-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 rounded-full" 
                 style={{ borderColor: '#8B5CF6' }} />
            {/* Second circle */}
            <div className="decoration-circle-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 rounded-full" 
                 style={{ borderColor: '#A78BFA' }} />
            {/* Third circle */}
            <div className="decoration-circle-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 rounded-full" 
                 style={{ borderColor: '#C4B5FD' }} />
            {/* Center glow with brain icon representation */}
            <div className="decoration-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center"
                 style={{ background: 'radial-gradient(circle, #A78BFA 0%, #8B5CF6 50%, #7C3AED 100%)' }}>
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Floating orbs around the circles */}
          <div className="floating-orb-1 absolute top-28 right-56 w-12 h-12 rounded-full" 
               style={{ background: 'radial-gradient(circle, #A78BFA 0%, #8B5CF6 100%)', filter: 'blur(2px)' }} />
          <div className="floating-orb-2 absolute top-48 right-32 w-16 h-16 rounded-full" 
               style={{ background: 'radial-gradient(circle, #C4B5FD 0%, #A78BFA 100%)', filter: 'blur(3px)' }} />
          <div className="floating-orb-3 absolute top-36 right-72 w-10 h-10 rounded-full" 
               style={{ background: 'radial-gradient(circle, #DDD6FE 0%, #C4B5FD 100%)', filter: 'blur(2px)' }} />
          <div className="floating-orb-4 absolute bottom-40 right-64 w-14 h-14 rounded-full" 
               style={{ background: 'radial-gradient(circle, #A78BFA 0%, #8B5CF6 100%)', filter: 'blur(4px)' }} />
          <div className="floating-orb-5 absolute top-56 right-44 w-8 h-8 rounded-full" 
               style={{ background: 'radial-gradient(circle, #C4B5FD 0%, #A78BFA 100%)', filter: 'blur(2px)' }} />
          <div className="floating-orb-6 absolute bottom-56 right-40 w-12 h-12 rounded-full" 
               style={{ background: 'radial-gradient(circle, #DDD6FE 0%, #C4B5FD 100%)', filter: 'blur(3px)' }} />
        </div>
        
        <div className="hero-content-wrapper relative z-10 container mx-auto max-w-7xl">
          <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left content */}
            <div className="hero-text-content max-w-xl">
              
              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                   style={{ 
                     background: 'rgba(139, 92, 246, 0.2)',
                     border: '1px solid rgba(196, 181, 253, 0.3)'
                   }}>
                <Brain className="w-4 h-4 text-purple-300" />
                <span className="text-sm font-medium">AI-Powered Solutions</span>
              </div>
              
              <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 leading-tight">
                AI & ML Automation Services
              </h1>
              
              <p className="hero-description text-base text-white/90 leading-relaxed mb-8">
                Transform your business with intelligent automation. Leverage cutting-edge 
                artificial intelligence and machine learning to streamline operations, 
                enhance decision-making, and unlock unprecedented efficiency.
              </p>

              {/* Stats/Benefits Grid - 2x2 with icons beside text */}
              <div className="hero-benefits-grid grid grid-cols-2 gap-4 mb-8">
                <div className="benefit-card backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                     style={{ 
                       background: 'rgba(139, 92, 246, 0.15)',
                       border: '1px solid rgba(167, 139, 250, 0.2)'
                     }}>
                  <div className="benefit-icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)' }}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="benefit-content">
                    <div className="benefit-title text-sm font-semibold">50% Faster Processing</div>
                  </div>
                </div>
                
                <div className="benefit-card backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                     style={{ 
                       background: 'rgba(139, 92, 246, 0.15)',
                       border: '1px solid rgba(167, 139, 250, 0.2)'
                     }}>
                  <div className="benefit-icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)' }}>
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div className="benefit-content">
                    <div className="benefit-title text-sm font-semibold">40% Cost Reduction</div>
                  </div>
                </div>
                
                <div className="benefit-card backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                     style={{ 
                       background: 'rgba(139, 92, 246, 0.15)',
                       border: '1px solid rgba(167, 139, 250, 0.2)'
                     }}>
                  <div className="benefit-icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)' }}>
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div className="benefit-content">
                    <div className="benefit-title text-sm font-semibold">99% Accuracy Rate</div>
                  </div>
                </div>
                
                <div className="benefit-card backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                     style={{ 
                       background: 'rgba(139, 92, 246, 0.15)',
                       border: '1px solid rgba(167, 139, 250, 0.2)'
                     }}>
                  <div className="benefit-icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)' }}>
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="benefit-content">
                    <div className="benefit-title text-sm font-semibold">24/7 Automation</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="hero-cta-button">
                <Button 
                  size="lg" 
                  className="cta-button-primary text-white font-semibold rounded-lg px-8 py-6 text-base border-0"
                  style={{
                    background: 'linear-gradient(135deg, #6B0FDF 0%, #281543 100%)',
                    boxShadow: '0 4px 14px 0 rgba(107, 15, 223, 0.4)'
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Right side - Visual space for decorations */}
            <div className="hero-illustration-wrapper relative hidden lg:block h-96">
              {/* Space reserved for background decorations */}
            </div>
            
          </div>
        </div>
      </section>
      {/* ========== HERO SECTION END ========== */}


      {/* ========== AI/ML SOLUTIONS SECTION START ========== */}
      <section className="aiml-solutions-section py-20 px-4 bg-white">
        <div className="section-content-wrapper container mx-auto max-w-6xl">
          
          <h2 className="section-title text-4xl font-bold text-center mb-3 text-black">
            Our AI & ML Solutions
          </h2>
          
          <p className="section-subtitle text-center text-gray-600 mb-16">
            Comprehensive artificial intelligence services to revolutionize your business operations
          </p>

          {/* Solutions Grid - 2 rows x 2 columns for first 4 items */}
          <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="solution-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                >
                  {/* Colored bottom border */}
                  <div 
                    className="card-bottom-accent absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: solution.borderColor }}
                  />
                  
                  {/* Icon with gradient */}
                  <div 
                    className={`solution-icon w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${solution.iconGradient}`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="solution-title text-xl font-bold mb-3 text-black">
                    {solution.title}
                  </h3>
                  
                  <p className="solution-description text-gray-600 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="solution-features-list space-y-2">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="feature-item flex items-start gap-2 text-sm text-gray-700">
                        <span className="feature-bullet text-purple-600 mt-0.5">•</span>
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
      {/* ========== AI/ML SOLUTIONS SECTION END ========== */}


      {/* ========== TECH STACK SECTION START ========== */}
      <TechStack categories={techCategories} />
      {/* ========== TECH STACK SECTION END ========== */}


      {/* ========== DEVELOPMENT PROCESS SECTION START ========== */}
      <DevelopmentProcess steps={developmentSteps} />
      {/* ========== DEVELOPMENT PROCESS SECTION END ========== */}


      {/* ========== CTA SECTION START ========== */}
      <ServicesCTA
        primaryButtonText="Get AI Consultation"
        secondaryButtonText="Request Demo"
      />
      {/* ========== CTA SECTION END ========== */}

      
    </div>
  );
};

export default AIML;