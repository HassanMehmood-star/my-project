import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  { title: 'Global Sourcing', description: 'Find suppliers globally with optimized cost and speed.' },
  { title: 'Logistics Simplified', description: 'Streamlined logistics to ensure smooth operations.' },
  { title: 'Cost Reduction', description: 'Smart analytics to cut procurement expenses.' },
];

const FeatureSection = () => {
  return (
    <div className="relative z-30 px-4 sm:px-6 md:px-12 lg:px-24 -mt-48">
      {/* ↑ increased from -mt-32 to -mt-48 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
