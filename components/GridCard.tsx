
import React from 'react';

interface GridCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick?: () => void;
  badge?: string | number;
}

const GridCard: React.FC<GridCardProps> = ({ title, subtitle, icon, onClick, badge }) => {
  return (
    <div
      onClick={onClick}
      className="relative group h-36 flex flex-col justify-between p-4 rounded-lg overflow-hidden cursor-pointer
                 bg-white/5 backdrop-blur-md border border-white/10
                 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
    >
      {badge && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </div>
      )}

      <div>
        <h3 className="text-lg font-bold text-white uppercase">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
      <div className="self-end text-gray-400 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
       <div className="absolute bottom-0 left-0 h-1 w-full bg-cyan-400/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default GridCard;
