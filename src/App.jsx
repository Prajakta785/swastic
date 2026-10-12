import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from './data/products';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import TraditionalCollection from './components/TraditionalCollection';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Cart from './components/Cart';
import PhotoManagerModal from './components/PhotoManagerModal';
import Footer from './components/Footer';

const CUSTOM_IMAGES_STORAGE_KEY = 'swastic_custom_product_images_v1';
const CART_STORAGE_KEY = 'swastic_cart_items_v1';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [themeMode, setThemeMode] = useState('stride'); // 'stride' (Dark Slate + Vibrant Orange) | 'heritage' (Warm Brown & Gold)

  // Allow custom user-uploaded product photos to persist in localStorage
  const [customImages, setCustomImages] = useState(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_IMAGES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Merge base products with any custom uploaded photos
  const products = useMemo(() => {
    return PRODUCTS.map((prod) => ({
      ...prod,
      image: customImages[prod.id] || prod.image
    }));
  }, [customImages]);

  // Functional React state for shopping cart
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBounceKey, setCartBounceKey] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  // Active page state for direct page switching (no scrolling through long page)
  const [activePage, setActivePage] = useState('#home');

  // Filter & Search state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Modals
  const [quickViewProductId, setQuickViewProductId] = useState(null);
  const [photoManagerOpen, setPhotoManagerOpen] = useState(false);

  const quickViewProduct = useMemo(
    () => products.find((p) => p.id === quickViewProductId) || null,
    [products, quickViewProductId]
  );

  // Initial brand loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1150);
    return () => clearTimeout(timer);
  }, []);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartItems]);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' || product.category === selectedCategory;
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !q ||
          product.name.toLowerCase().includes(q) ||
          product.subtitle.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Cart item count
  const totalCartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  // Add to Cart handler
  const handleAddToCart = (product, selectedSize = 8, selectedColor = 'Standard') => {
    const cartKey = `${product.id}-size-${selectedSize}-${selectedColor}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartKey === cartKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [
        ...prev,
        {
          cartKey,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          selectedSize,
          selectedColor,
          quantity: 1
        }
      ];
    });

    setCartBounceKey((prev) => prev + 1);
    setToastMessage(`${product.name} (Size ${selectedSize}) added to bag`);
  };

  useEffect(() => {
    if (!toastMessage) return undefined;
    const t = setTimeout(() => setToastMessage(null), 2800);
    return () => clearTimeout(t);
  }, [toastMessage]);

  const handleUpdateQuantity = (cartKey, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(cartKey);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.cartKey === cartKey ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (cartKey) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Switch directly to the target page at top of screen (no page scroll animation)
  const handleNavigate = (selector) => {
    const normalized = selector === '#why-choose-us' ? '#about' : selector;
    setActivePage(normalized);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleUpdateProductImage = (productId, dataUrl) => {
    setCustomImages((prev) => {
      const next = { ...prev, [productId]: dataUrl };
      try {
        localStorage.setItem(CUSTOM_IMAGES_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore quota errors
      }
      return next;
    });
    setToastMessage('Custom product photo updated!');
  };

  const handleResetImages = () => {
    setCustomImages({});
    try {
      localStorage.removeItem(CUSTOM_IMAGES_STORAGE_KEY);
    } catch {
      // Ignore
    }
    setToastMessage('Restored default traditional chappal photos');
  };

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <div className={`app-shell theme-${themeMode}`}>
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={(val) => {
            setSearchQuery(val);
            if (val.trim() && activePage !== '#shop' && activePage !== '#categories') {
              setActivePage('#shop');
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
          }}
          activePage={activePage}
          onNavigate={handleNavigate}
          cartBounceKey={cartBounceKey}
          onOpenPhotoManager={() => setPhotoManagerOpen(true)}
          themeMode={themeMode}
          onToggleTheme={() =>
            setThemeMode((prev) => (prev === 'stride' ? 'heritage' : 'stride'))
          }
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <main>
          {activePage === '#home' && (
            <>
              <Hero
                products={products}
                onNavigate={handleNavigate}
                onQuickView={(prod) => setQuickViewProductId(prod.id)}
                onAddToCart={handleAddToCart}
              />
              <ProductGrid
                products={filteredProducts}
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                onAddToCart={handleAddToCart}
                onQuickView={(prod) => setQuickViewProductId(prod.id)}
              />
              <TraditionalCollection
                products={products}
                onQuickView={(prod) => setQuickViewProductId(prod.id)}
                onAddToCart={handleAddToCart}
              />
              <About onNavigate={handleNavigate} />
              <WhyChooseUs />
              <Reviews />
              <Contact />
            </>
          )}

          {(activePage === '#shop' || activePage === '#categories') && (
            <ProductGrid
              products={filteredProducts}
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onAddToCart={handleAddToCart}
              onQuickView={(prod) => setQuickViewProductId(prod.id)}
            />
          )}

          {activePage === '#collection' && (
            <TraditionalCollection
              products={products}
              onQuickView={(prod) => setQuickViewProductId(prod.id)}
              onAddToCart={handleAddToCart}
            />
          )}

          {activePage === '#about' && (
            <>
              <About onNavigate={handleNavigate} />
              <WhyChooseUs />
            </>
          )}

          {activePage === '#reviews' && <Reviews />}

          {activePage === '#contact' && <Contact />}
        </main>

        <Footer
          onNavigate={handleNavigate}
          onSelectCategory={setSelectedCategory}
        />

        {/* Slide-Over Shopping Cart & Checkout */}
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
          onNavigate={handleNavigate}
        />

        {/* Quick View Product Modal */}
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProductId(null)}
          onAddToCart={handleAddToCart}
        />

        {/* Custom Product Photo Uploader Modal */}
        <PhotoManagerModal
          isOpen={photoManagerOpen}
          onClose={() => setPhotoManagerOpen(false)}
          products={products}
          onUpdateProductImage={handleUpdateProductImage}
          onResetImages={handleResetImages}
        />

        {/* Toast Notification when Item is Added */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              className="cart-toast"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
            >
              <ShoppingBag size={17} className="gold-icon" />
              <span>{toastMessage}</span>
              <button
                type="button"
                className="toast-view-btn"
                onClick={() => {
                  setToastMessage(null);
                  setIsCartOpen(true);
                }}
              >
                View Bag
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Quick WhatsApp Button */}
        <a
          href="https://wa.me/919876543210?text=Namaste%20Swastic%20Footwear!%20I%20would%20like%20to%20inquire%20about%20your%20handcrafted%20traditional%20chappals."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Order or chat on WhatsApp"
          title="Order on WhatsApp"
        >
          <MessageCircle size={22} />
          <span>WhatsApp Order</span>
        </a>
      </div>
    </>
  );
}
