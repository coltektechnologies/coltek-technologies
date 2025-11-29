import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import ServicesCTA from "@/components/ServicesCTA";
import { 
  Cloud,
  Database,
  Shield,
  Lock,
  Server,
  RefreshCw,
  Cpu,
  TrendingUp
} from "lucide-react";

const CloudSolutions = () => {
  const developmentSteps = [
    {
      title: "Assessment & Discovery",
      description: "We analyze your existing infrastructure, applications, and workloads to create a comprehensive migration strategy that meets your specific requirements, business goals, and determines the best approach for your cloud migration.",
      position: "left" as const,
    },
    {
      title: "Strategy & Planning",
      description: "Develop a detailed migration roadmap and timelines, resource allocation, and risk mitigation strategies. We prioritize workloads that benefit most from cloud solutions and create a phased approach for minimal disruption.",
      position: "right" as const,
    },
    {
      title: "Cloud Architecture Design",
      description: "Design a scalable, secure, and cost-effective cloud architecture tailored to your business requirements. We implement best practices for high availability, disaster recovery, security, and performance optimization.",
      position: "left" as const,
    },
    {
      title: "Migration Execution",
      description: "Execute the migration with minimal downtime using proven tools and methodologies. Our team handles data migration, application refactoring, and integration, ensuring a smooth transition with thorough testing at every step.",
      position: "right" as const,
    },
    {
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure all systems function correctly and meet performance benchmarks. We validate data integrity, application functionality, security configurations, and conduct user acceptance testing before final cutover.",
      position: "left" as const,
    },
    {
      title: "Optimization & Support",
      description: "Post-migration optimization to enhance performance and reduce costs. We continuously monitor and fine-tune resources, implement cost optimization strategies, and provide ongoing technical support to ensure sustained success.",
      position: "right" as const,
    },
  ];

  return (
    <div className="page-container min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section relative text-white py-24 px-4 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A1F81 0%, #0283BD 100%)'
      }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          {/* Floating cloud storage cards */}
          {[
            { Icon: Database, pos: "top-28 right-40", delay: "0s" },
            { Icon: Shield, pos: "top-56 right-64", delay: "0.5s" },
            { Icon: Server, pos: "bottom-48 right-56", delay: "1s" },
            { Icon: Lock, pos: "top-44 right-52", delay: "1.5s" }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`absolute ${item.pos} w-16 h-16 rounded-lg flex items-center justify-center backdrop-blur-sm animate-float`}
              style={{ 
                background: 'linear-gradient(135deg, #D3E3ED 39%, #D3E3ED 100%)', 
                border: '1px solid #E3E3E3',
                animationDelay: item.delay
              }}
            >
              <item.Icon className="w-8 h-8 text-blue-700" />
            </div>
          ))}
          
          {/* Central cloud illustration */}
          <div className="absolute top-1/2 right-56 transform -translate-y-1/2 animate-pulse-slow">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="w-40 h-28 bg-white/80 rounded-full relative">
                <div className="absolute -top-6 left-12 w-24 h-24 bg-white/90 rounded-full"></div>
                <div className="absolute -top-4 right-8 w-20 h-20 bg-white/85 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 border-4 border-blue-800 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl animate-fade-in-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                   style={{ 
                     background: 'rgba(255, 255, 255, 0.15)',
                     border: '1px solid rgba(255, 255, 255, 0.3)'
                   }}>
                <Cloud className="w-4 h-4 text-white" />
                <span className="text-sm font-medium">Enterprise Cloud Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Cloud Solutions & Infrastructure
              </h1>
              
              <p className="text-base text-white/90 leading-relaxed mb-8">
                Migrate, manage, and optimize your infrastructure with enterprise-grade 
                cloud solutions. Scale effortlessly, reduce costs, and accelerate 
                innovation with our comprehensive cloud services.
              </p>

              {/* Cloud Platform Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["AWS", "Azure", "Google Cloud"].map((platform, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <Cloud className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold">{platform}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                {[
                  { number: "60%+", label: "Cost Savings" },
                  { number: "24/7", label: "Support" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="backdrop-blur-sm rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105"
                    style={{ 
                      background: 'linear-gradient(135deg, #D3E3ED 39%, #D3E3ED 100%)',
                      border: '1px solid #E3E3E3'
                    }}
                  >
                    <div className="text-3xl font-bold mb-1 text-blue-900">{stat.number}</div>
                    <div className="text-sm text-blue-800">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-blue-900 font-semibold rounded-lg px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
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

      {/* CLOUD SERVICES SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-3 text-black">
            Cloud Services We Offer
          </h2>
          
          <p className="text-center text-gray-600 mb-16">
            Comprehensive cloud solutions to power your digital transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                description: "Seamlessly migrate your applications, data, and workloads to the cloud with minimal disruption and zero data loss.",
                features: [
                  "Assessment & planning",
                  "Data migration strategies",
                  "Application modernization",
                  "Post-migration optimization"
                ],
                icon: RefreshCw,
                iconGradient: "from-blue-500 to-cyan-600",
              },
              {
                title: "Infrastructure as a Service",
                description: "Build and manage scalable, flexible infrastructure tailored to your business needs with enterprise-grade reliability.",
                features: [
                  "Virtual machines & containers",
                  "Network configuration",
                  "Load balancing",
                  "Auto-scaling solutions"
                ],
                icon: Server,
                iconGradient: "from-indigo-500 to-blue-600",
              },
              {
                title: "Cloud Storage Solutions",
                description: "Secure, scalable storage solutions with automated backups, disaster recovery, and data archiving capabilities.",
                features: [
                  "Object & block storage",
                  "Backup & disaster recovery",
                  "Data archiving",
                  "Content delivery network"
                ],
                icon: Database,
                iconGradient: "from-purple-500 to-indigo-600",
              },
              {
                title: "Database Management",
                description: "Managed database services with high availability, automated backups, and performance optimization.",
                features: [
                  "Relational databases (SQL)",
                  "NoSQL databases",
                  "Database migration",
                  "Performance tuning"
                ],
                icon: Cpu,
                iconGradient: "from-green-500 to-teal-600",
              },
              {
                title: "Cloud Security",
                description: "Enterprise-grade security solutions to protect your cloud infrastructure and ensure compliance with industry standards.",
                features: [
                  "Identity & access management",
                  "Encryption & key management",
                  "Security monitoring",
                  "Compliance management"
                ],
                icon: Shield,
                iconGradient: "from-red-500 to-orange-600",
              },
              {
                title: "Cloud Monitoring & Management",
                description: "24/7 monitoring, performance optimization, and cost management to ensure your cloud infrastructure runs optimally.",
                features: [
                  "Real-time monitoring",
                  "Performance analytics",
                  "Cost optimization",
                  "Resource management"
                ],
                icon: TrendingUp,
                iconGradient: "from-pink-500 to-rose-600",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-200 relative overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${service.iconGradient} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 mt-0.5">•</span>
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

      {/* CLOUD PLATFORMS SECTION */}
      <section className="py-20 px-4" style={{
        background: 'linear-gradient(135deg, #051870 0%, #1a2d5f 94%)'
      }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-3 text-white">
            Cloud Platforms We Support
          </h2>
          
          <p className="text-center text-white/80 mb-16">
            Expertise across major cloud platforms to meet your specific needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                description: "Leverage the world's most comprehensive cloud platform with unmatched reliability and scalability.",
                features: [
                  "EC2, S3, Lambda",
                  "RDS, DynamoDB",
                  "CloudFront CDN",
                  "IAM & Security Groups",
                  "Auto Scaling & Load Balancing"
                ],
              },
              {
                name: "Microsoft Azure",
                description: "Seamless integration with Microsoft ecosystem and enterprise-grade cloud services for hybrid solutions.",
                features: [
                  "Virtual Machines & App Services",
                  "Azure SQL & Cosmos DB",
                  "Azure Active Directory",
                  "Azure DevOps",
                  "Hybrid cloud solutions"
                ],
              },
              {
                name: "Google Cloud Platform",
                description: "Advanced data analytics, machine learning capabilities, and cutting-edge infrastructure solutions.",
                features: [
                  "Compute Engine & App Engine",
                  "Cloud Storage & BigQuery",
                  "Kubernetes Engine",
                  "AI & ML services",
                  "Firebase integration"
                ],
              },
            ].map((platform, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:border-[#00D9FD] transform hover:-translate-y-2 hover:shadow-2xl group"
                style={{ 
                  background: 'rgba(48, 64, 137, 0.4)',
                  borderColor: '#75AFEE',
                  borderWidth: '1px'
                }}
              >
                {/* Cloud icon */}
                <div className="w-20 h-16 mx-auto mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-16 h-10 bg-white rounded-full relative">
                      <div className="absolute -top-3 left-4 w-10 h-10 bg-white rounded-full"></div>
                      <div className="absolute -top-2 right-2 w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white text-center">
                  {platform.name}
                </h3>
                
                <p className="text-white/80 mb-6 text-sm leading-relaxed text-center">
                  {platform.description}
                </p>
                
                <ul className="space-y-2">
                  {platform.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-white/90">
                      <span className="text-cyan-300 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CLOUD SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-3 text-black">
            Why Choose Cloud Solutions
          </h2>
          
          <p className="text-center text-gray-600 mb-16">
            Transform your business with the power of cloud computing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cost Efficiency",
                description: "Reduce capital expenses and pay only for what you use",
                emoji: "💰",
              },
              {
                title: "Scalability",
                description: "Scale resources up or down instantly based on demand",
                emoji: "⚡",
              },
              {
                title: "Global Reach",
                description: "Deploy applications worldwide with low latency",
                emoji: "🌍",
              },
              {
                title: "Enhanced Security",
                description: "Enterprise-grade security and compliance",
                emoji: "🔒",
              },
              {
                title: "Disaster Recovery",
                description: "Automated backups and quick recovery options",
                emoji: "🔄",
              },
              {
                title: "Innovation Speed",
                description: "Deploy faster and iterate quickly",
                emoji: "🚀",
              },
              {
                title: "Collaboration",
                description: "Enable remote teams to work seamlessly",
                emoji: "👥",
              },
              {
                title: "Performance",
                description: "High-performance computing resources",
                emoji: "📈",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
                  {benefit.emoji}
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-black">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentProcess steps={developmentSteps} />
      <ServicesCTA
        primaryButtonText="Get Cloud Consultation"
        secondaryButtonText="Schedule Assessment"
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CloudSolutions;