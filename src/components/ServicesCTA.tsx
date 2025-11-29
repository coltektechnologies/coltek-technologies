// ========== SERVICES CTA COMPONENT START ==========
// This is a shared CTA component for all service sub-pages:
// - Software Solutions
// - AI/ML Solutions
// - Cloud Architecture
// - Mobile App Development
// It won't affect the main Services page CTASection

import { Button } from "@/components/ui/button";

interface ServicesCTAProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const ServicesCTA = ({ 
  primaryButtonText = "Start Your Project",
  secondaryButtonText = "Schedule a Call" 
}: ServicesCTAProps) => {
  return (
    // ========== SERVICES CTA SECTION START ==========
    <section className="py-20 px-4 bg-gradient-to-br from-[#111C4C] to-[#141E48] text-white border-t-2 border-white">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Build Something Amazing?
        </h2>
        
        {/* Description */}
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's transform your ideas into a powerful web presence. Our expert team is ready to 
          bring your vision to life.
        </p>

        {/* CTA Buttons - 2 in a row */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Button 1 - Light background with cyan shadow */}
          <Button 
            size="lg" 
            className="bg-[#F7F7F7] hover:bg-white text-[#192351] font-semibold rounded-lg px-8 py-6 text-lg transition-all"
            style={{
              boxShadow: '0px 2px 0px 0px #00D9FD',
            }}
          >
            {primaryButtonText}
          </Button>
          
          {/* Button 2 - Outlined with cyan shadow */}
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg px-8 py-6 text-lg transition-all"
            style={{
              boxShadow: '0px 2px 0px 0px #00D9FD',
            }}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
    // ========== SERVICES CTA SECTION END ==========
  );
};

export default ServicesCTA;

// ========== SERVICES CTA COMPONENT END ==========