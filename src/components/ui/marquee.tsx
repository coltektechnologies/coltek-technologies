// ========== MARQUEE ==========
// An infinitely looping card rail (CLAUDE.md §6 — one implementation, reused
// by every Home page row rather than per-section copies).
//
// How the loop works: the track renders the item set twice and animates by
// exactly one copy's width, so the second copy arrives where the first began
// and the seam is invisible. The keyframes live in index.css §5.
//
// Motion controls:
//   • hovering the rail pauses it (CSS :hover)
//   • focusing any card inside pauses it (CSS :focus-within), so keyboard
//     users are not chased by a moving target
//   • the Pause button stops it outright, which is what WCAG 2.2.2 asks for
//   • prefers-reduced-motion turns it into a plain scrollable row
import * as React from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MarqueeProps {
  children: React.ReactNode;
  /** Travel direction. "left" scrolls content leftwards, i.e. left-to-right reading order moves out to the left. */
  direction?: "left" | "right";
  /** One full cycle, in seconds. Larger = slower. */
  durationSec?: number;
  /** Gap between cards. Must match the CSS var used by the keyframes. */
  gapRem?: number;
  /** Accessible name for the rail. */
  label: string;
  /** Renders the pause/play control. */
  showPauseControl?: boolean;
  /**
   * Which surface the rail sits on. Only affects the pause control, which
   * would otherwise be white-on-white on a light section.
   */
  tone?: "dark" | "light";
  className?: string;
  itemClassName?: string;
}

const Marquee = ({
  children,
  direction = "left",
  durationSec = 40,
  gapRem = 1.5,
  label,
  showPauseControl = true,
  tone = "dark",
  className,
  itemClassName,
}: MarqueeProps) => {
  const [paused, setPaused] = React.useState(false);
  const items = React.Children.toArray(children);

  // Both copies are flat children of the track. The duplicate is marked
  // per-item rather than wrapped, so it can be hidden from assistive tech and
  // switched off under reduced motion without a `display: contents` wrapper.
  const renderSet = (duplicate: boolean) =>
    items.map((child, index) => (
      <li
        key={`${duplicate ? "dup" : "set"}-${index}`}
        className={cn(
          "marquee-item",
          duplicate && "marquee-duplicate",
          itemClassName,
        )}
        aria-hidden={duplicate || undefined}
        // The duplicate is decoration; keep its links out of the tab order.
        {...(duplicate ? { inert: true } : {})}
      >
        {child}
      </li>
    ));

  return (
    <div className={cn("relative", className)}>
      <div
        className="marquee-viewport"
        style={
          {
            "--marquee-gap": `${gapRem}rem`,
            "--marquee-duration": `${durationSec}s`,
          } as React.CSSProperties
        }
      >
        <ul
          className={cn(
            "marquee-track",
            direction === "left" ? "marquee-track-left" : "marquee-track-right",
          )}
          data-paused={paused ? "true" : undefined}
          aria-label={label}
        >
          {renderSet(false)}
          {renderSet(true)}
        </ul>
      </div>

      {showPauseControl && (
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            /* Set explicitly rather than assembled from a visible word plus a
               sr-only span: the accessible-name algorithm trims each text node
               before joining them, which produced "PauseOur services". */
            aria-label={`${paused ? "Play" : "Pause"} ${label}`}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              tone === "dark"
                ? "text-white/60 hover:bg-white/10 hover:text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {paused ? (
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
};

Marquee.displayName = "Marquee";

export { Marquee };
