import { GalleryItem, MenuItem, Review } from '../types';

export const BUSINESS_INFO = {
  name: "Food Bazar Caterer",
  tagline: "Quality Catering Service",
  phone: "9830558386",
  phoneFormatted: "+91 9830558386",
  whatsappUrl: "https://wa.me/919830558386",
  email: "foodbazar2002@gmail.com",
  licenseNumber: "22818019001523",
  address: "Kolkata & Surrounding Regions, West Bengal, India",
  experienceYears: "20+",
  eventsCompleted: "1,200+",
  satisfiedGuests: "5,00,000+",
};

export const EXTRA_PHOTOS = {
  aboutFeatured: '/photos/about_featured.jpg',
  brassWarmers: '/photos/starter_brass_warmers.jpg'
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Authentic Banquet Hospitality',
    category: 'clients',
    image: '/photos/drive_img_1.jpg',
    description: 'Creating memorable catering moments and warm culinary hospitality for happy couples, families, and guests.',
    highlights: ['Bespoke Hospitality', 'Royal Banquet Care', 'Dedicated Team', 'VIP Dining Experience']
  },
  {
    id: 'gal-2',
    title: 'Grand Entrance & Welcome Canopies',
    category: 'decor',
    image: '/photos/drive_img_2.jpg',
    description: 'Lush floral arches, majestic drapery, and warm lighting welcoming wedding guests in grand royal style.',
    highlights: ['Floral Welcome Arch', 'Draped Canopies', 'VIP Entryway', 'Grand Aesthetics']
  },
  {
    id: 'gal-3',
    title: 'Grand Wedding Stage & Floral Architecture',
    category: 'decor',
    image: '/photos/drive_img_3.jpg',
    description: 'Opulent wedding reception stages, fresh floral backdrops, and elegant event lighting design.',
    highlights: ['Royal Stage Design', 'Fresh Floral Walls', 'Warm Ambiance', 'Luxury Decor']
  },
  {
    id: 'gal-4',
    title: 'Royal Handi Buffet & Grand Chafers',
    category: 'food',
    image: '/photos/drive_img_4.jpg',
    description: 'Steaming hot signature delicacies (Mutton Biryani, Chingri Malai Curry) in traditional hand-hammered brass handis.',
    highlights: ['Royal Handi Buffet', 'Steaming Hot Service', 'Traditional Brass Chafers', 'Rich Aroma & Taste']
  },
  {
    id: 'gal-5',
    title: 'Live Tandoor & Skewers Station',
    category: 'live',
    image: '/photos/drive_img_5.jpg',
    description: 'Master chefs preparing fresh skewers, kebabs, and live charcoal grill specialties right before your guests.',
    highlights: ['Live Charcoal Tandoor', 'Fresh Grilled Kebabs', 'Master Chefs', 'Hygienic Setup']
  },
  {
    id: 'gal-6',
    title: 'Royal Brass Starter Warmers',
    category: 'food',
    image: '/photos/drive_img_6.jpg',
    description: 'Crispy fried appetizers and sizzling starter delicacies served in shining brass warmers.',
    highlights: ['Royal Brass Warmers', 'Crispy Golden Starters', 'Live Starters Counter', 'Piping Hot Service']
  },
  {
    id: 'gal-7',
    title: 'Artisanal Plate Setup & Salad Counters',
    category: 'live',
    image: '/photos/drive_img_7.jpg',
    description: 'Illuminated counters, curated artisanal salad presentations, and fine banquet dinnerware stations.',
    highlights: ['Illuminated Stations', 'Fresh Cut Displays', 'Hygienic Layout', 'FSSAI Standards']
  }
];

export const OFFICIAL_PHOTOS = GALLERY_ITEMS.map(item => item.image);

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm-1',
    name: 'Kolkata Royal Mutton Biryani',
    category: 'mughlai',
    description: 'Aromatic aged Basmati rice layered with melt-in-mouth tender mutton cuts, saffron, desi ghee, and the iconic golden spiced potato & egg.',
    isChefSpecial: true,
    type: 'non-veg',
    spiciness: 'rich',
    tags: ['Signature', 'Royal Handi', 'Must Have']
  },
  {
    id: 'm-2',
    name: 'Chicken Noorjahani',
    category: 'mughlai',
    description: 'Mughlai royal preparation of succulent chicken simmered in rich cashew, almond paste, mace, saffron, and cream.',
    isChefSpecial: true,
    type: 'non-veg',
    spiciness: 'medium',
    tags: ['Chef Signature', 'Mild & Royal']
  },
  {
    id: 'm-3',
    name: 'Chingri Malai Curry',
    category: 'bengali',
    description: 'Jumbo fresh river gold prawns cooked to perfection in silky spiced coconut milk gravy with green cardamom and whole green chilies.',
    isChefSpecial: true,
    type: 'non-veg',
    spiciness: 'mild',
    tags: ['Bengali Heritage', 'Premium Seafood']
  },
  {
    id: 'm-4',
    name: 'Bhetki Machher Paturi',
    category: 'bengali',
    description: 'Fresh Kolkata Bhetki fillet marinated in pungent mustard-poppy seed paste and green chillies, wrapped in banana leaves & gently steam-roasted.',
    isChefSpecial: true,
    type: 'non-veg',
    spiciness: 'medium',
    tags: ['Traditional Favorite', 'Authentic Taste']
  },
  {
    id: 'm-5',
    name: 'Kosha Mangsho with Radhaballabhi',
    category: 'bengali',
    description: 'Slow-cooked rich Bengali dark mutton gravy cooked with caramelized onions, paired with soft urad-dal stuffed fried breads.',
    type: 'non-veg',
    spiciness: 'rich',
    tags: ['Classic Wedding Dish']
  },
  {
    id: 'm-6',
    name: 'Live Reshmi Kebab & Seekh Skewers',
    category: 'live_starters',
    description: 'Silky, marinated boneless chicken and spiced mutton mince grilled on skewers live in front of guests, served with mint kasundi kasundi chutney.',
    isChefSpecial: true,
    type: 'non-veg',
    spiciness: 'medium',
    tags: ['Live Counter', 'Instant Hot']
  },
  {
    id: 'm-7',
    name: 'Paneer Tikka Angara & Dahi Ke Kebab',
    category: 'live_starters',
    description: 'Smoked cottage cheese cubes tossed in tandoori spices along with crispy golden hung-curd patties infused with cardamom.',
    type: 'veg',
    spiciness: 'medium',
    tags: ['Vegetarian Delight', 'Live Counter']
  },
  {
    id: 'm-8',
    name: 'Illuminated Artisanal Salad Bar & Chaat',
    category: 'salad_bar',
    description: 'Exotic fruit medleys, sprout salads, Russian potato salad, live Kolkata Puchka stall, and sweet corn chaat.',
    type: 'veg',
    spiciness: 'mild',
    tags: ['Neon Counter', 'Fresh & Healthy']
  },
  {
    id: 'm-9',
    name: 'Baked Rosogolla & Nolen Gurer Sandesh',
    category: 'desserts',
    description: 'Warm, caramelized baked cottage cheese dumplings in condensed saffron milk and seasonal date-palm jaggery sweets.',
    isChefSpecial: true,
    type: 'veg',
    tags: ['Dessert Crown', 'Sweet Ending']
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Debashis & Anindita Roy',
    rating: 5,
    date: 'February 2026',
    eventType: 'Wedding Reception (800 Guests)',
    comment: 'Food Bazar Caterer made our wedding unforgettable! The Mutton Biryani and Chingri Malai Curry were talked about by all our guests for weeks. The live tandoor counter and royal brass handis looked extraordinarily grand.',
    location: 'Salt Lake, Kolkata',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Sumantha Mukherjee',
    rating: 5,
    date: 'January 2026',
    eventType: 'Daughter’s Annaprasan & Family Feast',
    comment: 'From polite, uniformed staff to mouth-watering Chicken Noorjahani and Baked Rosogolla, everything was 10/10. Thank you team for taking care of hygiene and taste with absolute perfection!',
    location: 'New Town, Kolkata',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Rajesh & Swati Agarwal',
    rating: 5,
    date: 'December 2025',
    eventType: 'Sangeet & Cocktail Dinner (500 Guests)',
    comment: 'Their live kebab skewers and salad plate counter setup was out of this world. Professional management, spotless clean counters, and super responsive on WhatsApp. Highly recommended!',
    location: 'Alipore, Kolkata',
    verified: true,
  }
];

export const FAQS = [
  {
    question: "How do I book a meeting or event tasting with Food Bazar Caterer?",
    answer: "You can easily schedule a meeting using our online booking form on this website, or directly message/call us at +91 9830558386. We provide one-on-one menu consultations and customized tasting sessions for weddings and grand receptions."
  },
  {
    question: "What is your FSSAI certification and food hygiene protocol?",
    answer: "We are strictly certified under FSSAI / Fasnal LC No.: 22818019001523. All our chefs, live-counter handlers, and serving staff wear hairnets, gloves, and neat uniforms. We source only fresh, grade-A meats, oils, and produce daily."
  },
  {
    question: "What cuisines do you specialize in?",
    answer: "We specialize in Royal Kolkata Mughlai & Biryani, Traditional Authentic Bengali Bhoj, Live Charcoal Tandoor & Kebabs, Continental appetizers, Illuminated Salad/Chaat counters, and Royal Bengali & Fusion Desserts."
  },
  {
    question: "Do you cater for events outside Kolkata?",
    answer: "Yes! While our primary base is Kolkata, Howrah, and Hooghly, we regularly cater for destination weddings and corporate galas across West Bengal and neighboring states."
  },
  {
    question: "What is the minimum and maximum guest capacity you handle?",
    answer: "We cater to intimate gatherings of 50 guests up to mega wedding banquets and corporate festivals of 5,000+ guests with dedicated floor managers and logistical precision."
  },
  {
    question: "Are royal brass handi setups and crockery included?",
    answer: "Yes! Our premium packages include our signature hand-hammered royal brass chafing handis, bone china/porcelain dinnerware, customized table decor, and illuminated plate counters."
  }
];