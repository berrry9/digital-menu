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
      case 'noodles':
        return ['soup', 'spaghetti', 'rice', 'traditional'];
      case 'rice':
        return ['pizza', 'burger', 'fish', 'beef'];
      case 'soup':
        return ['chicken', 'sandwich', 'salad', 'breakfast'];
      case 'salad':
        return ['hot-drinks', 'juice', 'soft-drinks', 'mineral-water'];
      case 'sushi':
        return ['beer', 'wine', 'spirits-rum'];
      default:
        return [];
    }
  };

  const subCategories = getSubCategories(activeCategory);

  if (subCategories.length === 0) return null;

  return (
    <div className="flex space-x-4 p-4 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 overflow-x-auto transition-colors duration-300">
      {subCategories.map((subCategory) => (
        <button
          key={subCategory}
          onClick={() => onSubCategoryChange(subCategory)}
          className={`text-sm font-medium transition-colors whitespace-nowrap px-4 py-2 rounded-lg ${
            activeSubCategory === subCategory
              ? 'text-white bg-blue-600 dark:bg-blue-700'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {subCategory === 'spirits-rum' ? 'Spirits & Rum Drinks' : subCategory.charAt(0).toUpperCase() + subCategory.slice(1).replace('-', ' ')}
        </button>
      ))}
    </div>
  );
};