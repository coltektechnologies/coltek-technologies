// ========== DEVELOPMENT PROCESS COMPONENT START ==========

interface ProcessStep {
  title: string;
  description: string;
  position: 'left' | 'right';
}

interface DevelopmentProcessProps {
  steps: ProcessStep[];
}

const DevelopmentProcess = ({ steps }: DevelopmentProcessProps) => {
  return (
    // ========== DEVELOPMENT PROCESS SECTION START ==========
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-3 font-montserrat text-black">
          Our Development Process
        </h2>
        <p className="text-center text-gray-600 mb-16">
          A proven methodology that delivers results on time and within budget
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - passes through center of ALL circles */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block"
            style={{ 
              backgroundColor: '#6530C7',
              top: '24px', // Start at center of first circle
              bottom: '24px', // End at center of last circle
            }}
          />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  step.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${index !== steps.length - 1 ? 'mb-16' : ''}`}
              >
                {/* Content Box with #F7F7F7 background */}
                <div className={`flex-1 w-full md:w-auto ${step.position === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div 
                    className={`rounded-2xl p-6 transition-all hover:shadow-xl max-w-md ${step.position === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}
                    style={{
                      backgroundColor: '#F7F7F7',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <h3 className="text-xl font-bold mb-3 font-montserrat text-black">
                      {step.title}
                    </h3>
                    <p 
                      className="leading-relaxed text-sm"
                      style={{ color: '#000000' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Circle with number - positioned at center */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10 flex-shrink-0">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #43AEF1 0%, #6530C7 100%)',
                    }}
                  >
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    // ========== DEVELOPMENT PROCESS SECTION END ==========
  );
};

export default DevelopmentProcess;

// ========== DEVELOPMENT PROCESS COMPONENT END ==========