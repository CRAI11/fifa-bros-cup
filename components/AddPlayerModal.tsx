import React, { useState } from 'react';
import { CloseIcon } from './icons';

interface AddPlayerModalProps {
  onClose: () => void;
  onAddPlayer: (name: string) => void;
}

const AddPlayerModal: React.FC<AddPlayerModalProps> = ({ onClose, onAddPlayer }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlayer(name.trim());
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-lg text-white shadow-2xl p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Add New Player</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="playerName" className="block text-sm font-medium text-gray-300 mb-2">
            Player Display Name
          </label>
          <input
            id="playerName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black/20 border border-white/20 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter player name"
            required
            autoFocus
          />
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlayerModal;