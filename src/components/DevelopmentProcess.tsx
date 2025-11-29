// ========== DEVELOPMENT PROCESS COMPONENT START ==========
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
    // ========== DEVELOPMENT PROCESS SECTION START ==========
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-3 font-montserrat text-black">
            Our Development Process
          </h2>
          <p className="text-gray-600">
            A proven methodology that delivers results on time and within budget
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Vertical Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block overflow-hidden"
            style={{ 
              backgroundColor: 'transparent',
              top: '24px',
              bottom: '24px',
            }}
          >
            <div 
              className="w-full h-full animate-line-grow origin-top"
              style={{ 
                backgroundColor: '#6530C7',
              }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  step.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${index !== steps.length - 1 ? 'mb-16' : ''}`}
              >
                {/* Content Box with slide-in animation */}
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
                    className={`rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:scale-105 max-w-md ${
                      step.position === 'left' ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                    style={{
                      backgroundColor: '#F7F7F7',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <h3 className="text-xl font-bold mb-3 font-montserrat text-black">
                      {step.title}
                    </h3>
                    <p 
                      className="leading-relaxed text-sm"
                      style={{ color: '#000000' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Circle with number - centered and falls down */}
                <div 
                  className={`absolute left-1/2 top-6 transform -translate-x-1/2 z-10 flex-shrink-0 ${
                    visibleSteps.has(index) ? 'animate-fall-bounce' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    top: '0px', // Start from top
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative"
                    style={{
                      background: 'linear-gradient(135deg, #43AEF1 0%, #6530C7 100%)',
                    }}
                  >
                    {/* Outer pulse ring */}
                    <div 
                      className="absolute inset-0 rounded-full animate-ping-slow"
                      style={{
                        background: 'linear-gradient(135deg, #43AEF1 0%, #6530C7 100%)',
                        opacity: 0.3,
                      }}
                    />
                    {/* Inner glow ring */}
                    <div 
                      className="absolute inset-0 rounded-full animate-glow-pulse"
                      style={{
                        background: 'linear-gradient(135deg, #43AEF1 0%, #6530C7 100%)',
                        opacity: 0.5,
                        filter: 'blur(4px)',
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

        @keyframes scale-bounce {
          0% {
            opacity: 0;
            transform: translate(-50%, 0) scale(0);
          }
          50% {
            transform: translate(-50%, 0) scale(1.2);
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-scale-bounce {
          animation: scale-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-line-grow {
          animation: line-grow 2s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
    // ========== DEVELOPMENT PROCESS SECTION END ==========
  );
};

export default DevelopmentProcess;

// ========== DEVELOPMENT PROCESS COMPONENT END ==========