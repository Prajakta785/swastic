import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye, Check, Feather } from 'lucide-react';

export default function ProductCard({ product, index, onAddToCart, onQuickView }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || 8);
  const [selectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <motion.article
      className="product-card rt-design-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      {/* Signature "rt design" Showcase Stage for All Product Images (Full 4:3 Sizing) */}
      <div className="product-image-wrap rt-stage-wrap" onClick={() => onQuickView(product)}>
        <span className="rt-dark-pill">{product.badge || 'NEW RELEASE'}</span>

        <div className="rt-floating-pill">
          <Feather size={13} className="gold-icon" />
          <span>Handcrafted</span>
        </div>

        <div className="rt-photo-frame">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </div>

        <button
          type="button"
          className="rt-quick-view-pill"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
        >
          <Eye size={13} />
          <span>View Details</span>
        </button>
      </div>

      {/* Product Body */}
      <div className="product-body">
        <div className="product-meta-row">
          <span className="product-category-tag">SIGNATURE SERIES • {product.category}</span>
          <div className="product-rating" title={`Sample Rating: ${product.rating} out of 5`}>
            <Star size={14} fill="#D49B35" stroke="#D49B35" />
            <span className="rating-score">{product.rating}</span>
            <span className="rating-count">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="product-title" onClick={() => onQuickView(product)}>
          {product.name}
        </h3>
        <p className="product-subtitle">{product.subtitle}</p>


        {/* Size Selector (6, 7, 8, 9, 10) */}
        <div className="product-option-row">
          <div className="size-header">
            <span className="option-label">Select Size (UK/India):</span>
            <span className="selected-size-indicator">Size {selectedSize}</span>
          </div>
          <div className="size-pills" role="radiogroup" aria-label="Select footwear size">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`size-pill ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons: View Details & Add to Cart */}
        <div className="product-actions">
          <button
            type="button"
            className="btn btn-outline-card"
            onClick={() => onQuickView(product)}
          >
            <Eye size={16} />
            <span>View Details</span>
          </button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            className={`btn btn-add-cart ${justAdded ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {justAdded ? (
              <>
                <Check size={16} />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                <span>Add to Cart</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
