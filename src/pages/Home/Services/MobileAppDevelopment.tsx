import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TechStack from "@/components/TechStack";
import ServicesCTA from "@/components/ServicesCTA";
import { 
  Smartphone, 
  Code2, 
  Layers, 
  Palette, 
  Wrench, 
  Plug,
  Code,
  Server,
  Database,
  Cloud
} from "lucide-react";

const MobileAppDevelopment = () => {
  const developmentSteps = [
    {
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and app requirements. This phase includes market research, competitor analysis, and defining project scope and timelines.",
      position: "left" as const,
    },
    {
      title: "UI/UX Design",
      description: "Our design team creates intuitive and visually appealing interfaces that work seamlessly across all devices. We focus on user experience, accessibility, and brand consistency while following modern design guidelines.",
      position: "right" as const,
    },
    {
      title: "Development",
      description: "Using agile methodology, we build your app with clean, maintainable code and regular sprints. We keep you involved throughout with frequent updates and feature demos to ensure the app meets your expectations.",
      position: "left" as const,
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing across devices and OS versions to ensure top quality. We perform functional testing, performance testing, security audits, and user acceptance testing before launch.",
      position: "right" as const,
    },
    {
      title: "Launch & Deployment",
      description: "We handle the complete app submission process, including app store optimization, metadata setup, and compliance checks. Our team ensures a smooth launch on both Apple App Store and Google Play Store.",
      position: "left" as const,
    },
    {
      title: "Support & Maintenance",
      description: "Post-launch support includes monitoring app performance and analytics, fixing bugs promptly, releasing regular updates for new OS versions, and adding new features based on user feedback to keep your app current and performing well.",
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
      <section className="hero-section relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">Mobile App Development</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
                Build Amazing
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Mobile Apps
                </span>
              </h1>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Transform your ideas into powerful mobile experiences. Create iOS, Android, and cross-platform applications that users love with cutting-edge technology and exceptional design.
              </p>

              {/* Platform badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: "🍎", name: "iOS" },
                  { icon: "🤖", name: "Android" },
                  { icon: "⚛️", name: "React Native" }
                ].map((platform, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: "200+", label: "Apps Built", color: "blue" },
                  { number: "4.8★", label: "Avg Rating", color: "purple" },
                  { number: "5M+", label: "Downloads", color: "pink" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.number}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 font-poppins transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative lg:flex justify-center hidden animate-slide-in-right">
              <div className="relative">
                {/* Floating elements */}
                {[
                  { Icon: Code2, pos: "-left-8 top-20", color: "blue" },
                  { Icon: Palette, pos: "-right-8 top-40", color: "purple" },
                  { Icon: Layers, pos: "-left-8 bottom-32", color: "pink" }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className={`absolute ${item.pos} w-16 h-16 bg-${item.color}-500/20 backdrop-blur-sm rounded-2xl border border-${item.color}-500/30 flex items-center justify-center animate-float`}
                    style={{ animationDelay: `${idx * 0.5}s` }}
                  >
                    <item.Icon className={`w-8 h-8 text-${item.color}-400`} />
                  </div>
                ))}

                {/* Phone */}
                <div className="relative w-80 h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-8 border-slate-800 transform transition-transform duration-500 hover:scale-105">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>
                  
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2.5rem] overflow-hidden">
                    <div className="flex justify-between items-center px-8 pt-3 pb-2 text-white text-xs">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3">📶</div>
                        <div className="w-4 h-3">📡</div>
                        <div className="w-4 h-3">🔋</div>
                      </div>
                    </div>

                    <div className="px-6 pt-8">
                      <div className="text-white text-2xl font-bold mb-2">Your App</div>
                      <div className="text-white/80 text-sm mb-6">Beautiful & Functional</div>
                      
                      <div className="space-y-3">
                        {[
                          { icon: "🎨", label: "Modern Design", color: "from-blue-400 to-blue-600" },
                          { icon: "⚡", label: "Fast Performance", color: "from-purple-400 to-purple-600" },
                          { icon: "🔒", label: "Secure & Safe", color: "from-pink-400 to-pink-600" },
                          { icon: "👤", label: "User Friendly", color: "from-indigo-400 to-indigo-600" },
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className={`bg-gradient-to-r ${feature.color} rounded-2xl p-4 flex items-center gap-3 backdrop-blur-sm transform transition-all duration-300 hover:scale-105`}
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className="text-2xl">{feature.icon}</div>
                            <div className="text-white font-medium">{feature.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Mobile Development Services</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive mobile solutions tailored to your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Native iOS Development",
                description: "Build powerful and intuitive iOS applications using Swift and SwiftUI with full access to Apple ecosystem integration.",
                features: ["Swift & SwiftUI development", "App Store optimization", "Apple Watch & iPad apps", "iCloud & Core Data"],
                iconGradient: "from-blue-500 to-blue-600",
                borderColor: "#3B82F6",
              },
              {
                icon: Code2,
                title: "Native Android Development",
                description: "Create robust Android applications with Kotlin and Jetpack Compose for Android devices.",
                features: ["Kotlin & Jetpack Compose", "Material Design 3", "Google Play services", "Firebase integration"],
                iconGradient: "from-green-500 to-green-600",
                borderColor: "#10B981",
              },
              {
                icon: Layers,
                title: "Cross-Platform Apps",
                description: "Develop once, deploy everywhere with React Native and Flutter for consistent experiences.",
                features: ["React Native & Flutter", "Code reusability", "Native performance", "Single codebase"],
                iconGradient: "from-purple-500 to-purple-600",
                borderColor: "#8B5CF6",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Create stunning, intuitive interfaces that work seamlessly across all devices.",
                features: ["User research & wireframes", "Wireframing & prototyping", "Design systems", "Usability testing"],
                iconGradient: "from-pink-500 to-pink-600",
                borderColor: "#EC4899",
              },
              {
                icon: Wrench,
                title: "App Maintenance",
                description: "Keep your app running smoothly with regular updates and performance monitoring.",
                features: ["Regular updates", "Bug fixing", "Performance monitoring", "OS compatibility"],
                iconGradient: "from-orange-500 to-orange-600",
                borderColor: "#F97316",
              },
              {
                icon: Plug,
                title: "API Integration",
                description: "Connect your app to any backend service with RESTful APIs and GraphQL.",
                features: ["RESTful API integration", "GraphQL implementation", "Third-party services", "Real-time data sync"],
                iconGradient: "from-cyan-500 to-cyan-600",
                borderColor: "#06B6D4",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: service.borderColor }}
                  />
                  
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Mobile App Development</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Experienced developers skilled in iOS, Android, and cross-platform technologies",
              },
              {
                title: "Agile Process",
                description: "Flexible development approach with regular updates and continuous feedback",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing across devices and platforms to ensure flawless performance",
              },
              {
                title: "On-Time Delivery",
                description: "Committed to meeting deadlines without compromising on quality",
              },
              {
                title: "Scalable Solutions",
                description: "Apps built to grow with your business and handle increasing user loads",
              },
              {
                title: "Ongoing Support",
                description: "Continuous maintenance and support to keep your app updated and secure",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack categories={techCategories} />
      <DevelopmentProcess steps={developmentSteps} />
      <ServicesCTA 
        primaryButtonText="Start Your App Project"
        secondaryButtonText="Schedule Consultation"
      />
      <Footer />
      
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
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
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MobileAppDevelopment;