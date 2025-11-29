import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Reveal Component
 * ----------------
 * I built this small wrapper so you can wrap *any* section like:
 *
 * <Reveal>
 *    <div>...</div>
 * </Reveal>
 *
 * And the content will fade in + rise slightly into view.
 */

interface Props {
  children: React.ReactNode;
  delay?: number; // allow different timing if needed
}

const Reveal: React.FC<Props> = ({ children, delay = 0 }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-[700ms] ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;
