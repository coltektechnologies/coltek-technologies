import { useState, useEffect, useRef } from 'react';
import images from '../../assets/images/images';


const allServices = [
  {
    id: 1,
    title: "Web Development",
    description: "Provide and manage website services",
    image: images.web,
    buttonColor: "bg-[#E8F3FF] text-[#0066FF] hover:bg-[#d8ecff]"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Provide Cloud hosting and service",
    image: images.cloud,
    buttonColor: "bg-[#0055CC] text-white hover:bg-[#0044a3]"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create powerful cross-platform mobile applications",
    image: images.app,
    buttonColor: "bg-[#E8F3FF] text-[#0066FF] hover:bg-[#d8ecff]"
  },
  {
    id: 4,
    title: "IT Consulting",
    description: "Expert IT solutions for your business",
    image: images.team,
    buttonColor: "bg-[#0055CC] text-white hover:bg-[#0044a3]"
  }
];

const serviceGroups = [
  {
    id: 1,
    services: [allServices[0], allServices[1]]
  },
  {
    id: 2,
    services: [allServices[2], allServices[3]]
  }
];

const Home = () => {
  const words = ['Excellence', 'Innovation', 'Success', 'Impact', 'Growth'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Word animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === words.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        });
        setIsAnimating(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Carousel auto-slide effect
  useEffect(() => {
    const totalSlides = isMobile ? allServices.length : serviceGroups.length;
    
    const slide = () => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    };

    if (!pause) {
      slideInterval.current = setInterval(slide, 3000);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [pause, isMobile]);

  return (
    <div className="min-h-screen bg-[#070C29]">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight uppercase">
                Transforming Potentials into{' '}
                <span className="inline-block relative h-12 sm:h-16 lg:h-20 w-full sm:w-96 align-bottom overflow-visible">
                  <span 
                    className={`absolute left-0 top-9 w-full transition-all duration-500 ${
                      isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                    }`}
                    style={{
                      background: 'linear-gradient(92.26deg, #00D9FD 0.15%, #0AFE36 99.85%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1.2'
                    }}
                  >
                    {words[currentIndex]}
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                At Coltek Technologies, we empower innovation, nurture growth, and deliver solutions that inspire excellence. 
                We don't just build technology — we build possibilities driven by integrity, empathy, and purpose.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button 
                  className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-cyan-400 active:scale-95 active:shadow-inner transform active:translate-y-0.5"
                  style={{
                    background: 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#00D9FD';
                    e.currentTarget.style.borderColor = '#00D9FD';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  Get Started
                </button>
                
                <button 
                  className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-lg transition-all duration-300 border-2 border-[#00D9FD] hover:text-gray-900 active:scale-95 active:shadow-inner transform active:translate-y-0.5"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = '#00D9FD';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Email Subscription */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md pt-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 sm:px-6 py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <button 
                  className="px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold bg-[#00D9FD] text-gray-900 rounded-lg hover:bg-[#00D9FD]/90 transition-all duration-300 whitespace-nowrap active:scale-95 active:shadow-inner transform active:translate-y-0.5"
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#00D9FD';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Hero Image - Hidden on mobile, shown on lg and up */}
            <div className="hidden lg:flex relative w-full justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#20CAE6] shadow-2xl max-w-md">
                <img 
                  src={images.coltek} 
                  alt="Coltek Technologies" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Overlay Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070C29] to-transparent"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#070C29]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="lg:col-span-5 xl:col-span-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FD] to-[#0AFE36]">COLTEK</span> Technologies
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                At COLTEK Technologies, we don't just build solutions — we engineer possibilities. 
                Our team blends creativity, innovation, and technical excellence to deliver impactful digital experiences.
              </p>
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 active:shadow-inner transform active:translate-y-0"
                style={{
                  background: 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#00D9FD';
                  e.currentTarget.style.borderColor = '#00D9FD';
                  e.currentTarget.style.borderWidth = '2px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                
              >
                Read more
              </button>
            </div>

            {/* Right Side - Scrollable Cards Container */}
            <div className="lg:col-span-8 relative group">
              <div className="overflow-x-auto scrollbar-hide pb-4">
                <div className="flex gap-6 min-w-max">
                  {/* Card 1 */}
                  <div className="w-64 bg-[#D9D9D9] rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="h-24 flex items-center m-3 rounded-xl justify-center" style={{
                      background: 'linear-gradient(180deg, #041979 0%, #00D9FD 100%)',
                      boxShadow: '-2px 4px 4px 0px #939090',
                      margin: '0.75rem',
                      borderRadius: '0.75rem'
                    }}>
                      <img src={images.innovation} alt="innovation" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-black mb-3">Innovation Solutions</h3>
                      <p className="text-[#000000]">
                        We blend creativity with cutting-edge technology to drive real results.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="w-64 bg-[#D9D9D9] rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="h-24 flex items-center m-3 rounded-xl justify-center" style={{
                      background: 'linear-gradient(180deg, #041979 0%, #00D9FD 100%)',
                      boxShadow: '-2px 4px 4px 0px #939090',
                      margin: '0.75rem',
                      borderRadius: '0.75rem'
                    }}>
                      <img src={images.team} alt="team" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-black mb-3">Client Centered</h3>
                      <p className="text-[#000000]">
                        Your goals shape our solutions, every step of the way.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="w-64 bg-[#D9D9D9] rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="h-24 flex items-center m-3 rounded-xl justify-center" style={{
                      background: 'linear-gradient(180deg, #041979 0%, #00D9FD 100%)',
                      boxShadow: '-2px 4px 4px 0px #939090',
                      margin: '0.75rem',
                      borderRadius: '0.75rem'
                    }}>
                      <img src={images.expert} alt="expert" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-black mb-3">Expert Team</h3>
                      <p className="text-[#000000]">
                        Skilled professionals delivering excellence with precision.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="w-64 bg-[#D9D9D9] rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="h-24 flex items-center m-3 rounded-xl justify-center" style={{
                      background: 'linear-gradient(180deg, #041979 0%, #00D9FD 100%)',
                      boxShadow: '-2px 4px 4px 0px #939090',
                      margin: '0.75rem',
                      borderRadius: '0.75rem'
                    }}>
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-black mb-3">Reliable Solutions</h3>
                      <p className="text-[#000000]">
                        Systems built to perform, built to last.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
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

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070C29]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="rounded-2xl overflow-hidden  shadow-2xl">
              <img 
                src={images.chooseUs} 
                alt="Team working on robotics project" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Right - Content */}
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FD] to-[#0AFE36]">Projects</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                At COLTEK Technologies, we don't just build solutions — we engineer possibilities. 
                Our team blends creativity, innovation, and technical excellence to deliver impactful digital experiences.
              </p>
              <div className="flex gap-4">
                <button 
                  className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 active:shadow-inner transform active:translate-y-0 border-2 border-transparent"
                  style={{
                    background: 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#00D9FD';
                    e.currentTarget.style.borderColor = '#00D9FD';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                  }}
                >
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

      <section className="w-full py-12 relative bg-[#070C29]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative overflow-hidden py-4"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            <div className="lg:hidden overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  width: `${allServices.length * 100}%`
                }}
              >
                {allServices.map((service) => (
                  <div 
                    key={service.id}
                    className="w-full flex-shrink-0 px-4"
                    style={{ width: `${100 / allServices.length}%` }}
                  >
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow h-full">
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-sm p-3">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="sm:ml-4 flex-1 flex flex-col mt-3 sm:mt-0">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 mt-2 mb-4">
                            {service.description}
                          </p>
                          <button 
                            className={`mt-auto w-fit px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 active:shadow-inner active:translate-y-0 ${service.buttonColor}`}
                            style={{
                              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                            }}
                          >
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 50}%)`,
                  width: `${serviceGroups.length * 100}%`
                }}
              >
                {serviceGroups.map((group) => (
                  <div 
                    key={group.id}
                    className="w-1/2 flex-shrink-0 px-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {group.services.map((service) => (
                        <div key={service.id} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                            <div className="w-full sm:w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-sm p-3">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="sm:ml-4 lg:ml-0 xl:ml-4 flex-1 flex flex-col mt-3 sm:mt-0 lg:mt-3 xl:mt-0">
                              <h3 className="text-lg font-bold text-gray-900">
                                {service.title}
                              </h3>
                              <p className="text-sm text-gray-700 mt-2 mb-4">
                                {service.description}
                              </p>
                              <button 
                                className={`mt-auto w-fit px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 active:shadow-inner active:translate-y-0 ${service.buttonColor}`}
                                style={{
                                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                                }}
                              >
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
            {Array.from({ 
              length: isMobile ? allServices.length : serviceGroups.length 
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-90 ${
                  currentSlide === index ? 'bg-[#0066FF]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-start mt-12">
            <button 
              className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 active:shadow-inner transform active:translate-y-0 border-2 border-transparent"
              style={{
                background: 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00D9FD';
                e.currentTarget.style.borderColor = '#00D9FD';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(97.91deg, #00D9FD 2.91%, #0AFE36 97.09%)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>


      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Home;