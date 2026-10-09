import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Globe, Star, Users } from "lucide-react";
import { images } from "../../assets/images/images";
// The four 4096px-wide assets in the repo — the only ones that stay sharp
// when a card scales up on hover.
import aimlImg from "../../assets/ServicesPageImages/AIMLImg-card.webp";
import cloudImg from "../../assets/ServicesPageImages/CloudSolutionImg-card.webp";
import softwareImg from "../../assets/ServicesPageImages/SoftwareSolutionsImg-card.webp";
import collaborationImg from "../../assets/ServicesPageImages/MobileAppServiceCard-card.webp";
import { allServices } from "../../data/services";
import { projects } from "../../data/projects";
import TestimonialsSlider from "../../components/sections/TestimonialsSlider";
import CTASection from "../../components/CTASection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Home
//
// Section order runs hero → proof → services → why us → work → testimonials →
// CTA, so a first-time visitor meets what COLTEK does before the supporting
// detail. Services previously sat last, below the testimonials.
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <div className="bg-brand-deep text-white">
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <WhyChooseSection />
      <FeaturedWorkSection />

      <section className="bg-brand-deep">
        <TestimonialsSlider />
      </section>

      <CTASection
        title="Let's build something that lasts"
        description="Tell us what you're trying to achieve. We'll help you scope it, build it, and support it."
        primaryButtonText="Start a project"
        secondaryButtonText="Explore services"
        secondaryHref="/services"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

const ROTATING_WORDS = [
  "Excellence",
  "Innovation",
  "Success",
  "Impact",
  "Growth",
];

function Hero() {
  const words = useMemo(() => ROTATING_WORDS, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((p) => (p + 1) % words.length);
        setIsAnimating(false);
      }, 450);
    }, 2800);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat pt-nav md:pt-nav-lg"
      style={{ backgroundImage: `url(${images.heroBg})` }}
    >
      {/* Scrim keeps the headline readable over the photograph. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-brand-deep"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 py-section md:py-section-lg">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              <span className="block">Transforming Potentials</span>
              <span className="mt-2 flex flex-wrap items-baseline gap-x-3">
                <span>into</span>
                <span
                  aria-live="polite"
                  className={cn(
                    "bg-gradient-brand bg-clip-text text-transparent transition-all duration-500",
                    isAnimating
                      ? "-translate-y-2 opacity-0"
                      : "translate-y-0 opacity-100",
                  )}
                >
                  {words[currentIndex]}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
              At Coltek Technologies, we empower innovation, nurture growth, and
              deliver solutions that inspire excellence. We don't just build
              technology — we build possibilities driven by integrity, empathy,
              and purpose.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Button asChild variant="brand" size="lg">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Product image — decorative on small screens, so it loads after copy */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-lg">
            <div className="overflow-hidden rounded-card border-2 border-[#20CAE6] shadow-2xl">
              <img
                src={images.coltek}
                alt="The COLTEK Technologies team at work"
                className="h-auto w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Trust strip
//
// These four proof points previously rendered only on mobile, buried inside
// the hero. They are shown at every breakpoint now.
// ---------------------------------------------------------------------------

const TRUST_POINTS = [
  { Icon: Clock, label: "24/7 Support" },
  { Icon: Star, label: "Client Rating" },
  { Icon: Globe, label: "Global Reach" },
  { Icon: Users, label: "Satisfied Clients" },
];

function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-brand-deep">
      <div className="container-page py-8">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRUST_POINTS.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-white/10">
                <Icon className="h-5 w-5 text-brand-teal" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-white/90">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Services
//
// Was an auto-advancing carousel that showed two of four services at a time
// and rebuilt its slide count from a JS resize listener. With only four
// services a responsive grid shows all of them at once, which removes the
// listener, the auto-advance and the duplicated mobile/desktop markup.
// ---------------------------------------------------------------------------

function ServicesSection() {
  return (
    <section className="bg-brand-deep py-section md:py-section-lg">
      <div className="container-page">
        <SectionHeading
          title={
            <>
              What we <GradientWord>do</GradientWord>
            </>
          }
          description="Four practices, one team. Each one is delivered by specialists who stay with your project from scoping through support."
        />

        {/* Rail travels leftwards; full-bleed so cards enter and leave at the
            viewport edge rather than inside the page gutter. */}
        <div className="mt-10 -mx-4 sm:-mx-6 lg:-mx-8">
          <Marquee direction="left" durationSec={45} label="Our services">
            {allServices.map((service) => (
              <Card
                key={service.id}
                variant="plain"
                className="group flex h-full w-[16rem] flex-col overflow-hidden sm:w-[18rem]"
              >
                {/* object-cover, not contain: these are photographs now, not
                    the 50px icon sprites the cards used to hold. */}
                <div className="h-40 overflow-hidden bg-muted">
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
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  <Button
                    asChild
                    variant="brand"
                    size="sm"
                    className="mt-4 w-fit"
                  >
                    {/* Destination comes from the service data. The previous
                        title-substring mapping 404'd on three of four cards.
                        aria-label disambiguates this from the hero's "Learn
                        More" and from the other three cards, which otherwise
                        all share one accessible name. */}
                    <Link
                      to={service.path}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </Marquee>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/services">Explore all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Why choose COLTEK
// ---------------------------------------------------------------------------

// Photography, not icons. These four are the only 4096px-wide assets in the
// repo, so they are the ones that still look sharp when a card is hovered and
// scaled up. The previous icons were 42-48px sources stretched into a tile.
const FEATURE_CARDS = [
  {
    title: "Innovation Solutions",
    text: "We blend creativity with cutting-edge technology to drive real results.",
    image: aimlImg,
    alt: "A brain rendered as a circuit board, representing applied AI",
  },
  {
    title: "Client Centered",
    text: "Your goals shape our solutions, every step of the way.",
    image: collaborationImg,
    alt: "Two colleagues reviewing work together at a screen",
  },
  {
    title: "Expert Team",
    text: "Skilled professionals delivering excellence with precision.",
    image: softwareImg,
    alt: "A developer working on a web application",
  },
  {
    title: "Reliable Solutions",
    text: "Systems built to perform, built to last.",
    image: cloudImg,
    alt: "An isometric illustration of cloud infrastructure",
  },
];

function WhyChooseSection() {
  return (
    <section className="bg-brand-deep py-section md:py-section-lg">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              align="left"
              title={
                <>
                  Why choose <GradientWord>COLTEK</GradientWord>
                </>
              }
              description="We don't just build solutions — we engineer possibilities. Our team blends creativity, innovation, and technical excellence to deliver work that holds up."
            />

            <Button asChild variant="brand" size="lg" className="mt-8">
              <Link to="/about">About our team</Link>
            </Button>
          </div>

          {/* Rail travels rightwards, opposite the services row above, so the
              two do not read as one continuous band. */}
          <div className="lg:col-span-8">
            <Marquee
              direction="right"
              durationSec={38}
              gapRem={1}
              label="Why choose COLTEK"
            >
              {FEATURE_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="group relative h-[22rem] w-[16rem] overflow-hidden rounded-card sm:w-[17rem]"
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={1600}
                    height={1067}
                  />

                  {/* Scrim: strong at the base so the copy stays readable over
                      any of the four photographs, near-clear at the top. */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 transition-opacity duration-500 group-hover:from-black/95"
                    aria-hidden="true"
                  />

                  {/* Brand hairline that fills in on hover. */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {card.text}
                    </p>
                  </div>
                </article>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Featured work
// ---------------------------------------------------------------------------

function FeaturedWorkSection() {
  return (
    <section className="bg-brand-deep py-section md:py-section-lg">
      <div className="container-page">
        <SectionHeading
          title={
            <>
              Featured <GradientWord>projects</GradientWord>
            </>
          }
          description="From inventory systems that predict demand to offline-first retail apps, our work ships and stays shipped."
        />

        {/* Real product screenshots from the portfolio set (~1024px source),
            which replaced a single 801x568 stock team photo that was being
            upscaled into this column and looked soft on retina displays.
            The rail travels rightwards, against the services row. */}
        <div className="mt-10 -mx-4 sm:-mx-6 lg:-mx-8">
          <Marquee direction="right" durationSec={60} label="Featured projects">
            {projects.map((project) => (
              <Card
                key={project.id}
                variant="plain"
                className="group h-full w-[18rem] overflow-hidden sm:w-[20rem]"
              >
                <Link
                  to="/portfolio"
                  aria-label={`${project.title} — see this project in the portfolio`}
                  className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={`${project.title} interface`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={1024}
                      height={768}
                    />
                    <Badge
                      variant="overlay"
                      shape="rounded"
                      className="absolute left-3 top-3"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {project.excerpt}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </Marquee>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="brand" size="lg">
            <Link to="/portfolio">
              View all projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Shared section pieces
// ---------------------------------------------------------------------------

function GradientWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-brand bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function SectionHeading({
  title,
  description,
  align = "center",
}: {
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center")}>
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}
