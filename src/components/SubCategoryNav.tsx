import React from 'react';

interface SubCategoryNavProps {
  activeCategory: string;
  activeSubCategory?: string;
  onSubCategoryChange: (subCategory: string) => void;
}

export const SubCategoryNav: React.FC<SubCategoryNavProps> = ({ 
  activeCategory, 
  activeSubCategory, 
  onSubCategoryChange 
}) => {
  const getSubCategories = (category: string) => {
    switch (category) {
      case 'Specials':
        return ['Chicken', 'Sandwich', 'Salad', 'Breakfast'];
      case 'Mains':
        return ['Soup', 'Spaghetti', 'Rice', 'Traditional'];
      case 'Grill':
        return ['Pizza', 'Burger', 'Fish', 'Beef'];
      case 'Alchol':
        return ['Beer', 'Wine', 'Spirits', 'Rum'];
      case 'Drinks':
        return ['Hot Drinks', 'Juice', 'Soft Drinks', 'Mineral Water'];
      default:
        return [];
    }
  };

  const subCategories = getSubCategories(activeCategory);

  if (subCategories.length === 0) return null;

  return (
    <div className="flex space-x-4 p-4 bg-white border-b border-gray-100 overflow-x-auto">
      {subCategories.map((subCategory) => (
        <button
          key={subCategory}
          onClick={() => onSubCategoryChange(subCategory.toLowerCase())}
          className={`text-sm font-medium transition-colors whitespace-nowrap px-3 py-2 rounded-lg ${
            activeSubCategory === subCategory.toLowerCase()
              ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          {subCategory}
        </button>
      ))}
    </div>
  );
};