// ========== INPUT ==========
// Shared text input (CLAUDE.md §12, DESIGN_SYSTEM.md §16).
//
// Two tones exist in the app today and both are legitimate surfaces, so both
// are preserved as variants rather than flattened:
//   default — light cards (Contact form)
//   onDark  — translucent over dark/image backgrounds (Home hero, Footer)
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "w-full rounded-control text-sm transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
  ],
  {
    variants: {
      tone: {
        default:
          "border border-input bg-card text-foreground placeholder:text-muted-foreground",
        onDark:
          "border border-white/30 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm focus-visible:ring-white/50 focus-visible:ring-offset-0",
      },
      inputSize: {
        sm: "h-9 px-3 py-1.5",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-4 py-3 text-base",
      },
      invalid: {
        true: "border-destructive focus-visible:ring-destructive",
      },
    },
    defaultVariants: {
      tone: "default",
      inputSize: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, tone, inputSize, invalid, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={cn(inputVariants({ tone, inputSize, invalid }), className)}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
