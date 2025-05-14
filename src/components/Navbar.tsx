import React from 'react';
import { BookOpen, Users, Home } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-full p-1 flex space-x-1">
        <button
          onClick={() => setActiveTab('journal')}
          className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
            activeTab === 'journal' 
              ? 'bg-white/20 text-white' 
              : 'hover:bg-white/10 text-purple-200'
          }`}
        >
          <Home size={18} className="mr-2" />
          <span>Journal</span>
        </button>
        <button
          onClick={() => setActiveTab('analysis')}
          className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
            activeTab === 'analysis' 
              ? 'bg-white/20 text-white' 
              : 'hover:bg-white/10 text-purple-200'
          }`}
        >
          <BookOpen size={18} className="mr-2" />
          <span>Analysis</span>
        </button>
        <button
          onClick={() => setActiveTab('community')}
          className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
            activeTab === 'community' 
              ? 'bg-white/20 text-white' 
              : 'hover:bg-white/10 text-purple-200'
          }`}
        >
          <Users size={18} className="mr-2" />
          <span>Community</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;