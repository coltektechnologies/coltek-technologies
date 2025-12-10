import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
}

const CTASection = ({
  title = "Ready to Build Something Amazing?",
  description = "Let's transform your idea into a powerful digital solution. Our team is ready to bring your vision to life.",
  primaryButtonText = "Get Started",
  onPrimaryClick,
}: CTASectionProps) => {
  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#14B3CC' }}
    >
      {/* Animated background with floating elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full animate-pulse delay-75" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full animate-pulse delay-150" />
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up"
          style={{ 
            fontFamily: 'Montserrat-Bold',
            color: '#000000'
          }}
        >
          {title}
        </h2>
        <p 
          className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
          style={{ 
            fontFamily: 'Montserrat-Regular',
            color: '#000000'
          }}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          {/* Get Started button - Links to contact page */}
          <Button
            asChild
            className="font-semibold px-8 h-12 text-black border-none transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #00d9fd 0%, #0afe36 100%)',
              fontFamily: 'Poppins-SemiBold'
            }}
            onClick={onPrimaryClick}
          >
            <Link to="/contact">
              {primaryButtonText}
            </Link>
          </Button>
        </div>
      </div>
      
      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .delay-75 {
          animation-delay: 0.75s;
        }
        
        .delay-150 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default CTASection;