import React from 'react';
import { Heart } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onItemClick: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onToggleFavorite: (itemId: string) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onItemClick, onAddToCart, onToggleFavorite }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
      onClick={() => onItemClick(item)}
    >
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 left-2 bg-blue-900 text-white px-2 py-1 rounded text-xs font-medium">
          Available
        </div>
        <div className="absolute top-2 right-2 bg-blue-900 text-white px-2 py-1 rounded text-xs font-medium">
          +{item.quantity}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item.id);
          }}
          className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <Heart 
            className={`w-4 h-4 ${item.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.name}</h3>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">${item.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};