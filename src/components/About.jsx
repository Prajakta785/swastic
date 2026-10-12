import React from 'react';
import { motion } from 'framer-motion';
import { Feather, HeartHandshake, Layers, Sparkles } from 'lucide-react';

export default function About({ onNavigate }) {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-grid">
        {/* Visual Collage of Real Uploaded Brown & White Chappals */}
        <motion.div
          className="about-visual-collage"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="collage-primary">
            <img
              src="/images/premium-leather-sandals-poster.jpg"
              alt="Swastic Footwear Handcrafted Dark Brown Red-Gonda Kolhapuri Chappal"
            />
          </div>
          <div className="collage-secondary">
            <img
              src="/images/poster-white-braided.jpg"
              alt="Swastic Footwear White Handmade Traditional Chappal"
            />
          </div>
          <div className="collage-badge-card">
            <Sparkles size={20} className="gold-icon" />
            <div>
              <strong>Artisanal Detailing</strong>
              <span>Hand-braided cords &amp; embossed leather</span>
            </div>
          </div>
        </motion.div>

        {/* Brand Story Copy */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">ABOUT SWASTIC FOOTWEAR</span>
          <h2 className="section-title">
            Dedicated to Traditional Footwear, Craftsmanship, Style &amp; Comfort
          </h2>

          <p className="about-lead">
            <strong>Swastic Footwear</strong> is built around a simple belief: traditional Indian
            chappals should feel as comforting on your feet as they look timeless to the eye.
          </p>

          <p className="about-paragraph">
            Our collection celebrates the beauty of handcrafted leather footwear—from classic brown
            Kolhapuri silhouettes with golden medallions and festive red Gonda tassels to natural
            cream-white footbeds paired with braided espresso and ribbed black straps. Every pair is
            thoughtfully shaped to support natural foot posture while preserving authentic
            traditional character.
          </p>

          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-icon">
                <Feather size={20} />
              </div>
              <div>
                <h3>Thoughtful Comfort</h3>
                <p>
                  Smooth inner linings, natural leather footbeds, and balanced heel support designed
                  for extended wear.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <Layers size={20} />
              </div>
              <div>
                <h3>Honest Craftsmanship</h3>
                <p>
                  Hand-stamped geometric motifs, triple-row braided bands, and sturdy soles that
                  hold up to regular use.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h3>Versatile Traditional Style</h3>
                <p>
                  Designed to complement festive Indian attire, everyday kurtas, and modern casual
                  wardrobes alike.
                </p>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('#shop')}
            >
              Browse Our Footwear
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate('#contact')}
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
