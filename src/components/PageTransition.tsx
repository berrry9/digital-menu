import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      
      const exitTimer = setTimeout(() => {
        setAnimationPhase('exit');
      }, 400);

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

  return (
    <AnimatePresence>
      {animationPhase !== 'hidden' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: animationPhase === 'enter' ? 1 : 1.1,
                opacity: animationPhase === 'enter' ? 1 : 0,
                rotate: animationPhase === 'enter' ? 0 : 12
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <motion.div
                  className="absolute inset-0 border-4 border-white/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 border-2 border-orange-400/50 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ChefHat className="w-7 h-7 text-blue-900" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: animationPhase === 'enter' ? 0 : 4,
                opacity: animationPhase === 'enter' ? 1 : 0
              }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-1">Tewodros Hotel</h2>
              <p className="text-blue-200 text-sm font-medium tracking-wide">Digital Menu</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: animationPhase === 'enter' ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center space-x-2 mt-6"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};