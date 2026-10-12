import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, CheckCircle2, Shield, Sparkles, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ProductModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [activePhoto, setActivePhoto] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || 'Standard');
      setActivePhoto(product.image);
    }
  }, [product]);

  if (!product) return null;

  const galleryImages =
    product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleWhatsAppDirectInquiry = () => {
    const message = encodeURIComponent(
      `Namaste Swastik Footwear! I would like to enquire about:\n\n` +
        `• Product: ${product.name}\n` +
        `• Finish: ${selectedColor}\n\n` +
        `Please share details.`
    );
    window.open(`https://wa.me/917385127438?text=${message}`, '_blank', 'noopener,noreferrer');
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

              {/* Leather Finish Option */}
              {product.colors && product.colors.length > 1 && (
                <div className="modal-options-group">
                  <div className="modal-option-block">
                    <label className="option-label">
                      Available Finish: <strong>{selectedColor}</strong>
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
                </div>
              )}

              <div className="modal-cta-row">
                <button
                  type="button"
                  className="btn btn-whatsapp btn-lg"
                  onClick={handleWhatsAppDirectInquiry}
                >
                  <WhatsAppIcon size={19} />
                  <span>Enquiry on WhatsApp (+91 73851 27438)</span>
                </button>

                <a
                  href="tel:+917385127438"
                  className="btn btn-primary btn-lg modal-main-btn"
                >
                  <Phone size={18} />
                  <span>Call +91 73851 27438</span>
                </a>
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
