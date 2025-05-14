import React, { useState } from 'react';
import { Moon, Sun, CloudLightning, Sparkles, Mic, Send, Share2, BookOpen, Users, Home } from 'lucide-react';
import DreamJournal from './components/DreamJournal';
import DreamAnalysis from './components/DreamAnalysis';
import CommunityFeed from './components/CommunityFeed';
import Navbar from './components/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('journal');
  const [dreamText, setDreamText] = useState('');
  const [dreamMood, setDreamMood] = useState('');
  const [dreamTags, setDreamTags] = useState<string[]>([]);
  const [dreamAnalysis, setDreamAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDreamSubmit = () => {
    if (!dreamText || !dreamMood) return;
    
    setIsLoading(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const analysis = {
        symbols: ['bridge', 'water', 'darkness'],
        subconscious: "The crumbling bridge in your dream may represent a transition you're hesitant to make. The dark waters below symbolize your fears of the unknown.",
        wakingLife: "Consider what transitions you're facing in your waking life. Are you avoiding taking a necessary leap of faith?",
        growth: "Practice small acts of courage daily. Visualize yourself crossing bridges successfully to reprogram your subconscious."
      };
      
      setDreamAnalysis(analysis);
      setIsLoading(false);
      setActiveTab('analysis');
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'journal':
        return (
          <DreamJournal 
            dreamText={dreamText}
            setDreamText={setDreamText}
            dreamMood={dreamMood}
            setDreamMood={setDreamMood}
            dreamTags={dreamTags}
            setDreamTags={setDreamTags}
            onSubmit={handleDreamSubmit}
            isLoading={isLoading}
          />
        );
      case 'analysis':
        return <DreamAnalysis analysis={dreamAnalysis} />;
      case 'community':
        return <CommunityFeed />;
      default:
        return <DreamJournal 
          dreamText={dreamText}
          setDreamText={setDreamText}
          dreamMood={dreamMood}
          setDreamMood={setDreamMood}
          dreamTags={dreamTags}
          setDreamTags={setDreamTags}
          onSubmit={handleDreamSubmit}
          isLoading={isLoading}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">
          DreamRealm
        </h1>
        <p className="text-center text-lg mb-10 text-purple-200">Unlock the mysteries of your subconscious mind</p>
        
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;