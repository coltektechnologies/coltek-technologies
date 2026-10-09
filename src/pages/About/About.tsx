// src/pages/About/About.tsx
//
// Stage 5A. The page keeps its own information architecture — story,
// principles, people — but speaks the same visual language as the rest of the
// app: shared PageHeader / Card / CTASection and semantic tokens throughout.
//
// SURFACE RULE (this is what the first pass got wrong):
// a card must never sit on a section of its own colour. `--card` is #FFFFFF
// and `--background` is #F5F9FF, so a default white Card on a `bg-card`
// section is white-on-white and reads as an empty rectangle. Sections here
// alternate tinted / white, and the cards invert with them — white Cards on
// the tinted sections, `variant="muted"` Cards on the white ones.
//
// Behavioural changes from the pre-Stage-5A page, all in the report:
//   * The milestone click-to-reveal panel is a timeline. The old auto-cycle
//     was broken (its effect depended on `active`, so the first tick set
//     active=0, the effect re-ran, hit the `active !== null` guard and never
//     advanced again) and the cards were <article onClick> with no role,
//     tabIndex or focus state. All four descriptions are visible now.
//   * The CEO block and the team grid are one "Leadership" section.
//   * The hand-rolled CTA is the shared CTASection. Its dead "Learn More"
//     button — no handler, no destination — is now a link to /services.
import React from "react";
import {
  CheckCircle,
  Compass,
  Eye,
  Facebook,
  Flag,
  Globe,
  HandHelping,
  HeartHandshake,
  Instagram,
  Rocket,
  Smile,
  Star,
  Target,
} from "lucide-react";

import Reveal from "../../components/Reveal";
import CTASection from "../../components/CTASection";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { accentAt, type Accent } from "@/lib/accents";
import { cn } from "@/lib/utils";

// Team portraits
import CEOImage from "../../assets/team/ceo.jpg";
import FrederickImg from "../../assets/team/CTO.jpg";
import WilliamsImg from "../../assets/team/william.jpg";
import NancyImg from "../../assets/team/nancy.png";

/** Cards that lift on hover but are not themselves clickable, so no cursor-pointer. */
const LIFT =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

type IconComponent = React.ComponentType<{ className?: string }>;

const MILESTONES: {
  date: string;
  title: string;
  description: string;
  Icon: IconComponent;
}[] = [
  {
    date: "Aug 2025",
    title: "Founding of COLTEK",
    description:
      "A group of passionate young innovators came together to build a company focused on integrity, innovation, and purpose-driven technology.",
    Icon: Flag,
  },
  {
    date: "Sept 2025",
    title: "Core Team Formation",
    description:
      "Our leadership and technical teams were officially formed, establishing a strong foundation for collaboration and excellence.",
    Icon: Target,
  },
  {
    date: "Oct 2025",
    title: "First Projects & Clients",
    description:
      "We began delivering digital solutions, earning trust through professionalism, timely delivery, and consistent quality.",
    Icon: Rocket,
  },
  {
    date: "Nov 2025",
    title: "Website Launch",
    description:
      "COLTEK's official digital presence went live, signaling our readiness to serve clients globally with excellence.",
    Icon: Globe,
  },
];

const PRINCIPLES: { title: string; body: string; Icon: IconComponent }[] = [
  {
    title: "Our Mission",
    body: "Transforming potential into excellence by inspiring growth, fostering innovation, and leading with integrity.",
    Icon: Compass,
  },
  {
    title: "Our Vision",
    body: "To empower individuals and organizations to reach their highest potential.",
    Icon: Eye,
  },
];

const VALUES: { title: string; desc: string; Icon: IconComponent }[] = [
  { title: "Integrity", desc: "Doing what is right.", Icon: Smile },
  {
    title: "Accountability",
    desc: "Owning actions and outcomes.",
    Icon: CheckCircle,
  },
  {
    title: "Empathy",
    desc: "Understanding and compassion.",
    Icon: HeartHandshake,
  },
  { title: "Excellence", desc: "High standards always.", Icon: Star },
  { title: "Service", desc: "People-first commitment.", Icon: HandHelping },
];

/** X / Twitter has no lucide icon, so the original inline mark is kept. */
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26L23.25 21.75h-6.843l-5.003-6.536-5.75 6.536H2.344l7.73-8.79L1.125 2.25H8.12l4.533 5.993 5.59-5.993z" />
    </svg>
  );
}

// Icon-only links need an accessible name, and every target="_blank" needs
// rel="noopener noreferrer". Neither was present before.
const CEO_SOCIALS: { label: string; href: string; Icon: IconComponent }[] = [
  {
    label: "Collins Boansi on Facebook",
    href: "https://www.facebook.com/CollinsBoansi",
    Icon: Facebook,
  },
  {
    label: "Collins Boansi on Instagram",
    href: "https://www.instagram.com/boansicollins",
    Icon: Instagram,
  },
  {
    label: "Collins Boansi on X",
    href: "https://twitter.com/Profs123456",
    Icon: XIcon,
  },
];

const TEAM = [
  {
    name: "Owusu Bonsu Frederick",
    role: "Chief Technology Officer",
    image: FrederickImg,
  },
  {
    name: "Owusu Williams",
    role: "Human Resource Manager",
    image: WilliamsImg,
  },
  {
    name: "Ampaabeng Kyeremeh Nancy",
    role: "IT Project Manager",
    image: NancyImg,
  },
];

// ---------------------------------------------------------------------------
// Shared pieces
// ---------------------------------------------------------------------------

function SectionHeading({
  title,
  description,
  align = "center",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
      <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
            align === "left" && "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function IconChip({
  Icon,
  accent,
  className,
}: {
  Icon: IconComponent;
  accent: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-pill",
        accent.chip,
        className,
      )}
    >
      <Icon className={cn("h-6 w-6", accent.icon)} />
    </span>
  );
}

// ---------------------------------------------------------------------------
// Our Story — timeline. Tinted section, so the cards are white.
// ---------------------------------------------------------------------------

function OurStory() {
  return (
    <Reveal>
      <section className="bg-background py-section md:py-section-lg">
        <div className="container-page">
          <SectionHeading
            title="Our Story"
            description="COLTEK was founded in August 2025 by a team united by a shared mission: to build technology that empowers, inspires growth, and drives meaningful progress."
          />

          {/* A sequence, so an <ol>. The old markup was four loose
              <article onClick> elements with no role and no focus state. */}
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map(({ date, title, description, Icon }, i) => {
              const accent = accentAt(i);

              return (
                <li key={date}>
                  <Card
                    className={cn("flex h-full flex-col overflow-hidden", LIFT)}
                  >
                    {/* The accent bar is what carries the timeline colour;
                        a connecting rule between cards does not survive the
                        stacked mobile layout. */}
                    <div
                      className={cn("h-1 w-full", accent.bar)}
                      aria-hidden="true"
                    />

                    <div className="flex flex-1 flex-col p-6">
                      <IconChip Icon={Icon} accent={accent} />

                      <p
                        className={cn(
                          "mt-4 text-sm font-semibold",
                          accent.icon,
                        )}
                      >
                        {date}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-primary">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Mission & Vision — white section, so the cards are tinted.
// ---------------------------------------------------------------------------

function MissionAndVision() {
  return (
    <Reveal>
      <section className="border-y border-border bg-card py-section md:py-section-lg">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {PRINCIPLES.map(({ title, body, Icon }, i) => {
            const accent = accentAt(i);

            return (
              <Card
                key={title}
                variant="muted"
                className={cn("flex gap-5 p-6 md:p-8", LIFT)}
              >
                <IconChip Icon={Icon} accent={accent} />

                <div>
                  <h2 className="text-xl font-bold text-primary">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Core Values — tinted section, so the cards are white.
// ---------------------------------------------------------------------------

function CoreValues() {
  return (
    <Reveal>
      <section className="bg-background py-section md:py-section-lg">
        <div className="container-page">
          <SectionHeading
            title="Core Values"
            description="Our values guide how we lead, collaborate, and create meaningful impact."
          />

          <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {VALUES.map(({ title, desc, Icon }, i) => {
              const accent = accentAt(i);

              return (
                <li key={title}>
                  <Card
                    className={cn(
                      "flex h-full flex-col items-center p-6 text-center",
                      LIFT,
                    )}
                  >
                    <IconChip Icon={Icon} accent={accent} className="mb-4" />
                    <h3 className="text-base font-bold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Leadership — the CEO feature and the team grid, previously two sections.
// White section, so both the CEO panel and the team cards are tinted.
// ---------------------------------------------------------------------------

function Leadership() {
  return (
    <Reveal>
      <section className="border-y border-border bg-card py-section md:py-section-lg">
        <div className="container-page">
          <SectionHeading
            title="Leadership"
            description="The people accountable for the work we deliver."
          />

          {/* CEO */}
          <Card
            variant="muted"
            className="mt-12 flex flex-col items-center gap-8 p-8 text-center md:flex-row md:items-center md:gap-10 md:p-10 md:text-left"
          >
            <img
              src={CEOImage}
              alt="Boansi Kyeremateng Collins"
              loading="lazy"
              decoding="async"
              width={600}
              height={559}
              className="h-44 w-44 shrink-0 rounded-pill object-cover shadow-card ring-4 ring-card md:h-56 md:w-56"
            />

            <div>
              <h3 className="text-2xl font-bold text-primary md:text-3xl">
                Boansi Kyeremateng Collins
              </h3>
              <p className="mt-1 text-base font-semibold text-brand-teal">
                Chief Executive Officer
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Collins leads with innovation, integrity, and a long-term vision
                for COLTEK Technologies, inspiring a culture built on
                excellence, growth, and purpose-driven impact.
              </p>

              <ul className="mt-6 flex justify-center gap-3 md:justify-start">
                {CEO_SOCIALS.map(({ label, href, Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-pill border border-border bg-card text-primary transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal hover:text-brand-teal hover:shadow-card"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Team */}
          <h3 className="mt-16 text-center text-xl font-bold text-primary md:text-2xl">
            Meet Our Team
          </h3>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map(({ name, role, image }) => (
              <li key={name}>
                <Card
                  variant="muted"
                  className={cn(
                    "flex h-full flex-col items-center p-8 text-center",
                    LIFT,
                  )}
                >
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="mb-5 h-36 w-36 rounded-pill object-cover shadow-card ring-4 ring-card"
                  />
                  {/* A heading, so each teammate appears in the document
                      outline under "Meet Our Team". They were plain <div>s. */}
                  <h4 className="text-lg font-bold text-foreground">{name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{role}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const About: React.FC = () => {
  return (
    // pt-nav offsets the fixed navbar. The page previously started at top:0
    // and rendered underneath it — Home and Portfolio both already do this.
    <div className="min-h-screen w-full bg-background pt-nav text-foreground md:pt-nav-lg">
      {/* The brand gradient rather than a photograph: about-hero.webp is
          1271x451, which had to be upscaled and hard-cropped to fill a
          420px-tall full-bleed banner. */}
      <PageHeader
        tone="brand"
        size="auto"
        className="py-20 md:py-28"
        title="About Us"
        description="Building a future driven by innovation, integrity, and purpose."
      />

      <OurStory />
      <MissionAndVision />
      <CoreValues />
      <Leadership />

      <CTASection
        title="Let's help make your idea a reality"
        description="We bring your vision to life with innovation and excellence."
        primaryButtonText="Get Started"
        secondaryButtonText="Explore services"
        secondaryHref="/services"
      />
    </div>
  );
};

export default About;
