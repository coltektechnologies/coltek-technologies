import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";
import images from "../../assets/images/images";
import { Card } from "@/components/ui/card";
import { CarouselDots } from "@/components/ui/carousel-dots";

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
    role: "Student, University of Ghana",
    text: "My IT class has been a great learning experience. I've gained valuable skills and insights, and I'm excited to continue exploring this field thanks to Coltek Technologies",
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
];

const TestimonialsSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keep the active dot in sync with the scroll position.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const itemWidth = el.clientWidth;
      if (!itemWidth) return;
      setCurrentIndex(Math.round(el.scrollLeft / itemWidth));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * index, behavior: "smooth" });
  };

  return (
    <div className="py-section md:py-section-lg">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            What people say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            Students and professionals who have worked with the COLTEK team.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full shrink-0 snap-start md:w-[calc(50%-0.75rem)]"
            >
              <Card variant="plain" className="flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt=""
                    className="h-16 w-16 rounded-pill object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>

                <div
                  className="mt-4 flex gap-0.5"
                  role="img"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#3E66DF] text-[#3E66DF]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </blockquote>
              </Card>
            </div>
          ))}
        </div>

        {/* Only useful once the rail can actually scroll. */}
        {testimonials.length > 1 && (
          <CarouselDots
            className="mt-8"
            count={testimonials.length}
            activeIndex={currentIndex}
            onSelect={goToSlide}
            itemLabel="testimonial"
            variant="bar"
          />
        )}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
