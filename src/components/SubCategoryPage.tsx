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
      case 'seafood': return '🐟';
      case 'veggie': return '🥬';
      case 'meat': return '🥩';
      case 'poultry': return '🐔';
      default: return '🍽️';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-sm">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getSubCategoryIcon(subCategory)}</span>
          <h1 className="text-xl font-bold text-gray-800">
            {getSubCategoryTitle(subCategory)}
          </h1>
        </div>
        <div className="text-sm text-gray-500">Room</div>
      </div>

      {/* Items Count */}
      <div className="px-4 py-3 bg-white border-b">
        <p className="text-sm text-gray-600">
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