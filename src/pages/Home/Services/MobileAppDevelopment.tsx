import { Button } from "@/components/ui/button";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import ServicesCTA from "@/components/ServicesCTA";
import { Smartphone, Code2, Layers, Palette, Wrench, Plug } from "lucide-react";

const MobileAppDevelopment = () => {
  // Development process steps with alternating left/right positioning
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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark gradient background with mobile app showcase */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-24 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero text content */}
            <div>
              {/* Service category badge */}
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
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-2xl">🍎</span>
                  <span className="text-sm font-medium">iOS</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-2xl">🤖</span>
                  <span className="text-sm font-medium">Android</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-2xl">⚛️</span>
                  <span className="text-sm font-medium">React Native</span>
                </div>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-1">200+</div>
                  <div className="text-sm text-white/60">Apps Built</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-1">4.8★</div>
                  <div className="text-sm text-white/60">Avg Rating</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-pink-400 mb-1">5M+</div>
                  <div className="text-sm text-white/60">Downloads</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-poppins">
                Start Your Project
              </Button>
            </div>

            {/* Right side - Mobile phone mockup */}
            <div className="relative lg:flex justify-center hidden">
              <div className="relative">
                {/* Decorative floating elements */}
                <div className="absolute -left-8 top-20 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute -right-8 top-40 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute -left-8 bottom-32 w-16 h-16 bg-pink-500/20 backdrop-blur-sm rounded-2xl border border-pink-500/30 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-pink-400" />
                </div>

                {/* Mobile phone mockup */}
                <div className="relative w-80 h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-8 border-slate-800">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>
                  
                  {/* Phone screen */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-8 pt-3 pb-2 text-white text-xs">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3">📶</div>
                        <div className="w-4 h-3">📡</div>
                        <div className="w-4 h-3">🔋</div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-6 pt-8">
                      <div className="text-white text-2xl font-bold mb-2">Your App</div>
                      <div className="text-white/80 text-sm mb-6">Beautiful & Functional</div>
                      
                      {/* Feature cards */}
                      <div className="space-y-3">
                        {[
                          { icon: "🎨", label: "Modern Design", color: "from-blue-400 to-blue-600" },
                          { icon: "⚡", label: "Fast Performance", color: "from-purple-400 to-purple-600" },
                          { icon: "🔒", label: "Secure & Safe", color: "from-pink-400 to-pink-600" },
                          { icon: "👤", label: "User Friendly", color: "from-indigo-400 to-indigo-600" },
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className={`bg-gradient-to-r ${feature.color} rounded-2xl p-4 flex items-center gap-3 backdrop-blur-sm`}
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

      {/* Mobile Development Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Mobile Development Services</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive mobile solutions tailored to your business needs
          </p>

          {/* Services grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-white" />,
                title: "Native iOS Development",
                description: "Build powerful and intuitive iOS applications using Swift and SwiftUI with full access to Apple ecosystem integration.",
                features: ["Swift & SwiftUI development", "App Store optimization", "Apple Watch & iPad apps", "iCloud & Core Data"],
              },
              {
                icon: <Code2 className="w-8 h-8 text-white" />,
                title: "Native Android Development",
                description: "Create robust Android applications with Kotlin and Jetpack Compose for Android devices and Android-powered devices.",
                features: ["Kotlin & Jetpack Compose", "Material Design 3", "Google Play services", "Firebase integration"],
              },
              {
                icon: <Layers className="w-8 h-8 text-white" />,
                title: "Cross-Platform Apps",
                description: "Develop once, deploy everywhere with React Native and Flutter for consistent experiences across iOS and Android devices.",
                features: ["React Native & Flutter", "Code reusability", "Native performance", "Single codebase"],
              },
              {
                icon: <Palette className="w-8 h-8 text-white" />,
                title: "UI/UX Design",
                description: "Create stunning, intuitive interfaces that work seamlessly across all devices while following platform-specific design principles.",
                features: ["User research & wireframes", "Wireframing & prototyping", "Design systems", "Usability testing"],
              },
              {
                icon: <Wrench className="w-8 h-8 text-white" />,
                title: "App Maintenance",
                description: "Keep your app running smoothly with regular updates, bug fixes, performance monitoring, and OS compatibility maintenance.",
                features: ["Regular updates", "Bug fixing", "Performance monitoring", "OS compatibility"],
              },
              {
                icon: <Plug className="w-8 h-8 text-white" />,
                title: "API Integration",
                description: "Connect your app to any backend service with RESTful APIs, GraphQL, and third-party service integrations.",
                features: ["RESTful API integration", "GraphQL implementation", "Third-party services", "Real-time data sync"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Icon container */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-montserrat">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Feature list */}
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Technologies We Use</h2>
          <p className="text-center text-muted-foreground mb-12">
            Building with modern, industry-leading technologies
          </p>
          
          {/* Technology categories in 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚛️",
                category: "Frontend",
                technologies: ["React", "Vue.js", "React.js", "Angular"],
              },
              {
                icon: "⚙️",
                category: "Backend",
                technologies: ["Node.js", "Python", "Java", "PHP"],
              },
              {
                icon: "🗄️",
                category: "Database",
                technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
              },
              {
                icon: "☁️",
                category: "Cloud & DevOps",
                technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
              },
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-bold mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.technologies.map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm border border-white/10">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Mobile App Development</h2>
          
          {/* Benefits grid */}
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
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Timeline */}
      <DevelopmentProcess steps={developmentSteps} />

      {/* Call to Action Section */}
      <ServicesCTA />
    </div>
  );
};

export default MobileAppDevelopment;