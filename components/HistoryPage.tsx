import React, { useState } from 'react';
import { TournamentYear } from '../types';
import { hallOfFameData } from '../data/mockData';
import { TrophyIcon } from './icons';

interface HistoryPageProps {
  onBack: () => void;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ onBack }) => {
  const [selectedYear, setSelectedYear] = useState<TournamentYear>(hallOfFameData[0]);

  const DetailsPanel = ({ yearData }: { yearData: TournamentYear }) => (
    <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 h-full flex flex-col sticky top-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Tournament Overview</h2>
      
      <div className="flex-grow overflow-y-auto pr-2" style={{maxHeight: 'calc(80vh - 60px)'}}>
        <div className="text-center mb-6">
          <TrophyIcon className="w-12 h-12 mx-auto text-yellow-400 mb-2" />
          <h2 className="text-3xl font-bold">Hall of Fame - {yearData.year}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Winner: {yearData.winner.name}</h3>
            <div className="flex items-center space-x-4">
              <img src={yearData.winner.photoUrl} alt={yearData.winner.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p>Team: {yearData.winner.team}</p>
                <img src={yearData.winner.teamLogoUrl} alt={`${yearData.winner.team} logo`} className="w-8 h-8 mt-1" />
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Finalist: {yearData.finalist.name}</h3>
            <p>Team: {yearData.finalist.team}</p>
            <img src={yearData.finalist.teamLogoUrl} alt={`${yearData.finalist.team} logo`} className="w-8 h-8 mt-1" />
          </div>
        </div>

        <div className="mt-4 bg-white/5 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Match Details</h3>
          <p><span className="font-bold">Final Score:</span> {yearData.finalScore}</p>
          <p className="mt-2"><span className="font-bold">Highlight:</span> {yearData.matchOfTheYearHighlight}</p>
          <img src={yearData.finalScoreScreenshotUrl} alt="Final Score" className="mt-4 rounded-lg w-full h-auto object-cover"/>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 p-3 rounded-lg"><span className="font-bold block">Top Scorer</span> {yearData.topScorer}</div>
            <div className="bg-white/5 p-3 rounded-lg"><span className="font-bold block">MVP</span> {yearData.mvp}</div>
            <div className="bg-white/5 p-3 rounded-lg"><span className="font-bold block">Best Goal</span> {yearData.bestGoal}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <button onClick={onBack} className="mb-8 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg">
        &larr; Back to Main Hub
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8" style={{ minHeight: '80vh' }}>
        <div className="lg:col-span-3 bg-white/5 backdrop-blur-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Tournament History</h2>
          
          <div className="space-y-2 mt-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <div className="grid grid-cols-5 gap-4 px-4 py-2 text-gray-400 font-bold uppercase text-sm sticky top-0 bg-gray-900/50 backdrop-blur-sm">
                <div className="col-span-1">Year</div>
                <div className="col-span-2">Winner</div>
                <div className="col-span-2">Finalist</div>
            </div>
            {hallOfFameData.map((year) => (
              <div
                key={year.year}
                onClick={() => setSelectedYear(year)}
                className={`grid grid-cols-5 gap-4 items-center px-4 py-3 rounded-md cursor-pointer transition-colors duration-200 ${
                  selectedYear.year === year.year
                    ? 'bg-cyan-400/20 text-white'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="col-span-1 font-semibold text-lg">{year.year}</div>
                <div className="col-span-2 flex items-center space-x-3">
                    <img src={year.winner.teamLogoUrl} alt={`${year.winner.team} logo`} className="w-6 h-6"/>
                    <span>{year.winner.name}</span>
                </div>
                 <div className="col-span-2 flex items-center space-x-3">
                    <img src={year.finalist.teamLogoUrl} alt={`${year.finalist.team} logo`} className="w-6 h-6"/>
                    <span>{year.finalist.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
            {selectedYear && <DetailsPanel yearData={selectedYear} />}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;