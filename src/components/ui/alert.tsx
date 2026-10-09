// ========== ALERT ==========
// Status messaging: inline banners and toasts (CLAUDE.md §15).
//
// Colours are the ones already present in the app (DESIGN_SYSTEM.md §10) —
// emerald-500/95 and rose-500/95 for the solid toasts Contact already used,
// and the amber pair Portfolio already used for its "coming soon" flash.
// No new status colours are introduced; §10 explicitly says not to invent one.
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva("flex items-start gap-3 rounded-control text-sm", {
  variants: {
    appearance: {
      /** Filled — used for toasts. */
      solid: "p-3 text-white shadow-lg",
      /** Tinted with a hairline border — used for inline banners. */
      subtle: "border p-3",
    },
    variant: {
      success: "",
      error: "",
      warning: "",
      info: "",
    },
  },
  compoundVariants: [
    { appearance: "solid", variant: "success", class: "bg-emerald-500/95" },
    { appearance: "solid", variant: "error", class: "bg-rose-500/95" },
    { appearance: "solid", variant: "warning", class: "bg-amber-500/95" },
    { appearance: "solid", variant: "info", class: "bg-primary" },
    {
      appearance: "subtle",
      variant: "success",
      class: "border-emerald-200 bg-emerald-50 text-emerald-900",
    },
    {
      appearance: "subtle",
      variant: "error",
      class: "border-destructive/30 bg-destructive/10 text-destructive",
    },
    {
      appearance: "subtle",
      variant: "warning",
      class: "border-[#FDE68A] bg-[#FFFBEB] text-[#92400E]",
    },
    {
      appearance: "subtle",
      variant: "info",
      class: "border-border bg-muted text-foreground",
    },
  ],
  defaultVariants: {
    appearance: "subtle",
    variant: "info",
  },
});

const variantIcon = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
} as const;

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof alertVariants> {
  title?: React.ReactNode;
  /** Hides the leading status icon. */
  hideIcon?: boolean;
  /** Renders a dismiss button and calls this when it is pressed. */
  onDismiss?: () => void;
  dismissLabel?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      appearance,
      variant = "info",
      title,
      hideIcon,
      onDismiss,
      dismissLabel = "Dismiss",
      children,
      ...props
    },
    ref,
  ) => {
    const Icon = variantIcon[variant ?? "info"];

    return (
      <div
        ref={ref}
        role={variant === "error" ? "alert" : "status"}
        className={cn(alertVariants({ appearance, variant }), className)}
        {...props}
      >
        {!hideIcon && (
          <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        )}

        <div className="flex-1">
          {title && <div className="font-semibold">{title}</div>}
          {children && (
            <div className={cn(title && "mt-1", "opacity-90")}>{children}</div>
          )}
        </div>

        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label={dismissLabel}
            className="shrink-0 rounded-control p-0.5 opacity-90 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    );
  },
);
Alert.displayName = "Alert";

export { Alert };
