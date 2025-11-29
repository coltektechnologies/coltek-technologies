// ========== IMPORTS START ==========
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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
// ========== IMPORTS END ==========


const MobileAppDevelopment = () => {
  // ========== DEVELOPMENT STEPS DATA ==========
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
      
      {/* ========== NAVBAR START ========== */}
      <Navbar />
      {/* ========== NAVBAR END ========== */}


      {/* ========== HERO SECTION START ========== */}
      <section className="hero-section relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-24 px-4 overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="hero-background-decorations absolute inset-0 opacity-10">
          <div className="decoration-blur-1 absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="decoration-blur-2 absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="hero-content-wrapper relative z-10 container mx-auto max-w-6xl">
          <div className="hero-grid grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Hero text content */}
            <div className="hero-text-content">
              
              {/* Service category badge */}
              <div className="hero-badge inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">Mobile App Development</span>
              </div>

              <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
                Build Amazing
                <br />
                <span className="hero-title-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Mobile Apps
                </span>
              </h1>
              
              <p className="hero-description text-lg text-white/80 mb-8 leading-relaxed">
                Transform your ideas into powerful mobile experiences. Create iOS, Android, and cross-platform applications that users love with cutting-edge technology and exceptional design.
              </p>

              {/* Platform badges */}
              <div className="platform-badges flex flex-wrap gap-3 mb-8">
                <div className="platform-badge flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <span className="platform-icon text-2xl">🍎</span>
                  <span className="platform-name text-sm font-medium">iOS</span>
                </div>
                <div className="platform-badge flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <span className="platform-icon text-2xl">🤖</span>
                  <span className="platform-name text-sm font-medium">Android</span>
                </div>
                <div className="platform-badge flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <span className="platform-icon text-2xl">⚛️</span>
                  <span className="platform-name text-sm font-medium">React Native</span>
                </div>
              </div>

              {/* Stats section */}
              <div className="hero-stats-grid grid grid-cols-3 gap-4 mb-8">
                <div className="stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="stat-number text-3xl font-bold text-blue-400 mb-1">200+</div>
                  <div className="stat-label text-sm text-white/60">Apps Built</div>
                </div>
                <div className="stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="stat-number text-3xl font-bold text-purple-400 mb-1">4.8★</div>
                  <div className="stat-label text-sm text-white/60">Avg Rating</div>
                </div>
                <div className="stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="stat-number text-3xl font-bold text-pink-400 mb-1">5M+</div>
                  <div className="stat-label text-sm text-white/60">Downloads</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="hero-cta-button">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-poppins">
                  Start Your Project
                </Button>
              </div>
            </div>

            {/* Right side - Mobile phone mockup */}
            <div className="hero-phone-mockup relative lg:flex justify-center hidden">
              <div className="mockup-wrapper relative">
                
                {/* Decorative floating elements */}
                <div className="floating-element-1 absolute -left-8 top-20 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-blue-400" />
                </div>
                <div className="floating-element-2 absolute -right-8 top-40 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-purple-400" />
                </div>
                <div className="floating-element-3 absolute -left-8 bottom-32 w-16 h-16 bg-pink-500/20 backdrop-blur-sm rounded-2xl border border-pink-500/30 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-pink-400" />
                </div>

                {/* Mobile phone mockup */}
                <div className="phone-device relative w-80 h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-8 border-slate-800">
                  
                  {/* Phone notch */}
                  <div className="phone-notch absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>
                  
                  {/* Phone screen */}
                  <div className="phone-screen w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2.5rem] overflow-hidden">
                    
                    {/* Status bar */}
                    <div className="status-bar flex justify-between items-center px-8 pt-3 pb-2 text-white text-xs">
                      <span className="status-time font-semibold">9:41</span>
                      <div className="status-icons flex items-center gap-1">
                        <div className="w-4 h-3">📶</div>
                        <div className="w-4 h-3">📡</div>
                        <div className="w-4 h-3">🔋</div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="app-content px-6 pt-8">
                      <div className="app-title text-white text-2xl font-bold mb-2">Your App</div>
                      <div className="app-subtitle text-white/80 text-sm mb-6">Beautiful & Functional</div>
                      
                      {/* Feature cards */}
                      <div className="feature-cards-list space-y-3">
                        {[
                          { icon: "🎨", label: "Modern Design", color: "from-blue-400 to-blue-600" },
                          { icon: "⚡", label: "Fast Performance", color: "from-purple-400 to-purple-600" },
                          { icon: "🔒", label: "Secure & Safe", color: "from-pink-400 to-pink-600" },
                          { icon: "👤", label: "User Friendly", color: "from-indigo-400 to-indigo-600" },
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className={`feature-card bg-gradient-to-r ${feature.color} rounded-2xl p-4 flex items-center gap-3 backdrop-blur-sm`}
                          >
                            <div className="feature-icon text-2xl">{feature.icon}</div>
                            <div className="feature-label text-white font-medium">{feature.label}</div>
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
      {/* ========== HERO SECTION END ========== */}


      {/* ========== MOBILE DEVELOPMENT SERVICES SECTION START ========== */}
      <section className="mobile-services-section py-20 px-4 bg-background">
        <div className="section-content-wrapper container mx-auto max-w-6xl">
          
          <h2 className="section-title text-4xl font-bold text-center mb-4">Mobile Development Services</h2>
          <p className="section-subtitle text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive mobile solutions tailored to your business needs
          </p>

          {/* Services grid - 2 rows x 3 columns */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                description: "Create robust Android applications with Kotlin and Jetpack Compose for Android devices and Android-powered devices.",
                features: ["Kotlin & Jetpack Compose", "Material Design 3", "Google Play services", "Firebase integration"],
                iconGradient: "from-green-500 to-green-600",
                borderColor: "#10B981",
              },
              {
                icon: Layers,
                title: "Cross-Platform Apps",
                description: "Develop once, deploy everywhere with React Native and Flutter for consistent experiences across iOS and Android devices.",
                features: ["React Native & Flutter", "Code reusability", "Native performance", "Single codebase"],
                iconGradient: "from-purple-500 to-purple-600",
                borderColor: "#8B5CF6",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Create stunning, intuitive interfaces that work seamlessly across all devices while following platform-specific design principles.",
                features: ["User research & wireframes", "Wireframing & prototyping", "Design systems", "Usability testing"],
                iconGradient: "from-pink-500 to-pink-600",
                borderColor: "#EC4899",
              },
              {
                icon: Wrench,
                title: "App Maintenance",
                description: "Keep your app running smoothly with regular updates, bug fixes, performance monitoring, and OS compatibility maintenance.",
                features: ["Regular updates", "Bug fixing", "Performance monitoring", "OS compatibility"],
                iconGradient: "from-orange-500 to-orange-600",
                borderColor: "#F97316",
              },
              {
                icon: Plug,
                title: "API Integration",
                description: "Connect your app to any backend service with RESTful APIs, GraphQL, and third-party service integrations.",
                features: ["RESTful API integration", "GraphQL implementation", "Third-party services", "Real-time data sync"],
                iconGradient: "from-cyan-500 to-cyan-600",
                borderColor: "#06B6D4",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="service-card bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Colored bottom border */}
                  <div 
                    className="card-bottom-accent absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: service.borderColor }}
                  />
                  
                  {/* Icon container */}
                  <div className={`service-icon w-14 h-14 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="service-title text-xl font-bold mb-3 font-montserrat">{service.title}</h3>
                  <p className="service-description text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Feature list */}
                  <ul className="service-features-list space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="feature-item flex items-center gap-2 text-sm">
                        <div className="feature-bullet w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="feature-text text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>
      {/* ========== MOBILE DEVELOPMENT SERVICES SECTION END ========== */}


      {/* ========== WHY CHOOSE SECTION START ========== */}
      <section className="why-choose-section py-16 px-4 bg-gray-50">
        <div className="section-content-wrapper container mx-auto max-w-6xl">
          
          <h2 className="section-title text-3xl font-bold text-center mb-12">Why Choose Our Mobile App Development</h2>
          
          {/* Benefits grid - 2 rows x 3 columns */}
          <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="benefit-card bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="benefit-title text-lg font-semibold mb-2">{item.title}</h3>
                <p className="benefit-description text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      {/* ========== WHY CHOOSE SECTION END ========== */}


      {/* ========== TECH STACK SECTION START ========== */}
      <TechStack categories={techCategories} />
      {/* ========== TECH STACK SECTION END ========== */}


      {/* ========== DEVELOPMENT PROCESS SECTION START ========== */}
      <DevelopmentProcess steps={developmentSteps} />
      {/* ========== DEVELOPMENT PROCESS SECTION END ========== */}


      {/* ========== CTA SECTION START ========== */}
      <ServicesCTA 
        primaryButtonText="Start Your App Project"
        secondaryButtonText="Schedule Consultation"
      />
      {/* ========== CTA SECTION END ========== */}


      {/* ========== FOOTER START ========== */}
      <Footer />
      {/* ========== FOOTER END ========== */}

      
    </div>
  );
};

export default MobileAppDevelopment;