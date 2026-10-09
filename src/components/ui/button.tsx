// ========== BUTTON COMPONENT ==========
// The single shared button for the whole application (CLAUDE.md §6, §7).
// Supports asChild so a <Link> can be styled as a button without nesting
// an <a> inside a <button>.
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva(
  // Base styles shared by every button.
  // Focus/disabled are defined once here so every variant behaves the same
  // (CLAUDE.md §15, DESIGN_SYSTEM.md §11).
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-control text-sm font-semibold",
    "transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "active:scale-95",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        // Navy fill — the default action.
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // The signature navy -> teal brand gradient (DESIGN_SYSTEM.md §13).
        // Centralised here; 10+ pages currently hand-roll this treatment.
        brand:
          "bg-gradient-brand text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // `destructive` is the pre-existing name; `danger` is the name used in
        // DESIGN_SYSTEM.md §16. Both are kept so neither vocabulary breaks.
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        danger:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-control px-3",
        lg: "h-11 rounded-control px-8",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Shows a spinner and blocks interaction. Ignored when asChild is set. */
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // A Slot must receive exactly one child, so the spinner is only injected
    // when rendering a real <button>.
    if (asChild) {
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, fullWidth, className }),
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled ?? loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Spinner size="sm" className="text-current" />}
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button };
