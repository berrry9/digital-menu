import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { SubCategoryNav } from './components/SubCategoryNav';
import { MenuGrid } from './components/MenuGrid';
import { SubCategoryPage } from './components/SubCategoryPage';
import { ItemDetail } from './components/ItemDetail';
import { Cart } from './components/Cart';
import { SideCart } from './components/SideCart';
import { PageTransition } from './components/PageTransition';
import { OnboardingOverlay } from './components/onboarding/OnboardingOverlay';
import { usePageTransition } from './hooks/usePageTransition';
import { ThemeProvider } from './contexts/ThemeContext';
import { OnboardingProvider } from './contexts/OnboardingContext';
import { categories, menuItems } from './data/menuData';
import { MenuItem } from './types/menu';

interface CartItem extends MenuItem {
  cartQuantity: number;
}

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('soup');
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);
  const [items, setItems] = useState(menuItems);
  
  const { isTransitioning, startTransition, completeTransition } = usePageTransition();

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
    
    setIsSideCartOpen(true);
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

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      startTransition();
      setTimeout(() => {
        setActiveCategory(categoryId);
        setActiveSubCategory(null);
      }, 350);
    }
  };

  const handleSubCategoryChange = (subCategory: string) => {
    startTransition();
    setTimeout(() => {
      setActiveSubCategory(subCategory);
    }, 350);
  };

  const handleBackToCategory = () => {
    startTransition();
    setTimeout(() => {
      setActiveSubCategory(null);
    }, 350);
  };

  const handleItemClick = (item: MenuItem) => {
    startTransition();
    setTimeout(() => {
      setSelectedItem(item);
    }, 350);
  };

  const handleCloseItemDetail = () => {
    startTransition();
    setTimeout(() => {
      setSelectedItem(null);
    }, 350);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  if (activeSubCategory) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <SubCategoryPage
          subCategory={activeSubCategory}
          items={filteredItems}
          onBack={handleBackToCategory}
          onItemClick={handleItemClick}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />

        <AnimatePresence>
          {selectedItem && (
            <ItemDetail
              item={selectedItem}
              onClose={handleCloseItemDetail}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        </AnimatePresence>

        <SideCart
          isOpen={isSideCartOpen}
          onClose={() => setIsSideCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveFromCart}
          onPlaceOrder={handlePlaceOrder}
        />

        <PageTransition 
          isTransitioning={isTransitioning} 
          onTransitionComplete={completeTransition}
        />

        <OnboardingOverlay />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <Header
        user={user}
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <SubCategoryNav 
        activeCategory={activeCategory}
        activeSubCategory={activeSubCategory}
        onSubCategoryChange={handleSubCategoryChange}
      />
      
      <MenuGrid
        items={filteredItems}
        onItemClick={handleItemClick}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
      />

      <AnimatePresence>
        {selectedItem && (
          <ItemDetail
            item={selectedItem}
            onClose={handleCloseItemDetail}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </AnimatePresence>

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

      <PageTransition 
        isTransitioning={isTransitioning} 
        onTransitionComplete={completeTransition}
      />

      <OnboardingOverlay />
    </motion.div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <OnboardingProvider>
        <AppContent />
      </OnboardingProvider>
    </ThemeProvider>
  );
}

export default App;