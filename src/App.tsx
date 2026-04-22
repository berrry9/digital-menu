import React, { useState, useEffect } from 'react';
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
import { HotelDirectory } from './components/HotelDirectory';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { usePageTransition } from './hooks/usePageTransition';
import { ThemeProvider } from './contexts/ThemeContext';
import { OnboardingProvider } from './contexts/OnboardingContext';
import { AdminProvider, useAdmin } from './contexts/AdminContext';
import { MenuItem, MenuCategory } from './types/menu';
import { supabase } from './lib/supabase';
import { ErrorBoundary } from './components/ErrorBoundary';

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
  const [isHotelDirectoryOpen, setIsHotelDirectoryOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const { isTransitioning, startTransition, completeTransition } = usePageTransition();
  const { isAuthenticated } = useAdmin();

  const user = {
    name: 'Guest',
    avatar: '',
    roomNumber: '101'
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Loading timeout')), 10000)
        );

        await Promise.race([
          Promise.all([loadCategories(), loadMenuItems()]),
          timeoutPromise
        ]);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoadError(error instanceof Error ? error.message : 'Failed to load data');
        setIsLoadingData(false);
      }
    };

    loadData();
  }, []);

  const loadCategories = async () => {
    try {
      console.log('Loading categories from Supabase...');
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('display_order');

      if (error) {
        console.error('Categories query error:', {
          code: error.code,
          message: error.message,
          details: error
        });
        throw error;
      }

      if (data) {
        console.log(`Successfully loaded ${data.length} categories`);
        setCategories(data.map(cat => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon
        })));

        if (data.length > 0 && !activeCategory) {
          setActiveCategory(data[0].id);
        }
      }
      setIsLoadingData(false);
    } catch (error) {
      console.error('Error loading categories:', error);
      throw error;
    }
  };

  const loadMenuItems = async () => {
    try {
      console.log('Loading menu items from Supabase...');
      const { data, error } = await supabase
        .from('menu_items')
        .select('*');

      if (error) {
        console.error('Menu items query error:', {
          code: error.code,
          message: error.message,
          details: error
        });
        throw error;
      }

      if (data) {
        console.log(`Successfully loaded ${data.length} menu items`);
        setItems(data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image,
          category: item.category_id,
          subCategory: item.sub_category || undefined,
          calories: item.calories,
          volume: item.volume || '',
          ingredients: item.ingredients || [],
          available: item.available,
          quantity: item.quantity,
          rating: item.rating,
          isFavorite: false
        })));
      }
    } catch (error) {
      console.error('Error loading menu items:', error);
      throw error;
    }
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

  const handleOpenHotelDirectory = () => {
    startTransition();
    setTimeout(() => {
      setIsHotelDirectoryOpen(true);
    }, 350);
  };

  const handleCloseHotelDirectory = () => {
    startTransition();
    setTimeout(() => {
      setIsHotelDirectoryOpen(false);
    }, 350);
  };

  const handleOpenAdminLogin = () => {
    startTransition();
    setTimeout(() => {
      setIsAdminLoginOpen(true);
      setIsHotelDirectoryOpen(false);
    }, 350);
  };

  const handleCloseAdminLogin = () => {
    startTransition();
    setTimeout(() => {
      setIsAdminLoginOpen(false);
      setIsHotelDirectoryOpen(true);
    }, 350);
  };

  const handleLoginSuccess = () => {
    setIsAdminLoginOpen(false);
    setIsAdminDashboardOpen(true);
  };

  const handleCloseAdminDashboard = () => {
    setIsAdminDashboardOpen(false);
    loadCategories();
    loadMenuItems();
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  if (isAdminDashboardOpen && isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <AdminDashboard onClose={handleCloseAdminDashboard} />
        <PageTransition
          isTransitioning={isTransitioning}
          onTransitionComplete={completeTransition}
        />
      </motion.div>
    );
  }

  if (isAdminLoginOpen) {
    return (
      <>
        <AdminLogin
          onClose={handleCloseAdminLogin}
          onLoginSuccess={handleLoginSuccess}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          onTransitionComplete={completeTransition}
        />
      </>
    );
  }

  if (isHotelDirectoryOpen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <HotelDirectory
          onClose={handleCloseHotelDirectory}
          onAdminClick={handleOpenAdminLogin}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          onTransitionComplete={completeTransition}
        />
      </motion.div>
    );
  }

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

  if (loadError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4"
      >
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Unable to Load Menu</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{loadError}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Reload Application
          </button>
        </div>
      </motion.div>
    );
  }

  if (isLoadingData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading menu...</p>
        </div>
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
        onInfoClick={handleOpenHotelDirectory}
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

      {!activeSubCategory ? (
        <MenuGrid
          items={filteredItems}
          onItemClick={handleItemClick}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : null}

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
    <ErrorBoundary>
      <ThemeProvider>
        <OnboardingProvider>
          <AdminProvider>
            <AppContent />
          </AdminProvider>
        </OnboardingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
