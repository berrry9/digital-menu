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
      case 'sushi':
        return ['Nigiri', 'Sashimi', 'Rolls', 'Bowls'];
      case 'salad':
        return ['Seaweed', 'Tofu', 'Cucumber', 'Mixed'];
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