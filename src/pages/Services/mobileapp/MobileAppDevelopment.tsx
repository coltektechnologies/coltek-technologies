// src/pages/Services/mobileapp/MobileAppDevelopment.tsx
//
// Stage 5E. Brought into line with its three sibling service pages and with
// the rest of the application. Every word of copy is unchanged.
//
// What was wrong:
//   * The page was DARK (bg-gray-900 root, #000000 hero, bg-gray-950 section)
//     while SoftwareSolutions, AIML and CloudSolutions are all bg-white. Four
//     pages reached from the same grid, one of them inverted.
//   * Its <style> block redefined `@keyframes float` and `float-delayed`,
//     which index.css ALSO defines. React injects a <style> into <head> after
//     the stylesheet, so this page's copy (-15px/3s vs -20px/6s) won and
//     stayed won — silently changing CTASection's blobs on every other page
//     for the rest of the session. The animations now live in index.css §5.
//   * Two className template literals interpolated Tailwind classes:
//     `hover:${benefit.glow}` and `group-hover:${service.colorClass}`. The
//     Tailwind scanner reads source text, so neither ever produced any CSS —
//     they were dead styling.
//   * `perspective-1000` and `rotate-y-6` are not Tailwind utilities and
//     emitted nothing either.
//   * 18 arbitrary accent colours across the services and benefits grids,
//     none from DESIGN_SYSTEM.md.
//   * h1 at text-7xl against text-5xl everywhere else.
//
// Navbar/Footer are still composed here because the /Services routes sit
// outside the shared Layout (AppRoutes.tsx). Changing that changes routing.
import { Link } from "react-router-dom";
import {
  Apple,
  Code2,
  Database,
  Layers,
  Palette,
  Plug,
  Rocket,
  Server,
  Shield,
  Smartphone,
  SquareTerminal,
  User,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TechStack from "@/components/TechStack";
import ServicesCTA from "@/components/ServicesCTA";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { accentAt } from "@/lib/accents";
import { cn } from "@/lib/utils";

interface TechCategory {
  name: string;
  icon: React.FC<LucideProps>;
  techs: string[];
}

type IconComponent = React.ComponentType<{ className?: string }>;

// ---------------------------------------------------------------------------
// Content — copy carried over verbatim
// ---------------------------------------------------------------------------

const HERO_BENEFITS: { Icon: IconComponent; title: string }[] = [
  { Icon: Zap, title: "Optimized Performance" },
  { Icon: User, title: "Intuitive UI/UX" },
  { Icon: Shield, title: "Enterprise-Grade Security" },
  { Icon: Rocket, title: "Fast Time-to-Market" },
];

const SERVICES: {
  Icon: IconComponent;
  title: string;
  description: string;
  features: string[];
}[] = [
  {
    Icon: Apple,
    title: "Native iOS Development",
    description:
      "Build powerful and intuitive iOS applications using Swift and SwiftUI with full access to Apple ecosystem integration.",
    features: [
      "Swift & SwiftUI development",
      "App Store optimization",
      "Apple Watch & iPad apps",
      "iCloud & Core Data",
    ],
  },
  {
    Icon: SquareTerminal,
    title: "Native Android Development",
    description:
      "Create robust Android applications with Kotlin and Jetpack Compose for Android devices.",
    features: [
      "Kotlin & Jetpack Compose",
      "Material Design 3",
      "Google Play services",
      "Firebase integration",
    ],
  },
  {
    Icon: Layers,
    title: "Cross-Platform Apps",
    description:
      "Develop once, deploy everywhere with React Native and Flutter for consistent experiences.",
    features: [
      "React Native & Flutter",
      "Code reusability",
      "Native performance",
      "Single codebase",
    ],
  },
  {
    Icon: Palette,
    title: "UI/UX Design & Prototyping",
    description:
      "Create stunning, intuitive interfaces that work seamlessly across all devices.",
    features: [
      "User research & wireframes",
      "Design systems",
      "Usability testing",
      "High-fidelity prototypes",
    ],
  },
  {
    Icon: Wrench,
    title: "App Maintenance & Support",
    description:
      "Keep your app running smoothly with regular updates and performance monitoring.",
    features: [
      "Regular updates",
      "Bug fixing",
      "Performance monitoring",
      "OS compatibility",
    ],
  },
  {
    Icon: Plug,
    title: "API & Backend Integration",
    description:
      "Connect your app to any backend service with RESTful APIs and GraphQL.",
    features: [
      "RESTful API integration",
      "GraphQL implementation",
      "Third-party services",
      "Real-time data sync",
    ],
  },
];

const BENEFITS: { Icon: IconComponent; title: string; description: string }[] =
  [
    {
      Icon: Code2,
      title: "Expert & Certified Team",
      description:
        "Experienced developers skilled in native and cross-platform technologies (Swift, Kotlin, Flutter, React Native).",
    },
    {
      Icon: Palette,
      title: "User-Centric UI/UX",
      description:
        "We design intuitive and accessible interfaces that guarantee high user adoption and satisfaction.",
    },
    {
      Icon: Layers,
      title: "Agile & Transparent Process",
      description:
        "Flexible development approach with regular sprints, demos, and continuous feedback loops.",
    },
    {
      Icon: Shield,
      title: "Rigorous Quality Assurance",
      description:
        "Comprehensive testing, performance audits, and security checks across all target devices and OS versions.",
    },
    {
      Icon: Server,
      title: "Scalable & Future-Proof Code",
      description:
        "Apps built with modular architecture and clean code standards ready to handle massive user growth.",
    },
    {
      Icon: Plug,
      title: "Post-Launch Partnership",
      description:
        "Dedicated maintenance, monitoring, updates, and feature additions to ensure long-term success.",
    },
  ];

const DEVELOPMENT_STEPS = [
  {
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and app requirements. This phase includes market research, competitor analysis, and defining project scope and timelines.",
    position: "left" as const,
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive and visually appealing interfaces that work seamlessly across all devices. We focus on user experience, accessibility, and brand consistency while following modern design guidelines.",
    position: "right" as const,
  },
  {
    title: "Development",
    description:
      "Using agile methodology, we build your app with clean, maintainable code and regular sprints. We keep you involved throughout with frequent updates and feature demos to ensure the app meets your expectations.",
    position: "left" as const,
  },
  {
    title: "Testing & QA",
    description:
      "Comprehensive testing across devices and OS versions to ensure top quality. We perform functional testing, performance testing, security audits, and user acceptance testing before launch.",
    position: "right" as const,
  },
  {
    title: "Launch & Deployment",
    description:
      "We handle the complete app submission process, including app store optimization, metadata setup, and compliance checks. Our team ensures a smooth launch on both Apple App Store and Google Play Store.",
    position: "left" as const,
  },
  {
    title: "Support & Maintenance",
    description:
      "Post-launch support includes monitoring app performance and analytics, fixing bugs promptly, releasing regular updates for new OS versions, and adding new features based on user feedback to keep your app current and performing well.",
    position: "right" as const,
  },
];

const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Native",
    icon: Smartphone,
    techs: ["Swift", "Kotlin", "Java", "Objective-C"],
  },
  {
    name: "Cross-Platform",
    icon: Layers,
    techs: ["React Native", "Flutter", "Xamarin", "Ionic"],
  },
  {
    name: "Backend",
    icon: Server,
    techs: ["Node.js", "Python (Django/Flask)", "Go", "Firebase"],
  },
  {
    name: "Databases & Cloud",
    icon: Database,
    techs: ["MongoDB", "PostgreSQL", "AWS", "Google Cloud", "Azure"],
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const MobileAppDevelopment = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Navbar />

      <main className="flex-1 pt-nav md:pt-nav-lg">
        <PageHeader
          tone="brand"
          size="auto"
          className="py-20 md:py-28"
          align="left"
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              Mobile App Development
            </span>
          }
          title="Build Cutting-Edge Mobile Experiences"
          description="Transform your ideas into high-performance, market-ready applications for iOS, Android, and cross-platform ecosystems."
          actions={
            <>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/50 bg-transparent text-white hover:bg-white/15 hover:text-white"
              >
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </>
          }
          media={<PhoneMockup />}
        />

        <HeroBenefits />
        <ServicesGrid />
        <WhyChoose />

        <TechStack categories={TECH_CATEGORIES} themeColor="blue" />
        <DevelopmentProcess steps={DEVELOPMENT_STEPS} />

        <ServicesCTA
          primaryButtonText="Start Your App Project"
          secondaryButtonText="Schedule Consultation"
        />
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;

// ---------------------------------------------------------------------------
// Phone mockup — the page's distinctive visual, kept and retoned.
// ---------------------------------------------------------------------------

function PhoneMockup() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Ambient glow. `animate-pulse-slow` now resolves from index.css §5
          rather than from a runtime <style> tag. */}
      <div className="animate-pulse-slow absolute inset-x-20 inset-y-10 z-0 rounded-pill bg-white/20 blur-[80px]" />

      {[
        { Icon: Apple, pos: "-left-12 top-16", delay: "0s" },
        { Icon: SquareTerminal, pos: "-right-12 top-40", delay: "0.5s" },
        { Icon: Code2, pos: "-left-12 bottom-24", delay: "1s" },
      ].map(({ Icon, pos, delay }) => (
        <div
          key={pos}
          className={cn(
            "animate-float absolute flex h-16 w-16 items-center justify-center rounded-surface border border-white/30 bg-white/10 shadow-2xl backdrop-blur-md",
            pos,
          )}
          style={{ animationDelay: delay }}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
      ))}

      <div className="relative z-10 h-[600px] w-80 rounded-[3rem] border-8 border-white/30 bg-brand-deep p-3 shadow-2xl">
        <div className="absolute left-1/2 top-0 z-20 h-7 w-40 -translate-x-1/2 rounded-b-3xl bg-brand-deep" />

        <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-deep via-primary to-brand-teal/40">
          <div className="flex items-center justify-between px-8 pb-2 pt-3 text-xs text-white">
            <span className="font-semibold">9:42</span>
            <span className="flex items-center gap-1 text-white/70">
              {/* Was three emoji. */}
              <Zap className="h-3 w-3" />
              <Shield className="h-3 w-3" />
            </span>
          </div>

          <div className="px-6 pt-8">
            <p className="mb-2 text-2xl font-bold text-white">Coltek App</p>
            <p className="mb-6 text-sm text-white/80">
              Designed for Excellence
            </p>

            <div className="space-y-3">
              {[
                { Icon: Palette, label: "Modern Design" },
                { Icon: Zap, label: "Fast Performance" },
                { Icon: Shield, label: "Secure & Safe" },
                { Icon: User, label: "User Friendly" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-surface border border-white/20 bg-white/5 p-4 backdrop-blur-md"
                >
                  <Icon className="h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero benefits — lifted out of the header so they survive on mobile, where
// the whole right-hand column (and previously this grid) was hidden.
// ---------------------------------------------------------------------------

function HeroBenefits() {
  return (
    <section className="border-b border-border bg-card py-section">
      <div className="container-page">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HERO_BENEFITS.map(({ Icon, title }, i) => {
            const accent = accentAt(i);

            return (
              <li key={title}>
                <Card
                  variant="muted"
                  className="flex h-full items-center gap-3 p-4"
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-control",
                      accent.chip,
                    )}
                  >
                    <Icon className={cn("h-5 w-5", accent.icon)} />
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {title}
                  </span>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Services — tinted section, so the cards are white.
// ---------------------------------------------------------------------------

function ServicesGrid() {
  return (
    <section className="bg-background py-section md:py-section-lg">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Mobile Development Services
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Comprehensive mobile solutions tailored to your business needs
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, title, description, features }, i) => {
            const accent = accentAt(i);

            return (
              <li key={title}>
                <Card className="group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span
                    className={cn(
                      "mb-4 flex h-14 w-14 items-center justify-center rounded-surface transition-transform duration-300 group-hover:scale-110",
                      accent.chip,
                    )}
                  >
                    <Icon className={cn("h-7 w-7", accent.icon)} />
                  </span>

                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  <ul className="mt-auto space-y-2">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className={cn(
                            "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-pill",
                            accent.bar,
                          )}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Was `${service.accentColor}` from a 6-colour ad-hoc set. */}
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                      accent.bar,
                    )}
                    aria-hidden="true"
                  />
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Why choose — white section, so the cards are tinted.
// ---------------------------------------------------------------------------

function WhyChoose() {
  return (
    <section className="border-y border-border bg-card py-section md:py-section-lg">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Why Choose Coltek
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Our commitment to quality, efficiency, and user-centric design sets
            us apart.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ Icon, title, description }, i) => {
            const accent = accentAt(i);

            return (
              <li key={title}>
                <Card
                  variant="muted"
                  className="relative h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span
                    className={cn("absolute inset-x-0 top-0 h-1", accent.bar)}
                    aria-hidden="true"
                  />

                  <div className="mb-4 flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-control",
                        accent.chip,
                      )}
                    >
                      <Icon className={cn("h-5 w-5", accent.icon)} />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
