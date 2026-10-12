import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
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
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [themeMode, setThemeMode] = useState('stride'); // 'stride' (Dark Slate + Vibrant Orange) | 'heritage' (Warm Brown & Gold)

  const products = PRODUCTS;

  // Active page state for direct page switching (no scrolling through long page)
  const [activePage, setActivePage] = useState('#home');

  // Filter & Search state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Quick View Modal
  const [quickViewProductId, setQuickViewProductId] = useState(null);

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
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Switch directly to the target page at top of screen (no page scroll animation)
  const handleNavigate = (selector) => {
    const normalized = selector === '#why-choose-us' ? '#about' : selector;
    setActivePage(normalized);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <div className={`app-shell theme-${themeMode}`}>
        <Navbar
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
                onQuickView={(prod) => setQuickViewProductId(prod.id)}
              />
              <TraditionalCollection
                products={products}
                onQuickView={(prod) => setQuickViewProductId(prod.id)}
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
              onQuickView={(prod) => setQuickViewProductId(prod.id)}
            />
          )}

          {activePage === '#collection' && (
            <TraditionalCollection
              products={products}
              onQuickView={(prod) => setQuickViewProductId(prod.id)}
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

        {/* Quick View Product Modal */}
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProductId(null)}
        />

        {/* Floating Quick WhatsApp Button */}
        <a
          href="https://wa.me/917385127438?text=Namaste%20Swastic%20Footwear!%20I%20would%20like%20to%20inquire%20about%20your%20handcrafted%20traditional%20chappals."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Inquire on WhatsApp +91 73851 27438"
          title="WhatsApp +91 73851 27438"
        >
          <MessageCircle size={22} />
          <span>WhatsApp: 73851 27438</span>
        </a>
      </div>
    </>
  );
}
