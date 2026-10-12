import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Sparkles,
  Award,
  Eye,
  Feather,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Hero({ products, onNavigate, onQuickView, onAddToCart }) {
  // Showcase all 9 real uploaded traditional chappal designs in the Hero right-side card ("rt design")
  const heroItems = products;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const spotlightProduct = heroItems[activeIndex] || products[0];

  // Automatic auto-scrolling slideshow through all 9 chappal photos
  useEffect(() => {
    if (isPaused || heroItems.length <= 1) return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroItems.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [isPaused, heroItems.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % heroItems.length);
  };

  return (
    <section id="home" className="hero-section">
      {/* Subtle Animated Decorative Heritage Ornaments */}
      <motion.div
        className="hero-ornament hero-ornament-left"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      <motion.div
        className="hero-ornament hero-ornament-right"
        animate={{ rotate: -360 }}
        transition={{ duration: 95, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      <div className="hero-radial-glow" aria-hidden="true" />

      <div className="container hero-grid">
        {/* Left Column: Hero Copy & Call to Actions */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <Sparkles size={15} className="gold-icon" />
            <span>SWASTIC FOOTWEAR • AUTHENTIC INDIAN CRAFTSMANSHIP</span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            Tradition in <span className="gold-gradient-text">Every Step</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            Discover handcrafted traditional chappals made with style, comfort, and quality.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65 }}
          >
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onNavigate('#shop')}
            >
              <span>Shop Now</span>
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => onNavigate('#collection')}
            >
              <Compass size={18} />
              <span>Explore Collection</span>
            </button>
          </motion.div>

          {/* Trust & Craftsmanship Highlights */}
          <motion.div
            className="hero-trust-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="trust-pill">
              <Award size={18} className="gold-icon" />
              <div>
                <strong>100% Artisan Hand-Tooled</strong>
                <span>Braided Veni Cords, Red Gonda &amp; Embossed Straps</span>
              </div>
            </div>
            <div className="trust-pill">
              <ShieldCheck size={18} className="gold-icon" />
              <div>
                <strong>All-Day Comfort</strong>
                <span>Genuine Leather Footbed • Anti-Slip Sole</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Auto-Scrolling Hero Showcase Card ("rt design") */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.75, ease: 'easeOut' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hero-showcase-stage">
            {/* Main Spotlight Card with Auto-Scrolling Chappal Photos */}
            <div className="hero-main-photo-card">
              {/* Top-Left NEW RELEASE Dark Pill */}
              <div className="hero-new-release-pill">
                <span>{spotlightProduct.badge || 'FEATURED'} • {activeIndex + 1}/{heroItems.length}</span>
              </div>

              {/* Floating Right Feature Pill */}
              <div className="hero-floating-feature-pill">
                <Feather size={15} className="gold-icon" />
                <span>Handcrafted Comfort</span>
              </div>

              {/* Tilted Image Stage with Smooth Auto-Scroll Slide Animation */}
              <div className="hero-tilted-stage" onClick={() => onQuickView(spotlightProduct)}>
                <button
                  type="button"
                  className="hero-slide-arrow hero-slide-prev"
                  onClick={handlePrev}
                  aria-label="Previous chappal design"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="hero-tilted-frame">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={spotlightProduct.id}
                      src={spotlightProduct.image}
                      alt={spotlightProduct.name}
                      className="hero-main-img"
                      initial={{ opacity: 0, x: 45, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -45, scale: 0.96 }}
                      transition={{ duration: 0.38, ease: 'easeOut' }}
                    />
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  className="hero-slide-arrow hero-slide-next"
                  onClick={handleNext}
                  aria-label="Next chappal design"
                >
                  <ChevronRight size={16} />
                </button>

                <button
                  type="button"
                  className="hero-zoom-hint"
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickView(spotlightProduct);
                  }}
                >
                  <Eye size={13} /> View Details
                </button>

                {/* Animated Auto-Scroll Progress Bar */}
                <div className="hero-autoscroll-track" aria-hidden="true">
                  <motion.div
                    key={`${activeIndex}-${isPaused}`}
                    className="hero-autoscroll-fill"
                    initial={{ width: '0%' }}
                    animate={{ width: isPaused ? '0%' : '100%' }}
                    transition={{ duration: isPaused ? 0 : 2.6, ease: 'linear' }}
                  />
                </div>
              </div>

              {/* Bottom Caption Below Divider Line */}
              <div className="hero-card-caption">
                <div>
                  <span className="hero-caption-category">SIGNATURE SERIES • {spotlightProduct.category}</span>
                  <h2 className="hero-caption-title">{spotlightProduct.name}</h2>
                </div>
                <button
                  type="button"
                  className="btn btn-gold-sm"
                  onClick={() => onQuickView(spotlightProduct)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
