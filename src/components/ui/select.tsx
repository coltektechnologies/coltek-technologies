// ========== SELECT ==========
// Native <select> styled with the Input token set so form controls stay
// visually matched (CLAUDE.md §12). Native is deliberate: the app has no
// listbox dependency and native selects give correct mobile behaviour.
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const selectVariants = cva(
  [
    "w-full appearance-none rounded-control pr-10 text-sm transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      tone: {
        default: "border border-input bg-card text-foreground",
        onDark:
          "border border-white/30 bg-white/10 text-white backdrop-blur-sm focus-visible:ring-white/50 focus-visible:ring-offset-0",
      },
      selectSize: {
        sm: "h-9 pl-3 py-1.5",
        default: "h-10 pl-4 py-2",
        lg: "h-12 pl-4 py-3 text-base",
      },
      invalid: {
        true: "border-destructive focus-visible:ring-destructive",
      },
    },
    defaultVariants: {
      tone: "default",
      selectSize: "default",
    },
  },
);

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, tone, selectSize, invalid, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(selectVariants({ tone, selectSize, invalid }), className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className={cn(
          "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2",
          tone === "onDark" ? "text-white/70" : "text-muted-foreground",
        )}
        aria-hidden="true"
      />
    </div>
  ),
);
Select.displayName = "Select";

export { Select };
