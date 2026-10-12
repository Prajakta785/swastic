import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    interest: 'Traditional Brown Leather Chappal',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Swastic Footwear!\n` +
        `Name: ${formData.name || 'Customer'}\n` +
        `Mobile: ${formData.mobile || 'Not provided'}\n` +
        `Interested In: ${formData.interest}\n` +
        `Message: ${formData.message || 'Please share footwear details and availability.'}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2 className="section-title">Contact Swastic Footwear</h2>
          <p className="section-description">
            Have a question about sizing, bulk festive orders, or availability? Reach out to us
            directly via WhatsApp or send an inquiry below.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Store &amp; Order Support</h3>
            <p className="contact-intro">
              We assist customers across India with size guidance (Sizes 6–10) and direct WhatsApp
              order confirmation.
            </p>

            <div className="contact-detail-list">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Phone size={19} />
                </div>
                <div>
                  <span>Phone / WhatsApp Orders (Sample Number)</span>
                  <strong>+91 98765 43210</strong>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={19} />
                </div>
                <div>
                  <span>Email Support</span>
                  <strong>orders@swasticfootwear.in</strong>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={19} />
                </div>
                <div>
                  <span>Showroom / Workshop</span>
                  <strong>Swastic Footwear, Traditional Leather Bazaar, Maharashtra, India</strong>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Clock size={19} />
                </div>
                <div>
                  <span>Store Timings</span>
                  <strong>Mon – Sun: 10:00 AM – 9:00 PM IST</strong>
                </div>
              </div>
            </div>

            <div className="contact-whatsapp-box">
              <div>
                <strong>Prefer Instant Chat?</strong>
                <p>Message us directly on WhatsApp for quick photos, size help, or order booking.</p>
              </div>
              <button
                type="button"
                className="btn btn-whatsapp btn-full"
                onClick={handleSendWhatsApp}
              >
                <MessageCircle size={18} />
                <span>Chat with Swastic Footwear on WhatsApp</span>
              </button>
            </div>
          </motion.div>

          {/* Inquiry Form Card */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Send an Inquiry</h3>
            {submitted ? (
              <div className="contact-success-state">
                <CheckCircle2 size={42} className="gold-icon" />
                <h4>Thank You for Reaching Out!</h4>
                <p>
                  Your inquiry has been recorded in this demo preview. For immediate response, click
                  below to send your message straight to our WhatsApp!
                </p>
                <div className="contact-success-actions">
                  <button
                    type="button"
                    className="btn btn-whatsapp"
                    onClick={handleSendWhatsApp}
                  >
                    <MessageCircle size={17} />
                    <span>Send via WhatsApp Now</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g., Rohan Kulkarni"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-mobile">Mobile / WhatsApp Number *</label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    required
                    placeholder="e.g., 9876543210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-interest">Product of Interest</label>
                  <select
                    id="contact-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="Traditional Brown Leather Chappal">
                      Traditional Brown Leather Chappal
                    </option>
                    <option value="White Handmade Traditional Chappal">
                      White Handmade Traditional Chappal
                    </option>
                    <option value="Premium Braided Leather Chappal">
                      Premium Braided Leather Chappal
                    </option>
                    <option value="Classic Handmade Kolhapuri Chappal">
                      Classic Handmade Kolhapuri Chappal
                    </option>
                    <option value="Custom / Bulk Festive Order">
                      Custom / Bulk Festive Order
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Message or Size Question *</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    required
                    placeholder="Tell us the size (6–10) or quantity you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="contact-form-buttons">
                  <button type="submit" className="btn btn-primary btn-full">
                    <Send size={17} />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
