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
// ========== IMPORTS END ==========


const Services = () => {
  // ========== SERVICES DATA ==========
  const services = [
    {
      image: SSServiceCard,
      title: "Software Solutions",
      description: "High-performance web solutions built for scale, combining creativity, functionality, and technology.",
      path: "/services/software-solutions"
    },
    {
      image: CSServiceCard,
      title: "Cloud Solutions",
      description: "Optimize with cloud infrastructure design, migration, management, and secure your data securely from anywhere.",
      path: "/services/cloud-architecture"
    },
    {
      image: AIMLServiceCard,
      title: "AI & ML",
      description: "Captivate with development, AI integrations, natural language, machine learning, and smarter decisions.",
      path: "/services/ai-ml"
    },
    {
      image: ITCServiceCard,
      title: "Mobile App Development",
      description: "Optimize with development, strategic planning and AI guidance to navigate digital complexity efficiently.",
      path: "/services/it-consultancy"
    }
  ];
  // ========== END SERVICES DATA ==========


  return (
    <div className="services-page-container min-h-screen bg-background">
      
      {/* ========== NAVBAR START ========== */}
      <Navbar />
      {/* ========== NAVBAR END ========== */}


      {/* ========== HERO SECTION START ========== */}
      <section className="hero-section relative pt-24 pb-12 px-8">
        <div className="hero-content-wrapper relative h-[380px] md:h-[430px] flex items-center justify-center overflow-hidden rounded-[3rem] max-w-7xl mx-auto">
          
          <div
            className="hero-background absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ServiceHeroImage})` }}
          >
            <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-[3rem]" />
          </div>

          <div className="hero-text-content relative z-10 text-left text-white px-8 w-full">
            <h1
              className="hero-title text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              OUR SERVICES
            </h1>
            <p
              className="hero-description text-lg md:text-xl mb-8 text-white/90 max-w-xl"
              style={{ fontFamily: "Montserrat-Regular" }}
            >
              Comprehensive solutions to help your business grow
            </p>
            <Button
              className="hero-cta-button bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 h-11 rounded-lg"
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
      {/* ========== HERO SECTION END ========== */}


      {/* ========== SERVICES GRID SECTION START ========== */}
      <section id="services-grid" className="services-grid-section py-16 bg-background scroll-mt-20">
        <div className="section-content-wrapper container mx-auto px-4">
          <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() =>
                  document
                    .getElementById(`service-${index}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="service-card-wrapper cursor-pointer"
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


      {/* ========== DETAILED SERVICES SECTION START ========== */}
      <section className="detailed-services-section py-20 bg-muted">
        <div className="section-content-wrapper container mx-auto px-4">
          <div className="services-list space-y-0">
            
            {/* ========== SOFTWARE SOLUTIONS START ========== */}
            <Link 
              to="/Services/SoftwareSolutions"
              id="service-0" 
              className="service-detail-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
            >
              <div className="service-text-content px-4">
                <h2 className="service-title text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat-SemiBold' }}>
                  1. Software Solutions
                </h2>
                <p className="service-description text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat-Regular' }}>
                  At Coltek Technologies, we specialize in building high-performance web applications that combine creativity, functionality, and technology.
                </p>
                <h3 className="service-features-title text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat-SemiBold' }}>
                  Our team provides solutions including:
                </h3>
                <ul className="service-features-list space-y-2 mb-6">
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>Custom website design and development</span>
                  </li>
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>E-commerce platforms and CMS integration</span>
                  </li>
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>Website implementation and optimization</span>
                  </li>
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>SEO and performance enhancement</span>
                  </li>
                </ul>
                <p className="service-closing text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat-Regular' }}>
                  We ensure every project delivers a seamless user experience and helps your brand grow in the digital space.
                </p>
                <Button 
                  className="service-cta-button bg-transparent hover:bg-[#00D9FD]/10 border-2"
                  style={{ 
                    fontFamily: 'Poppins-SemiBold',
                    borderColor: '#00D9FD',
                    color: '#041979'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Button>
              </div>
              <div className="service-image-wrapper bg-card rounded-lg shadow-card overflow-hidden h-[400px]">
                <img 
                  src={SoftwareSolutionsImg}
                  alt="Web Development"
                  className="service-image w-full h-full object-cover"
                />
              </div>
            </Link>
            {/* ========== SOFTWARE SOLUTIONS END ========== */}

            {/* Divider */}
            <div className="section-divider border-t-2 border-border my-8" />

            {/* ========== AI & ML START ========== */}
            <Link
              to="/Services/AIML"
              id="service-2" 
              className="service-detail-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
            >
              <div className="service-image-wrapper order-2 lg:order-1 bg-card rounded-lg shadow-card overflow-hidden h-[400px]">
                <img 
                  src={AIMLImg}
                  alt="AI & ML Automation"
                  className="service-image w-full h-full object-cover"
                />
              </div>
              <div className="service-text-content order-1 lg:order-2 px-4">
                <h2 className="service-title text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat-SemiBold' }}>
                  2. AI & ML Automation
                </h2>
                <p className="service-description text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat-Regular' }}>
                  We help businesses harness the power of artificial intelligence and Machine Learning Automation to unlock new opportunities.
                </p>
                <h3 className="service-features-title text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat-SemiBold' }}>
                  Our solutions include:
                </h3>
                <ul className="service-features-list space-y-2 mb-6">
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>AI model development and training</span>
                  </li>
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>Predictive analytics and labeling services</span>
                  </li>
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>Natural language processing (NLP)</span>
                  </li>
                  <li className="feature-item flex items-start" style={{ fontFamily: 'Montserrat-Regular' }}>
                    <span className="feature-bullet text-secondary mr-2">•</span>
                    <span>Integration of intelligent systems into existing workflows</span>
                  </li>
                </ul>
                <p className="service-closing text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat-Regular' }}>
                  With predictive automation, we help streamline and labeling smarter, data-driven decisions.
                </p>
                <Button 
                  className="service-cta-button bg-transparent hover:bg-[#00D9FD]/10 border-2"
                  style={{ 
                    fontFamily: 'Poppins-SemiBold',
                    borderColor: '#00D9FD',
                    color: '#041979'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Button>
              </div>
            </Link>
            {/* ========== AI & ML END ========== */}

            {/* Divider */}
            <div className="section-divider border-t-2 border-border my-8" />

            {/* ========== CLOUD SOLUTIONS START ========== */}
            <Link
              to="/Services/CloudSolutions"
              id="service-1"
              className="service-detail-card grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
            >
              <div className="service-text-content px-4">
                <h2
                  className="service-title text-3xl font-bold mb-4"
                  style={{ fontFamily: "Montserrat-SemiBold" }}
                >
                  3. Cloud Solutions
                </h2>

                <p
                  className="service-description text-muted-foreground mb-6 leading-relaxed"
                  style={{ fontFamily: "Montserrat-Regular" }}
                >
                  Coltek offers end-to-end cloud services to help you scale, manage, and secure your data securely from anywhere.
                </p>

                <h3
                  className="service-features-title text-xl font-semibold mb-4"
                  style={{ fontFamily: "Montserrat-SemiBold" }}
                >
                  We offer:
                </h3>

                <ul className="service-features-list space-y-2 mb-6">
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>Cloud strategy and infrastructure setup</span>
                  </li>
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>Data backup and recovery services</span>
                  </li>
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>Cloud migration and deployment</span>
                  </li>
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>Multi-cloud and hybrid cloud management</span>
                  </li>
                </ul>

                <p className="service-closing text-muted-foreground mb-6">
                  With Coltek Technologies, you gain flexibility, security, and scalability for your digital infrastructure.
                </p>

                <Button
                  className="service-cta-button bg-transparent hover:bg-[#00D9FD]/10 border-2"
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

              <div className="service-image-wrapper bg-card rounded-lg shadow-card overflow-hidden h-[320px]">
                <img
                  src={CloudSolutionImg}
                  alt="Cloud Solutions"
                  className="service-image w-full h-full object-cover"
                />
              </div>
            </Link>
            {/* ========== CLOUD SOLUTIONS END ========== */}

            {/* Divider */}
            <div className="section-divider border-t-2 border-border my-8" />

            {/* ========== MOBILE APP DEVELOPMENT START ========== */}
            <Link
              to="/Services/MobileAppDevelopment"
              id="service-3"
              className="service-detail-card grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-20 py-12 hover:bg-muted/50 transition-colors duration-300 cursor-pointer block"
            >
              <div className="service-image-wrapper order-2 lg:order-1 bg-card rounded-lg shadow-card overflow-hidden h-[320px]">
                <img
                  src={ITCImg}
                  alt="Mobile App Development"
                  className="service-image w-full h-full object-cover"
                />
              </div>

              <div className="service-text-content order-1 lg:order-2 px-4">
                <h2
                  className="service-title text-3xl font-bold mb-4"
                  style={{ fontFamily: "Montserrat-SemiBold" }}
                >
                  4. Mobile App Development
                </h2>

                <p
                  className="service-description text-muted-foreground mb-6 leading-relaxed"
                  style={{ fontFamily: "Montserrat-Regular" }}
                >
                  We design and develop cutting-edge mobile applications for Android, iOS, and cross-platform solutions. Our apps are built with performance, scalability, and user experience in mind giving your users seamless access to your services anywhere.
                </p>

                <h3
                  className="service-features-title text-xl font-semibold mb-4"
                  style={{ fontFamily: "Montserrat-SemiBold" }}
                >
                  Key Features:
                </h3>

                <ul className="service-features-list space-y-2 mb-6">
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>Android & iOS app development</span>
                  </li>
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>Cross-platform and hybrid apps</span>
                  </li>
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>UI/UX design and prototyping</span>
                  </li>
                  <li className="feature-item flex items-start">
                    <span className="feature-bullet text-secondary mr-2">•</span> 
                    <span>Testing, deployment, and maintenance</span>
                  </li>
                </ul>

                <Button
                  className="service-cta-button bg-transparent hover:bg-[#00D9FD]/10 border-2"
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
            {/* ========== MOBILE APP DEVELOPMENT END ========== */}
            
          </div>
        </div>
      </section>
      {/* ========== DETAILED SERVICES SECTION END ========== */}


      {/* ========== WHY CHOOSE US SECTION START ========== */}
      <section className="why-choose-us-section py-16 bg-background">
        <div className="section-content-wrapper container mx-auto px-4 max-w-7xl">
          <h2
            className="section-title text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "Montserrat-Bold", color: "#000000" }}
          >
            WHY YOU CHOOSE US
          </h2>

          <div
            className="why-choose-us-card rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: "#3E66DF" }}
          >
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              
              {/* Expertise */}
              <div className="feature-item flex flex-col items-center text-center">
                <img src={IconExpertise} alt="Expertise" className="feature-icon w-20 h-20 mb-4" />
                <h3
                  className="feature-title text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  EXPERTISE
                </h3>
              </div>

              {/* Reliable */}
              <div className="feature-item flex flex-col items-center text-center">
                <img src={IconReliable} alt="Reliable" className="feature-icon w-20 h-20 mb-4" />
                <h3
                  className="feature-title text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  RELIABLE
                </h3>
              </div>

              {/* Innovation */}
              <div className="feature-item flex flex-col items-center text-center">
                <img src={IconInnovation} alt="Innovation" className="feature-icon w-20 h-20 mb-4" />
                <h3
                  className="feature-title text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  INNOVATION
                </h3>
              </div>

              {/* Support */}
              <div className="feature-item flex flex-col items-center text-center">
                <img src={IconSupport} alt="Support" className="feature-icon w-20 h-20 mb-4" />
                <h3
                  className="feature-title text-xl font-bold"
                  style={{ fontFamily: "Montserrat-Bold", color: "#FFFFFF" }}
                >
                  SUPPORT
                </h3>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* ========== WHY CHOOSE US SECTION END ========== */}


      {/* ========== CTA SECTION START ========== */}
      <CTASection />
      {/* ========== CTA SECTION END ========== */}


      {/* ========== FOOTER START ========== */}
      <Footer />
</div>
  );
};

export default Services;