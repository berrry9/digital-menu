import React, { useState, useEffect } from 'react';
import { MenuCard } from './MenuCard';
import { MenuItem } from '../types/menu';
import { StaggeredGrid } from './animations/StaggeredGrid';
import { MenuGridSkeleton } from './animations/ShimmerSkeleton';

interface MenuGridProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onToggleFavorite: (itemId: string) => void;
}

export const MenuGrid: React.FC<MenuGridProps> = ({ items, onItemClick, onAddToCart, onToggleFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extended loading delay to show shimmer effect for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [items]);

  if (isLoading) {
    return <MenuGridSkeleton />;
  }

  return (
    <div id="menu-grid">
      <StaggeredGrid className="grid grid-cols-2 gap-4 p-4" staggerDelay={0.1}>
        {items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onItemClick={onItemClick}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </StaggeredGrid>
    </div>
  );
};