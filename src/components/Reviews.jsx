import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/products';

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">CUSTOMER IMPRESSIONS</span>
          <h2 className="section-title">What Customers Love</h2>
          <p className="section-description">
            Read sample feedback highlighting the fit, comfort, and traditional styling of our
            chappal collection.
          </p>
        </motion.div>

        <div className="reviews-grid">
          {SAMPLE_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="review-card-top">
                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill={i < review.rating ? '#D49B35' : 'none'}
                      stroke="#D49B35"
                    />
                  ))}
                </div>
                <Quote size={22} className="quote-watermark" />
              </div>

              <p className="review-comment">“{review.comment}”</p>

              <div className="review-product-pill">{review.product}</div>

              <div className="review-author-row">
                <div className="author-avatar">{review.name.charAt(0)}</div>
                <div>
                  <strong className="author-name">{review.name}</strong>
                  <span className="author-location">
                    {review.location} • <em>{review.date}</em>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
