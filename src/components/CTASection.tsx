// ========== CTA SECTION ==========
// Consolidates the two near-identical CTA sections that both rendered the
// heading "Ready to Build Something Amazing?" with different styling
// (CLAUDE.md §6). ServicesCTA is now a thin wrapper over this component, so
// both call sites keep their existing props and appearance.
//
// The <style jsx> blocks these components used were not real styled-jsx —
// the package is not installed, so React emitted an unscoped <style> tag and
// the .animate-* / .animation-delay-* classes leaked globally and collided
// between the two files. Those animations now live in index.css §5.
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  /** Where the buttons link. Unchanged default: the contact page. */
  primaryHref?: string;
  secondaryHref?: string;
  /**
   * brand   — navy→teal gradient panel (original CTASection)
   * service — deep navy panel with the cyan service accent (original ServicesCTA)
   */
  variant?: "brand" | "service";
  className?: string;
}

const CTASection = ({
  title = "Ready to Build Something Amazing?",
  description = "Let's transform your idea into a powerful digital solution. Our team is ready to bring your vision to life.",
  primaryButtonText = "Get Started",
  secondaryButtonText,
  primaryHref = "/contact",
  secondaryHref = "/contact",
  variant = "brand",
  className,
}: CTASectionProps) => {
  const isService = variant === "service";

  return (
    <section
      className={cn(
        "relative overflow-hidden px-4 py-20",
        isService
          ? "border-t-2 border-service-cyan bg-gradient-to-br from-[#111C4C] to-[#1A2D5F] text-white"
          : "bg-gradient-brand",
        className,
      )}
    >
      {isService && (
        // Decorative ambient blobs from the original ServicesCTA.
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="animate-float absolute right-10 top-10 h-64 w-64 rounded-pill bg-service-cyan blur-3xl" />
          <div className="animate-float-delayed absolute bottom-10 left-10 h-80 w-80 rounded-pill bg-[#0AFE36] blur-3xl" />
        </div>
      )}

      <div className="container mx-auto relative z-10 max-w-4xl text-center">
        <h2
          className={cn(
            "animate-slide-up mb-6 text-4xl font-bold leading-tight md:text-5xl",
            isService ? "text-white" : "text-white",
          )}
        >
          {title}
        </h2>

        <p
          className={cn(
            "animate-slide-up animation-delay-200 mx-auto mb-10 max-w-2xl text-lg leading-relaxed",
            isService ? "text-white/90" : "text-white/90",
          )}
        >
          {description}
        </p>

        <div className="animate-slide-up animation-delay-400 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant={isService ? "default" : "brand"}
            className={cn(
              "px-8 text-base",
              isService &&
                "bg-[#F7F7F7] text-[#192351] shadow-[0px_4px_0px_0px_var(--color-service-cyan)] hover:bg-white",
            )}
          >
            <Link to={primaryHref}>{primaryButtonText}</Link>
          </Button>

          {secondaryButtonText && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                "border-2 border-white bg-transparent px-8 text-base text-white hover:bg-white/20 hover:text-white",
                isService &&
                  "shadow-[0px_4px_0px_0px_var(--color-service-cyan)]",
              )}
            >
              <Link to={secondaryHref}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
