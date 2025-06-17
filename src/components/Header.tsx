import React from 'react';
import { motion } from 'framer-motion';
import { User as UserIcon, ShoppingCart } from 'lucide-react';
import { User } from '../types/menu';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  user: User;
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, cartItemsCount, onCartClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300"
      id="header"
    >
      <div className="flex items-center space-x-3">
        <div className="text-sm text-gray-500 dark:text-gray-400">Room {user.roomNumber}</div>
      </div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        className="text-xl font-bold text-gray-800 dark:text-white"
      >
        Menu
      </motion.div>
      
      <div className="flex items-center space-x-3">
        <ThemeToggle />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <UserIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </motion.div>
        <motion.button
          onClick={onCartClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-10 h-10 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center hover:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300"
        >
          <ShoppingCart className="w-5 h-5 text-white" />
          {cartItemsCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-600 dark:bg-red-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {cartItemsCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};