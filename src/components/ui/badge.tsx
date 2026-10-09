// ========== BADGE ==========
// Small status / tag pill. Consolidates the inline pill markup repeated in
// Portfolio (category badge, tag chips, "Featured" flag) and elsewhere.
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2 py-1 text-xs font-medium transition-colors [&_svg]:h-3 [&_svg]:w-3",
  {
    variants: {
      variant: {
        /** Neutral chip on a light surface — Portfolio tag chips. */
        default: "bg-muted text-foreground",
        /** Solid navy — Portfolio "Featured" flag. */
        brand: "bg-primary text-primary-foreground font-semibold",
        /** Translucent light chip over imagery — Portfolio category badge. */
        overlay: "bg-white/90 text-foreground shadow-card",
        outline: "border border-border text-foreground",
        success: "bg-emerald-50 text-emerald-800",
        warning: "bg-amber-50 text-amber-800",
        danger: "bg-destructive/10 text-destructive",
      },
      shape: {
        pill: "rounded-pill",
        rounded: "rounded-control",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "pill",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, shape, ...props }: BadgeProps) => (
  <span
    className={cn(badgeVariants({ variant, shape }), className)}
    {...props}
  />
);

Badge.displayName = "Badge";

export { Badge };
