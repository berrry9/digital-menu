import React from 'react';
import { motion } from 'framer-motion';
import { Info, ShoppingCart } from 'lucide-react';
import { User } from '../types/menu';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  user: User;
  cartItemsCount: number;
  onCartClick: () => void;
  onInfoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, cartItemsCount, onCartClick, onInfoClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300"
      id="header"
    >
      <div className="flex items-center space-x-3">
        {/* Hotel Logo Placeholder */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg"
        >
          <img 
            src="https://www.tewodros-belay-int-hotel.com/wp-content/uploads/2021/02/provincial-hotel.svg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
            alt="Tewodros Belay Int Hotel Logo"
            className="w-10 h-10 rounded-md object-cover"
            onError={(e) => {
              // Fallback to text logo if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-white font-bold text-lg">TB</span>';
              }
            }}
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        className="text-xl font-bold text-gray-800 dark:text-white"
      >
        Tewodros Belay Int Hotel Menu
      </motion.div>
      
      <div className="flex items-center space-x-3">
        <ThemeToggle />
        <motion.button
          onClick={onInfoClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </motion.button>
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