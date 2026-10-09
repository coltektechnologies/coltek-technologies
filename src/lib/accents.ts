// ========== ACCENT CYCLE ==========
// A small rotating set of accent colours for icon chips and rules, used
// wherever a page shows a row of otherwise-identical items (About's
// milestones and core values, Contact's channel cards).
//
// All four are drawn from DESIGN_SYSTEM.md §5 and already existed in the
// codebase. They replace the undocumented pastels — #5EC9F5, #FFB766,
// #7DE3C7, #8FB4FF, #9EE3FF — that About and Contact had each invented
// separately and which appear nowhere in the design system.
//
// Class strings are written out in full because the Tailwind scanner reads
// source text: it cannot resolve `bg-${name}/10`.

export interface Accent {
  /** Tinted chip background. */
  chip: string;
  /** Icon / label colour. */
  icon: string;
  /** Solid fill, for rules and bars. */
  bar: string;
}

export const ACCENTS: readonly Accent[] = [
  { chip: "bg-brand-navy/10", icon: "text-brand-navy", bar: "bg-brand-navy" },
  { chip: "bg-brand-teal/15", icon: "text-brand-teal", bar: "bg-brand-teal" },
  { chip: "bg-brand-blue/10", icon: "text-brand-blue", bar: "bg-brand-blue" },
  { chip: "bg-brand-aqua/15", icon: "text-brand-aqua", bar: "bg-brand-aqua" },
] as const;

/** Cycles through ACCENTS, so any list length is safe. */
export const accentAt = (index: number): Accent =>
  ACCENTS[index % ACCENTS.length];
