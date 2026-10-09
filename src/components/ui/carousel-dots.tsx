// ========== CAROUSEL DOTS ==========
// Slide pagination. The app has two divergent implementations today — Home's
// circular dots and TestimonialsSlider's widening bars — so both are kept as
// variants rather than flattened (CLAUDE.md §18).
import { cn } from "@/lib/utils";

export interface CarouselDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  /** Used to build each control's accessible name, e.g. "Go to {itemLabel} 2". */
  itemLabel?: string;
  variant?: "dot" | "bar";
  className?: string;
}

const CarouselDots = ({
  count,
  activeIndex,
  onSelect,
  itemLabel = "slide",
  variant = "dot",
  className,
}: CarouselDotsProps) => (
  <div className={cn("flex items-center justify-center gap-2", className)}>
    {Array.from({ length: count }).map((_, index) => {
      const isActive = index === activeIndex;

      return (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Go to ${itemLabel} ${index + 1}`}
          aria-current={isActive || undefined}
          className={cn(
            "rounded-pill transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            variant === "dot" && "h-3 w-3 hover:scale-110 active:scale-90",
            variant === "bar" && "h-1.5",
            variant === "bar" && (isActive ? "w-6" : "w-2"),
            isActive ? "bg-primary" : "bg-muted-foreground/40",
          )}
        />
      );
    })}
  </div>
);

CarouselDots.displayName = "CarouselDots";

export { CarouselDots };
