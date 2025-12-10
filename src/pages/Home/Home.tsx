import React, { useEffect, useMemo, useRef, useState } from 'react';
import { images } from "../../assets/images/images";
import { allServices, serviceGroups } from "../../data/services";
import TestimonialsSlider from "../../components/sections/TestimonialsSlider";

// ------------------------
// Home (componentized)
// ------------------------

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="bg-[#070C29] text-white">
      {/* Hero section - full viewport height */}
      <div className="h-screen">
        <Hero isMobile={isMobile} />
      </div>

      {/* Why Choose COLTEK section - moved here */}
      <section className="w-full py-16 lg:py-20 bg-[#070C29]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 xl:col-span-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6]">COLTEK</span> Technologies
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                At COLTEK Technologies, we don't just build solutions — we engineer possibilities. Our team blends creativity, innovation, and technical excellence to deliver impactful digital experiences.
              </p>
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6]">
                Read more
              </button>
            </div>

            <div className="lg:col-span-7 xl:col-span-8 relative">
              <div className="overflow-x-auto scrollbar-hide pb-4 -mx-3 sm:mx-0">
                <div className="flex gap-3 sm:gap-6 px-3 sm:px-0 sm:min-w-max">
                  {featureCards().map((card, i) => (
                    <div key={i} className="min-w-[160px] w-[70vw] sm:min-w-[200px] sm:w-56 bg-[#D9D9D9] rounded-xl sm:rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-lg flex-shrink-0">
                      <div className="h-16 sm:h-20 md:h-24 flex items-center m-1.5 sm:m-3 rounded-lg sm:rounded-xl justify-center" style={{ background: 'linear-gradient(180deg, #041979 0%, #00D9FD 100%)', boxShadow: '-2px 4px 4px 0px #939090' }}>
                        {React.cloneElement(card.img, { className: 'w-8 h-8 sm:w-10 sm:h-10' })}
                      </div>
                      <div className="p-2 sm:p-3 md:p-4">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-black mb-1 sm:mb-2">{card.title}</h3>
                        <p className="text-[#000000] text-xs sm:text-sm md:text-base">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                <div className="text-gray-400 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Scroll to see more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070C29]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.chooseUs}
                alt="Team working on robotics project"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
              <div className="p-4 bg-[#070C29] text-center">
                <h3 className="text-xl font-bold text-white mb-2">Robotics Project</h3>
                <p className="text-gray-300 text-sm">Innovative automation solutions for modern industries</p>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6]">Projects</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                At COLTEK Technologies, we don't just build solutions — we engineer possibilities. Our team blends creativity, innovation, and technical excellence to deliver impactful digital experiences.
              </p>

              <div className="flex gap-4">
                <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6]">
                  View All Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#070C29] py-12 sm:py-16 lg:py-20">
        <div className="w-full">
          <TestimonialsSlider />
        </div>
      </section>

      <ServicesSection isMobile={isMobile} />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

// ------------------------
// Hero Component
// ------------------------

function Hero({ isMobile }: { isMobile: boolean }) {
  const words = useMemo(() => ['Excellence', 'Innovation', 'Success', 'Impact', 'Growth'], []);
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
  
  const heroClass = isMobile ? 'min-h-[70vh] pt-6' : 'min-h-screen flex items-center';

  return (
    <section
      className={`relative w-full bg-contain sm:bg-cover bg-center bg-no-repeat flex items-center justify-center ${heroClass}`}
      style={{
        backgroundImage: `url(${images.heroBg})`,
        backgroundSize: 'contain',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

      {/* Main hero content - centered */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 py-4 mt-4 sm:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              <h1 className="font-bold leading-tight">
                <span className="uppercase block text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3">Transforming Potentials</span>
                
                <div className="flex flex-row items-baseline gap-2 sm:gap-3">
                  <span className="uppercase text-xl sm:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap">into</span>
                  <div className="relative min-h-[2.5rem] sm:min-h-[2.5rem] lg:min-h-[3.5rem] flex-1">
                    <span
                      className={`transition-all duration-500 inline-block w-full ${isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'} bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6] bg-clip-text text-transparent font-bold uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl`}
                    >
                      {words[currentIndex]}
                    </span>
                  </div>
                </div>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                At Coltek Technologies, we empower innovation, nurture growth, and deliver solutions that inspire excellence. We don't just build technology — we build possibilities driven by integrity, empathy, and purpose.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-cyan-400 active:scale-95 bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6] text-white">
                  Get Started
                </button>

                <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 border-2 border-[#1c3D72] text-white hover:bg-[#1c3D72]/10 bg-transparent">
                  Learn More
                </button>
              </div>

              {/* Mobile-only image and icons */}
              <div className="lg:hidden w-full flex flex-col items-center pt-6">
                <div className="relative w-full max-w-[280px] rounded-lg overflow-hidden">
                  <img src={images.coltek} alt="Coltek Technologies" className="w-full h-auto object-contain" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="w-full mt-8">
                  <div className="flex justify-around items-start">
                    {[
                      { img: images._24_7, label: '24/7\nSupport' },
                      { img: images.rating, label: 'Client\nRating' },
                      { img: images.globe, label: 'Global\nReach' },
                      { img: images.client, label: 'Satisfied\nClients' },
                    ].map((it, idx) => (
                      <div key={idx} className="flex flex-col items-center w-1/4 text-center">
                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full mb-2">
                          <img src={it.img} alt="icon" className="h-7 w-7" />
                        </div>
                        <span className="text-xs text-white/90 leading-tight whitespace-pre-line font-medium">{it.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email subscription - shown on sm+ */}
              <div className="hidden sm:flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md pt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <button className="px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold bg-[#1c3D72] text-gray-900 rounded-lg hover:bg-[#1c3D72]/90 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Desktop hero image */}
            <div className="hidden lg:block relative w-full">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#20CAE6] shadow-2xl max-w-lg mx-auto">
                <img src={images.coltek} alt="Coltek Technologies" className="w-full h-auto object-cover" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// small helper to provide feature cards (keeps JSX tidy)
function featureCards() {
  return [
    { title: 'Innovation Solutions', text: 'We blend creativity with cutting-edge technology to drive real results.', img: <img src={images.innovation} alt="innovation" /> },
    { title: 'Client Centered', text: 'Your goals shape our solutions, every step of the way.', img: <img src={images.team} alt="team" /> },
    { title: 'Expert Team', text: 'Skilled professionals delivering excellence with precision.', img: <img src={images.expert} alt="expert" /> },
    { title: 'Reliable Solutions', text: 'Systems built to perform, built to last.', img: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];
}

// ------------------------
// Services Section + Carousel
// ------------------------

function ServicesSection({ isMobile }: { isMobile: boolean }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const slideRef = useRef<number | null>(null);

  useEffect(() => {
    const total = isMobile ? allServices.length : serviceGroups.length;

    const next = () => setCurrentSlide((p) => (p + 1) % total);

    if (!pause) {
      slideRef.current = window.setInterval(next, 3000);
    }

    return () => {
      if (slideRef.current) window.clearInterval(slideRef.current);
    };
  }, [pause, isMobile]);

  const dotsCount = isMobile ? allServices.length : serviceGroups.length;

  return (
    <section className="w-full py-12 relative bg-[#070C29]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden py-4" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
          {/* Mobile carousel - One card at a time on small screens */}
          <div className="lg:hidden overflow-hidden w-full">
            <div className="flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {allServices.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg h-full overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-sm p-3">
                        <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="sm:ml-4 flex-1 flex flex-col mt-3 sm:mt-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm sm:text-base text-gray-700 mt-2 mb-4 flex-1">{service.description}</p>
                        <div className="mt-4">
                          <button className={`w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 ${service.buttonColor}`}>
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop carousel - Two cards at a time on large screens */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 50}%)`, width: `${serviceGroups.length * 100}%` }}>
              {serviceGroups.map((group) => (
                <div key={group.id} className="w-1/2 flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {group.services.map((service) => (
                      <div key={service.id} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg">
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                          <div className="w-full sm:w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-sm p-3">
                            <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                          </div>
                          <div className="sm:ml-4 lg:ml-0 xl:ml-4 flex-1 flex flex-col mt-3 sm:mt-0 lg:mt-3 xl:mt-0">
                            <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-700 mt-2 mb-4">{service.description}</p>
                            <button className={`mt-auto w-fit px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 ${service.buttonColor}`}>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: dotsCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-90 ${currentSlide === index ? 'bg-[#1c3D72]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-start mt-12">
          <button className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6]">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}