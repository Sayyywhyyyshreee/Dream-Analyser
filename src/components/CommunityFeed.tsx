import React from 'react';

const CommunityFeed: React.FC = () => {
  // Sample community dreams
  const communityDreams = [
    {
      id: 1,
      username: "DreamWalker",
      mood: "mystical",
      tags: ["Flying", "Adventure"],
      excerpt: "I was soaring above a city made of crystal, with rainbow bridges connecting floating islands...",
      likes: 24,
      comments: 7
    },
    {
      id: 2,
      username: "NightOwl",
      mood: "stressed",
      tags: ["Water", "Survival"],
      excerpt: "The ocean was rising rapidly around me. I kept climbing higher but the water followed...",
      likes: 18,
      comments: 5
    },
    {
      id: 3,
      username: "StarGazer",
      mood: "hopeful",
      tags: ["Childhood", "Relationships"],
      excerpt: "I returned to my childhood home, but it was much larger inside. Each room contained people from different periods of my life...",
      likes: 32,
      comments: 12
    }
  ];
  
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'mystical':
        return 'bg-blue-500/30';
      case 'stressed':
        return 'bg-red-500/30';
      case 'hopeful':
        return 'bg-yellow-500/30';
      case 'chaotic':
        return 'bg-purple-500/30';
      default:
        return 'bg-white/20';
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Dream Realm Community</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-purple-300">Trending Dreams</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-all">
                Recent
              </button>
              <button className="px-3 py-1 bg-purple-500/30 rounded-full text-sm transition-all">
                Popular
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {communityDreams.map(dream => (
              <div 
                key={dream.id}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${getMoodIcon(dream.mood)}`}>
                      {dream.username.charAt(0)}
                    </div>
                    <span className="font-medium">{dream.username}</span>
                  </div>
                  <div className="text-xs text-purple-300">2h ago</div>
                </div>
                
                <p className="mb-3 text-purple-100">{dream.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {dream.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-0.5 bg-white/5 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-purple-300">
                  <button className="flex items-center mr-4 hover:text-purple-100 transition-all">
                    <span className="mr-1">❤️</span> {dream.likes}
                  </button>
                  <button className="flex items-center hover:text-purple-100 transition-all">
                    <span className="mr-1">💬</span> {dream.comments}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-all">
            Explore More Dreams
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeed;