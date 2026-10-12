import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="loader-backdrop"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <div className="loader-inner">
        <motion.div
          className="loader-swastik-lockup"
          initial={{ scale: 0.9, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="hero-swastik-crest-row">
            <svg className="swastik-flourish swastik-flourish-left" viewBox="0 0 80 28" width="68" height="24" fill="none">
              <path d="M78 22 C58 22, 46 8, 28 14 C16 18, 12 24, 4 22" stroke="#D49B35" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M64 16 C52 10, 42 18, 36 22" stroke="#D49B35" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="4" cy="22" r="2.2" fill="#D49B35" />
              <circle cx="48" cy="14" r="1.8" fill="#FFE08A" />
            </svg>

            <div className="hero-swastik-medallion">
              <img
                src="/images/swastik-logo.png"
                alt="Swastik Footwear Logo"
                className="swastik-logo-img hero-swastik-logo-img"
              />
            </div>

            <svg className="swastik-flourish swastik-flourish-right" viewBox="0 0 80 28" width="68" height="24" fill="none">
              <path d="M2 22 C22 22, 34 8, 52 14 C64 18, 68 24, 76 22" stroke="#D49B35" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M16 16 C28 10, 38 18, 44 22" stroke="#D49B35" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="76" cy="22" r="2.2" fill="#D49B35" />
              <circle cx="32" cy="14" r="1.8" fill="#FFE08A" />
            </svg>
          </div>

          <span className="loader-swastik-title">SWASTIK</span>
          <div className="hero-footwear-divider loader-footwear-divider">
            <span className="footwear-rule" />
            <span className="footwear-subword">FOOTWEAR</span>
            <span className="footwear-rule" />
          </div>
        </motion.div>

        <div className="loader-bar-track">
          <motion.div
            className="loader-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.05, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
