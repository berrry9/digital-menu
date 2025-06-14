import React from 'react';
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
    <div className="flex bg-blue-900 p-2 space-x-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex-1 py-3 px-2 rounded-lg text-sm font-medium transition-colors ${
            activeCategory === category.id
              ? 'bg-blue-800 text-white'
              : 'text-blue-200 hover:bg-blue-800 hover:text-white'
          }`}
        >
          <div className="flex flex-col items-center space-y-1">
            <span className="text-lg">{getCategoryIcon(category.id)}</span>
            <span className="text-xs">{category.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
};