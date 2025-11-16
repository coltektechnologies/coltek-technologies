import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * ----------------
 * This hook allows any element to animate smoothly into view.
 * It only triggers once per element (so no repeated animations).
 *
 * I designed it to be extremely lightweight and GitHub-Actions friendly.
 */

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only reveal once
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // slightly below full visibility for smoother behavior
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
