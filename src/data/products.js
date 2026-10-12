// Product Catalog for Swastic Footwear featuring all 9 actual uploaded handmade chappal photos.
// Note: Prices and ratings are clearly marked sample values that can be edited anytime.

export const PRODUCTS = [
  {
    id: 'swastic-real-kolhapuri-01',
    name: 'Classic Handmade Kolhapuri Chappal (Red Gonda)',
    subtitle: 'Handcrafted genuine leather Kolhapuri with red Gonda, strong toe grip & anti-slip sole',
    category: 'Kolhapuri Classic',
    price: 1399,
    originalPrice: 1799,
    isSamplePrice: true,
    rating: 5.0,
    reviewCount: 92,
    badge: 'Red Gonda Special',
    featuredInHero: true,
    image: '/images/premium-leather-sandals-poster.jpg',
    gallery: [
      '/images/premium-leather-sandals-poster.jpg',
      '/images/real-dark-brown-red-gonda-chappal.jpg',
      '/images/real-dark-brown-red-gonda-closeup.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Rich Chestnut Espresso & Red Gonda', hex: '#4A1F12' }
    ],
    material: 'Premium Genuine Leather • Long Lasting Quality',
    sole: 'Anti-Slip Sole with Durable Hand-Stitching',
    description:
      'Tradition in Every Step (परंपरेची आधुनिक पावलं) — crafted from premium genuine leather with traditional red Gonda detailing, a strong embossed toe grip for better comfort, durable border stitching, and an anti-slip sole.',
    highlights: [
      'Premium Genuine Leather for long-lasting quality',
      'Lightweight & comfortable footbed for all-day ease',
      'Strong embossed toe grip & traditional red Gonda flower detail',
      'Durable perimeter stitching & anti-slip sole for better grip'
    ]
  },
  {
    id: 'swastic-real-brown-02',
    name: 'Traditional Brown Leather Chappal',
    subtitle: 'Hand-embossed chestnut leather with golden sunburst medallion & dual Veni cords',
    category: 'Brown Leather',
    price: 1299,
    originalPrice: 1699,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 64,
    badge: 'Golden Medallion',
    featuredInHero: true,
    image: '/images/poster-brown-medallion.jpg',
    gallery: [
      '/images/poster-brown-medallion.jpg',
      '/images/real-brown-golden-medallion-chappal.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Chestnut Brown (Gold Emblem)', hex: '#6E371E' }
    ],
    material: '100% Genuine Hand-Embossed Vegetable-Tanned Leather',
    sole: 'Authentic Hand-Stitched Natural Leather Sole',
    description:
      'Handcrafted by skilled artisans, this Traditional Brown Leather Chappal features a richly embossed upper band, dual hand-braided leather cords with traditional bottom knots, a scalloped strap edge, and a signature golden sunburst medallion.',
    highlights: [
      'Intricate geometric embossing along the main strap and footbed border',
      'Dual hand-braided side and center cords with traditional leather knots',
      'Signature golden sunburst centerpiece medallion',
      'Embossed toe-ring crafted for authentic grip and everyday comfort'
    ]
  },
  {
    id: 'swastic-real-white-03',
    name: 'White Handmade Traditional Chappal',
    subtitle: 'Natural ivory-white embossed footbed with triple-braided dark brown band',
    category: 'White Traditional',
    price: 1349,
    originalPrice: 1749,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 58,
    badge: 'White & Braided',
    featuredInHero: true,
    image: '/images/poster-white-braided.jpg',
    gallery: [
      '/images/poster-white-braided.jpg',
      '/images/real-white-braided-brown-closeup.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Ivory Footbed & Espresso Braid', hex: '#EFE6D8' }
    ],
    material: 'Natural Cream-White Leather Footbed & Braided Espresso Upper',
    sole: 'Heavy-Duty Hand-Pressed Traditional Leather Sole',
    description:
      'A striking contrast design combining a smooth cream-white footbed (finished with double-row stamped border detailing) and a rich dark brown upper strap adorned with three rows of fine leather braiding and triple central rosette medallions.',
    highlights: [
      'Pristine cream-white leather footbed with intricate stamped border pattern',
      'Triple-row braided leather detailing across the upper strap',
      'Three handcrafted leather rosette medallions down the center',
      'Braided toe loop for a refined look and comfortable fit'
    ]
  },
  {
    id: 'swastic-real-zari-04',
    name: 'Festive Paithani Zari Brocade & Gold Veni Chappal',
    subtitle: 'Natural white stamped leather footbed with woven golden Zari brocade straps',
    category: 'Festive Zari',
    price: 1199,
    originalPrice: 1599,
    isSamplePrice: true,
    rating: 5.0,
    reviewCount: 83,
    badge: 'Festive Zari Edition',
    featuredInHero: true,
    image: '/images/poster-festive-zari.jpg',
    gallery: [
      '/images/poster-festive-zari.jpg',
      '/images/real-white-zari-brocade-collection.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Peacock Teal & Gold Zari', hex: '#1D7874' },
      { name: 'Royal Maroon & Gold Zari', hex: '#7A2332' },
      { name: 'Antique Black-Olive & Gold', hex: '#3B3C2E' },
      { name: 'Festive Vermilion Orange & Gold', hex: '#C84B28' }
    ],
    material: 'Woven Metallic Zari Brocade Band on Natural Cream Leather Footbed',
    sole: 'Hand-Crafted Tan Leather Sole with Stamped Border',
    description:
      'Crafted for weddings, festivals, and traditional celebrations, this collection pairs a soft natural cream-white stamped leather footbed with a shimmering golden braided central Veni cord and authentic woven Zari brocade upper straps and toe loops.',
    highlights: [
      'Available in 4 festive Zari colors: Peacock Teal, Maroon, Olive-Black & Vermilion Orange',
      'Golden braided central Veni cord connecting the matching Zari toe-ring',
      'Natural cream-white leather footbed with double-line traditional border stamping',
      'Ultra-comfortable flat traditional profile ideal for ethnic & festive attire'
    ]
  },
  {
    id: 'swastic-real-singleveni-05',
    name: 'Dark Espresso Single-Veni Golden Medallion Chappal',
    subtitle: 'Polished dark brown leather with geometric step-embossing & golden sunburst',
    category: 'Brown Leather',
    price: 1299,
    originalPrice: 1649,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 49,
    badge: 'Artisan Polish',
    featuredInHero: true,
    image: '/images/poster-single-veni-gold.jpg',
    gallery: [
      '/images/poster-single-veni-gold.jpg',
      '/images/real-dark-brown-single-veni-gold.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Polished Dark Espresso & Gold Emblem', hex: '#28150E' }
    ],
    material: 'Hand-Polished Dark Brown Vegetable-Tanned Leather',
    sole: 'Traditional Stamped Border Leather Sole',
    description:
      'Featuring a sleek single central braided Veni cord and a rich dark espresso finish, this pair highlights geometric square-step embossing across the upper strap, a scalloped lower edge, and a gleaming golden sunburst emblem.',
    highlights: [
      'Deep espresso hand-polished footbed with stamped perimeter',
      'Single braided central Veni cord tied with a traditional leather knot',
      'Geometric step-embossed wide strap with scalloped border',
      'Golden sunburst medallion on the central scalloped tab'
    ]
  },
  {
    id: 'swastic-real-triodesign-06',
    name: 'Golden Sunburst Trio — 3-Medallion Wave Strap Chappal',
    subtitle: 'Scalloped wave dark-brown leather strap with three golden sunburst medallions',
    category: 'Kolhapuri Classic',
    price: 1349,
    originalPrice: 1699,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 56,
    badge: '3-Medallion Wave',
    featuredInHero: true,
    image: '/images/poster-three-medallion-wave.jpg',
    gallery: [
      '/images/poster-three-medallion-wave.jpg',
      '/images/real-brown-three-designs-medallion.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Design 1: 3-Medallion Wave Strap', hex: '#3B1F14' },
      { name: 'Design 2: Ribbed Single-Medallion', hex: '#4A281A' },
      { name: 'Design 3: Circular Cutwork Strap', hex: '#29150C' }
    ],
    material: 'Hand-Tooled Dark Brown Leather with Brass Sunburst Medallions',
    sole: 'Authentic Kolhapuri Hand-Stitched Leather Sole',
    description:
      'Our Golden Sunburst Trio showcases three distinct artisan upper-strap patterns in rich dark brown leather: (1) a scalloped wave strap with three golden medallions, (2) a classic multi-ribbed strap with a central medallion, and (3) a circular central badge strap with woven side cutwork.',
    highlights: [
      'Scalloped wave strap adorned with three brass-gold sunburst medallions',
      'Hand-braided central Veni cord and embossed toe-ring',
      'Gleaming brass-gold sunburst medallions securely riveted to the strap',
      'Heritage border stamping on a durable dark-brown footbed'
    ]
  },
  {
    id: 'swastic-real-blackwhite-07',
    name: 'White & Black Ribbed Strap Traditional Chappal',
    subtitle: 'Smooth ivory-white footbed with bold multi-ribbed jet-black upper band',
    category: 'White Traditional',
    price: 1249,
    originalPrice: 1599,
    isSamplePrice: true,
    rating: 4.8,
    reviewCount: 44,
    badge: 'Contrast Edition',
    featuredInHero: true,
    image: '/images/poster-white-black-strap.jpg',
    gallery: [
      '/images/poster-white-black-strap.jpg',
      '/images/real-white-black-strap-chappal.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Ivory White & Jet Black Strap', hex: '#1C1C1C' }
    ],
    material: 'Ribbed Matte-Black Leather Strap on Natural White Leather Base',
    sole: 'Contoured Artisanal Leather Sole',
    description:
      'Designed for a clean, modern-traditional look, this chappal pairs a natural ivory-white embossed footbed with a bold multi-ribbed black strap and matching stitched black toe-ring.',
    highlights: [
      'Five-line ribbed black upper strap for sleek visual texture',
      'Natural cream-white footbed with traditional border stamping',
      'Double-stitched black toe loop for secure daily walking',
      'Lightweight, breathable construction ideal for summer & daily wear'
    ]
  },
  {
    id: 'swastic-real-dualtone-08',
    name: 'Artisan Dual-Tone Braided Strap Chappal (Full Pair)',
    subtitle: 'Full-pair signature white footbed with triple-medallion braided dark strap',
    category: 'Braided Leather',
    price: 1399,
    originalPrice: 1799,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 51,
    badge: 'Artisan Bestseller',
    featuredInHero: true,
    image: '/images/poster-dualtone-braided-pair.jpg',
    gallery: [
      '/images/poster-dualtone-braided-pair.jpg',
      '/images/real-white-braided-brown-full.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Cream White & Braided Dark Brown', hex: '#382218' }
    ],
    material: 'Hand-Braided Espresso Leather & Natural Cream Insole',
    sole: 'Double-Layered Hand-Finished Sole',
    description:
      'Featuring our signature pointed heritage toe profile, this dual-tone chappal highlights three horizontal braided leather cords and serrated circular medallions set against a natural cream footbed.',
    highlights: [
      'Hand-woven leather braids across both upper band and toe ring',
      'Pointed traditional front silhouette with stamped perimeter',
      'Soft inner strap lining for zero-bite comfort',
      'Versatile look for kurtas, dhotis, and smart casual outfits'
    ]
  },
  {
    id: 'swastic-real-gonda-craft-09',
    name: 'Hand-Tooled Chevron & Red Gonda Kolhapuri (Artisan Edition)',
    subtitle: 'Artisan chevron-embossed dark brown leather with red Gonda tuft & twin Veni cords',
    category: 'Kolhapuri Classic',
    price: 1399,
    originalPrice: 1799,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 62,
    badge: 'Artisan Detail',
    featuredInHero: true,
    image: '/images/poster-chevron-red-gonda.jpg',
    gallery: [
      '/images/poster-chevron-red-gonda.jpg',
      '/images/real-dark-brown-red-gonda-closeup.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Deep Espresso & Red Gonda', hex: '#2B1812' }
    ],
    material: 'Hand-Embossed Dark Espresso Leather with Festive Red Gonda',
    sole: 'Authentic Hand-Stitched Kolhapuri Leather Sole',
    description:
      'Showcasing the finest details of our workshop craftsmanship—deep chevron and floral leather embossing, scalloped strap edges, twin hand-braided Veni cords with traditional leather knots, and a vibrant crimson Gonda tassel.',
    highlights: [
      'Deep hand-stamped chevron and floral border motifs',
      'Festive red silk Gonda tuft mounted on the central tab',
      'Dual hand-braided leather cords with traditional bottom knots',
      'Embossed toe-ring and double-stamped footbed perimeter'
    ]
  },
  {
    id: 'swastic-real-ribbed-trio-10',
    name: 'Classic Ribbed-Strap Trio — Black, Brown & Ivory White',
    subtitle: 'Natural cream embossed leather footbed with 3 classic ribbed strap color options',
    category: 'White Traditional',
    price: 1299,
    originalPrice: 1699,
    isSamplePrice: true,
    rating: 5.0,
    reviewCount: 74,
    badge: '3 Color Options',
    featuredInHero: true,
    image: '/images/poster-ribbed-color-trio.jpg',
    gallery: [
      '/images/poster-ribbed-color-trio.jpg',
      '/images/real-ribbed-color-trio.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Jet Black Ribbed Strap', hex: '#1B1B1B' },
      { name: 'Rich Espresso Brown Strap', hex: '#4A2515' },
      { name: 'Pure Ivory White Strap', hex: '#F3EFE6' }
    ],
    material: 'Multi-Ribbed Hand-Stitched Leather Straps on Natural Cream Footbed',
    sole: 'Anti-Slip Traditional Stamped Leather Sole',
    description:
      'Available in three timeless strap colors—Jet Black, Rich Espresso Brown, and Pure Ivory White—all crafted on a soft natural cream-white footbed with double-row heritage border stamping and a strong double-stitched toe loop.',
    highlights: [
      '3 classic color options: Jet Black, Espresso Brown & Ivory White',
      'Five-line ribbed upper band with pointed heritage top tab',
      'Strong double-stitched toe grip for all-day walking comfort',
      'Durable stamped border footbed with anti-slip sole'
    ]
  },
  {
    id: 'swastic-real-espresso-ribbed-11',
    name: 'Ivory Footbed & Dark Espresso Ribbed-Strap Chappal',
    subtitle: 'Handcrafted ivory-white stamped footbed with dark espresso multi-ribbed band & pointed tab',
    category: 'White Traditional',
    price: 1249,
    originalPrice: 1599,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 53,
    badge: 'Heritage Ribbed',
    featuredInHero: true,
    image: '/images/poster-white-espresso-ribbed.jpg',
    gallery: [
      '/images/poster-white-espresso-ribbed.jpg',
      '/images/real-white-espresso-ribbed.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Ivory Footbed & Dark Espresso Strap', hex: '#2A1B15' }
    ],
    material: 'Premium Genuine Leather • Multi-Ribbed Stitched Upper',
    sole: 'Hand-Crafted Anti-Slip Leather Sole',
    description:
      'Crafted for everyday elegance and traditional comfort, this design pairs a pristine ivory-white stamped leather footbed with a deeply ribbed dark espresso upper band, pointed central crown tab, and reinforced toe grip.',
    highlights: [
      'Multi-ribbed stitched upper strap with pointed traditional top tab',
      'Pristine ivory-white leather footbed with intricate border stamping',
      'Reinforced double-stitched toe loop for superior grip',
      'Lightweight, durable build ideal for daily & festive ethnic wear'
    ]
  }
];

export const REAL_WORKSHOP_GALLERY = [
  {
    id: 'gallery-1',
    image: '/images/premium-leather-sandals-poster.jpg',
    title: 'Classic Red-Gonda Kolhapuri Pair',
    tag: 'Red Gonda Special',
    productIndex: 0
  },
  {
    id: 'gallery-2',
    image: '/images/poster-brown-medallion.jpg',
    title: 'Chestnut Brown Golden-Medallion Kapshi',
    tag: 'Brown Leather',
    productIndex: 1
  },
  {
    id: 'gallery-3',
    image: '/images/poster-white-braided.jpg',
    title: 'White Footbed & Triple-Braided Espresso Strap',
    tag: 'White Traditional',
    productIndex: 2
  },
  {
    id: 'gallery-4',
    image: '/images/poster-festive-zari.jpg',
    title: 'Festive Paithani Zari Brocade & Golden Veni',
    tag: 'Festive Zari',
    productIndex: 3
  },
  {
    id: 'gallery-5',
    image: '/images/poster-single-veni-gold.jpg',
    title: 'Polished Dark Espresso Single-Veni Gold Emblem',
    tag: 'Brown Leather',
    productIndex: 4
  },
  {
    id: 'gallery-6',
    image: '/images/poster-three-medallion-wave.jpg',
    title: '3-Medallion Wave Strap Golden Sunburst Pair',
    tag: 'Kolhapuri Classic',
    productIndex: 5
  },
  {
    id: 'gallery-7',
    image: '/images/poster-white-black-strap.jpg',
    title: 'Ivory Footbed & Ribbed Jet-Black Strap',
    tag: 'Contrast Edition',
    productIndex: 6
  },
  {
    id: 'gallery-8',
    image: '/images/poster-dualtone-braided-pair.jpg',
    title: 'Dual-Tone White & Braided Brown Full Pair',
    tag: 'Braided Leather',
    productIndex: 7
  },
  {
    id: 'gallery-9',
    image: '/images/poster-chevron-red-gonda.jpg',
    title: 'Chevron Embossed & Red Gonda Artisan Pair',
    tag: 'Artisan Detail',
    productIndex: 8
  },
  {
    id: 'gallery-10',
    image: '/images/poster-ribbed-color-trio.jpg',
    title: 'Classic Ribbed-Strap Trio (Black, Brown & White)',
    tag: '3 Color Options',
    productIndex: 9
  },
  {
    id: 'gallery-11',
    image: '/images/poster-white-espresso-ribbed.jpg',
    title: 'Ivory Footbed & Dark Espresso Ribbed Strap',
    tag: 'Heritage Ribbed',
    productIndex: 10
  }
];

export const CATEGORIES = [
  'All',
  'Brown Leather',
  'White Traditional',
  'Festive Zari',
  'Braided Leather',
  'Kolhapuri Classic'
];

export const SAMPLE_REVIEWS = [
  {
    id: 1,
    name: 'Rajesh Kulkarni',
    location: 'Pune, Maharashtra',
    rating: 5,
    product: 'Traditional Brown Leather Chappal',
    comment:
      'The leather embossing, dual braided cords, and golden medallion look even better in person. Very comfortable from the first wear.',
    date: 'Sample Customer Review'
  },
  {
    id: 2,
    name: 'Priya & Siddharth Deshmukh',
    location: 'Kolhapur, Maharashtra',
    rating: 5,
    product: 'Festive Paithani Zari Brocade & Gold Veni Chappal',
    comment:
      'Ordered the Peacock Teal and Maroon Zari brocade chappals for our family function. The golden braided Veni cord and soft white footbed are gorgeous!',
    date: 'Sample Customer Review'
  },
  {
    id: 3,
    name: 'Vikramaditya Joshi',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    product: 'Classic Handmade Kolhapuri Chappal (Red Gonda)',
    comment:
      'Love the dark brown Kolhapuri with the red Gonda tuft. Authentic handcrafted work and very sturdy sole.',
    date: 'Sample Customer Review'
  },
  {
    id: 4,
    name: 'Aniruddha Patil',
    location: 'Nashik, Maharashtra',
    rating: 5,
    product: 'Golden Sunburst Trio — Wave, Ribbed & Cutwork Chappal',
    comment:
      'Picked the 3-medallion scalloped wave strap design. The dark espresso polish and brass sunburst emblems look truly royal.',
    date: 'Sample Customer Review'
  }
];
