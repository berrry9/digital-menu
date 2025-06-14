import React from 'react';
import { MenuCard } from './MenuCard';
import { MenuItem } from '../types/menu';

interface MenuGridProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onToggleFavorite: (itemId: string) => void;
}

export const MenuGrid: React.FC<MenuGridProps> = ({ items, onItemClick, onAddToCart, onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          onItemClick={onItemClick}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};