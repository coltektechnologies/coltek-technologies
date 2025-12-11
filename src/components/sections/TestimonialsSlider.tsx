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
    name: "Ewura-Adwoa Edmond",
    role: "Student University of Ghana",
    text: "My IT class has been a great learning experience. I've gained valuable skills and insights, and I'm excited to continue exploring this field thanks to Coltek Technologies ",
    image: images.Adwoa, 
    rating: 5,
  },
  {
    id: 2,
    name: "Dwaine Jeffrey Addey",
    role: "Chartered Accountant",
    text: "Joining Coltek Technologies has been a pivotal moment in my IT career, providing invaluable hands-on experience and strong technical skill development in a supportive, professional environment committed to excellence and innovation.",
    image: images.jeffery,
    rating: 5,
  },
  // {
  //   id: 3,
  //   name: "Nancy Coltek",
  //   role: "Content Creator and Developer",
  //   text: "The app delivered is exactly what I've been looking for.",
  //   image: images.testimonial1,
  //   rating: 5,
  // },
  // {
  //   id: 4,
  //   name: "Collins Fred",
  //   role: "Product Quality Engineer",
  //   text: "Lorem is exactly what I've been looking for.",
  //   image: images.testimonial2,
  //   rating: 5,
  // },
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
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-left">Testimonials</h2>

        <div
          ref={scrollRef}
          className="flex flex-col md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory scrollbar-hide pb-8 w-full max-w-4xl mx-auto gap-6 px-4"
          style={{ scrollBehavior: "smooth", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto md:flex-shrink-0 md:px-4 transition-transform duration-300 hover:scale-[1.02]"
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

                <div className="flex justify-center mb-4 space-x-1" style={{ color: '#3E66DF' }}>
                  {Array(t.rating).fill(0).map((_, i) => (
                    <span key={i} className="font-bold text-2xl">★</span>
                  ))}
                </div>

                <p className="text-center text-gray-700 text-sm mb-4">{t.text}</p>
                <div className="flex items-center justify-center space-x-1 mt-auto">
                  <img src={images.hand} alt="" className="h-4 w-4" />
                  <span style={{ color: '#202020' }}>Testimonial</span>
                </div>
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
