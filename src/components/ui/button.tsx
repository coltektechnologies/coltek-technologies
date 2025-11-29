// ========== BUTTON COMPONENT START ==========
// Reusable button component with multiple variants and sizes
// Supports asChild prop for rendering as any element via Radix Slot
// ========== IMPORTS START ==========
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
// ========== IMPORTS END ==========

// ========== BUTTON VARIANTS CONFIGURATION START ==========
// Define all button style variants using class-variance-authority
const buttonVariants = cva(
  // Base styles applied to all buttons
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // Visual style variants
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      // Size variants
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    // Default values when no props provided
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
// ========== BUTTON VARIANTS CONFIGURATION END ==========

// ========== BUTTON PROPS INTERFACE START ==========
// Extend native button attributes with variant props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // When true, renders as Slot for composition
}
// ========== BUTTON PROPS INTERFACE END ==========

// ========== BUTTON COMPONENT START ==========
// Forward ref to allow parent components to access button element
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Slot when asChild is true, otherwise render as button
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

// Set display name for better debugging in React DevTools
// This fixes Fast Refresh issues in development
Button.displayName = "Button";
// ========== BUTTON COMPONENT END ==========

// ========== EXPORTS START ==========
export { Button, buttonVariants };
// ========== EXPORTS END ==========

// ========== BUTTON COMPONENT END ==========