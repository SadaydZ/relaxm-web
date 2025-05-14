import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface HeartRateAnimationProps {
  minimal?: boolean;
}

const HeartRateAnimation: React.FC<HeartRateAnimationProps> = ({ minimal = false }) => {
  const [bpm, setBpm] = useState(72);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm(prevBpm => {
        const variation = Math.floor(Math.random() * 7) - 3;
        return Math.max(60, Math.min(90, prevBpm + variation));
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  if (minimal) {
    return (
      <div className="relative w-full h-full">
        <svg 
          viewBox="0 0 300 50" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0,25 L30,25 L45,10 L60,40 L75,10 L90,40 L105,25 L120,25 L150,25"
            fill="none"
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth="2"
            className="translate-x-[-150px]"
          />
          <path
            d="M0,25 L30,25 L45,10 L60,40 L75,10 L90,40 L105,25 L120,25 L150,25 L180,25 L195,10 L210,40 L225,10 L240,40 L255,25 L270,25 L300,25"
            fill="none"
            stroke="rgb(147, 51, 234)"
            strokeWidth="2"
            className="animate-heartbeat"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-between w-full px-4 md:px-8 py-6 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-purple-600/30 to-purple-900/30 blur-3xl"></div>
      
      <div className="relative z-10 flex items-center space-x-4 md:space-x-8">
        <div className="flex items-center">
          <Heart className="w-8 h-8 md:w-12 md:h-12 text-purple-500 animate-pulse" />
          <div className="ml-2 md:ml-4">
            <div className="text-lg md:text-2xl font-semibold text-purple-200">Ritmo Cardíaco</div>
            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {bpm} <span className="text-base md:text-xl">BPM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 flex-1 ml-4 md:ml-8 h-16 md:h-24">
        <svg 
          viewBox="0 0 600 100" 
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0,50 L30,50 L45,20 L60,80 L75,20 L90,80 L105,50 L120,50 L150,50"
            fill="none"
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth="2"
            className="translate-x-[-150px]"
          />
          <path
            d="M0,50 L30,50 L45,20 L60,80 L75,20 L90,80 L105,50 L120,50 L150,50 L180,50 L195,20 L210,80 L225,20 L240,80 L255,50 L270,50 L300,50 L330,50 L345,20 L360,80 L375,20 L390,80 L405,50 L420,50 L450,50 L480,50 L495,20 L510,80 L525,20 L540,80 L555,50 L570,50 L600,50"
            fill="none"
            stroke="rgb(147, 51, 234)"
            strokeWidth="2"
            className="animate-heartbeat"
          />
        </svg>
        
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 animate-pulse-wave rounded-full"
          style={{ 
            animationDuration: `${60/bpm}s`,
            mixBlendMode: 'overlay'
          }}
        />
      </div>
    </div>
  );
};

export default HeartRateAnimation;