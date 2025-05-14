import React, { useEffect, useState } from 'react';
import { Share2 } from 'lucide-react';

interface DreamAnalysisProps {
  analysis: {
    symbols: string[];
    subconscious: string;
    wakingLife: string;
    growth: string;
  } | null;
}

const DreamAnalysis: React.FC<DreamAnalysisProps> = ({ analysis }) => {
  const [revealed, setRevealed] = useState({
    symbols: false,
    subconscious: false,
    wakingLife: false,
    growth: false
  });
  
  useEffect(() => {
    if (!analysis) return;
    
    const revealSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setRevealed(prev => ({ ...prev, symbols: true }));
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRevealed(prev => ({ ...prev, subconscious: true }));
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRevealed(prev => ({ ...prev, wakingLife: true }));
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRevealed(prev => ({ ...prev, growth: true }));
    };
    
    revealSequence();
  }, [analysis]);
  
  if (!analysis) {
    return (
      <div className="max-w-2xl mx-auto text-center p-10">
        <p className="text-purple-200">No dream has been analyzed yet. Record your dream in the journal first.</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl transform transition-all duration-500 hover:shadow-purple-500/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dream Interpretation</h2>
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
            <Share2 size={18} />
          </button>
        </div>
        
        <div className={`mb-6 transition-all duration-1000 ${revealed.symbols ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium mb-2 text-purple-300">Key Symbols</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {analysis.symbols.map((symbol, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/5 rounded-full text-sm"
              >
                {symbol}
              </span>
            ))}
          </div>
        </div>
        
        <div className={`mb-6 transition-all duration-1000 ${revealed.subconscious ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium mb-2 text-purple-300">Subconscious Signals</h3>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-purple-100">{analysis.subconscious}</p>
          </div>
        </div>
        
        <div className={`mb-6 transition-all duration-1000 ${revealed.wakingLife ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium mb-2 text-purple-300">Waking Life Connections</h3>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-purple-100">{analysis.wakingLife}</p>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 ${revealed.growth ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium mb-2 text-purple-300">Growth Suggestions</h3>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-purple-100">{analysis.growth}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamAnalysis;