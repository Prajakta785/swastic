import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, ShieldCheck, Footprints, MessageCircle, Ruler, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Hammer,
      title: 'Handcrafted Detailing',
      description:
        'Each chappal showcases fine braided leather cords, neatly punched strap patterns, and reinforced border stitching.'
    },
    {
      icon: Footprints,
      title: 'Cushioned Everyday Comfort',
      description:
        'Soft footbeds and smooth toe-rings reduce friction and adapt naturally to the shape of your foot.'
    },
    {
      icon: ShieldCheck,
      title: 'Sturdy & Reliable Soles',
      description:
        'Multi-layered sole construction with dependable heel grip for steady walking across indoor and outdoor surfaces.'
    },
    {
      icon: Sparkles,
      title: 'Timeless Ethnic Appeal',
      description:
        'Warm chestnut browns, classic tans, and festive ivory-white finishes that elevate both traditional and casual outfits.'
    },
    {
      icon: Ruler,
      title: 'Standard Indian Sizes (6–10)',
      description:
        'Available across popular adult sizes 6, 7, 8, 9, and 10 with clear size selection on every product card.'
    },
    {
      icon: MessageCircle,
      title: 'Easy WhatsApp Ordering',
      description:
        'Add your favorite pairs to the cart and place your order or size inquiry directly over WhatsApp in seconds.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-section section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">THE SWASTIC PROMISE</span>
          <h2 className="section-title">Why Choose Swastic Footwear</h2>
          <p className="section-description">
            We focus on the essentials that matter most when buying traditional footwear—authentic
            design, dependable materials, and comfort you can feel in every step.
          </p>
        </motion.div>

        <div className="why-grid">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                className="why-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
              >
                <div className="why-icon-wrap">
                  <IconComponent size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
