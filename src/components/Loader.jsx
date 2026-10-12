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
          className="loader-emblem"
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <svg
            viewBox="0 0 64 64"
            width="56"
            height="56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32"
              cy="32"
              r="29"
              stroke="url(#goldGrad)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <circle cx="32" cy="32" r="23" stroke="url(#goldGrad)" strokeWidth="1.5" />
            {/* Artisanal Lotus & Heritage Diamond Motif */}
            <path
              d="M32 13L38 25L51 32L38 39L32 51L26 39L13 32L26 25L32 13Z"
              stroke="url(#goldGrad)"
              strokeWidth="2"
              fill="rgba(200, 146, 54, 0.14)"
            />
            <circle cx="32" cy="32" r="4.5" fill="#DFAD55" />
            <defs>
              <linearGradient id="goldGrad" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F3CA7A" />
                <stop offset="0.5" stopColor="#C89236" />
                <stop offset="1" stopColor="#9A681C" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="loader-brand"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="loader-title">SWASTIC FOOTWEAR</span>
          <span className="loader-tagline">Tradition in Every Step</span>
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
