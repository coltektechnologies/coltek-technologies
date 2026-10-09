// ========== SPINNER ==========
// One loading indicator for the whole app (CLAUDE.md §15).
// Replaces the ad-hoc `animate-spin border-t-2 border-blue-500` divs that
// were duplicated in AppRoutes and elsewhere.
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin rounded-full border-current", {
  variants: {
    size: {
      sm: "h-4 w-4 border-2 border-b-transparent",
      md: "h-8 w-8 border-2 border-b-transparent",
      lg: "h-12 w-12 border-[3px] border-b-transparent",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /** Announced to screen readers while the spinner is visible. */
  label?: string;
}

const Spinner = ({
  className,
  size,
  label = "Loading",
  ...props
}: SpinnerProps) => (
  <div role="status" aria-live="polite" {...props}>
    <div className={cn(spinnerVariants({ size }), className)} />
    <span className="sr-only">{label}</span>
  </div>
);

Spinner.displayName = "Spinner";

export { Spinner };
