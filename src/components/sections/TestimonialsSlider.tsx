import React, { useRef, useState, useEffect } from "react";
import images from "../../assets/images/images";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nancy Coltek",
    role: "Content Creator and Developer",
    text: "The app delivered is exactly what I've been looking for.",
    image: images.testimonial1, 
    rating: 5,
  },
  {
    id: 2,
    name: "Collins Fred",
    role: "Product Quality Engineer",
    text: "Lorem is exactly what I've been looking for.",
    image: images.testimonial2,
    rating: 5,
  },
  {
    id: 3,
    name: "Nancy Coltek",
    role: "Content Creator and Developer",
    text: "The app delivered is exactly what I've been looking for.",
    image: images.testimonial1,
    rating: 5,
  },
  {
    id: 4,
    name: "Collins Fred",
    role: "Product Quality Engineer",
    text: "Lorem is exactly what I've been looking for.",
    image: images.testimonial2,
    rating: 5,
  },
];

const TestimonialsSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update active dot based on scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const itemWidth = el.clientWidth;
      const index = Math.round(el.scrollLeft / itemWidth);
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = el.clientWidth;
    el.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#0B0F1F] py-8 md:py-16 text-white">
      <div className="w-full px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">What Our Clients Say</h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollBehavior: "smooth", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-10/12 sm:w-8/12 md:w-5/12 lg:w-3/12 px-4 snap-center transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-[#D9D9D9] text-black p-6 rounded-xl shadow-xl h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-blue-100"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-center mb-1">{t.name}</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center mb-3">{t.role}</p>

                <div className="flex justify-center mb-4 text-yellow-400">
                  {"★".repeat(t.rating)}
                </div>

                <p className="text-center text-gray-700 text-sm mb-4">{t.text}</p>
                <p className="text-xs text-center text-gray-400 mt-auto">• Testimonial •</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 w-6" : "bg-gray-600 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
