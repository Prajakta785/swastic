import React from 'react';
import { PhoneCall, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-brand-col">
          <div className="brand-logo footer-logo">
            <div className="brand-emblem swastik-royal-emblem">
              <img
                src="/images/swastik-logo.png"
                alt="Swastik Footwear Logo"
                className="swastik-logo-img"
              />
            </div>
            <div className="brand-text">
              <span className="brand-title">SWASTIK</span>
              <span className="brand-subtitle-lines">
                <span className="brand-line" />
                <span className="brand-subtitle">FOOTWEAR</span>
                <span className="brand-line" />
              </span>
            </div>
          </div>

          <p className="footer-bio">
            Premium Handcrafted Kolhapuri Chappals • Manufacturer | Wholesale | Retail.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('#home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#shop" onClick={(e) => { e.preventDefault(); onNavigate('#shop'); }}>
                Shop All Chappals
              </a>
            </li>
            <li>
              <a href="#collection" onClick={(e) => { e.preventDefault(); onNavigate('#collection'); }}>
                Traditional Collection
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Footwear Collections */}
        <div className="footer-links-col">
          <h4>Our Footwear</h4>
          <ul>
            <li>
              <a
                href="#shop"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory('Brown Leather');
                  onNavigate('#shop');
                }}
              >
                Traditional Brown Leather Chappal
              </a>
            </li>
            <li>
              <a
                href="#shop"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory('White Traditional');
                  onNavigate('#shop');
                }}
              >
                White Handmade Traditional Chappal
              </a>
            </li>
            <li>
              <a
                href="#shop"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory('Braided Leather');
                  onNavigate('#shop');
                }}
              >
                Premium Braided Leather Chappal
              </a>
            </li>
            <li>
              <a
                href="#shop"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory('Kolhapuri Classic');
                  onNavigate('#shop');
                }}
              >
                Classic Handmade Kolhapuri Chappal
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Store Contact */}
        <div className="footer-contact-col">
          <h4>Contact &amp; Orders</h4>
          <ul className="footer-contact-list">
            <li>
              <PhoneCall size={16} className="gold-icon" />
              <a href="tel:+917385127438">+91 73851 27438</a>
            </li>
            <li>
              <Mail size={16} className="gold-icon" />
              <span>orders@swastikfootwear.in</span>
            </li>
            <li>
              <MapPin size={16} className="gold-icon" />
              <span>Traditional Leather Footwear Market, Maharashtra, India</span>
            </li>
          </ul>
          <p className="footer-sizes-note">परंपरेची आधुनिक पावलं • Style | Comfort | Durability</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} <strong>SWASTIK FOOTWEAR</strong>. Crafted with{' '}
            <Heart size={13} fill="#D49B35" stroke="#D49B35" style={{ verticalAlign: 'middle' }} />{' '}
            for Indian Traditional Footwear Lovers.
          </p>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
