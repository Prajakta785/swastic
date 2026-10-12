import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Phone,
  MapPin,
  Zap,
  Camera,
  Palette,
  ChevronDown,
  Check
} from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  activePage = '#home',
  onNavigate,
  cartBounceKey,
  onOpenPhotoManager,
  themeMode,
  onToggleTheme,
  categories = ['All', 'Brown Leather', 'White Traditional', 'Festive Zari', 'Braided Leather', 'Kolhapuri Classic'],
  selectedCategory = 'All',
  onSelectCategory
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Collection', href: '#collection' },
    { label: 'Categories', href: '#categories', isDropdown: true },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ];

  const marqueeItems = [
    '⚡ FLASH SALE LIVE: UP TO 45% OFF',
    '🩴 ULTRA-LIGHT CUSHIONED LEATHER FOOTBED',
    '📦 CASH ON DELIVERY AVAILABLE',
    '✨ 30-DAY NO-QUESTIONS-ASKED RETURNS',
    '⚡ FREE SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹999'
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
    if (href === '#shop' && onSelectCategory) {
      onSelectCategory('All');
    }
    onNavigate(href);
  };

  const handleCategorySelect = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    setCategoriesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate('#categories');
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* TIER 1: Dark Slate Top Promo Bar (Matches Uploaded Theme Screenshot) */}
      <div className="top-promo-bar">
        <div className="container top-promo-inner">
          <div className="top-promo-left">
            <span className="limited-drop-pill">
              <Zap size={12} fill="currentColor" />
              LIMITED DROP
            </span>
            <p className="promo-code-text">
              Use code <strong>STRIDE20</strong> for 20% off all new season arrivals!
            </p>
          </div>

          <div className="top-promo-right">
            <button
              type="button"
              className="photo-customizer-pill"
              onClick={onOpenPhotoManager}
              title="Upload or manage product photos"
            >
              <Camera size={12} />
              <span>Custom Photos</span>
            </button>
            <span className="promo-divider">|</span>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="top-utility-link"
            >
              <MapPin size={13} />
              <span>Store Finder</span>
            </a>
            <span className="promo-divider">|</span>
            <a href="tel:+9118005557874" className="top-utility-link">
              <Phone size={13} />
              <span>+91 1800 555 7874</span>
            </a>
          </div>
        </div>
      </div>

      {/* TIER 2: Vibrant Orange Scrolling Marquee Ticker Bar (Matches Uploaded Theme Screenshot) */}
      <div className="orange-marquee-bar" aria-label="Promotional Highlights">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* TIER 3: Main Navigation Bar */}
      <nav className="navbar container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="brand-logo"
          aria-label="Swastic Footwear Home"
        >
          <div className="brand-emblem">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
              <circle cx="24" cy="24" r="22" stroke="var(--accent-primary)" strokeWidth="2" />
              <circle
                cx="24"
                cy="24"
                r="18"
                stroke="var(--accent-primary)"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
              <path
                d="M24 9L28.5 19.5L39 24L28.5 28.5L24 39L19.5 28.5L9 24L19.5 19.5L24 9Z"
                fill="var(--accent-soft)"
                stroke="var(--accent-primary)"
                strokeWidth="1.8"
              />
              <circle cx="24" cy="24" r="3.4" fill="var(--accent-primary)" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">SWASTIC FOOTWEAR</span>
            <span className="brand-subtitle">HANDCRAFTED HERITAGE</span>
          </div>
        </a>

        {/* Desktop Navigation Links (Matches Uploaded Reference Style with Active Orange Bar & Categories Dropdown) */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isDropdownActive = activePage === '#categories';
              return (
                <li
                  key={link.label}
                  className="nav-dropdown-wrapper"
                  ref={dropdownRef}
                  onMouseEnter={() => setCategoriesDropdownOpen(true)}
                  onMouseLeave={() => setCategoriesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`nav-link nav-dropdown-trigger ${
                      isDropdownActive ? 'active' : ''
                    }`}
                    onClick={() => {
                      setCategoriesDropdownOpen((prev) => !prev);
                      onNavigate('#categories');
                    }}
                    aria-expanded={categoriesDropdownOpen}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={15}
                      strokeWidth={2.5}
                      className={`nav-chevron ${categoriesDropdownOpen ? 'open' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {categoriesDropdownOpen && (
                      <motion.div
                        className="nav-categories-dropdown"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                      >
                        <div className="nav-dropdown-header">Traditional Chappal Styles</div>
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            className={`nav-dropdown-item ${
                              selectedCategory === cat ? 'selected' : ''
                            }`}
                            onClick={() => handleCategorySelect(cat)}
                          >
                            <span>{cat === 'All' ? 'All Traditional Chappals' : cat}</span>
                            {selectedCategory === cat && <Check size={14} />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            const isActive = activePage === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Search, Theme Switcher & Animated Cart Button */}
        <div className="nav-actions">
          <div className={`nav-search-box ${searchOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="icon-btn"
              onClick={() => {
                setSearchOpen((prev) => !prev);
                if (!searchOpen) {
                  setTimeout(() => {
                    const el = document.getElementById('navbar-search-input');
                    if (el) el.focus();
                  }, 100);
                }
              }}
              aria-label="Toggle product search"
              title="Search chappals"
            >
              <Search size={18} />
            </button>
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  id="navbar-search-input"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 175, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  type="text"
                  placeholder="Search chappals..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="nav-search-input"
                />
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={`Current theme: ${
              themeMode === 'stride' ? 'Vibrant Orange & Slate' : 'Classic Brown & Gold'
            }. Click to switch!`}
          >
            <Palette size={16} />
            <span className="theme-toggle-label">
              {themeMode === 'stride' ? 'Orange Theme' : 'Heritage Gold'}
            </span>
          </button>

          <motion.button
            key={cartBounceKey}
            type="button"
            className="cart-trigger-btn"
            onClick={onOpenCart}
            initial={{ scale: 1 }}
            animate={
              cartBounceKey > 0
                ? { scale: [1, 1.16, 0.94, 1.05, 1], rotate: [0, -6, 6, 0] }
                : { scale: 1 }
            }
            transition={{ duration: 0.45 }}
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingBag size={18} />
            <span className="cart-btn-label">Cart</span>
            <span className="cart-badge">{cartCount}</span>
          </motion.button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mobile-nav-content">
              <div className="mobile-search-bar">
                <Search size={17} />
                <input
                  type="text"
                  placeholder="Search brown, white, braided, Kolhapuri..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`mobile-nav-link ${activePage === link.href ? 'active' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-drawer-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPhotoManager();
                  }}
                >
                  <Camera size={16} /> Manage / Upload Product Photos
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
