import React from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, RotateCcw, Info } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onAddToCart,
  onQuickView
}) {
  return (
    <section id="shop" className="shop-section section-padding">
      <div className="container">
        {/* Compact Shop Section Header so Toolbar & Full Product Cards Fit on Screen */}
        <motion.div
          className="shop-header-compact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="shop-header-left">
            <span className="section-eyebrow">HANDCRAFTED FOOTWEAR COLLECTION</span>
            <h2 className="section-title">Explore Our Traditional Chappals</h2>
          </div>

          <div className="sample-price-notice">
            <Info size={14} />
            <span>
              <strong>Sample Preview:</strong> Prices (₹) &amp; ratings editable in{' '}
              <code>src/data/products.js</code>
            </span>
          </div>
        </motion.div>

        {/* Search, Category Filter & Sort Toolbar (Single Compact Row) */}
        <div className="shop-toolbar">
          <div className="category-tabs" role="tablist" aria-label="Filter products by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="toolbar-controls">
            <div className="shop-search-input-wrap">
              <Search size={17} className="search-icon" />
              <input
                type="text"
                placeholder="Search chappals (e.g., Brown, White, Kolhapuri)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => onSearchChange('')}
                  title="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="shop-sort-wrap">
              <SlidersHorizontal size={16} />
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-asc">Price: Low to High (₹)</option>
                <option value="price-desc">Price: High to Low (₹)</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid or Empty Filter State */}
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="empty-filter-state"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3>No matching chappals found</h3>
            <p>
              We couldn’t find any footwear matching “{searchQuery}” in the{' '}
              <strong>{selectedCategory}</strong> category.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onSelectCategory('All');
                onSearchChange('');
              }}
            >
              <RotateCcw size={16} />
              <span>Reset Filters</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
