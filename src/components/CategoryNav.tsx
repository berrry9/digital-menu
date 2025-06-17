import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory } from '../types/menu';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onCategoryChange }) => {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'noodles': return '🍜';
      case 'rice': return '🍚';
      case 'soup': return '🍲';
      case 'salad': return '🥗';
      case 'sushi': return '🍣';
      default: return '🍽️';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex bg-blue-900 dark:bg-blue-950 p-2 space-x-1 transition-colors duration-300"
      id="categories"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-1 py-3 px-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-blue-800 dark:bg-blue-700 text-white shadow-lg'
              : 'text-blue-200 dark:text-blue-300 hover:bg-blue-800 dark:hover:bg-blue-700 hover:text-white'
          }`}
        >
          <div className="flex flex-col items-center space-y-1">
            <motion.span
              animate={{ rotate: activeCategory === category.id ? [0, 10, -10, 0] : 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg"
            >
              {getCategoryIcon(category.id)}
            </motion.span>
            <span className="text-xs">{category.name}</span>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};