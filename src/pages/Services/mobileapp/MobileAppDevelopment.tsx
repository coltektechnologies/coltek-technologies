// ========== MOBILE APP DEVELOPMENT PAGE START ==========
// Main page for showcasing mobile app development services

// ========== IMPORTS START ==========
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// NOTE: Assuming these components exist in your project structure
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TechStack from "@/components/TechStack";
import ServicesCTA from "@/components/ServicesCTA";

// VALUE IMPORTS (Icons and components)
import { 
  Smartphone, 
  Code2, 
  Layers, 
  Palette, 
  Wrench, 
  Plug,
  Server,
  Database,
  Apple, 
  SquareTerminal, 
  Zap, 
  Shield, 
  User, 
  Rocket, 
} from "lucide-react";

// TYPE IMPORTS
import type { LucideProps } from "lucide-react";
// ========== IMPORTS END ==========


// Define the structure for the tech category data
interface TechCategory {
  name: string;
  icon: React.FC<LucideProps>; 
  techs: string[];
}


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

  const techCategories: TechCategory[] = [
    {
      name: "Native",
      icon: Smartphone,
      techs: ["Swift", "Kotlin", "Java", "Objective-C"],
    },
    {
      name: "Cross-Platform",
      icon: Layers,
      techs: ["React Native", "Flutter", "Xamarin", "Ionic"],
    },
    {
      name: "Backend",
      icon: Server,
      techs: ["Node.js", "Python (Django/Flask)", "Go", "Firebase"],
    },
    {
      name: "Databases & Cloud",
      icon: Database,
      techs: ["MongoDB", "PostgreSQL", "AWS", "Google Cloud", "Azure"],
    },
  ];

  return (
    // ========== PAGE CONTAINER START ==========
    <div className="page-container min-h-screen bg-gray-900"> {/* Set global dark background */}
      {/* ========== NAVBAR START ========== */}
      <Navbar />
      {/* ========== NAVBAR END ========== */}

      {/* ============================================ */}
      {/* START: HERO SECTION (DEEP SPACE BLACK & ELECTRIC BLUE) */}
      {/* ============================================ */}
      <section className="hero-section relative text-white py-24 lg:py-32 px-4 overflow-hidden" style={{
        // PURE BLACK BACKGROUND FOR MAX CONTRAST
        background: '#000000', 
      }}>
        {/* Background decorative elements - Intense Neon Effect */}
        <div className="hero-bg-decorations absolute inset-0 opacity-40">
          {/* Unified Accent Color (Teal/Blue) */}
          <div className="decoration-circle absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-3xl mix-blend-lighten opacity-30 animate-float" />
          <div className="decoration-circle absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl mix-blend-lighten opacity-30 animate-float-delayed" />
        </div>
        
        <div className="hero-content-wrapper relative z-10 container mx-auto max-w-7xl">
          <div className="hero-grid grid lg:grid-cols-2 gap-12 items-center">
            
            {/* ========== LEFT CONTENT START ========== */}
            <div className="hero-left-content max-w-xl space-y-7 animate-slide-in-left">
              {/* Service badge */}
              <div className="service-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-cyan-400/50 rounded-full px-5 py-2 shadow-lg shadow-cyan-500/10">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-white font-semibold">Mobile App Development</span>
              </div>

              {/* Main heading - ELECTRIC BLUE/TEAL GLOW */}
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight" style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.4)'}}>
                Build Cutting-Edge
                <span className="block mt-2 title-gradient text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400" style={{textShadow: '0 0 10px rgba(74, 234, 252, 0.8), 0 0 20px rgba(59, 130, 246, 0.6)'}}>
                  Mobile Experiences
                </span>
              </h1>
              
              {/* Description */}
              <p className="hero-description text-lg text-gray-300 leading-relaxed">
                Transform your ideas into high-performance, market-ready applications for iOS, Android, and cross-platform ecosystems.
              </p>

              {/* Key benefits grid - High Contrast Dark Cards */}
              <div className="key-benefits-grid grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Zap, title: "Optimized Performance", gradient: "from-blue-500 to-cyan-500", glow: "shadow-cyan-500/50" },
                  { icon: User, title: "Intuitive UI/UX", gradient: "from-indigo-500 to-purple-500", glow: "shadow-indigo-500/50" },
                  { icon: Shield, title: "Enterprise-Grade Security", gradient: "from-green-500 to-teal-500", glow: "shadow-teal-500/50" },
                  { icon: Rocket, title: "Fast Time-to-Market", gradient: "from-cyan-500 to-blue-500", glow: "shadow-blue-500/50" }
                ].map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div 
                      key={idx}
                      className={`benefit-card group bg-gray-900/80 rounded-xl p-4 border border-cyan-400/30 transform transition-all duration-300 hover:scale-105 hover:bg-gray-800 shadow-2xl shadow-black/70 hover:${benefit.glow}`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-gradient-to-br ${benefit.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                        <BenefitIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-sm font-bold text-white">{benefit.title}</div>
                    </div>
                  );
                })}
              </div>

              {/* CTA buttons */}
              <div className="cta-buttons-container flex flex-wrap gap-4 pt-2">
                <Button asChild>
                  <Link 
                    to="/contact"
                    className="flex items-center justify-center h-11 px-8 py-6 bg-cyan-400 text-gray-900 hover:bg-cyan-300 font-bold rounded-full text-base transition-all duration-300 shadow-xl shadow-cyan-500/40 hover:shadow-cyan-500/70 border-0"
                  >
                    Start Your Project →
                  </Link>
                </Button>
                <Button asChild>
                  <Link 
                    to="/services"
                    className="flex items-center justify-center h-11 px-8 py-6 bg-transparent hover:bg-white/10 text-white font-semibold rounded-full text-base border-2 border-white/40 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-black/50"
                  >
                    Explore Solutions
                  </Link>
                </Button>
              </div>
            </div>
            {/* ========== LEFT CONTENT END ========== */}

            {/* ========== RIGHT CONTENT (PHONE MOCKUP) START ========== */}
            <div className="hero-right-content relative lg:flex justify-center hidden animate-slide-in-right">
              <div className="phone-mockup-wrapper relative transform perspective-1000 rotate-y-6 transition-transform duration-700">
                
                {/* Floating NEON Glow element behind the phone (Teal/Blue) */}
                <div className="absolute inset-x-20 inset-y-10 bg-cyan-500/30 rounded-full blur-[80px] z-0 opacity-70 animate-pulse-slow" />


                {/* Floating icon elements (Teal/Blue accents) */}
                {[
                  { Icon: Apple, pos: "-left-12 top-16", gradient: "from-blue-400 to-cyan-400", delay: "0s" },
                  { Icon: SquareTerminal, pos: "-right-12 top-40", gradient: "from-teal-400 to-green-400", delay: "0.5s" },
                  { Icon: Code2, pos: "-left-12 bottom-24", gradient: "from-cyan-400 to-blue-400", delay: "1s" }
                ].map((item, idx) => {
                  const FloatingIcon = item.Icon;
                  return (
                    <div 
                      key={idx}
                      className={`floating-icon absolute ${item.pos} w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex items-center justify-center animate-float border border-white/30`}
                      style={{ animationDelay: item.delay }}
                    >
                      <FloatingIcon className={`w-8 h-8 text-white bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                    </div>
                  );
                })}

                {/* Phone device mockup */}
                <div className="phone-device relative w-80 h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-8 border-cyan-700 z-10 transform transition-transform duration-500 hover:scale-105">
                  {/* Phone notch */}
                  <div className="phone-notch absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-20"></div>
                  
                  {/* Phone screen */}
                  <div className="phone-screen w-full h-full bg-gradient-to-br from-gray-900 via-blue-950 to-teal-950 rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="status-bar flex justify-between items-center px-8 pt-3 pb-2 text-white text-xs">
                      <span className="time font-semibold">9:42</span>
                      <div className="status-icons flex items-center gap-1">
                        <div className="icon w-4 h-3">📶</div>
                        <div className="icon w-4 h-3">📡</div>
                        <div className="icon w-4 h-3">🔋</div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="app-content px-6 pt-8">
                      <div className="app-title text-white text-2xl font-bold mb-2">Coltek App</div>
                      <div className="app-subtitle text-white/80 text-sm mb-6">Designed for Excellence</div>
                      
                      {/* Feature cards - High Contrast Neon/Glow (Teal/Blue) */}
                      <div className="feature-cards space-y-3">
                        {[
                          { icon: "🎨", label: "Modern Design", color: "shadow-cyan-400/50", glow: "border-cyan-400/70" },
                          { icon: "⚡", label: "Fast Performance", color: "shadow-blue-400/50", glow: "border-blue-400/70" },
                          { icon: "🔒", label: "Secure & Safe", color: "shadow-teal-400/50", glow: "border-teal-400/70" },
                          { icon: "👤", label: "User Friendly", color: "shadow-indigo-400/50", glow: "border-indigo-400/70" },
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            // Using transparent background and adding a strong, colored shadow
                            className={`feature-card bg-white/5 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 transform transition-all duration-300 hover:scale-[1.02] shadow-xl ${feature.color} border ${feature.glow}`}
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
            {/* ========== RIGHT CONTENT (PHONE MOCKUP) END ========== */}
            
          </div>
        </div>
      </section>
      {/* ============================================ */}
      {/* END: HERO SECTION */}
      {/* ============================================ */}

      {/* ============================================ */}
      {/* START: SERVICES SECTION (WHITE Background - As Requested) */}
      {/* ============================================ */}
      <section className="services-section py-24 px-4 bg-white"> 
        <div className="services-content-wrapper container mx-auto max-w-7xl">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="section-title text-4xl md:text-5xl font-bold text-slate-900">
              Mobile Development Services
            </h2>
            <p className="section-subtitle text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive mobile solutions tailored to your business needs
            </p>
          </div>

          {/* Services grid */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Apple,
                title: "Native iOS Development",
                description: "Build powerful and intuitive iOS applications using Swift and SwiftUI with full access to Apple ecosystem integration.",
                features: ["Swift & SwiftUI development", "App Store optimization", "Apple Watch & iPad apps", "iCloud & Core Data"],
                iconGradient: "from-indigo-600 to-blue-600",
                accentColor: "bg-blue-600",
                colorClass: "text-blue-700",
              },
              {
                icon: SquareTerminal, 
                title: "Native Android Development",
                description: "Create robust Android applications with Kotlin and Jetpack Compose for Android devices.",
                features: ["Kotlin & Jetpack Compose", "Material Design 3", "Google Play services", "Firebase integration"],
                iconGradient: "from-green-600 to-teal-600",
                accentColor: "bg-teal-600",
                colorClass: "text-teal-700",
              },
              {
                icon: Layers,
                title: "Cross-Platform Apps",
                description: "Develop once, deploy everywhere with React Native and Flutter for consistent experiences.",
                features: ["React Native & Flutter", "Code reusability", "Native performance", "Single codebase"],
                iconGradient: "from-purple-600 to-pink-600",
                accentColor: "bg-purple-600",
                colorClass: "text-purple-700",
              },
              {
                icon: Palette,
                title: "UI/UX Design & Prototyping",
                description: "Create stunning, intuitive interfaces that work seamlessly across all devices.",
                features: ["User research & wireframes", "Design systems", "Usability testing", "High-fidelity prototypes"],
                iconGradient: "from-yellow-600 to-orange-600",
                accentColor: "bg-orange-600",
                colorClass: "text-orange-700",
              },
              {
                icon: Wrench,
                title: "App Maintenance & Support",
                description: "Keep your app running smoothly with regular updates and performance monitoring.",
                features: ["Regular updates", "Bug fixing", "Performance monitoring", "OS compatibility"],
                iconGradient: "from-cyan-600 to-teal-600",
                accentColor: "bg-cyan-600",
                colorClass: "text-cyan-700",
              },
              {
                icon: Plug,
                title: "API & Backend Integration",
                description: "Connect your app to any backend service with RESTful APIs and GraphQL.",
                features: ["RESTful API integration", "GraphQL implementation", "Third-party services", "Real-time data sync"],
                iconGradient: "from-rose-600 to-red-600",
                accentColor: "bg-red-600",
                colorClass: "text-red-700",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                // Service card - White background coherence
                <div
                  key={index}
                  className={`service-card bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100 relative overflow-hidden transform hover:shadow-cyan-600/50`}
                >
                  {/* Icon container - Prominent gradient */}
                  <div className={`icon-container w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-2xl shadow-gray-400/50`}>
                    <IconComponent className="icon w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Service title */}
                  <h3 className={`service-title text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:${service.colorClass}`}>{service.title}</h3>
                  
                  {/* Service description */}
                  <p className="service-description text-gray-600 mb-5 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Features list */}
                  <ul className="features-list space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="feature-item flex items-start gap-3 text-sm">
                        {/* Bullet color matches the primary theme (deep blue) */}
                        <div className={`feature-bullet w-1.5 h-1.5 bg-cyan-600 rounded-full flex-shrink-0 mt-1.5`} />
                        <span className="feature-text text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Accent bottom line - Primary color accent - Solid color flash */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ============================================ */}
      {/* END: SERVICES SECTION */}
      {/* ============================================ */}

      {/* ============================================ */}
      {/* START: WHY CHOOSE SECTION (Dark Background Coherence) */}
      {/* ============================================ */}
      <section className="why-choose-section py-24 px-4 bg-gray-950 border-t border-gray-800"> 
        <div className="why-choose-content-wrapper container mx-auto max-w-7xl">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="section-title text-4xl md:text-5xl font-bold text-white">
              Why Choose Coltek
            </h2>
            <p className="section-subtitle text-xl text-gray-400 max-w-2xl mx-auto">
              Our commitment to quality, efficiency, and user-centric design sets us apart.
            </p>
          </div>
          
          {/* Benefits grid - Dark background, white text, top border accent (Fix for overlap) */}
          <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert & Certified Team",
                description: "Experienced developers skilled in native and cross-platform technologies (Swift, Kotlin, Flutter, React Native).",
                icon: Code2,
                color: "text-blue-400",
                accent: "bg-blue-500",
              },
              {
                title: "User-Centric UI/UX",
                description: "We design intuitive and accessible interfaces that guarantee high user adoption and satisfaction.",
                icon: Palette,
                color: "text-cyan-400",
                accent: "bg-cyan-500",
              },
              {
                title: "Agile & Transparent Process",
                description: "Flexible development approach with regular sprints, demos, and continuous feedback loops.",
                icon: Layers,
                color: "text-orange-400",
                accent: "bg-orange-500",
              },
              {
                title: "Rigorous Quality Assurance",
                description: "Comprehensive testing, performance audits, and security checks across all target devices and OS versions.",
                icon: Shield,
                color: "text-green-400",
                accent: "bg-green-500",
              },
              {
                title: "Scalable & Future-Proof Code",
                description: "Apps built with modular architecture and clean code standards ready to handle massive user growth.",
                icon: Server,
                color: "text-indigo-400",
                accent: "bg-indigo-500",
              },
              {
                title: "Post-Launch Partnership",
                description: "Dedicated maintenance, monitoring, updates, and feature additions to ensure long-term success.",
                icon: Plug,
                color: "text-red-400",
                accent: "bg-red-500",
              },
            ].map((item, index) => {
              const BenefitIcon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`benefit-card bg-gray-800 rounded-xl p-8 shadow-lg transition-all duration-300 transform hover:scale-[1.02] relative group overflow-hidden border border-gray-700`}
                >
                  {/* Top Accent Line (Fixes the previous overlap issue) */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${item.accent} transition-transform duration-300`} />
                  
                  {/* Icon and Title Container */}
                  <div className="flex items-start space-x-4 mb-4">
                      {/* Standard Icon */}
                      <div className="icon-wrapper w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-blue-500 transition-all duration-300">
                        <BenefitIcon className={`w-5 h-5 ${item.color}`} strokeWidth={2.5} />
                      </div>
                      <h3 className="benefit-title text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="benefit-description text-gray-400 text-sm leading-relaxed mt-4">{item.description}</p>

                  {/* Hover glow effect (Teal/Blue) */}
                  <div className={`absolute inset-0 rounded-xl transition-shadow duration-300 pointer-events-none group-hover:shadow-[0_0_20px_0px] group-hover:shadow-cyan-500/30`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ============================================ */}
      {/* END: WHY CHOOSE SECTION */}
      {/* ============================================ */}

      {/* ============================================ */}
      {/* START: TECH STACK SECTION */}
      {/* ============================================ */}
      <TechStack 
        categories={techCategories} 
        themeColor="blue" 
      />
      {/* ============================================ */}
      {/* END: TECH STACK SECTION */}
      {/* ============================================ */}

      {/* ============================================ */}
      {/* START: DEVELOPMENT PROCESS SECTION */}
      {/* ============================================ */}
      <DevelopmentProcess steps={developmentSteps} />
      {/* ============================================ */}
      {/* END: DEVELOPMENT PROCESS SECTION */}
      {/* ============================================ */}

      {/* ============================================ */}
      {/* START: SERVICES CTA SECTION (Updated Button Color) */}
      {/* ============================================ */}
      <ServicesCTA 
        primaryButtonText="Start Your App Project"
        secondaryButtonText="Schedule Consultation"
      />
      {/* ============================================ */}
      {/* END: SERVICES CTA SECTION */}
      {/* ============================================ */}

      {/* ========== FOOTER START ========== */}
      <Footer />
      {/* ========== FOOTER END ========== */}
      
      {/* ========== ANIMATIONS START (Ensured correct termination) ========== */}
      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
      {/* ========== ANIMATIONS END ========== */}
    </div>
    // ========== PAGE CONTAINER END ==========
  );
};

export default MobileAppDevelopment;
// ========== MOBILE APP DEVELOPMENT PAGE END ==========