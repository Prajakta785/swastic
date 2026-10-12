// Product Catalog for Swastic Footwear featuring all 9 actual uploaded handmade chappal photos.
// Note: Prices and ratings are clearly marked sample values that can be edited anytime.

export const PRODUCTS = [
  {
    id: 'swastic-real-brown-01',
    name: 'Traditional Brown Leather Chappal',
    subtitle: 'Hand-embossed chestnut leather with golden sunburst medallion & dual Veni cords',
    category: 'Brown Leather',
    price: 1299,
    originalPrice: 1699,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 64,
    badge: 'Original Workshop Photo',
    featuredInHero: true,
    image: '/images/real-brown-golden-medallion-chappal.jpg',
    gallery: [
      '/images/real-brown-golden-medallion-chappal.jpg',
      '/images/real-dark-brown-single-veni-gold.jpg',
      '/images/real-brown-three-designs-medallion.jpg'
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
    id: 'swastic-real-white-02',
    name: 'White Handmade Traditional Chappal',
    subtitle: 'Natural ivory-white embossed footbed with triple-braided dark brown band',
    category: 'White Traditional',
    price: 1349,
    originalPrice: 1749,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 58,
    badge: 'Original Workshop Photo',
    featuredInHero: true,
    image: '/images/real-white-braided-brown-closeup.jpg',
    gallery: [
      '/images/real-white-braided-brown-closeup.jpg',
      '/images/real-white-braided-brown-full.jpg',
      '/images/real-white-black-strap-chappal.jpg'
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
    id: 'swastic-real-zari-03',
    name: 'Festive Paithani Zari Brocade & Gold Veni Chappal',
    subtitle: 'Natural white stamped leather footbed with woven golden Zari brocade straps',
    category: 'Festive Zari',
    price: 1199,
    originalPrice: 1599,
    isSamplePrice: true,
    rating: 5.0,
    reviewCount: 83,
    badge: 'New Festive Arrival',
    featuredInHero: true,
    image: '/images/real-white-zari-brocade-collection.jpg',
    gallery: [
      '/images/real-white-zari-brocade-collection.jpg',
      '/images/real-white-braided-brown-full.jpg'
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
      'Crafted for weddings, festivals, and traditional celebrations, this collection pairs a soft natural cream-white stamped leather footbed with a shimmering golden braided central Veni cord and authentic woven Zari brocade upper straps and toe loops in four vibrant colorways.',
    highlights: [
      'Available in 4 festive Zari colors: Peacock Teal, Maroon, Olive-Black & Vermilion Orange',
      'Golden braided central Veni cord connecting the matching Zari toe-ring',
      'Natural cream-white leather footbed with double-line traditional border stamping',
      'Ultra-comfortable flat traditional profile ideal for ethnic & festive attire'
    ]
  },
  {
    id: 'swastic-real-kolhapuri-04',
    name: 'Classic Handmade Kolhapuri Chappal (Red Gonda)',
    subtitle: 'Deep espresso chevron-embossed leather with traditional red Gonda tassel',
    category: 'Kolhapuri Classic',
    price: 1399,
    originalPrice: 1799,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 72,
    badge: 'Red Gonda Special',
    featuredInHero: true,
    image: '/images/real-dark-brown-red-gonda-chappal.jpg',
    gallery: [
      '/images/real-dark-brown-red-gonda-chappal.jpg',
      '/images/real-dark-brown-red-gonda-closeup.jpg',
      '/images/real-brown-golden-medallion-chappal.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Dark Espresso & Red Gonda', hex: '#2B1812' }
    ],
    material: 'Deep Espresso Hand-Tooled Leather with Silk Gonda Accent',
    sole: 'Sturdy Traditional Kolhapuri Leather Sole',
    description:
      'Rooted in authentic Maharashtrian heritage, this Classic Handmade Kolhapuri Chappal showcases deep espresso-brown leather, fine chevron and floral punch-work, dual braided Veni cords, and a vibrant red festive Gonda (tassel) at the crown.',
    highlights: [
      'Authentic red Gonda tuft accent on the central leather tab',
      'Fine chevron & floral hand-stamped motifs across the wide strap',
      'Twin braided leather cords anchored with traditional leather ties',
      'Rich dark-brown polished footbed that pairs perfectly with ethnic wear'
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
    featuredInHero: false,
    image: '/images/real-dark-brown-single-veni-gold.jpg',
    gallery: [
      '/images/real-dark-brown-single-veni-gold.jpg',
      '/images/real-brown-three-designs-medallion.jpg'
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
    name: 'Golden Sunburst Trio — Wave, Ribbed & Cutwork Chappal',
    subtitle: 'Choose from 3 signature dark-brown golden medallion strap designs',
    category: 'Kolhapuri Classic',
    price: 1349,
    originalPrice: 1699,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 56,
    badge: '3 Strap Designs',
    featuredInHero: false,
    image: '/images/real-brown-three-designs-medallion.jpg',
    gallery: [
      '/images/real-brown-three-designs-medallion.jpg',
      '/images/real-dark-brown-single-veni-gold.jpg',
      '/images/real-brown-golden-medallion-chappal.jpg'
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
      'Select your preferred strap design (Wave 3-Medallion, Ribbed, or Cutwork)',
      'Hand-braided central Veni cord and embossed toe-ring on all three styles',
      'Gleaming brass-gold sunburst medallions securely riveted to the strap',
      'Stamped size & heritage border pattern on a durable dark-brown footbed'
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
    featuredInHero: false,
    image: '/images/real-white-black-strap-chappal.jpg',
    gallery: [
      '/images/real-white-black-strap-chappal.jpg',
      '/images/real-white-braided-brown-full.jpg'
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
    featuredInHero: false,
    image: '/images/real-white-braided-brown-full.jpg',
    gallery: [
      '/images/real-white-braided-brown-full.jpg',
      '/images/real-white-braided-brown-closeup.jpg'
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
    subtitle: 'Close-up artisan chevron-embossed dark brown leather with red Gonda tuft & twin Veni cords',
    category: 'Kolhapuri Classic',
    price: 1399,
    originalPrice: 1799,
    isSamplePrice: true,
    rating: 4.9,
    reviewCount: 62,
    badge: 'Artisan Detail',
    featuredInHero: true,
    image: '/images/real-dark-brown-red-gonda-closeup.jpg',
    gallery: [
      '/images/real-dark-brown-red-gonda-closeup.jpg',
      '/images/real-dark-brown-red-gonda-chappal.jpg'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Deep Espresso & Red Gonda', hex: '#2B1812' }
    ],
    material: 'Hand-Embossed Dark Espresso Leather with Festive Red Gonda',
    sole: 'Authentic Hand-Stitched Kolhapuri Leather Sole',
    description:
      'Showcasing the finest close-up details of our workshop craftsmanship—deep chevron and floral leather embossing, scalloped strap edges, twin hand-braided Veni cords with traditional leather knots, and a vibrant crimson Gonda tassel.',
    highlights: [
      'Deep hand-stamped chevron and floral border motifs',
      'Festive red silk Gonda tuft mounted on the central tab',
      'Dual hand-braided leather cords with traditional bottom knots',
      'Embossed toe-ring and double-stamped footbed perimeter'
    ]
  }
];

export const REAL_WORKSHOP_GALLERY = [
  {
    id: 'gallery-1',
    image: '/images/real-brown-golden-medallion-chappal.jpg',
    title: 'Chestnut Brown Golden-Medallion Kapshi',
    tag: 'Brown Leather',
    productIndex: 0
  },
  {
    id: 'gallery-2',
    image: '/images/real-white-braided-brown-closeup.jpg',
    title: 'White Footbed & Triple-Braided Espresso Strap',
    tag: 'White Traditional',
    productIndex: 1
  },
  {
    id: 'gallery-3',
    image: '/images/real-white-zari-brocade-collection.jpg',
    title: 'Festive Paithani Zari Brocade & Golden Veni (4 Colors)',
    tag: 'Festive Zari',
    productIndex: 2
  },
  {
    id: 'gallery-4',
    image: '/images/real-dark-brown-red-gonda-chappal.jpg',
    title: 'Dark Espresso Red-Gonda Kolhapuri Pair',
    tag: 'Kolhapuri Classic',
    productIndex: 3
  },
  {
    id: 'gallery-5',
    image: '/images/real-dark-brown-single-veni-gold.jpg',
    title: 'Polished Dark Espresso Single-Veni Gold Emblem',
    tag: 'Brown Leather',
    productIndex: 4
  },
  {
    id: 'gallery-6',
    image: '/images/real-brown-three-designs-medallion.jpg',
    title: '3-Design Golden Medallion Series (Wave, Ribbed & Cutwork)',
    tag: '3 Strap Designs',
    productIndex: 5
  },
  {
    id: 'gallery-7',
    image: '/images/real-dark-brown-red-gonda-closeup.jpg',
    title: 'Close-Up Craft: Chevron Embossing & Red Gonda',
    tag: 'Artisan Detail',
    productIndex: 3
  },
  {
    id: 'gallery-8',
    image: '/images/real-white-black-strap-chappal.jpg',
    title: 'Ivory Footbed & Ribbed Jet-Black Strap',
    tag: 'Contrast Edition',
    productIndex: 6
  },
  {
    id: 'gallery-9',
    image: '/images/real-white-braided-brown-full.jpg',
    title: 'Dual-Tone White & Braided Brown Full Pair',
    tag: 'Artisan Weave',
    productIndex: 7
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
