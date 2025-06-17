import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react';
import { MenuItem } from '../types/menu';
import { SharedImage } from './animations/SharedElementTransition';

interface ItemDetailProps {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onToggleFavorite: (itemId: string) => void;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ item, onClose, onAddToCart, onToggleFavorite }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gray-50 dark:bg-gray-900 z-50 overflow-y-auto transition-colors duration-300"
      >
        <div className="min-h-screen">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300"
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.button>
            {/* Hotel Logo in Item Detail */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center"
            >
              <img 
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                alt="Hotel Logo"
                className="w-6 h-6 rounded-sm object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-white font-bold text-xs">TB</span>';
                  }
                }}
              />
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <div className="relative">
            <SharedImage
              layoutId={`item-image-${item.id}`}
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <motion.button
              onClick={() => onToggleFavorite(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
            >
              <Heart 
                className={`w-5 h-5 transition-colors duration-300 ${
                  item.isFavorite 
                    ? 'fill-red-500 text-red-500' 
                    : 'text-gray-400 dark:text-gray-500'
                }`}
              />
            </motion.button>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6"
          >
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
            >
              {item.name}
            </motion.h1>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-900 dark:bg-blue-950 text-white p-4 rounded-xl mb-6 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">{item.volume}</span>
                <span className="text-sm opacity-90">{item.calories}cal</span>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="text-sm font-medium">{item.quantity || 348}</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            >
              {item.description}
            </motion.p>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Ingredients:</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.ingredients.join(', ')}
              </p>
            </motion.div>

            {/* Price and Order */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-t-3xl shadow-lg transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-gray-800 dark:text-white">${item.price}</span>
                
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => handleQuantityChange(-1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-blue-900 dark:bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="text-xl font-semibold text-gray-800 dark:text-white min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <motion.button
                    onClick={() => handleQuantityChange(1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-blue-900 dark:bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-400 dark:bg-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 dark:hover:bg-orange-600 transition-colors duration-300"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};