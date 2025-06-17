import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SharedElementTransitionProps {
  children: React.ReactNode;
  layoutId: string;
  className?: string;
}

export const SharedElementTransition: React.FC<SharedElementTransitionProps> = ({
  children,
  layoutId,
  className
}) => {
  return (
    <motion.div
      layoutId={layoutId}
      className={className}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {children}
    </motion.div>
  );
};

interface SharedImageProps {
  src: string;
  alt: string;
  layoutId: string;
  className?: string;
  onClick?: () => void;
}

export const SharedImage: React.FC<SharedImageProps> = ({
  src,
  alt,
  layoutId,
  className,
  onClick
}) => {
  return (
    <motion.img
      layoutId={layoutId}
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    />
  );
};