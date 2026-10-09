// src/pages/Services/Services.tsx
//
// Stage 5B. The page keeps its own information architecture — overview rail,
// detailed breakdown, differentiators — and every word of its copy, but now
// shares the application's visual language: PageHeader / Card / Button /
// Marquee and semantic tokens.
//
// Navbar and Footer are still composed here because the /Services routes sit
// outside the shared Layout (AppRoutes.tsx). Changing that would change
// routing, which is out of scope.
//
// SURFACE RULE (see About.tsx): --card is #FFFFFF and --background is
// #F5F9FF, so a card must never sit on a section of its own colour. Sections
// alternate, and the cards invert with them.
//
// Defects this pass closed, all in the Stage 5B report:
//   * The hero background was ServiceHeroImage.jpg — a ZERO-BYTE file. The
//     banner has been rendering with no photograph at all.
//   * The <style jsx> block was not styled-jsx (the package is not
//     installed), so React emitted an unscoped <style> tag and
//     .animate-marquee leaked onto every page in the app.
//   * Each "Read More" <Button> sat inside a <Link> and called
//     stopPropagation() with no handler of its own, so all four did nothing
//     at all — and a <button> inside an <a> is invalid HTML besides.
//   * The four detail blocks were hand-copied JSX; they are one map now.
//   * 6.65MB of 4096px imagery where 1600px derivatives already existed.
import { Link } from "react-router-dom";
import { Award, Clock, LifeBuoy, Lightbulb } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";

// The 1600px derivatives. The originals are 4096px: MobileAppImg.webp alone
// is 3.8MB, and the marquee previously used "CS ServiceCard.webp" (50x50)
// and "AIML ServiceCard.webp" (64x64) — icon sprites stretched across a
// 224px-tall card header.
import SoftwareSolutionsImg from "@/assets/ServicesPageImages/SoftwareSolutionsImg-card.webp";
import AIMLImg from "@/assets/ServicesPageImages/AIMLImg-card.webp";
import CloudSolutionImg from "@/assets/ServicesPageImages/CloudSolutionImg-card.webp";
import MobileAppImg from "@/assets/ServicesPageImages/MobileAppImg-card.webp";

// ---------------------------------------------------------------------------
// Data
//
// One array now drives both the overview rail and the detailed sections. The
// rail had its own copy of the list while the four detail blocks were
// hand-written, so the two could drift. Every string is carried over verbatim.
// ---------------------------------------------------------------------------

interface ServiceEntry {
  /** Preserved from the previous markup so any external deep link still lands. */
  anchorId: string;
  title: string;
  /** Short line, used on the overview rail. */
  summary: string;
  /** Longer lead paragraph, used in the detailed section. */
  detail: string;
  highlightsLabel: string;
  highlights: string[];
  image: string;
  alt: string;
  path: string;
}

const SERVICES: ServiceEntry[] = [
  {
    anchorId: "service-0",
    title: "Software Solutions",
    summary:
      "High-performance web solutions built for scale, combining creativity, functionality, and technology.",
    detail:
      "At Coltek Technologies, we specialize in building high-performance web applications that combine creativity and modern technology.",
    highlightsLabel: "What We Offer:",
    highlights: [
      "Custom website design and development",
      "E-commerce platforms and CMS integration",
      "Website implementation and optimization",
      "SEO and performance enhancement",
    ],
    image: SoftwareSolutionsImg,
    alt: "Software Solutions",
    path: "/Services/SoftwareSolutions",
  },
  {
    anchorId: "service-2",
    title: "AI & ML Automation",
    summary:
      "Captivate with development, AI integrations, natural language, machine learning, and smarter decisions.",
    detail:
      "We help businesses harness artificial intelligence and ML automation to unlock new possibilities.",
    highlightsLabel: "Our solutions include:",
    highlights: [
      "AI model development and training",
      "Predictive analytics and data labeling",
      "Natural Language Processing (NLP)",
      "Integration of AI systems into your workflow",
    ],
    image: AIMLImg,
    alt: "AI & ML Automation",
    path: "/Services/AIML",
  },
  {
    anchorId: "service-1",
    title: "Cloud Solutions",
    summary:
      "Optimize with cloud infrastructure design, migration, management, and secure your data securely from anywhere.",
    detail:
      "Reliable cloud infrastructure to scale your digital operations securely.",
    highlightsLabel: "We offer:",
    highlights: [
      "Cloud strategy & infrastructure setup",
      "Backup & disaster recovery",
      "Cloud migration & deployment",
      "Hybrid & multi-cloud management",
    ],
    image: CloudSolutionImg,
    alt: "Cloud Solutions",
    path: "/Services/CloudSolutions",
  },
  {
    anchorId: "service-3",
    title: "Mobile App Development",
    summary:
      "Build modern and performant mobile applications for Android, iOS, and cross-platform environments.",
    detail:
      "We build modern and performant mobile applications for Android, iOS, and cross-platform environments.",
    highlightsLabel: "Key Features:",
    highlights: [
      "Android & iOS app development",
      "Cross-platform hybrid apps",
      "UI/UX design & prototyping",
      "Testing, deployment & maintenance",
    ],
    image: MobileAppImg,
    alt: "Mobile App Development",
    path: "/Services/MobileAppDevelopment",
  },
];

// Was four PNG sprites between 30x30 and 80x80, rendered into a 56px box.
// lucide is what the rest of the application draws its icons from.
const DIFFERENTIATORS = [
  { Icon: Award, title: "Expertise", subtitle: "Skilled Specialists" },
  { Icon: Clock, title: "Reliable", subtitle: "On-time Delivery" },
  { Icon: Lightbulb, title: "Innovation", subtitle: "Future-Ready Solutions" },
  { Icon: LifeBuoy, title: "Support", subtitle: "Dedicated Assistance" },
];

const SERVICES_GRID_ID = "services-grid";

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const Services = () => {
  const scrollToGrid = () =>
    document
      .getElementById(SERVICES_GRID_ID)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Navbar />

      <main className="flex-1 pt-nav md:pt-nav-lg">
        {/* The brand gradient rather than a photograph: the previous
            background, ServiceHeroImage.jpg, is a zero-byte file. */}
        <PageHeader
          tone="brand"
          size="auto"
          className="py-20 md:py-28"
          align="left"
          title="Our Services"
          description="Comprehensive solutions to help your business grow."
          actions={
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 bg-transparent text-white hover:bg-white/15 hover:text-white"
              onClick={scrollToGrid}
            >
              Get Started
            </Button>
          }
        />

        <ServicesRail />
        <ServiceDetails />
        <WhyChooseUs />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;

// ---------------------------------------------------------------------------
// Overview rail — tinted section, so the cards are white.
// ---------------------------------------------------------------------------

function ServicesRail() {
  return (
    <section
      id={SERVICES_GRID_ID}
      className="scroll-mt-nav-lg bg-background py-section md:py-section-lg"
    >
      <div className="container-page">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
          What we build
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          Four practices, delivered by specialists who stay with your project
          from scoping through support.
        </p>
      </div>

      {/* Full-bleed so cards enter and leave at the viewport edge. The rail
          is the shared Marquee now; the page previously hand-rolled one whose
          keyframes lived in a <style jsx> block that leaked globally. */}
      <div className="mt-10">
        <Marquee label="Our services" tone="light" durationSec={45}>
          {SERVICES.map((service) => (
            <Card
              key={service.path}
              className="group relative flex h-full w-[18rem] flex-col overflow-hidden sm:w-[20rem]"
            >
              <div className="h-44 overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1067}
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-foreground">
                  {/* Stretched link: the whole card is the hit area, but
                      there is exactly one link and one accessible name. */}
                  <Link
                    to={service.path}
                    className="rounded-card after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Detailed sections — white section, so the cards are tinted.
// ---------------------------------------------------------------------------

function ServiceDetails() {
  return (
    <section className="border-y border-border bg-card py-section md:py-section-lg">
      <div className="container-page space-y-8">
        {SERVICES.map((service, index) => {
          // Alternates which side the photograph sits on, as before.
          const imageFirst = index % 2 === 1;

          return (
            <Card
              key={service.path}
              id={service.anchorId}
              variant="muted"
              className="group relative grid scroll-mt-nav-lg grid-cols-1 items-center gap-8 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-10 lg:grid-cols-2 lg:gap-10"
            >
              <div
                className={cn(
                  "h-[240px] overflow-hidden rounded-surface shadow-card md:h-[300px] lg:h-[320px]",
                  imageFirst ? "order-2 lg:order-1" : "lg:order-2",
                )}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1067}
                />
              </div>

              <div
                className={cn(
                  "space-y-4",
                  imageFirst ? "order-1 lg:order-2" : "lg:order-1",
                )}
              >
                <h2 className="text-2xl font-bold text-primary md:text-3xl">
                  {index + 1}. {service.title}
                </h2>

                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {service.detail}
                </p>

                <h3 className="pt-2 text-lg font-semibold text-primary">
                  {service.highlightsLabel}
                </h3>

                <ul className="space-y-2 text-[15px] text-muted-foreground">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-teal" aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* One real link for the whole card. This used to be a
                    <Button> inside a <Link> whose only handler was
                    stopPropagation(), so it blocked the navigation and did
                    nothing itself. */}
                <Button asChild variant="brand" className="mt-2">
                  <Link
                    to={service.path}
                    aria-label={`Read more about ${service.title}`}
                    className="after:absolute after:inset-0"
                  >
                    Read More
                  </Link>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Why choose us
// ---------------------------------------------------------------------------

function WhyChooseUs() {
  return (
    <section className="bg-background py-section md:py-section-lg">
      <div className="container-page">
        <h2 className="mb-10 text-center text-2xl font-bold text-primary md:text-3xl">
          Why Choose Us
        </h2>

        {/* The panel keeps its existing colours. #3E66DF and #00D9FD are both
            documented (DESIGN_SYSTEM.md §5), but #3E66DF is a royal blue that
            matched nothing else on the page — the header above this panel and
            the CTA below it are both the navy -> teal brand gradient, so the
            page carried three unrelated blues. The panel is now the same deep
            navy the Home page uses for its dark sections, inside the brand
            gradient hairline. No colour outside the navy/teal family. */}
        <div className="rounded-card bg-gradient-brand p-[1.5px] shadow-card">
          <div className="rounded-card bg-brand-deep p-8 md:p-10">
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
              {DIFFERENTIATORS.map(({ Icon, title, subtitle }) => (
                <li
                  key={title}
                  className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                >
                  <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-pill bg-brand-teal/15">
                    <Icon
                      className="h-7 w-7 text-brand-teal"
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="text-lg font-bold tracking-wide text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
