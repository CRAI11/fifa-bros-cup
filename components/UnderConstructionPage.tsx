import React from 'react';
import Background from './Background';
import { ToolIcon } from './icons';

interface UnderConstructionPageProps {
  title: string;
  message: string;
  onBack: () => void;
}

const UnderConstructionPage: React.FC<UnderConstructionPageProps> = ({ title, message, onBack }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center animate-fade-in relative p-4 text-white">
      <Background />
      <button onClick={onBack} className="fixed top-8 left-8 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg z-20">
        &larr; Back to Main Hub
      </button>
      <div className="relative z-10 text-center bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/10 max-w-2xl shadow-2xl">
        <ToolIcon className="w-24 h-24 text-cyan-400 mx-auto mb-6 opacity-70 animate-[spin_8s_linear_infinite]" />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 uppercase">{title}</h1>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          {message}
        </p>
        <div className="mt-8 h-1 w-24 bg-cyan-400/50 mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;