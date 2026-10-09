// src/pages/Portfolio/Portfolio.tsx
//
// Stage 5C. The page keeps its own information architecture — filterable
// grid, featured case study, closing CTA — and its copy, but now shares the
// application's visual language: PageHeader / Card / Badge / Button /
// EmptyState and semantic tokens.
//
// SURFACE RULE (see About.tsx): --card is #FFFFFF and --background is
// #F5F9FF, so a card must never sit on a section of its own colour.
//
// Defects this pass closed, all in the Stage 5C report:
//   * The page rendered its own <main> INSIDE the <main> that Layout already
//     renders. Only one <main> per document; the nesting broke the skip link
//     and landmark navigation.
//   * Every project <article> carried aria-live="polite" — seven live
//     regions, so any state change re-announced whole cards. There is now one
//     status region, for the filter result count and the "coming soon" notice.
//   * Cards were wrapped in <Reveal> AND ran a second opacity/translate
//     animation off a setTimeout stagger, so two systems fought over the same
//     property. `delay={isVisible ? 80 : 0}` also only changed after the
//     reveal had already happened.
//   * "View" and "Link" were two controls pointing at the same URL with two
//     different accessible names, each written twice through a ternary.
//   * The featured blurb hardcoded "— a comprehensive dashboard for tracking
//     product performance and analytics", which is only true of one project.
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Cpu,
  ExternalLink,
  Globe,
  SearchX,
  Smartphone,
  Tag,
  Zap,
} from "lucide-react";

import Reveal from "../../components/Reveal";
import CTASection from "../../components/CTASection";
import { projects, type Category, type Project } from "../../data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";

const CATEGORIES: {
  key: Category;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { key: "All", Icon: Tag },
  { key: "Web Development", Icon: Globe },
  { key: "Mobile Apps", Icon: Smartphone },
  { key: "Cloud", Icon: Cloud },
  { key: "AI Solutions", Icon: Cpu },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [comingSoonId, setComingSoonId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const featured = useMemo(
    () => projects.find((p) => p.featured) ?? projects[0],
    [],
  );

  const announceComingSoon = (id: string) => {
    setComingSoonId(id);
    window.setTimeout(() => setComingSoonId(null), 1800);
  };

  const comingSoonProject = projects.find((p) => p.id === comingSoonId);

  return (
    // No <main> here: Layout already renders one, and this page used to nest
    // a second inside it.
    <div className="min-h-screen bg-background pt-nav text-foreground md:pt-nav-lg">
      <PageHeader
        tone="brand"
        size="auto"
        className="py-20 md:py-28"
        align="left"
        title="Our Projects & Case Studies"
        description="Discover how COLTEK Technologies helps businesses innovate and grow through tailored agile solutions."
        actions={
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/50 bg-transparent text-white hover:bg-white/15 hover:text-white"
          >
            <Link to="/contact">Start Your Project</Link>
          </Button>
        }
      />

      <FilterBar active={activeCategory} onChange={setActiveCategory} />

      {/* One status region for the whole page. Seven cards each carrying
          aria-live="polite" meant any change re-announced entire cards. */}
      <p aria-live="polite" className="sr-only">
        {comingSoonProject
          ? `${comingSoonProject.title}: full case study coming soon.`
          : `Showing ${filtered.length} ${
              filtered.length === 1 ? "project" : "projects"
            }${activeCategory === "All" ? "" : ` in ${activeCategory}`}.`}
      </p>

      <section className="bg-background py-section md:py-section-lg">
        <div className="container-page">
          {filtered.length === 0 ? (
            <EmptyState
              icon={<SearchX className="h-8 w-8 text-muted-foreground" />}
              title="No projects in this category yet"
              description="We're still writing these up. Try another category, or tell us what you're building."
              action={
                <Button
                  variant="brand"
                  onClick={() => setActiveCategory("All")}
                >
                  Show all projects
                </Button>
              }
            />
          ) : (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <li key={project.id}>
                  <ProjectCard
                    project={project}
                    comingSoon={comingSoonId === project.id}
                    onComingSoon={announceComingSoon}
                  />
                </li>
              ))}
            </ul>
          )}

          <FeaturedProject
            project={featured}
            comingSoon={comingSoonId === featured.id}
            onComingSoon={announceComingSoon}
          />
        </div>
      </section>

      {/* Was a hand-rolled gradient panel duplicating the featured block's
          CTA, with the same heading twice on one page. */}
      <CTASection
        title="Let us create your project today"
        description="Ready to build? Talk to our team and we'll scope your project."
        primaryButtonText="Start Your Project"
        secondaryButtonText="See our services"
        secondaryHref="/services"
      />
    </div>
  );
};

export default Portfolio;

// ---------------------------------------------------------------------------
// Filter bar
// ---------------------------------------------------------------------------

function FilterBar({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="sticky top-nav z-30 border-y border-border bg-card/90 backdrop-blur-sm md:top-nav-lg">
      <div className="container-page">
        <ul
          className="scrollbar-hide flex items-center gap-3 overflow-x-auto py-3"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map(({ key, Icon }) => {
            const isActive = key === active;

            return (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => onChange(key)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex items-center gap-2 whitespace-nowrap rounded-pill px-3 py-2 text-sm font-medium transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-card ring-2 ring-brand-teal/30"
                      : "border border-border bg-card text-foreground hover:bg-muted",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4",
                      isActive ? "text-primary-foreground" : "text-primary",
                    )}
                  />
                  {key}
                  {isActive && (
                    <span
                      className="h-2 w-2 rounded-pill bg-brand-teal"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Project card
// ---------------------------------------------------------------------------

function ProjectCard({
  project,
  comingSoon,
  onComingSoon,
}: {
  project: Project;
  comingSoon: boolean;
  onComingSoon: (id: string) => void;
}) {
  return (
    <Reveal>
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={`${project.title} interface`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={800}
            height={740}
          />

          <Badge
            variant="overlay"
            shape="rounded"
            className="absolute left-3 top-3"
          >
            {project.category}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>

          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.excerpt}
          </p>

          {/* The first tag used to be printed beside the title as well as
              here, so every card showed it twice. */}
          {project.tags && project.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-1">
            {/* One control, not two. "View" and "Link" were separate buttons
                pointing at the same destination with different names. */}
            {project.url ? (
              <Button asChild variant="brand" size="sm">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                >
                  Visit site
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onComingSoon(project.id)}
                aria-label={`${project.title} case study — coming soon`}
              >
                Case study
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            )}
          </div>

          {comingSoon && (
            <p className="inline-flex items-center gap-2 rounded-control border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
              <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
              Coming soon — full case study
            </p>
          )}
        </div>
      </Card>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Featured project
// ---------------------------------------------------------------------------

function FeaturedProject({
  project,
  comingSoon,
  onComingSoon,
}: {
  project: Project;
  comingSoon: boolean;
  onComingSoon: (id: string) => void;
}) {
  return (
    <Reveal>
      <Card className="mt-12 flex flex-col items-center gap-6 overflow-hidden p-6 md:flex-row md:p-8">
        <div className="h-56 w-full shrink-0 overflow-hidden rounded-surface bg-muted md:w-1/3">
          <img
            src={project.image}
            alt={`${project.title} interface`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={800}
            height={740}
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3">
            <Badge variant="brand">Featured</Badge>
            <span className="ml-auto text-sm text-muted-foreground">
              {project.category}
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-bold text-primary">
            {project.title}
          </h2>

          {/* The trailing sentence here used to be hardcoded prose about a
              product dashboard, which stops being true the moment the
              `featured` flag moves to another project. */}
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {project.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.url ? (
              <Button asChild variant="brand">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                >
                  Visit site
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => onComingSoon(project.id)}
              >
                Explore Full Case Study
              </Button>
            )}

            {/* The duplicate of this CTA used to pulse forever via
                animate-[pulse_2.5s_infinite]. */}
            <Button asChild variant="brand">
              <Link to="/contact">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {comingSoon && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-control border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
              <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
              Coming soon — full case study
            </p>
          )}
        </div>
      </Card>
    </Reveal>
  );
}
