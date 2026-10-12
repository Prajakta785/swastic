import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Tag
} from 'lucide-react';

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate
}) {
  const [step, setStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
  const [couponInput, setCouponInput] = useState('STRIDE20');
  const [appliedCoupon, setAppliedCoupon] = useState('STRIDE20');
  const [customer, setCustomer] = useState({
    name: '',
    mobile: '',
    address: '',
    city: '',
    pincode: '',
    notes: ''
  });
  const [orderReference, setOrderReference] = useState('');

  // Calculate subtotal, 20% STRIDE20 discount, shipping, and total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount =
    appliedCoupon === 'STRIDE20' || appliedCoupon === 'SWASTIC20'
      ? Math.round(subtotal * 0.2)
      : 0;
  const discountedSubtotal = Math.max(0, subtotal - discount);
  const shipping = discountedSubtotal > 0 ? (discountedSubtotal >= 999 ? 0 : 79) : 0;
  const total = discountedSubtotal + shipping;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const clean = couponInput.trim().toUpperCase();
    if (clean === 'STRIDE20' || clean === 'SWASTIC20') {
      setAppliedCoupon(clean);
    } else {
      setAppliedCoupon('');
    }
  };

  const buildWhatsAppOrderUrl = () => {
    const itemLines = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.name}*\n   Size: ${item.selectedSize} | Finish: ${
            item.selectedColor
          }\n   Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = ₹${(
            item.price * item.quantity
          ).toLocaleString('en-IN')}`
      )
      .join('\n\n');

    const customerBlock =
      customer.name || customer.mobile || customer.address
        ? `\n\n*Customer Details:*\n` +
          `• Name: ${customer.name || 'Not entered'}\n` +
          `• Mobile: ${customer.mobile || 'Not entered'}\n` +
          `• Address: ${customer.address || 'Not entered'}${
            customer.city ? `, ${customer.city}` : ''
          }${customer.pincode ? ` - ${customer.pincode}` : ''}\n` +
          (customer.notes ? `• Note: ${customer.notes}\n` : '')
        : '';

    const discountLine =
      discount > 0
        ? `*Promo (${appliedCoupon} - 20% OFF):* -₹${discount.toLocaleString('en-IN')}\n`
        : '';

    const fullText =
      `Namaste *Swastic Footwear*! 🙏\nI would like to place an order for the following handcrafted footwear:\n\n` +
      `${itemLines}\n\n` +
      `*Subtotal (Sample):* ₹${subtotal.toLocaleString('en-IN')}\n` +
      discountLine +
      `*Shipping:* ${shipping === 0 ? 'FREE' : `₹${shipping}`}\n` +
      `*Estimated Total:* ₹${total.toLocaleString('en-IN')}` +
      `${customerBlock}\n\nPlease confirm availability and final payment details.`;

    return `https://wa.me/919876543210?text=${encodeURIComponent(fullText)}`;
  };

  const handlePlaceDemoOrder = (e) => {
    e.preventDefault();
    const randomRef = `SWF-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderReference(randomRef);
    setStep('success');
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      if (step === 'success') {
        setStep('cart');
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cart-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            aria-label="Shopping Cart and Checkout"
          >
            {/* Drawer Header */}
            <div className="cart-header">
              <div className="cart-header-title">
                <ShoppingBag size={20} className="gold-icon" />
                <h2>
                  {step === 'cart' && 'Your Shopping Bag'}
                  {step === 'checkout' && 'Checkout & Delivery'}
                  {step === 'success' && 'Order Summary'}
                </h2>
              </div>
              <button
                type="button"
                className="cart-close-btn"
                onClick={handleClose}
                aria-label="Close shopping cart"
              >
                <X size={21} />
              </button>
            </div>

            {/* Demo Checkout Banner */}
            <div className="demo-checkout-banner">
              <AlertCircle size={15} />
              <span>
                <strong>Demo Store Notice:</strong> Checkout is in demo mode (not connected to a
                live payment gateway). Use the <strong>WhatsApp Order</strong> button to send your
                order directly!
              </span>
            </div>

            {/* EMPTY CART STATE */}
            {cartItems.length === 0 && step !== 'success' ? (
              <div className="empty-cart-container">
                <motion.div
                  className="empty-cart-illustration"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="empty-bag-circle">
                    <ShoppingBag size={42} strokeWidth={1.5} />
                  </div>
                  <Sparkles size={18} className="empty-sparkle" />
                </motion.div>

                <h3>Your Footwear Bag is Empty</h3>
                <p>
                  Explore our handcrafted Traditional Brown, White, Braided, and Kolhapuri leather
                  chappals to add your favorite pair.
                </p>

                <div className="empty-cart-preview-cards">
                  <img
                    src="/images/real-brown-golden-medallion-chappal.jpg"
                    alt="Traditional Brown Leather Chappal"
                  />
                  <img
                    src="/images/real-white-braided-brown-closeup.jpg"
                    alt="White Handmade Traditional Chappal"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    handleClose();
                    onNavigate('#shop');
                  }}
                >
                  <span>Explore Traditional Collection</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ) : null}

            {/* STEP 1: CART ITEMS LIST */}
            {cartItems.length > 0 && step === 'cart' && (
              <>
                <div className="cart-items-scroll">
                  {cartItems.map((item) => (
                    <motion.div
                      layout
                      key={item.cartKey}
                      className="cart-item-card"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                    >
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-details">
                        <div className="cart-item-top">
                          <h4>{item.name}</h4>
                          <button
                            type="button"
                            className="remove-item-btn"
                            onClick={() => onRemoveItem(item.cartKey)}
                            title="Remove from cart"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <p className="cart-item-variant">
                          Size: <strong>{item.selectedSize}</strong> • Finish:{' '}
                          <strong>{item.selectedColor}</strong>
                        </p>

                        <div className="cart-item-bottom">
                          <div className="qty-stepper-sm">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartKey, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartKey, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          <div className="cart-item-price">
                            <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                            <small>Sample Price</small>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Promo Code Box (STRIDE20) */}
                  <form className="coupon-box" onSubmit={handleApplyCoupon}>
                    <div className="coupon-input-row">
                      <Tag size={15} className="gold-icon" />
                      <input
                        type="text"
                        placeholder="Promo code (STRIDE20)"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                      />
                      <button type="submit" className="coupon-apply-btn">
                        Apply
                      </button>
                    </div>
                    {appliedCoupon && (
                      <span className="coupon-success-msg">
                        ⚡ Code <strong>{appliedCoupon}</strong> active — 20% OFF applied!
                      </span>
                    )}
                  </form>
                </div>

                {/* Cart Footer with Totals & Actions */}
                <div className="cart-footer">
                  <div className="cart-summary-rows">
                    <div className="summary-line">
                      <span>Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                      <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
                    </div>
                    {discount > 0 && (
                      <div className="summary-line discount-line">
                        <span>Promo Discount ({appliedCoupon} • 20% OFF)</span>
                        <strong>-₹{discount.toLocaleString('en-IN')}</strong>
                      </div>
                    )}
                    <div className="summary-line">
                      <span>Estimated Delivery</span>
                      <strong>{shipping === 0 ? 'FREE' : `₹${shipping}`}</strong>
                    </div>
                    <div className="summary-line total-line">
                      <span>Total Amount (Sample)</span>
                      <strong>₹{total.toLocaleString('en-IN')}</strong>
                    </div>
                  </div>

                  <div className="cart-action-stack">
                    <button
                      type="button"
                      className="btn btn-primary btn-full btn-lg"
                      onClick={() => setStep('checkout')}
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight size={18} />
                    </button>

                    <a
                      href={buildWhatsAppOrderUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-full"
                    >
                      <MessageCircle size={18} />
                      <span>Instant Order via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </>
            )}

            {/* STEP 2: CHECKOUT FORM (Name, Mobile Number, Address, Order Summary) */}
            {cartItems.length > 0 && step === 'checkout' && (
              <form className="checkout-form-container" onSubmit={handlePlaceDemoOrder}>
                <div className="checkout-scroll-area">
                  <button
                    type="button"
                    className="back-to-cart-link"
                    onClick={() => setStep('cart')}
                  >
                    <ArrowLeft size={16} /> Back to Shopping Bag
                  </button>

                  <div className="checkout-section-block">
                    <h3>Customer &amp; Delivery Details</h3>
                    <div className="form-group">
                      <label htmlFor="chk-name">Customer Full Name *</label>
                      <input
                        id="chk-name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="chk-mobile">Mobile Number (10-digit) *</label>
                      <input
                        id="chk-mobile"
                        type="tel"
                        required
                        placeholder="e.g., 9876543210"
                        value={customer.mobile}
                        onChange={(e) => setCustomer({ ...customer, mobile: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="chk-address">Complete Delivery Address *</label>
                      <textarea
                        id="chk-address"
                        rows="3"
                        required
                        placeholder="House/Flat No., Street, Landmark..."
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="chk-city">City / District *</label>
                        <input
                          id="chk-city"
                          type="text"
                          required
                          placeholder="e.g., Pune"
                          value={customer.city}
                          onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="chk-pin">PIN Code *</label>
                        <input
                          id="chk-pin"
                          type="text"
                          required
                          placeholder="e.g., 411001"
                          value={customer.pincode}
                          onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="chk-notes">Special Instructions (Optional)</label>
                      <input
                        id="chk-notes"
                        type="text"
                        placeholder="Gift wrap or delivery preference"
                        value={customer.notes}
                        onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Order Summary inside Checkout */}
                  <div className="checkout-order-summary">
                    <h3>Order Summary ({cartItems.reduce((a, b) => a + b.quantity, 0)} Items)</h3>
                    <ul className="checkout-mini-list">
                      {cartItems.map((item) => (
                        <li key={item.cartKey}>
                          <div>
                            <strong>{item.name}</strong>
                            <span>
                              Size {item.selectedSize} • {item.selectedColor} × {item.quantity}
                            </span>
                          </div>
                          <strong>₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
                        </li>
                      ))}
                    </ul>

                    <div className="cart-summary-rows">
                      <div className="summary-line">
                        <span>Subtotal</span>
                        <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
                      </div>
                      {discount > 0 && (
                        <div className="summary-line discount-line">
                          <span>Promo ({appliedCoupon})</span>
                          <strong>-₹{discount.toLocaleString('en-IN')}</strong>
                        </div>
                      )}
                      <div className="summary-line">
                        <span>Shipping</span>
                        <strong>{shipping === 0 ? 'FREE' : `₹${shipping}`}</strong>
                      </div>
                      <div className="summary-line total-line">
                        <span>Total Payable (Sample)</span>
                        <strong>₹{total.toLocaleString('en-IN')}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-footer">
                  <div className="cart-action-stack">
                    <a
                      href={buildWhatsAppOrderUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-full btn-lg"
                    >
                      <MessageCircle size={19} />
                      <span>Place Order on WhatsApp</span>
                    </a>

                    <button type="submit" className="btn btn-primary btn-full">
                      <span>Complete Demo Checkout</span>
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* STEP 3: DEMO ORDER CONFIRMATION STATE */}
            {step === 'success' && (
              <div className="checkout-success-view">
                <div className="success-icon-ring">
                  <CheckCircle2 size={46} className="gold-icon" />
                </div>
                <span className="demo-badge">DEMO ORDER RECORDED • REF #{orderReference}</span>
                <h3>Thank You, {customer.name || 'Valued Customer'}!</h3>
                <p>
                  This is a <strong>demo checkout confirmation</strong> (no online payment was
                  charged). To send your order details directly to the shop owner on WhatsApp, click
                  the button below!
                </p>

                <div className="success-summary-box">
                  <div>
                    <span>Customer Mobile:</span>
                    <strong>{customer.mobile}</strong>
                  </div>
                  <div>
                    <span>Delivery Address:</span>
                    <strong>
                      {customer.address}, {customer.city} - {customer.pincode}
                    </strong>
                  </div>
                  <div>
                    <span>Order Total (Sample):</span>
                    <strong>₹{total.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                <div className="cart-action-stack" style={{ width: '100%' }}>
                  <a
                    href={buildWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-full btn-lg"
                  >
                    <MessageCircle size={19} />
                    <span>Send Order to WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    className="btn btn-secondary btn-full"
                    onClick={() => {
                      onClearCart();
                      setStep('cart');
                      onClose();
                    }}
                  >
                    Clear Bag &amp; Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
