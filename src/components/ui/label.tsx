// ========== LABEL ==========
// Shared form label (CLAUDE.md §12). Plain <label> — no new dependency.
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none", {
  variants: {
    tone: {
      /** On light surfaces. */
      default: "text-foreground",
      /** On dark / image-backed surfaces. */
      onDark: "text-white",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  /** Renders the required affordance next to the label text. */
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, tone, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ tone }), className)}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-0.5 text-destructive" aria-hidden="true">
          *
        </span>
      )}
    </label>
  ),
);
Label.displayName = "Label";

export { Label };
