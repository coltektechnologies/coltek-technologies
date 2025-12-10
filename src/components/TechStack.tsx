// ========== TECH STACK COMPONENT START ==========
// Reusable component for displaying technology categories and tools
// Features: Scroll-triggered animations, gradient cards, interactive pills

// ========== IMPORTS START ==========
import { useEffect, useRef, useState } from "react";
// ========== IMPORTS END ==========

// ========== INTERFACES START ==========
interface TechCategory {
  name: string;
  techs: string[];
  // FIX: Added strokeWidth to the icon component type to resolve TS error 2769
  icon?: React.ComponentType<{ className?: string, strokeWidth?: number }>; 
}

interface TechStackProps {
  categories: TechCategory[];
  // New prop for theme customization (e.g., 'purple', 'blue', 'green')
  themeColor: 'purple' | 'blue' | 'green' | 'indigo';
}
// ========== INTERFACES END ==========

const TechStack = ({ categories, themeColor }: TechStackProps) => { // Added themeColor prop
  // ========== STATE MANAGEMENT START ==========
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visiblePills, setVisiblePills] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  // ========== STATE MANAGEMENT END ==========

  // ========== THEME MAPPING START (DEEPER COLORS FOR BG) ==========
  // Define colors based on the theme prop
  const themeClasses = {
    purple: {
      // Deeper, darker background gradient for "Deep Space" feel
      bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)', 
      cardBg: 'bg-gray-800', // Solid dark card background for contrast
      borderColor: 'border-purple-500/50',
      pillBg: 'bg-white/10',
      pillBorder: 'border-white/30',
      titleColor: 'text-purple-400', // Lighter accent color
      shadowColor: 'shadow-purple-500/50',
    },
    blue: {
      // Deeper, darker background gradient
      bgGradient: 'linear-gradient(135deg, #071936 0%, #1e3a8a 50%, #172554 100%)',
      cardBg: 'bg-gray-800',
      borderColor: 'border-blue-500/50',
      pillBg: 'bg-white/10',
      pillBorder: 'border-white/30',
      titleColor: 'text-blue-400',
      shadowColor: 'shadow-blue-500/50',
    },
    green: {
      // Deeper, darker background gradient
      bgGradient: 'linear-gradient(135deg, #0a1f1b 0%, #064e3b 50%, #065f46 100%)',
      cardBg: 'bg-gray-800',
      borderColor: 'border-emerald-500/50',
      pillBg: 'bg-white/10',
      pillBorder: 'border-white/30',
      titleColor: 'text-emerald-400',
      shadowColor: 'shadow-emerald-500/50',
    },
    indigo: {
      // Deeper, darker background gradient
      bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      cardBg: 'bg-gray-800',
      borderColor: 'border-indigo-500/50',
      pillBg: 'bg-white/10',
      pillBorder: 'border-white/30',
      titleColor: 'text-indigo-400',
      shadowColor: 'shadow-indigo-500/50',
    }
  };

  const currentTheme = themeClasses[themeColor] || themeClasses.indigo;
  // ========== THEME MAPPING END ==========


  // ========== INTERSECTION OBSERVER SETUP START ==========
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Observe each card for scroll-triggered animations
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
              
              // Trigger pill animations after card appears
              setTimeout(() => {
                const category = categories[index];
                category.techs.forEach((_, techIndex) => {
                  setTimeout(() => {
                    setVisiblePills((prev) => new Set(prev).add(`${index}-${techIndex}`));
                  }, techIndex * 80);
                });
              }, 300);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [categories]);
  // ========== INTERSECTION OBSERVER SETUP END ==========

  return (
    // ========== TECH STACK SECTION START ==========
    <section 
      ref={sectionRef}
      className="tech-stack-section py-20 px-4 text-white overflow-hidden relative"
      style={{
        // Use the dynamic background gradient for the section
        background: currentTheme.bgGradient
      }}
    >
      {/* ========== ANIMATED BACKGROUND PARTICLES START (NEON/CYBERPUNK) ========== */}
      <div className="background-particles absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow circle/blob effect matching the theme color */}
        <div className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[80px] opacity-20 animate-pulse-slow ${currentTheme.titleColor.replace('text', 'bg')}`} />
        <div className="particle particle-1 absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-float-particle opacity-40" />
        <div className="particle particle-2 absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-float-particle animation-delay-1000 opacity-30" />
        <div className="particle particle-3 absolute bottom-40 left-1/4 w-2 h-2 bg-white rounded-full animate-float-particle animation-delay-2000 opacity-40" />
        <div className="particle particle-4 absolute bottom-20 right-1/3 w-3 h-3 bg-white rounded-full animate-float-particle animation-delay-1500 opacity-30" />
      </div>
      {/* ========== ANIMATED BACKGROUND PARTICLES END ========== */}

      <div className="tech-stack-content-wrapper container mx-auto max-w-6xl relative z-10">
        
        {/* ========== SECTION HEADER START ========== */}
        <div className="section-header text-center mb-16">
          <h2 
            className="section-title mb-4 font-bold animate-fade-in-down text-white text-4xl md:text-5xl"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 700,
              lineHeight: '135%',
            }}
          >
            Technologies We Use
          </h2>
          <p className="section-subtitle text-white/90 text-lg animate-fade-in-down animation-delay-200">
            Building with modern, industry-leading technologies for performance and scale.
          </p>
        </div>
        {/* ========== SECTION HEADER END ========== */}

        {/* ========== TECH CARDS GRID START ========== */}
        <div className="tech-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              // ========== TECH CARD START (SOLID BG FOR HIGH CONTRAST) ==========
              <div 
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`tech-card ${currentTheme.cardBg} rounded-xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group border border-gray-700 hover:${currentTheme.shadowColor} hover:border-white/50 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  // Add a subtle inner glow effect on the card
                  boxShadow: `0 0 10px 0px rgba(0, 0, 0, 0.5), inset 0 0 5px 0px rgba(255, 255, 255, 0.05)`,
                }}
              >
                {/* Accent border on top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-xl opacity-80 ${currentTheme.titleColor.replace('text', 'bg')}`} />
                
                {/* ========== CATEGORY HEADER START ========== */}
                <div className="category-header flex items-center gap-3 mb-5 mt-2">
                  {IconComponent && (
                    <div className="icon-wrapper relative">
                      {/* Icon */}
                      <IconComponent 
                        className={`category-icon w-6 h-6 ${currentTheme.titleColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} 
                        strokeWidth={2.5} // This prop is now correctly typed
                      /> 
                      {/* Neon glow effect on hover */}
                      <div className={`icon-glow absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentTheme.titleColor.replace('text', 'bg')} rounded-full`} />
                    </div>
                  )}
                  <h3 className="category-name text-xl font-extrabold font-montserrat text-white">
                    {category.name}
                  </h3>
                </div>
                {/* ========== CATEGORY HEADER END ========== */}
                
                {/* ========== TECH PILLS START ========== */}
                <div className="tech-pills-container flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => {
                    const pillKey = `${index}-${techIndex}`;
                    const isPillVisible = visiblePills.has(pillKey);
                    
                    return (
                      // Tech pill badge
                      <div
                        key={techIndex}
                        className={`tech-pill ${currentTheme.pillBg} rounded-full px-3 py-1.5 text-xs text-white/90 border border-gray-600 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 cursor-default whitespace-nowrap ${
                          isPillVisible ? 'animate-pop-in' : 'opacity-0 scale-0'
                        }`}
                        style={{
                          animationDelay: `${techIndex * 0.05}s`,
                          // Add a slight shadow/depth to the pills
                          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        }}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
                {/* ========== TECH PILLS END ========== */}
              </div>
              // ========== TECH CARD END ==========
            );
          })}
        </div>
        {/* ========== TECH CARDS GRID END ========== */}
      </div>

      {/* ========== ANIMATION STYLES START ========== */}
      <style>{`
        /* Updated animation for background glow effect */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(10px, -20px); opacity: 0.6; }
          50% { transform: translate(-5px, -40px); opacity: 0.3; }
          75% { transform: translate(-15px, -20px); opacity: 0.6; }
        }
        
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .animate-float-particle { animation: float-particle 8s ease-in-out infinite; }

        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
      {/* ========== ANIMATION STYLES END ========== */}
    </section>
    // ========== TECH STACK SECTION END ==========
  );
};

export default TechStack;
// ========== TECH STACK COMPONENT END ==========