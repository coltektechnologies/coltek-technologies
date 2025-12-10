// ========== IMPORTS START ==========
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ServicesCard";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Images
import SSServiceCard from "@/assets/ServicesPageImages/SS ServiceCard.png";
import CSServiceCard from "@/assets/ServicesPageImages/CS ServiceCard.png";
import AIMLServiceCard from "@/assets/ServicesPageImages/AIML ServiceCard.png";
import MobileAppServiceCard from "@/assets/ServicesPageImages/MobileAppServiceCard.jpg";
import ServiceHeroImage from "@/assets/ServicesPageImages/ServiceHeroImage.jpg";
import IconExpertise from "@/assets/ServicesPageImages/IconExpertise.png";
import IconReliable from "@/assets/ServicesPageImages/IconReliable.png";
import IconInnovation from "@/assets/ServicesPageImages/IconInnovation.png";
import IconSupport from "@/assets/ServicesPageImages/IconSupport.png";
import SoftwareSolutionsImg from "@/assets/ServicesPageImages/SoftwareSolutionsImg.jpg";
import AIMLImg from "@/assets/ServicesPageImages/AIMLImg.jpg";
import CloudSolutionImg from "@/assets/ServicesPageImages/CloudSolutionImg.jpg";
import MobileAppImg from "@/assets/ServicesPageImages/MobileAppImg.png";
// ========== IMPORTS END ==========

const Services = () => {
  // ========== SERVICES DATA ==========
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
      image: MobileAppServiceCard,
      title: "Mobile App Development",
      description:
        "Build modern and performant mobile applications for Android, iOS, and cross-platform environments.",
      path: "/services/mobile-app-development",
    },
  ];
  // ========== END SERVICES DATA ==========

  return (
    <div className="services-page-container min-h-screen bg-background">
      <Navbar />

      {/* ========== HERO SECTION — PREMIUM VERSION ========== */}
      <section className="relative pt-24 pb-12 px-4">
        <div className="relative h-[300px] md:h-[360px] rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ServiceHeroImage})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#041979]/80 to-[#00D9FD]/50"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 max-w-xl">
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Our Services
            </h1>

            <p
              className="text-white/90 text-base md:text-lg mb-6"
              style={{ fontFamily: "Montserrat-Regular" }}
            >
              Comprehensive solutions to help your business grow.
            </p>

            <Button
              className="w-fit bg-[#00D9FD] hover:bg-[#00D9FD]/90 text-white px-6 h-10 rounded-lg shadow-lg transition"
              onClick={() =>
                document.getElementById("services-grid")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
      {/* ========== END HERO SECTION ========== */}

      {/* ========== SERVICES GRID SECTION START ========== */}
      <section id="services-grid" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-1 bg-white shadow-lg hover:shadow-xl border border-gray-200 cursor-pointer transition-all hover:scale-105"
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
      {/* ========== SERVICES GRID SECTION END ========== */}

      {/* ========== DETAILED SERVICES SECTION START (UPDATED DESIGN) ========== */}
      <section className="detailed-services-section py-14 bg-muted/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-10">
            {/* =======================================================
          SOFTWARE SOLUTIONS
      ======================================================== */}
            <Link
              to="/Services/SoftwareSolutions"
              id="service-0"
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 md:p-10 cursor-pointer scroll-mt-24"
            >
              {/* TEXT */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  1. Software Solutions
                </h2>

                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  At Coltek Technologies, we specialize in building
                  high-performance web applications that combine creativity and
                  modern technology.
                </p>

                <h3 className="text-lg font-semibold text-primary mt-4">
                  What We Offer:
                </h3>

                <ul className="space-y-2 text-[15px] text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Custom website design and development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    E-commerce platforms and CMS integration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Website implementation and optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    SEO and performance enhancement
                  </li>
                </ul>

                <Button
                  className="bg-transparent hover:bg-secondary/10 border-2 border-secondary text-primary font-semibold mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Button>
              </div>

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden h-[240px] md:h-[300px] lg:h-[320px] shadow-md">
                <img
                  src={SoftwareSolutionsImg}
                  alt="Software Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-300" />

            {/* =======================================================
          AI & ML
      ======================================================== */}
            <Link
              to="/Services/AIML"
              id="service-2"
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 md:p-10 cursor-pointer scroll-mt-24"
            >
              {/* IMAGE LEFT */}
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden h-[240px] md:h-[300px] lg:h-[320px] shadow-md">
                <img
                  src={AIMLImg}
                  alt="AI & ML Automation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* TEXT RIGHT */}
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  2. AI & ML Automation
                </h2>

                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  We help businesses harness artificial intelligence and ML
                  automation to unlock new possibilities.
                </p>

                <h3 className="text-lg font-semibold text-primary mt-4">
                  Our solutions include:
                </h3>

                <ul className="space-y-2 text-[15px] text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    AI model development and training
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Predictive analytics and data labeling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Natural Language Processing (NLP)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Integration of AI systems into your workflow
                  </li>
                </ul>

                <Button
                  className="bg-transparent hover:bg-secondary/10 border-2 border-secondary text-primary font-semibold mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Button>
              </div>
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-300" />

            {/* =======================================================
          CLOUD SOLUTIONS
      ======================================================== */}
            <Link
              to="/Services/CloudSolutions"
              id="service-1"
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 md:p-10 cursor-pointer scroll-mt-24"
            >
              {/* TEXT LEFT */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  3. Cloud Solutions
                </h2>

                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Reliable cloud infrastructure to scale your digital operations
                  securely.
                </p>

                <h3 className="text-lg font-semibold text-primary mt-4">
                  We offer:
                </h3>

                <ul className="space-y-2 text-[15px] text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Cloud strategy & infrastructure setup
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Backup & disaster recovery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Cloud migration & deployment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Hybrid & multi-cloud management
                  </li>
                </ul>

                <Button
                  className="bg-transparent hover:bg-secondary/10 border-2 border-secondary text-primary font-semibold mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Button>
              </div>

              {/* IMAGE RIGHT */}
              <div className="rounded-xl overflow-hidden h-[240px] md:h-[300px] lg:h-[320px] shadow-md">
                <img
                  src={CloudSolutionImg}
                  alt="Cloud Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-300" />

            {/* =======================================================
          MOBILE APP DEVELOPMENT
      ======================================================== */}
            <Link
              to="/Services/MobileAppDevelopment"
              id="service-3"
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 md:p-10 cursor-pointer scroll-mt-24"
            >
              {/* IMAGE LEFT */}
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden h-[240px] md:h-[300px] lg:h-[320px] shadow-md">
                <img
                  src={MobileAppImg}
                  alt="Mobile App Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* TEXT RIGHT */}
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  4. Mobile App Development
                </h2>

                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  We build modern and performant mobile applications for
                  Android, iOS, and cross-platform environments.
                </p>

                <h3 className="text-lg font-semibold text-primary mt-4">
                  Key Features:
                </h3>

                <ul className="space-y-2 text-[15px] text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Android & iOS app development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Cross-platform hybrid apps
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    UI/UX design & prototyping
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    Testing, deployment & maintenance
                  </li>
                </ul>

                <Button
                  className="bg-transparent hover:bg-secondary/10 border-2 border-secondary text-primary font-semibold mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* ========== DETAILED SERVICES SECTION END (UPDATED DESIGN) ========== */}

      {/* WHY CHOOSE US */}
      {/* ========== WHY CHOOSE US SECTION — PREMIUM VERSION ========== */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-10"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Why Choose Us
          </h2>

          {/* Card Container */}
          <div className="rounded-2xl p-[1.5px] bg-gradient-to-r from-[#00D9FD] to-[#3E66DF] shadow-lg">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: "#3E66DF" }}
            >
              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {/* Single Feature */}
                {[
                  {
                    icon: IconExpertise,
                    title: "Expertise",
                    subtitle: "Skilled Specialists",
                  },
                  {
                    icon: IconReliable,
                    title: "Reliable",
                    subtitle: "On-time Delivery",
                  },
                  {
                    icon: IconInnovation,
                    title: "Innovation",
                    subtitle: "Future-Ready Solutions",
                  },
                  {
                    icon: IconSupport,
                    title: "Support",
                    subtitle: "Dedicated Assistance",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-14 h-14 mb-3 transition-all duration-300 group-hover:drop-shadow-xl">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h3
                      className="text-lg font-bold text-white tracking-wide"
                      style={{ fontFamily: "Montserrat-Bold" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-white/80 text-sm mt-1"
                      style={{ fontFamily: "Montserrat-Regular" }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END ENHANCED WHY CHOOSE US SECTION ========== */}

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;