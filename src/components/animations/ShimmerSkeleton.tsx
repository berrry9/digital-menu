import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerSkeletonProps {
  className?: string;
  variant?: 'card' | 'text' | 'circle' | 'rectangle';
  lines?: number;
}

export const ShimmerSkeleton: React.FC<ShimmerSkeletonProps> = ({
  className = '',
  variant = 'rectangle',
  lines = 1
}) => {
  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { x: '100%' },
  };

  const ShimmerOverlay = () => (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      variants={shimmerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  if (variant === 'card') {
    return (
      <div className={`bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden relative ${className}`}>
        <div className="p-4 space-y-3">
          <div className="h-32 bg-gray-300 dark:bg-gray-600 rounded-lg relative overflow-hidden">
            <ShimmerOverlay />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded relative overflow-hidden">
              <ShimmerOverlay />
            </div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4 relative overflow-hidden">
              <ShimmerOverlay />
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-16 relative overflow-hidden">
                <ShimmerOverlay />
              </div>
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-12 relative overflow-hidden">
                <ShimmerOverlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-200 dark:bg-gray-700 rounded relative overflow-hidden ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          >
            <ShimmerOverlay />
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'circle') {
    return (
      <div className={`bg-gray-200 dark:bg-gray-700 rounded-full relative overflow-hidden ${className}`}>
        <ShimmerOverlay />
      </div>
    );
  }

  return (
    <div className={`bg-gray-200 dark:bg-gray-700 rounded relative overflow-hidden ${className}`}>
      <ShimmerOverlay />
    </div>
  );
};

export const MenuGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <ShimmerSkeleton key={index} variant="card" />
      ))}
    </div>
  );
};