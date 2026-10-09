// ========== PAGE HEADER ==========
// One hero/page-header treatment (DESIGN_SYSTEM.md §17).
//
// The app currently has six divergent hero implementations (About, Contact,
// Portfolio, Legal, Services and the service detail pages) that differ in
// height, alignment, overlay strength and type scale. This component covers
// all six shapes so they can converge in the page phases.
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headerVariants = cva("relative w-full overflow-hidden", {
  variants: {
    size: {
      sm: "h-[260px] md:h-[340px] lg:h-[420px]",
      md: "h-[300px] md:h-[380px] lg:h-[450px]",
      /** Content-sized rather than fixed-height. */
      auto: "py-12 md:py-16",
    },
    tone: {
      /** Renders on the page background; dark text. */
      default: "",
      /**
       * The navy -> teal brand gradient (DESIGN_SYSTEM.md §13), for pages
       * with no photograph good enough to carry a full-bleed banner.
       */
      brand: "bg-gradient-brand",
    },
    align: {
      left: "",
      center: "",
      right: "",
    },
  },
  defaultVariants: {
    size: "sm",
    tone: "default",
    align: "center",
  },
});

const alignment = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
} as const;

export interface PageHeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
    VariantProps<typeof headerVariants> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Small line above the title — breadcrumb or kicker. */
  eyebrow?: React.ReactNode;
  /** Background image src. When omitted the header renders on `background`. */
  image?: string;
  /** Alt text for the background image. Decorative by default. */
  imageAlt?: string;
  /** Tailwind opacity step for the dark scrim over the image. */
  overlayClassName?: string;
  /** Buttons or links rendered under the description. */
  actions?: React.ReactNode;
  /**
   * An optional visual beside the copy — a mockup, illustration or photo.
   * When present the header becomes a two-column grid at lg and the media
   * is hidden below it, so a decorative visual never squeezes the headline
   * on a phone. Service detail pages use this for their hero artwork.
   */
  media?: React.ReactNode;
}

const PageHeader = ({
  className,
  size,
  tone,
  align = "center",
  title,
  description,
  eyebrow,
  image,
  imageAlt = "",
  overlayClassName = "bg-black/55",
  actions,
  media,
  ...props
}: PageHeaderProps) => {
  // Both a photograph and the brand gradient give a dark backdrop, so the
  // type has to invert either way.
  const onDark = Boolean(image) || tone === "brand";

  return (
    <section
      className={cn(headerVariants({ size, tone, align }), className)}
      {...props}
    >
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            aria-hidden={imageAlt ? undefined : true}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className={cn("absolute inset-0", overlayClassName)} />
        </>
      )}

      {/* The gradient is a flat wash on its own, so it gets a faint grid to
          give the band some structure. Purely decorative, and it sits under
          the content, which is relative z-10. */}
      {tone === "brand" && (
        <div className="bg-grid-lines absolute inset-0" aria-hidden="true" />
      )}

      <div
        className={cn(
          "container-page relative z-10",
          media
            ? "grid items-center gap-12 lg:grid-cols-2"
            : "flex h-full flex-col justify-center",
          !media && alignment[align ?? "center"],
        )}
      >
        <div className={cn(media && alignment[align ?? "center"])}>
          {eyebrow && (
            <div
              className={cn(
                "mb-2 text-sm",
                onDark ? "text-white/80" : "text-muted-foreground",
              )}
            >
              {eyebrow}
            </div>
          )}

          <h1
            className={cn(
              "text-3xl font-extrabold md:text-4xl lg:text-5xl",
              onDark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "mt-4 max-w-2xl text-sm md:text-base",
                align === "center" && "mx-auto",
                onDark ? "text-white/90" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
          )}

          {actions && (
            <div className="mt-6 flex flex-wrap gap-3">{actions}</div>
          )}
        </div>

        {media && <div className="hidden justify-center lg:flex">{media}</div>}
      </div>
    </section>
  );
};

PageHeader.displayName = "PageHeader";

export { PageHeader };
