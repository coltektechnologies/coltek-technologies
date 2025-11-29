// ========== TECH STACK COMPONENT START ==========

import React from "react";

interface TechCategory {
  name: string;
  techs: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

interface TechStackProps {
  categories: TechCategory[];
}

const TechStack = ({ categories }: TechStackProps) => {
  return (
    // ========== TECH STACK SECTION START ==========
    <section className="py-20 px-4 bg-gradient-to-br from-[#0A1628] via-[#1a2847] to-[#2a3f6f] text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header with specific typography */}
        <h2 
          className="text-center mb-4 font-bold"
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '135%',
            letterSpacing: '0.1em',
          }}
        >
          Technologies We Use
        </h2>
        <p className="text-center text-white/70 mb-16 text-lg">
          Building with modern, industry-leading technologies
        </p>

        {/* Tech Cards Grid - 4 columns with flexible rows based on content */}
        <div className="tech-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div 
                key={index} 
                className="tech-card bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-white hover:border-white/60 transition-all hover:shadow-2xl hover:bg-white/10"
              >
                {/* Category Header with Icon */}
                <div className="category-header flex items-center gap-3 mb-6">
                  {IconComponent && (
                    <IconComponent className="category-icon text-2xl w-6 h-6 text-white" />
                  )}
                  <h3 className="category-name text-xl font-bold font-montserrat">
                    {category.name}
                  </h3>
                </div>
                
                {/* Tech List - Flexible wrapping based on word length */}
                <div className="tech-pills-container flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="tech-pill bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20 hover:bg-white/20 hover:border-blue-400 transition-all cursor-default whitespace-nowrap"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    // ========== TECH STACK SECTION END ==========
  );
};

export default TechStack;

// ========== TECH STACK COMPONENT END ==========