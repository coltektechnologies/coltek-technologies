// ========== SERVICES CTA ==========
// Thin wrapper over the shared CTASection (CLAUDE.md §6). The service pages
// import this name and pass these props, so the public API is unchanged —
// only the duplicated markup underneath was removed.
import CTASection from "@/components/CTASection";

interface ServicesCTAProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const ServicesCTA = ({
  primaryButtonText = "Start Your Project",
  secondaryButtonText = "Schedule a Call",
}: ServicesCTAProps) => (
  <CTASection
    variant="service"
    title="Ready to Build Something Amazing?"
    description="Let's transform your ideas into a powerful digital solution. Our expert team is ready to bring your vision to life."
    primaryButtonText={primaryButtonText}
    secondaryButtonText={secondaryButtonText}
  />
);

export default ServicesCTA;
