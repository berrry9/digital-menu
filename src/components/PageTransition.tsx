import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';

interface PageTransitionProps {
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  isTransitioning, 
  onTransitionComplete 
}) => {
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'exit' | 'hidden'>('hidden');

  useEffect(() => {
    if (isTransitioning) {
      setAnimationPhase('enter');
      
      // Start exit animation after a brief display
      const exitTimer = setTimeout(() => {
        setAnimationPhase('exit');
      }, 400);

      // Complete transition
      const completeTimer = setTimeout(() => {
        setAnimationPhase('hidden');
        onTransitionComplete();
      }, 700);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isTransitioning, onTransitionComplete]);

  if (animationPhase === 'hidden') return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
      animationPhase === 'enter' 
        ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-100' 
        : 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-0'
    }`}>
      <div className="relative">
        {/* Main Logo Container */}
        <div className={`transform transition-all duration-500 ${
          animationPhase === 'enter' 
            ? 'scale-100 opacity-100 rotate-0' 
            : 'scale-110 opacity-0 rotate-12'
        }`}>
          {/* Outer Ring */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border-2 border-orange-400/50 rounded-full animate-pulse"></div>
            
            {/* Logo Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ChefHat className="w-7 h-7 text-blue-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Text */}
        <div className={`text-center transform transition-all duration-700 delay-100 ${
          animationPhase === 'enter' 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-2xl font-bold text-white mb-1">Asia Hotel</h2>
          <p className="text-blue-200 text-sm font-medium tracking-wide">Digital Menu</p>
        </div>

        {/* Loading Dots */}
        <div className={`flex justify-center space-x-2 mt-6 transition-opacity duration-500 ${
          animationPhase === 'enter' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};