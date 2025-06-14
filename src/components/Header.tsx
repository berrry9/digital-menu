import React from 'react';
import { User as UserIcon, ShoppingCart } from 'lucide-react';
import { User } from '../types/menu';

interface HeaderProps {
  user: User;
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, cartItemsCount, onCartClick }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="text-sm text-gray-500">Room {user.roomNumber}</div>
      </div>
      
      <div className="text-xl font-bold text-gray-800">Menu</div>
      
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <UserIcon className="w-5 h-5 text-blue-600" />
        </div>
        <button 
          onClick={onCartClick}
          className="relative w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <ShoppingCart className="w-5 h-5 text-white" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};