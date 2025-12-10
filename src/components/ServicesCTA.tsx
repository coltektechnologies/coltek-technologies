import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServicesCTAProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const ServicesCTA = ({ 
  primaryButtonText = "Start Your Project",
  secondaryButtonText = "Schedule a Call" 
}: ServicesCTAProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#111C4C] to-[#1a2d5f] text-white border-t-2 border-[#00D9FD] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#00D9FD] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0afe36] rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up">
          Ready to Build Something Amazing?
        </h2>
        
        {/* Description */}
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
          Let's transform your ideas into a powerful digital solution. Our expert team is ready to 
          bring your vision to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-400">
          {/* Primary Button - Links to contact */}
          <Button 
            asChild
            size="lg" 
            className="bg-[#F7F7F7] hover:bg-white text-[#192351] font-semibold rounded-lg px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              boxShadow: '0px 4px 0px 0px #00D9FD',
            }}
          >
            <Link to="/contact">{primaryButtonText}</Link>
          </Button>
          
          {/* Secondary Button - Links to contact */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold rounded-lg px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0px 4px 0px 0px #00D9FD',
            }}
          >
            <Link to="/contact">{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ServicesCTA;