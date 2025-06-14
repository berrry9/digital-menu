import React, { useState } from 'react';
import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react';
import { MenuItem } from '../types/menu';

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
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white shadow-sm">
          <button onClick={onClose} className="p-2">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="text-sm text-gray-500">Room </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={() => onToggleFavorite(item.id)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Heart 
              className={`w-5 h-5 ${item.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h1>
          
          {/* Stats */}
          <div className="bg-blue-900 text-white p-4 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">{item.volume}</span>
              <span className="text-sm opacity-90">{item.calories}cal</span>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 fill-white" />
                <span className="text-sm font-medium">{item.quantity || 348}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {item.description}
          </p>

          {/* Ingredients */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-3">Ingredients:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.ingredients.join(', ')}
            </p>
          </div>

          {/* Price and Order */}
          <div className="bg-white p-6 rounded-t-3xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-gray-800">${item.price}</span>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-semibold text-gray-800 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-400 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};