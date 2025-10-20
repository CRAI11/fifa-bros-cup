import React from 'react';
import { hallOfFameData } from '../data/mockData';
import { CardType } from '../types';
import Background from './Background';

const frameColors: Record<CardType, { border: string; shadow: string }> = {
  gold: { border: 'border-yellow-400', shadow: 'shadow-[0_0_15px_rgba(250,204,21,0.5)]' },
  purple: { border: 'border-purple-400', shadow: 'shadow-[0_0_15px_rgba(192,132,252,0.5)]' },
  blue: { border: 'border-blue-400', shadow: 'shadow-[0_0_15px_rgba(96,165,250,0.5)]' },
  red: { border: 'border-red-400', shadow: 'shadow-[0_0_15px_rgba(248,113,113,0.5)]' },
  grey: { border: 'border-gray-400', shadow: 'shadow-[0_0_15px_rgba(156,163,175,0.5)]' },
};

const rotations = [
  'rotate-[-2deg]',
  'rotate-[3deg]',
  'rotate-[-4deg]',
  'rotate-[1deg]',
  'rotate-[5deg]',
];

const WinnersFramePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full animate-fade-in relative">
      <Background />
      <div className="relative z-10 p-8">
        <button onClick={onBack} className="fixed top-8 left-8 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg z-20">
          &larr; Back to Main Hub
        </button>
        
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight text-center mb-12 text-white uppercase">
            Winner's Frame
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 py-8">
            {hallOfFameData.map((data, index) => {
              const colorClasses = frameColors[data.winner.cardColor];
              return (
                <div 
                  key={data.year} 
                  className={`
                    relative bg-white/5 backdrop-blur-sm p-4 border-2 rounded-lg 
                    shadow-xl transform transition-transform hover:scale-110 hover:z-10 
                    ${colorClasses.border} ${colorClasses.shadow} ${rotations[index % rotations.length]}
                  `}
                >
                  <img src={data.winner.photoUrl} alt={`Winner ${data.year}`} className="w-full h-auto object-cover rounded-md" />
                  <div className="mt-4 text-center text-white">
                    <p className="text-2xl font-bold">{data.winner.name}</p>
                    <p className="text-xl text-gray-400">{data.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersFramePage;
