import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { MenuGrid } from './MenuGrid';
import { MenuItem } from '../types/menu';

interface SubCategoryPageProps {
  subCategory: string;
  items: MenuItem[];
  onBack: () => void;
  onItemClick: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onToggleFavorite: (itemId: string) => void;
}

export const SubCategoryPage: React.FC<SubCategoryPageProps> = ({
  subCategory,
  items,
  onBack,
  onItemClick,
  onAddToCart,
  onToggleFavorite
}) => {
  const getSubCategoryTitle = (subCat: string) => {
    return subCat.charAt(0).toUpperCase() + subCat.slice(1);
  };

  const getSubCategoryIcon = (subCat: string) => {
    switch (subCat) {
      // Mains (noodles category)
      case 'soup': return '🍲';
      case 'spaghetti': return '🍝';
      case 'rice': return '🍚';
      case 'traditional': return '🍽️';
      // Grill (rice category)
      case 'pizza': return '🍕';
      case 'burger': return '🍔';
      case 'fish': return '🐟';
      case 'beef': return '🥩';
      // Specials (soup category)
      case 'chicken': return '🐔';
      case 'sandwich': return '🥪';
      case 'salad': return '🥗';
      case 'breakfast': return '🍳';
      // Drinks (salad category)
      case 'hot drinks': return '☕';
      case 'juice': return '🧃';
      case 'soft drinks': return '🥤';
      case 'mineral water': return '💧';
      // Alcohol (sushi category)
      case 'beer': return '🍺';
      case 'wine': return '🍷';
      case 'spirits': return '🥃';
      case 'rum': return '🍹';
      default: return '🍽️';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getSubCategoryIcon(subCategory)}</span>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {getSubCategoryTitle(subCategory)}
          </h1>
        </div>
        {/* Hotel Logo in SubCategory */}
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center">
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
        </div>
      </div>

      {/* Items Count */}
      <div className="px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {items.length} {items.length === 1 ? 'item' : 'items'} available
        </p>
      </div>

      {/* Menu Grid */}
      <MenuGrid
        items={items}
        onItemClick={onItemClick}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};