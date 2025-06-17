import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDarkMode ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Moon className="w-4 h-4 text-blue-600" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};