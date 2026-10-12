import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Check, Camera } from 'lucide-react';
import { REAL_WORKSHOP_GALLERY } from '../data/products';

export default function TraditionalCollection({ products, onQuickView, onAddToCart }) {
  const brownProduct = products[0];
  const whiteProduct = products[1];
  const kolhapuriGondaProduct = products[3] || products[0];
  const whiteBlackStrapProduct = products[6] || products[1];

  return (
    <section id="collection" className="collection-section section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">SIGNATURE HERITAGE SERIES</span>
          <h2 className="section-title">The Traditional Collection</h2>
          <p className="section-description">
            Featuring our authentic workshop-crafted leather chappals—from embossed brown Kapshi
            and red-Gonda Kolhapuris to contrast ivory-white footbeds with triple-braided and
            ribbed black straps.
          </p>
        </motion.div>

        {/* Two Large Editorial Cards for the Flagship Brown & White Chappals */}
        <div className="collection-editorial-grid">
          <motion.div
            className="editorial-card editorial-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="editorial-img-box rt-editorial-stage" onClick={() => onQuickView(brownProduct)}>
              <span className="rt-dark-pill">Signature Brown Edition</span>
              <div className="rt-photo-frame">
                <img src={brownProduct.image} alt={brownProduct.name} />
              </div>
            </div>
            <div className="editorial-content">
              <div className="editorial-eyebrow">
                <Sparkles size={14} /> GOLDEN MEDALLION &amp; DUAL VENI CORDS
              </div>
              <h3>{brownProduct.name}</h3>
              <p>
                Hand-embossed chestnut-brown leather featuring a golden sunburst medallion, scalloped
                strap edges, and dual braided cords knotted on a traditional stamped footbed.
              </p>
              <ul className="editorial-points">
                <li><Check size={15} /> Authentic geometric hand-stamped strap &amp; border</li>
                <li><Check size={15} /> Dual braided cords with traditional leather knots</li>
              </ul>
              <div className="editorial-footer">
                <div className="editorial-btns">
                  <button
                    type="button"
                    className="btn btn-gold-sm"
                    onClick={() => onQuickView(brownProduct)}
                  >
                    <span>Explore Pair</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light-sm"
                    onClick={() => onAddToCart(brownProduct, 8, brownProduct.colors[0].name)}
                  >
                    + Add Size 8
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="editorial-card editorial-cream"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="editorial-img-box rt-editorial-stage" onClick={() => onQuickView(whiteProduct)}>
              <span className="rt-dark-pill">White &amp; Braided Espresso</span>
              <div className="rt-photo-frame">
                <img src={whiteProduct.image} alt={whiteProduct.name} />
              </div>
            </div>
            <div className="editorial-content">
              <div className="editorial-eyebrow">
                <Sparkles size={14} /> IVORY FOOTBED &amp; TRIPLE BRAIDED BAND
              </div>
              <h3>{whiteProduct.name}</h3>
              <p>
                Natural cream-white leather footbed with stamped border detailing paired with a
                triple-braided dark espresso strap, three central leather rosettes, and a braided
                toe-ring.
              </p>
              <ul className="editorial-points">
                <li><Check size={15} /> Three horizontal braided rows + triple central medallions</li>
                <li><Check size={15} /> Smooth natural white footbed with stamped perimeter</li>
              </ul>
              <div className="editorial-footer">
                <div className="editorial-btns">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onQuickView(whiteProduct)}
                  >
                    <span>Explore Pair</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-card btn-sm"
                    onClick={() => onAddToCart(whiteProduct, 8, whiteProduct.colors[0].name)}
                  >
                    + Add Size 8
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Duo Strip: Red Gonda Kolhapuri & White/Black Ribbed Strap */}
        <motion.div
          className="collection-secondary-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div
            className="secondary-banner-item"
            onClick={() => onQuickView(kolhapuriGondaProduct)}
          >
            <img src={kolhapuriGondaProduct.image} alt={kolhapuriGondaProduct.name} />
            <div>
              <span className="mini-tag">Red Gonda Special</span>
              <h4>{kolhapuriGondaProduct.name}</h4>
              <p>Deep espresso chevron-embossed leather with festive red Gonda tassel</p>
            </div>
            <ArrowUpRight size={20} className="banner-arrow" />
          </div>

          <div
            className="secondary-banner-item"
            onClick={() => onQuickView(whiteBlackStrapProduct)}
          >
            <img src={whiteBlackStrapProduct.image} alt={whiteBlackStrapProduct.name} />
            <div>
              <span className="mini-tag">Modern Contrast</span>
              <h4>{whiteBlackStrapProduct.name}</h4>
              <p>Natural cream-white footbed with bold multi-ribbed black strap</p>
            </div>
            <ArrowUpRight size={20} className="banner-arrow" />
          </div>
        </motion.div>

        {/* 9-Photo Authentic Workshop Lookbook Strip with rt-design frame */}
        <motion.div
          className="workshop-lookbook-block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="lookbook-header">
            <div className="lookbook-title-group">
              <Camera size={18} className="gold-icon" />
              <h3>Authentic Workshop Lookbook — All 9 Real Handcrafted Photos</h3>
            </div>
            <span>Click any photo to view details &amp; order</span>
          </div>

          <div className="lookbook-nine-grid">
            {REAL_WORKSHOP_GALLERY.map((item, idx) => {
              const targetProduct =
                products[item.productIndex !== undefined ? item.productIndex : idx] ||
                products[0];
              return (
                <div
                  key={item.id}
                  className="lookbook-photo-tile rt-lookbook-tile"
                  onClick={() => onQuickView(targetProduct)}
                >
                  <span className="rt-dark-pill">{item.tag}</span>
                  <div className="rt-photo-frame">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="lookbook-tile-caption">
                    <span>SIGNATURE SERIES • {item.tag}</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
