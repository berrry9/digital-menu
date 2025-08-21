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
      case 'soup':
        return ['Seafood', 'Veggie', 'Meat', 'Poultry'];
      case 'noodles':
        return ['Ramen', 'Udon', 'Soba', 'Yakisoba'];
      case 'rice':
        return ['Donburi', 'Chirashi', 'Onigiri', 'Curry'];
      case 'salad':
        return ['Seaweed', 'Tofu', 'Cucumber', 'Mixed'];
      case 'sushi':
        return ['Nigiri', 'Sashimi', 'Rolls', 'Bowls'];
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
          onClick={() => onSubCategoryChange(subCategory.toLowerCase())}
          className={`text-sm font-medium transition-colors whitespace-nowrap px-4 py-2 rounded-lg ${
            activeSubCategory === subCategory.toLowerCase()
              ? 'text-white bg-blue-600 dark:bg-blue-700'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {subCategory}
        </button>
      ))}
    </div>
  );
};