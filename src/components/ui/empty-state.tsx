// ========== EMPTY STATE ==========
// The app had no empty state at all — Portfolio's category filter renders a
// blank grid when a category has no projects (CLAUDE.md §13, §15).
import * as React from "react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional call to action, typically a <Button>. */
  action?: React.ReactNode;
}

const EmptyState = ({
  className,
  icon,
  title,
  description,
  action,
  ...props
}: EmptyStateProps) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center gap-3 px-6 py-16 text-center",
      className,
    )}
    {...props}
  >
    {icon && (
      <div
        className="flex h-14 w-14 items-center justify-center rounded-pill bg-muted text-muted-foreground [&_svg]:h-6 [&_svg]:w-6"
        aria-hidden="true"
      >
        {icon}
      </div>
    )}

    <h3 className="text-lg font-semibold text-foreground">{title}</h3>

    {description && (
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
    )}

    {action && <div className="mt-2">{action}</div>}
  </div>
);

EmptyState.displayName = "EmptyState";

export { EmptyState };
