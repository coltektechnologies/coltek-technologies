// ========== TEXTAREA ==========
// Shares the Input token set so the two controls always match (CLAUDE.md §12).
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  [
    "w-full rounded-control px-4 py-2 text-sm transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      tone: {
        default:
          "border border-input bg-card text-foreground placeholder:text-muted-foreground",
        onDark:
          "border border-white/30 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm focus-visible:ring-white/50 focus-visible:ring-offset-0",
      },
      invalid: {
        true: "border-destructive focus-visible:ring-destructive",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, tone, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(textareaVariants({ tone, invalid }), className)}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
