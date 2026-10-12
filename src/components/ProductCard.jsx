import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Feather, MessageCircle } from 'lucide-react';

export default function ProductCard({ product, index, onQuickView }) {
  const whatsappUrl = `https://wa.me/917385127438?text=${encodeURIComponent(
    `Namaste Swastic Footwear! I would like to inquire about: ${product.name}`
  )}`;

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
          <div className="product-rating" title={`Rating: ${product.rating} out of 5`}>
            <Star size={14} fill="#D49B35" stroke="#D49B35" />
            <span className="rating-score">{product.rating}</span>
            <span className="rating-count">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="product-title" onClick={() => onQuickView(product)}>
          {product.name}
        </h3>
        <p className="product-subtitle">{product.subtitle}</p>

        {/* Action Buttons: View Details & Direct WhatsApp Inquiry */}
        <div className="product-actions">
          <button
            type="button"
            className="btn btn-outline-card"
            onClick={() => onQuickView(product)}
          >
            <Eye size={16} />
            <span>View Details</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-add-cart"
          >
            <MessageCircle size={16} />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
