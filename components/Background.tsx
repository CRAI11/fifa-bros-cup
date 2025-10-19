
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Radial gradient glow from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-blue-900/50 rounded-full blur-3xl opacity-40"></div>
      
      {/* Angled line accents */}
      <div 
        className="absolute top-0 left-0 w-full h-full transform -skew-y-12 scale-150 opacity-10"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0, 128, 255, 0.2), transparent)',
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-full h-full transform skew-y-12 scale-150 opacity-10"
        style={{
          background: 'linear-gradient(to left, transparent, rgba(0, 255, 128, 0.1), transparent)',
        }}
      ></div>
    </div>
  );
};

export default Background;
