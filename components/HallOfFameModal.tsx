
import React from 'react';
import { TournamentYear } from '../types';
import { CloseIcon, TrophyIcon } from './icons';

interface HallOfFameModalProps {
  yearData: TournamentYear | null;
  onClose: () => void;
}

const HallOfFameModal: React.FC<HallOfFameModalProps> = ({ yearData, onClose }) => {
  if (!yearData) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-lg text-white shadow-2xl p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <TrophyIcon className="w-12 h-12 mx-auto text-yellow-400 mb-2" />
          <h2 className="text-3xl font-bold">Hall of Fame - {yearData.year}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Winner Info */}
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

          {/* Finalist Info */}
          <div className="bg-white/5 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Finalist: {yearData.finalist.name}</h3>
            <p>Team: {yearData.finalist.team}</p>
            <img src={yearData.finalist.teamLogoUrl} alt={`${yearData.finalist.team} logo`} className="w-8 h-8 mt-1" />
          </div>
        </div>

        <div className="mt-6 bg-white/5 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Match Details</h3>
          <p><span className="font-bold">Final Score:</span> {yearData.finalScore}</p>
          <p className="mt-2"><span className="font-bold">Highlight:</span> {yearData.matchOfTheYearHighlight}</p>
          <img src={yearData.finalScoreScreenshotUrl} alt="Final Score" className="mt-4 rounded-lg w-full h-auto object-cover"/>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 p-3 rounded-lg"><span className="font-bold block">Top Scorer</span> {yearData.topScorer}</div>
            <div className="bg-white/5 p-3 rounded-lg"><span className="font-bold block">MVP</span> {yearData.mvp}</div>
            <div className="bg-white/5 p-3 rounded-lg"><span className="font-bold block">Best Goal</span> {yearData.bestGoal}</div>
        </div>
      </div>
    </div>
  );
};

export default HallOfFameModal;
