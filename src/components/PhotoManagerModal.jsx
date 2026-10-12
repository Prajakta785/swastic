import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, RotateCcw, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

export default function PhotoManagerModal({
  isOpen,
  onClose,
  products,
  onUpdateProductImage,
  onResetImages
}) {
  if (!isOpen) return null;

  const handleFileUpload = (productId, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUpdateProductImage(productId, reader.result);
      }
    };
    reader.readAsDataURL(file);
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
          className="photo-manager-card"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-manager-title"
        >
          <div className="photo-manager-header">
            <div>
              <span className="section-eyebrow">PRODUCT PHOTO STUDIO</span>
              <h2 id="photo-manager-title">Manage Chappal Product Photos</h2>
              <p>
                Upload your exact studio or shop photos for any product below (saved automatically in
                your browser), or replace the files directly inside <code>public/images/</code>.
              </p>
            </div>
            <button
              type="button"
              className="cart-close-btn"
              onClick={onClose}
              aria-label="Close photo manager"
            >
              <X size={20} />
            </button>
          </div>

          <div className="photo-manager-grid">
            {products.map((prod) => (
              <div key={prod.id} className="photo-manager-item">
                <img src={prod.image} alt={prod.name} className="photo-manager-preview" />
                <div className="photo-manager-meta">
                  <strong>{prod.name}</strong>
                  <span>{prod.category}</span>
                  <label className="upload-btn-label">
                    <Upload size={14} />
                    <span>Upload Custom Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(prod.id, e)}
                      hidden
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="photo-manager-footer">
            <div className="photo-tip">
              <ImageIcon size={16} className="gold-icon" />
              <span>
                Permanent file paths: <code>public/images/brown-leather-chappal.jpg</code> &amp;{' '}
                <code>public/images/white-traditional-chappal.jpg</code>
              </span>
            </div>
            <div className="photo-manager-actions">
              <button type="button" className="btn btn-secondary" onClick={onResetImages}>
                <RotateCcw size={15} /> Reset to Default Photos
              </button>
              <button type="button" className="btn btn-primary" onClick={onClose}>
                <CheckCircle2 size={15} /> Done
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
