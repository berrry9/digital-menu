import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface CartItem extends MenuItem {
  cartQuantity: number;
}

interface SideCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onPlaceOrder: () => void;
}

export const SideCart: React.FC<SideCartProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onPlaceOrder 
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Side Cart */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-blue-900 text-white">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Your Order</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-blue-800 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-1">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-800 text-sm truncate">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.cartQuantity - 1)}
                            className="w-6 h-6 bg-white border rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-medium text-sm min-w-[1.5rem] text-center">
                            {item.cartQuantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.cartQuantity + 1)}
                            className="w-6 h-6 bg-white border rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 bg-white">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-gray-800">Total:</span>
              <span className="text-xl font-bold text-gray-800">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onPlaceOrder}
              className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
};