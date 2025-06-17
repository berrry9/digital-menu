import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { MenuItem } from '../types/menu';
import { SharedImage } from './animations/SharedElementTransition';
import { AddToCartLottieAnimation } from './animations/LottieAnimation';

interface MenuCardProps {
  item: MenuItem;
  onItemClick: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onToggleFavorite: (itemId: string) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onItemClick, onAddToCart, onToggleFavorite }) => {
  const [showAddAnimation, setShowAddAnimation] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAddAnimation(true);
    onAddToCart(item);
    setTimeout(() => setShowAddAnimation(false), 1000);
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => onItemClick(item)}
    >
      <div className="relative">
        <SharedImage
          layoutId={`item-image-${item.id}`}
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-2 left-2 bg-blue-900 dark:bg-blue-800 text-white px-2 py-1 rounded text-xs font-medium"
        >
          Available
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="absolute top-2 right-2 bg-blue-900 dark:bg-blue-800 text-white px-2 py-1 rounded text-xs font-medium"
        >
          +{item.quantity}
        </motion.div>
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item.id);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-2 right-2 w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Heart 
            className={`w-4 h-4 transition-colors duration-300 ${
              item.isFavorite 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 dark:text-gray-500'
            }`}
          />
        </motion.button>
      </div>
      
      <div className="p-4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-semibold text-gray-800 dark:text-white text-sm mb-1"
        >
          {item.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2"
        >
          {item.description}
        </motion.p>
        
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-bold text-gray-800 dark:text-white"
          >
            ${item.price}
          </motion.span>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-blue-600 dark:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300 overflow-hidden"
          >
            {showAddAnimation ? (
              <div className="flex items-center justify-center">
                <AddToCartLottieAnimation className="w-4 h-4" />
              </div>
            ) : (
              'Add'
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};