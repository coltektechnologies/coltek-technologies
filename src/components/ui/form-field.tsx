// ========== FORM FIELD ==========
// Wraps a label + control + help/error text and wires up the aria plumbing
// so every form in the app reports errors the same way (CLAUDE.md §12, §17).
import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export interface FormFieldProps {
  /** Field id; also used to derive the help/error element ids. */
  id: string;
  label: React.ReactNode;
  required?: boolean;
  /** Validation message. When set, the control is described by it. */
  error?: string;
  /** Supporting hint shown under the control when there is no error. */
  hint?: React.ReactNode;
  tone?: "default" | "onDark";
  className?: string;
  /** Receives the aria props that must land on the control. */
  children: (controlProps: {
    id: string;
    "aria-describedby"?: string;
    "aria-invalid"?: true;
  }) => React.ReactNode;
}

const FormField = ({
  id,
  label,
  required,
  error,
  hint,
  tone = "default",
  className,
  children,
}: FormFieldProps) => {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = error ? errorId : hint ? hintId : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={id} tone={tone} required={required}>
        {label}
      </Label>

      {children({
        id,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
      })}

      {error ? (
        <p id={errorId} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p
          id={hintId}
          className={cn(
            "text-xs",
            tone === "onDark" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
};

FormField.displayName = "FormField";

export { FormField };
