// ========== TECH STACK COMPONENT START ==========

import React, { useEffect, useRef, useState } from "react";

interface TechCategory {
  name: string;
  techs: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

interface TechStackProps {
  categories: TechCategory[];
}

const TechStack = ({ categories }: TechStackProps) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visiblePills, setVisiblePills] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Observe each card
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

  return (
    // ========== TECH STACK SECTION START ==========
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-[#0A1628] via-[#1a2847] to-[#2a3f6f] text-white overflow-hidden relative"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float-particle" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-particle animation-delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float-particle animation-delay-2000" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-float-particle animation-delay-1500" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header with staggered animation */}
        <div className="text-center mb-16">
          <h2 
            className="mb-4 font-bold animate-fade-in-down"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '135%',
              letterSpacing: '0.1em',
            }}
          >
            Technologies We Use
          </h2>
          <p className="text-white/70 text-lg animate-fade-in-down animation-delay-200">
            Building with modern, industry-leading technologies
          </p>
        </div>

        {/* Tech Cards Grid - 4 columns with flexible rows */}
        <div className="tech-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <div 
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`tech-card backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{
                  backgroundColor: '#192351',
                  borderColor: '#00D9FD',
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#43AEF1';
                  e.currentTarget.style.backgroundColor = '#1f2a5f';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#00D9FD';
                  e.currentTarget.style.backgroundColor = '#192351';
                }}
              >
                {/* Category Header with Icon */}
                <div className="category-header flex items-center gap-3 mb-6">
                  {IconComponent && (
                    <div className="relative">
                      <IconComponent className="category-icon w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-blue-400 rounded-full" />
                    </div>
                  )}
                  <h3 className="category-name text-xl font-bold font-montserrat">
                    {category.name}
                  </h3>
                </div>
                
                {/* Tech Pills - Staggered animation */}
                <div className="tech-pills-container flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => {
                    const pillKey = `${index}-${techIndex}`;
                    const isPillVisible = visiblePills.has(pillKey);
                    
                    return (
                      <div
                        key={techIndex}
                        className={`tech-pill bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-blue-400 hover:scale-110 cursor-default whitespace-nowrap ${
                          isPillVisible ? 'animate-pop-in' : 'opacity-0 scale-0'
                        }`}
                        style={{
                          animationDelay: `${techIndex * 0.05}s`,
                        }}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(10px, -20px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-5px, -40px);
            opacity: 0.3;
          }
          75% {
            transform: translate(-15px, -20px);
            opacity: 0.6;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
    // ========== TECH STACK SECTION END ==========
  );
};

export default TechStack;

// ========== TECH STACK COMPONENT END ==========