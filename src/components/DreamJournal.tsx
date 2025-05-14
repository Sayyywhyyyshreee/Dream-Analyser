import React, { useState } from 'react';
import { Moon, Sun, CloudLightning, Sparkles, Mic, Send } from 'lucide-react';

interface DreamJournalProps {
  dreamText: string;
  setDreamText: (text: string) => void;
  dreamMood: string;
  setDreamMood: (mood: string) => void;
  dreamTags: string[];
  setDreamTags: (tags: string[]) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const DreamJournal: React.FC<DreamJournalProps> = ({
  dreamText,
  setDreamText,
  dreamMood,
  setDreamMood,
  dreamTags,
  setDreamTags,
  onSubmit,
  isLoading
}) => {
  const [isRecording, setIsRecording] = useState(false);
  
  const availableTags = ['Career', 'Relationships', 'Childhood', 'Survival', 'Adventure', 'Fear', 'Flying', 'Water'];
  
  const toggleTag = (tag: string) => {
    if (dreamTags.includes(tag)) {
      setDreamTags(dreamTags.filter(t => t !== tag));
    } else {
      setDreamTags([...dreamTags, tag]);
    }
  };
  
  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setDreamText(dreamText + "I was crossing a crumbling bridge over dark waters. I felt afraid but knew I had to continue forward.");
        setIsRecording(false);
      }, 3000);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl transform transition-all duration-500 hover:shadow-purple-500/20">
        <h2 className="text-2xl font-semibold mb-4 text-center">Record Your Dream</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">How did your dream make you feel?</label>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => setDreamMood('stressed')}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                dreamMood === 'stressed' 
                  ? 'bg-red-500/30 ring-2 ring-red-400' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <Moon size={24} className="mb-1" />
              <span className="text-xs">Stressed</span>
            </button>
            <button
              onClick={() => setDreamMood('hopeful')}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                dreamMood === 'hopeful' 
                  ? 'bg-yellow-500/30 ring-2 ring-yellow-400' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <Sun size={24} className="mb-1" />
              <span className="text-xs">Hopeful</span>
            </button>
            <button
              onClick={() => setDreamMood('chaotic')}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                dreamMood === 'chaotic' 
                  ? 'bg-purple-500/30 ring-2 ring-purple-400' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <CloudLightning size={24} className="mb-1" />
              <span className="text-xs">Chaotic</span>
            </button>
            <button
              onClick={() => setDreamMood('mystical')}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                dreamMood === 'mystical' 
                  ? 'bg-blue-500/30 ring-2 ring-blue-400' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <Sparkles size={24} className="mb-1" />
              <span className="text-xs">Mystical</span>
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Describe your dream in detail</label>
          <div className="relative">
            <textarea
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              placeholder="Include emotions, characters, and unusual elements..."
              className="w-full h-40 bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-purple-200/50 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            ></textarea>
            <button
              onClick={handleVoiceInput}
              className={`absolute bottom-3 left-3 p-2 rounded-full ${
                isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <Mic size={20} />
            </button>
          </div>
          {isRecording && (
            <div className="mt-2 text-sm text-purple-200 animate-pulse">
              Listening... speak clearly
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select relevant themes</label>
          <div className="flex flex-wrap gap-2">
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  dreamTags.includes(tag)
                    ? 'bg-purple-500/50 text-white'
                    : 'bg-white/5 text-purple-200 hover:bg-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            disabled={!dreamText || !dreamMood || isLoading}
            className={`flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all ${
              !dreamText || !dreamMood || isLoading
                ? 'bg-white/10 text-white/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/20'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                <span>Interpret Dream</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamJournal;