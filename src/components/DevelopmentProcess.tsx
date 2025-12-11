// ========== DEVELOPMENT PROCESS COMPONENT START ==========
// Reusable component for displaying development process steps
// Features: Scroll-triggered animations, alternating layout, animated timeline

import { useEffect, useRef, useState } from "react";

interface ProcessStep {
  title: string;
  description: string;
  position: 'left' | 'right';
}

interface DevelopmentProcessProps {
  steps: ProcessStep[];
}

const DevelopmentProcess = ({ steps }: DevelopmentProcessProps) => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer setup for scroll animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
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

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section 
      className="development-process-section py-20 px-4 overflow-hidden" 
      style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #eff6ff 50%, #dbeafe 100%)'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-3 font-montserrat text-gray-900">
            Our Development Process
          </h2>
          <p className="text-gray-600">
            A proven methodology that delivers results on time and within budget
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block overflow-hidden"
            style={{ 
              backgroundColor: 'transparent',
              top: '24px',
              bottom: '24px',
            }}
          >
            <div 
              className="w-full h-full origin-top"
              style={{ 
                background: 'linear-gradient(to bottom, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
                animation: 'line-grow 1s ease-out forwards'
              }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  step.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${index !== steps.length - 1 ? 'mb-16' : ''}`}
              >
                {/* Content Box */}
                <div 
                  className={`flex-1 w-full md:w-auto ${
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
                    className={`rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 max-w-md border border-blue-100 ${
                      step.position === 'left' ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                    style={{
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 12px 0px rgba(59, 130, 246, 0.1)',
                    }}
                  >
                    <h3 className="text-xl font-bold mb-3 font-montserrat text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number Circle */}
                <div 
                  className={`absolute left-1/2 top-6 transform -translate-x-1/2 z-10 flex-shrink-0 ${
                    visibleSteps.has(index) ? 'animate-fall-bounce' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl relative"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                        opacity: 0.3,
                        animation: 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    />
                    <span className="text-white font-bold text-lg relative z-10">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes fall-bounce {
          0% {
            opacity: 0;
            transform: translate(-50%, -80px);
          }
          70% {
            opacity: 1;
            transform: translate(-50%, 5px);
          }
          85% {
            transform: translate(-50%, -10px);
          }
          100% {
            transform: translate(-50%, 0);
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
      `}</style>
    </section>
  );
};

export default DevelopmentProcess;
// ========== DEVELOPMENT PROCESS COMPONENT END ==========
