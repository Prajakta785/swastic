import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, CheckCircle2, Shield, Sparkles, MessageCircle } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(8);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activePhoto, setActivePhoto] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[2] || 8);
      setSelectedColor(product.colors[0]?.name || 'Standard');
      setQuantity(1);
      setActivePhoto(product.image);
      setAddedSuccess(false);
    }
  }, [product]);

  if (!product) return null;

  const galleryImages =
    product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      onAddToCart(product, selectedSize, selectedColor);
    }
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1600);
  };

  const handleWhatsAppDirectInquiry = () => {
    const message = encodeURIComponent(
      `Namaste Swastic Footwear! I would like to inquire about / order:\n\n` +
        `• Product: ${product.name}\n` +
        `• Size (UK/IN): ${selectedSize}\n` +
        `• Finish: ${selectedColor}\n` +
        `• Quantity: ${quantity}\n\n` +
        `Please share availability and details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="product-modal-card"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.28 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close product details"
          >
            <X size={22} />
          </button>

          <div className="product-modal-grid">
            {/* Left Image Column with Multi-Photo Switcher */}
            <div className="product-modal-visual">
              <div className="modal-img-wrapper">
                <span className="product-badge">{product.badge}</span>
                <img
                  src={activePhoto || product.image}
                  alt={product.name}
                  className="modal-main-img"
                />
              </div>

              {galleryImages.length > 1 && (
                <div className="modal-gallery-thumbs">
                  {galleryImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`modal-thumb-btn ${
                        (activePhoto || product.image) === imgUrl ? 'active' : ''
                      }`}
                      onClick={() => setActivePhoto(imgUrl)}
                    >
                      <img src={imgUrl} alt={`${product.name} view ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}

              <div className="modal-craft-specs">
                <div className="spec-box">
                  <span className="spec-label">Upper Material</span>
                  <strong>{product.material}</strong>
                </div>
                <div className="spec-box">
                  <span className="spec-label">Sole Construction</span>
                  <strong>{product.sole}</strong>
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="product-modal-info">
              <div className="modal-top-meta">
                <span className="product-category-tag">{product.category}</span>
                <div className="product-rating">
                  <Star size={15} fill="#D49B35" stroke="#D49B35" />
                  <span className="rating-score">{product.rating}</span>
                  <span className="rating-count">({product.reviewCount} ratings)</span>
                </div>
              </div>

              <h2 id="modal-product-title" className="modal-title">
                {product.name}
              </h2>
              <p className="modal-subtitle">{product.subtitle}</p>

              <p className="modal-description">{product.description}</p>

              <ul className="modal-highlights">
                {product.highlights.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} className="gold-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Options */}
              <div className="modal-options-group">
                <div className="modal-option-block">
                  <label className="option-label">
                    Leather Finish: <strong>{selectedColor}</strong>
                  </label>
                  <div className="color-swatch-list">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        className={`color-swatch-pill ${
                          selectedColor === color.name ? 'selected' : ''
                        }`}
                        onClick={() => setSelectedColor(color.name)}
                      >
                        <span
                          className="swatch-dot"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="modal-option-block">
                  <label className="option-label">
                    Select Indian / UK Size: <strong>Size {selectedSize}</strong>
                  </label>
                  <div className="size-pills">
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

                <div className="modal-qty-row">
                  <span className="option-label">Quantity:</span>
                  <div className="qty-stepper">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-cta-row">
                <button
                  type="button"
                  className="btn btn-primary btn-lg modal-main-btn"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={18} />
                  <span>{addedSuccess ? 'Added to Cart!' : 'Add to Cart'}</span>
                </button>

                <button
                  type="button"
                  className="btn btn-whatsapp btn-lg"
                  onClick={handleWhatsAppDirectInquiry}
                >
                  <MessageCircle size={18} />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

              <div className="modal-assurance">
                <span>
                  <Sparkles size={14} /> Handcrafted Traditional Quality
                </span>
                <span>
                  <Shield size={14} /> Careful Inspection Before Dispatch
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
