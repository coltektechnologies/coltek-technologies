// ========== DEVELOPMENT PROCESS COMPONENT START ==========
// Reusable component for displaying development process steps
// Features: Scroll-triggered animations, alternating layout, animated timeline

// ========== IMPORTS START ==========
import { useEffect, useRef, useState } from "react";
// ========== IMPORTS END ==========

// ========== INTERFACES START ==========
interface ProcessStep {
  title: string;
  description: string;
  position: 'left' | 'right';
}

interface DevelopmentProcessProps {
  steps: ProcessStep[];
}
// ========== INTERFACES END ==========

const DevelopmentProcess = ({ steps }: DevelopmentProcessProps) => {
  // ========== STATE MANAGEMENT START ==========
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  // ========== STATE MANAGEMENT END ==========

  // ========== INTERSECTION OBSERVER SETUP START ==========
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Using a function update for state to ensure we're working with the latest state
              setVisibleSteps((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    // Cleanup function to disconnect all observers when the component unmounts
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount
  // ========== INTERSECTION OBSERVER SETUP END ==========

  return (
    // ========== DEVELOPMENT PROCESS SECTION START ==========
    <section className="development-process-section py-20 px-4 overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #ffffff 0%, #eff6ff 50%, #dbeafe 100%)'
    }}>
      <div className="process-content-wrapper container mx-auto max-w-6xl">
        
        {/* ========== SECTION HEADER START ========== */}
        <div className="section-header text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-4xl font-bold mb-3 font-montserrat text-gray-900">
            Our Development Process
          </h2>
          <p className="section-subtitle text-gray-600">
            A proven methodology that delivers results on time and within budget
          </p>
        </div>
        {/* ========== SECTION HEADER END ========== */}

        {/* ========== TIMELINE CONTAINER START ========== */}
        <div className="timeline-container relative max-w-5xl mx-auto">
          
          {/* ========== VERTICAL TIMELINE LINE START ========== */}
          <div 
            className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block overflow-hidden"
            style={{ 
              backgroundColor: 'transparent',
              top: '24px',
              bottom: '24px',
            }}
          >
            <div 
              className="timeline-line-inner w-full h-full animate-line-grow origin-top"
              style={{ 
                background: 'linear-gradient(to bottom, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
              }}
            />
          </div>
          {/* ========== VERTICAL TIMELINE LINE END ========== */}

          {/* ========== PROCESS STEPS START ========== */}
          <div className="steps-container space-y-0">
            {steps.map((step, index) => (
              // ========== PROCESS STEP START ==========
              <div
                key={index}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`process-step relative flex flex-col md:flex-row items-start md:items-center ${
                  step.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${index !== steps.length - 1 ? 'mb-16' : ''}`}
              >
                {/* Content Box with enhanced slide-in animation */}
                <div 
                  className={`content-box-wrapper flex-1 w-full md:w-auto ${
                    step.position === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  } ${
                    visibleSteps.has(index) 
                      ? step.position === 'left' 
                        ? 'animate-slide-in-left' 
                        : 'animate-slide-in-right'
                      : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <div 
                    className={`content-box rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 max-w-md border border-blue-100 ${
                      step.position === 'left' ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                    style={{
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 12px 0px rgba(59, 130, 246, 0.1)',
                    }}
                  >
                    <h3 className="step-title text-xl font-bold mb-3 font-montserrat text-gray-900">
                      {step.title}
                    </h3>
                    <p className="step-description text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* ========== CONTENT BOX END ========== */}

                {/* ========== NUMBER CIRCLE START ========== */}
                <div 
                  className={`number-circle-wrapper absolute left-1/2 top-6 transform -translate-x-1/2 z-10 flex-shrink-0 ${
                    visibleSteps.has(index) ? 'animate-fall-bounce' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    top: '0px',
                  }}
                >
                  <div 
                    className="number-circle w-12 h-12 rounded-full flex items-center justify-center shadow-xl relative"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                    }}
                  >
                    {/* Outer pulse ring */}
                    <div 
                      className="pulse-ring-outer absolute inset-0 rounded-full animate-ping-slow"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                        opacity: 0.3,
                      }}
                    />
                    {/* Inner glow ring */}
                    <div 
                      className="pulse-ring-inner absolute inset-0 rounded-full animate-glow-pulse"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                        opacity: 0.5,
                        filter: 'blur(4px)',
                      }}
                    />
                    {/* Number */}
                    <span className="step-number text-white font-bold text-lg relative z-10">
                      {index + 1}
                    </span>
                  </div>
                </div>
                {/* ========== NUMBER CIRCLE END ========== */}

                {/* Spacer for the other side */}
                <div className="spacer flex-1 hidden md:block" />
              </div>
              // ========== PROCESS STEP END ==========
            ))}
          </div>
          {/* ========== PROCESS STEPS END ========== */}
        </div>
        {/* ========== TIMELINE CONTAINER END ========== */}
      </div>

      {/* ========== ANIMATION STYLES START ========== */}
      <style jsx>{`
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

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fall-bounce {
          0% {
            opacity: 0;
            transform: translate(-50%, -100px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translate(-50%, 10px) scale(1.1);
          }
          80% {
            transform: translate(-50%, -5px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        @keyframes line-grow {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-fall-bounce {
          animation: fall-bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-line-grow {
          animation: line-grow 2s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>
      
      {/* ========== ANIMATION STYLES END ========== */}
    </section>
    // ========== DEVELOPMENT PROCESS SECTION END ==========
  );
};

export default DevelopmentProcess;
// ========== DEVELOPMENT PROCESS COMPONENT END ==========