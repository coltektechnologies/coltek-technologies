// -------------------------------------------------------------
// IMPORTS
// -------------------------------------------------------------
// Added Navbar & Footer because you had none

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Existing components
import ServiceCard from "@/components/ServicesCard";
import CTASection from "@/components/CTASection";

// Button + router
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// -------------------------------------------------------------
// IMAGES (kept exactly as they were)
// -------------------------------------------------------------
import SSServiceCard from "@/assets/ServicesPageImages/SS ServiceCard.png";
import CSServiceCard from "@/assets/ServicesPageImages/CS ServiceCard.png";
import AIMLServiceCard from "@/assets/ServicesPageImages/AIML ServiceCard.png";
import ITCServiceCard from "@/assets/ServicesPageImages/ITC ServiceCard.jpg";

import ServiceHeroImage from "@/assets/ServicesPageImages/ServiceHeroImage.jpg";

import IconExpertise from "@/assets/ServicesPageImages/IconExpertise.png";
import IconReliable from "@/assets/ServicesPageImages/IconReliable.png";
import IconInnovation from "@/assets/ServicesPageImages/IconInnovation.png";
import IconSupport from "@/assets/ServicesPageImages/IconSupport.png";

import SoftwareSolutionsImg from "@/assets/ServicesPageImages/SoftwareSolutionsImg.jpg";
import AIMLImg from "@/assets/ServicesPageImages/AIMLImg.jpg";
import CloudSolutionImg from "@/assets/ServicesPageImages/CloudSolutionImg.jpg";
import ITCImg from "@/assets/ServicesPageImages/ITC ServiceCard.jpg";

// -------------------------------------------------------------
// PAGE COMPONENT
// -------------------------------------------------------------

const Services = () => {
  // (1) No change — service data stays same
  const services = [
    {
      image: SSServiceCard,
      title: "Software Solutions",
      description:
        "High-performance web solutions built for scale, combining creativity, functionality, and technology.",
      path: "/services/software-solutions",
    },
    {
      image: CSServiceCard,
      title: "Cloud Solutions",
      description:
        "Optimize with cloud infrastructure design, migration, management, and secure your data securely from anywhere.",
      path: "/services/cloud-architecture",
    },
    {
      image: AIMLServiceCard,
      title: "AI & ML",
      description:
        "Captivate with development, AI integrations, natural language, machine learning, and smarter decisions.",
      path: "/services/ai-ml",
    },
    {
      image: ITCServiceCard,
      title: "IT Consultancy",
      description:
        "Optimize with development, strategic planning and AI guidance to navigate digital complexity efficiently.",
      path: "/services/it-consultancy",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* -------------------------------------------------------------
           NAVBAR ADDED (A)
           Reason: All website pages must include consistent layout
         ------------------------------------------------------------- */}
      <Navbar />

      {/* -------------------------------------------------------------
           HERO SECTION — Reduced size from 500px → 380px (B)
           Reason: Her hero was too tall on desktop
         ------------------------------------------------------------- */}
      <section className="relative pt-24 pb-12 px-8">
        <div className="relative h-[380px] md:h-[430px] flex items-center justify-center overflow-hidden rounded-[3rem] max-w-7xl mx-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ServiceHeroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-[3rem]" />
          </div>

          <div className="relative z-10 text-left text-white px-8 w-full">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              OUR SERVICES
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-white/90 max-w-xl"
              style={{ fontFamily: "Montserrat-Regular" }}
            >
              Comprehensive solutions to help your business grow
            </p>
            <Button
              className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 h-11 rounded-lg"
              style={{ fontFamily: "Poppins-SemiBold" }}
              onClick={() =>
                document
                  .getElementById("services-grid")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
           SERVICES GRID — Reduced gap + card size (C)
           Reason: Cards were too big on all screens.
         ------------------------------------------------------------- */}
      <section id="services-grid" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() =>
                  document
                    .getElementById(`service-${index}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer"
              >
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
           DETAILED SERVICES — Reduced image height 400px → 320px (D)
           Reason: Images were too large
         ------------------------------------------------------------- */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 space-y-0 max-w-7xl">
          {/* -------------------------------------------------------------
             SOFTWARE SOLUTIONS
             ------------------------------------------------------------- */}
          <Link
            to="/services/software-solutions"
            id="service-0"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
          >
            <div className="px-4">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                1. Software Solutions
              </h2>

              <p
                className="text-muted-foreground mb-6 leading-relaxed"
                style={{ fontFamily: "Montserrat-Regular" }}
              >
                At Coltek Technologies, we specialize in building high-performance web applications that combine creativity, functionality, and technology.
              </p>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                Our team provides solutions including:
              </h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start" style={{ fontFamily: "Montserrat-Regular" }}>
                  <span className="text-secondary mr-2">•</span>
                  <span>Custom website design and development</span>
                </li>
                <li className="flex items-start" style={{ fontFamily: "Montserrat-Regular" }}>
                  <span className="text-secondary mr-2">•</span>
                  <span>E-commerce platforms and CMS integration</span>
                </li>
                <li className="flex items-start" style={{ fontFamily: "Montserrat-Regular" }}>
                  <span className="text-secondary mr-2">•</span>
                  <span>Website implementation and optimization</span>
                </li>
                <li className="flex items-start" style={{ fontFamily: "Montserrat-Regular" }}>
                  <span className="text-secondary mr-2">•</span>
                  <span>SEO and performance enhancement</span>
                </li>
              </ul>

              <Button
                className="bg-transparent hover:bg-[#00D9FD]/10 border-2"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  borderColor: "#00D9FD",
                  color: "#041979",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Read More
              </Button>
            </div>

            <div className="bg-card rounded-lg shadow-card overflow-hidden h-[320px]">
              <img
                src={SoftwareSolutionsImg}
                alt="Web Development"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Divider */}
          <div className="border-t-2 border-border my-8" />

          {/* -------------------------------------------------------------
             AI & ML
             ------------------------------------------------------------- */}
          <Link
            to="/services/ai-ml"
            id="service-2"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
          >
            <div className="order-2 lg:order-1 bg-card rounded-lg shadow-card overflow-hidden h-[320px]">
              <img
                src={AIMLImg}
                alt="AI & ML Automation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2 px-4">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                2. AI & ML Automation
              </h2>

              <p
                className="text-muted-foreground mb-6 leading-relaxed"
                style={{ fontFamily: "Montserrat-Regular" }}
              >
                We help businesses harness the power of artificial intelligence and Machine Learning Automation to unlock new opportunities.
              </p>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                Our solutions include:
              </h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> AI model development and training
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Predictive analytics and labeling services
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Natural language processing (NLP)
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Integration of intelligent systems into existing workflows
                </li>
              </ul>

              <Button
                className="bg-transparent hover:bg-[#00D9FD]/10 border-2"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  borderColor: "#00D9FD",
                  color: "#041979",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Read More
              </Button>
            </div>
          </Link>

          {/* Divider */}
          <div className="border-t-2 border-border my-8" />

          {/* -------------------------------------------------------------
             CLOUD SOLUTIONS
             ------------------------------------------------------------- */}
          <Link
            to="/services/cloud-architecture"
            id="service-1"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
          >
            <div className="px-4">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                3. Cloud Solutions
              </h2>

              <p
                className="text-muted-foreground mb-6 leading-relaxed"
                style={{ fontFamily: "Montserrat-Regular" }}
              >
                Coltek offers end-to-end cloud services to help you scale, manage, and secure your data securely from anywhere.
              </p>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                We offer:
              </h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Cloud strategy and infrastructure setup
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Data backup and recovery services
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Cloud migration and deployment
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Multi-cloud and hybrid cloud management
                </li>
              </ul>

              <p className="text-muted-foreground mb-6">
                With Coltek Technologies, you gain flexibility, security, and scalability for your digital infrastructure.
              </p>

              <Button
                className="bg-transparent hover:bg-[#00D9FD]/10 border-2"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  borderColor: "#00D9FD",
                  color: "#041979",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Read More
              </Button>
            </div>

            <div className="bg-card rounded-lg shadow-card overflow-hidden h-[320px]">
              <img
                src={CloudSolutionImg}
                alt="Cloud Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Divider */}
          <div className="border-t-2 border-border my-8" />

          {/* -------------------------------------------------------------
             IT CONSULTANCY
             ------------------------------------------------------------- */}
          <Link
            to="/services/it-consultancy"
            id="service-3"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
          >
            <div className="order-2 lg:order-1 bg-card rounded-lg shadow-card overflow-hidden h-[320px]">
              <img
                src={ITCImg}
                alt="IT Consultancy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2 px-4">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                4. IT Consultancy
              </h2>

              <p
                className="text-muted-foreground mb-6 leading-relaxed"
                style={{ fontFamily: "Montserrat-Regular" }}
              >
                We provide strategic IT consultation to guide your technology decisions giving you seamless access to your services anywhere.
              </p>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                Key Features:
              </h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Native and cross-platform apps
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Cross-platform and hybrid apps
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> UI/UX design and prototyping
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span> Testing, deployment, and maintenance
                </li>
              </ul>

              <Button
                className="bg-transparent hover:bg-[#00D9FD]/10 border-2"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  borderColor: "#00D9FD",
                  color: "#041979",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Read More
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------
         WHY CHOOSE US — No major change, only spacing tightened (E)
         ------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "Montserrat-Bold", color: "#000000" }}
          >
            WHY YOU CHOOSE US
          </h2>

          <div
            className="rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: "#3E66DF" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Expertise */}
              <div className="flex flex-col items-center text-center">
                <img src={IconExpertise} className="w-20 h-20 mb-4" />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  EXPERTISE
                </h3>
              </div>

              {/* Reliable */}
              <div className="flex flex-col items-center text-center">
                <img src={IconReliable} className="w-20 h-20 mb-4" />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  RELIABLE
                </h3>
              </div>

              {/* Innovation */}
              <div className="flex flex-col items-center text-center">
                <img src={IconInnovation} className="w-20 h-20 mb-4" />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  INNOVATION
                </h3>
              </div>

              {/* Support */}
              <div className="flex flex-col items-center text-center">
                <img src={IconSupport} className="w-20 h-20 mb-4" />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  SUPPORT
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (unchanged) */}
      <CTASection />

      {/* FOOTER ADDED  */}
      <Footer />
    </div>
  );
};

export default Services;
