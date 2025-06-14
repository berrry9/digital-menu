import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { SubCategoryNav } from './components/SubCategoryNav';
import { MenuGrid } from './components/MenuGrid';
import { SubCategoryPage } from './components/SubCategoryPage';
import { ItemDetail } from './components/ItemDetail';
import { Cart } from './components/Cart';
import { SideCart } from './components/SideCart';
import { categories, menuItems } from './data/menuData';
import { MenuItem } from './types/menu';

interface CartItem extends MenuItem {
  cartQuantity: number;
}

function App() {
  const [activeCategory, setActiveCategory] = useState('soup');
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);
  const [items, setItems] = useState(menuItems);

  const user = {
    name: 'Guest',
    avatar: '',
    roomNumber: '101'
  };

  const filteredItems = activeSubCategory 
    ? items.filter(item => item.category === activeCategory && item.subCategory === activeSubCategory)
    : items.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, cartQuantity: cartItem.cartQuantity + quantity }
            : cartItem
        );
      }
      return [...prev, { ...item, cartQuantity: quantity }];
    });
    
    // Show side cart when item is added
    setIsSideCartOpen(true);
    
    // Auto-hide side cart after 3 seconds
    setTimeout(() => {
      setIsSideCartOpen(false);
    }, 3000);
  };

  const handleUpdateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, cartQuantity: quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleToggleFavorite = (itemId: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully! Your room service will arrive in 20-30 minutes.');
    setCartItems([]);
    setIsCartOpen(false);
    setIsSideCartOpen(false);
  };

  const handleSubCategoryChange = (subCategory: string) => {
    setActiveSubCategory(subCategory);
  };

  const handleBackToCategory = () => {
    setActiveSubCategory(null);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  // If a subcategory is selected, show the subcategory page
  if (activeSubCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SubCategoryPage
          subCategory={activeSubCategory}
          items={filteredItems}
          onBack={handleBackToCategory}
          onItemClick={setSelectedItem}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />

        {selectedItem && (
          <ItemDetail
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        <SideCart
          isOpen={isSideCartOpen}
          onClose={() => setIsSideCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveFromCart}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        user={user}
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <SubCategoryNav 
        activeCategory={activeCategory}
        activeSubCategory={activeSubCategory}
        onSubCategoryChange={handleSubCategoryChange}
      />
      
      <MenuGrid
        items={filteredItems}
        onItemClick={setSelectedItem}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
      />

      {selectedItem && (
        <ItemDetail
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onPlaceOrder={handlePlaceOrder}
      />

      <SideCart
        isOpen={isSideCartOpen}
        onClose={() => setIsSideCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
}

export default App;