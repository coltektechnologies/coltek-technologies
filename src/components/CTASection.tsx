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
      {/* Decorative spiral vector background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `radial-gradient(circle at 20% 50%, #17B9D2 0%, transparent 50%), radial-gradient(circle at 80% 50%, #17B9D2 0%, transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ 
            fontFamily: 'Montserrat-Bold',
            color: '#000000'
          }}
        >
          {title}
        </h2>
        <p 
          className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ 
            fontFamily: 'Montserrat-Regular',
            color: '#000000'
          }}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Get Started button - Links to legal page */}
          <Button
            asChild
            className="font-semibold px-8 h-12 text-black border-none"
            style={{
              background: 'linear-gradient(90deg, #00d9fd 0%, #0afe36 100%)',
              fontFamily: 'Poppins-SemiBold'
            }}
            onClick={onPrimaryClick}
          >
            <Link to="/legal">
              {primaryButtonText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;