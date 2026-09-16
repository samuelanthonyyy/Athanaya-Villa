import { VillaRoom, GalleryItem, Attraction } from '../types';

export const VILLA_ROOMS: VillaRoom[] = [
  {
    id: 'one-bedroom',
    name: 'One Bedroom Villa',
    tagline: 'The Serene Sanctuary',
    category: 'Couples & Solo Retreat',
    bedrooms: 1,
    maxGuests: 2,
    size: '125 m²',
    poolSize: '6m × 3m Private Plunge Pool',
    priceIdr: 2450000,
    priceUsd: 160,
    image: '/images/bali_villa_bedroom.jpg',
    additionalImages: [
      '/images/bali_villa_bathroom.jpg',
      '/images/bali_villa_pool_terrace.jpg',
    ],
    description:
      'An intimate haven crafted for romantic escapes and mindful serenity. Features an artisan teak canopy king bed with sheer drapery, a sunlit river-stone bathtub filled with frangipani blossoms, and a private azure plunge pool tucked inside secluded limestone walls.',
    highlights: [
      'Private Azure Swimming Pool',
      'Open-air River Stone Bathtub & Rain Shower',
      'Complimentary Floating Breakfast',
      'High-Speed Wi-Fi & Daily Turndown Service',
    ],
    features: ['King Size Bed', 'Private Sun Deck', 'Marshall Bluetooth Speaker', 'Artisan Mini Bar', 'In-Villa Dining Menu'],
  },
  {
    id: 'two-bedroom',
    name: 'Two Bedroom Villa',
    tagline: 'The Tropical Haven',
    category: 'Small Families & Companions',
    bedrooms: 2,
    maxGuests: 4,
    size: '230 m²',
    poolSize: '9m × 4m Private Pool',
    priceIdr: 4200000,
    priceUsd: 275,
    image: '/images/bali_villa_living_room.jpg',
    additionalImages: [
      '/images/bali_villa_bedroom_suite.jpg',
      '/images/bali_villa_bathroom.jpg',
    ],
    description:
      'Spacious split-wing architecture designed for effortless togetherness and utmost seclusion. Features two master suites with ensuite open-air stone bathrooms, an expansive open-air joglo living pavilion with carved teak beams, a gourmet kitchenette, and a sparkling central swimming pool flanked by frangipani trees.',
    highlights: [
      'Spacious 9m Private Central Pool',
      'Open-concept Joglo Living & Dining Pavilion',
      'Two Ensuite Master Bedrooms with Outdoor Showers',
      'Dedicated Butler Assistance on Call',
    ],
    features: ['2 King Beds', 'Fully Equipped Kitchenette', 'Daybed Pavilion (Bale)', 'Smart TV with Netflix', 'Espresso Machine'],
  },
  {
    id: 'three-bedroom',
    name: 'Three Bedroom Villa',
    tagline: 'The Royal Estate',
    category: 'Large Families & Private Gatherings',
    bedrooms: 3,
    maxGuests: 6,
    size: '380 m²',
    poolSize: '12m × 4.5m Lap Pool',
    priceIdr: 6800000,
    priceUsd: 445,
    image: '/images/bali_villa_main_building.jpg',
    additionalImages: [
      '/images/bali_villa_living_room.jpg',
      '/images/bali_villa_bedroom.jpg',
    ],
    description:
      'The crown jewel of Athanaya Villa. A grand private Balinese compound overlooking lush Jimbaran hilltops and distant vistas of Garuda Wisnu Kencana. Built with traditional alang-alang thatched roofs, authentic carved teak columns, an imposing 12-meter lap pool, sunken poolside lounge, and tailored private chef culinary experiences.',
    highlights: [
      '12-Meter Private Lap Pool & Sunken Lounge',
      'Panoramic Balcony with Distant GWK Horizon View',
      'Expansive Landscaped Balinese Garden',
      'VIP Airport Limousine Transfer Included',
    ],
    features: ['3 King Suites', 'Private Chef Upon Request', 'Sunset BBQ Facilities', 'Double Vanity Bathrooms', 'Sound System Throughout'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-gwk',
    title: 'Garuda Wisnu Kencana Statue',
    category: 'gwk',
    categoryLabel: 'GWK & Horizon',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Patung_Garuda_Wisnu_Kencana.jpg',
    caption: 'The authentic 121-meter monumental statue of Garuda Wisnu Kencana (Lord Vishnu riding the mythical bird Garuda) towering over the Jimbaran hills.',
  },
  {
    id: 'gal-gwk-below',
    title: 'Garuda Wisnu Kencana from Below',
    category: 'gwk',
    categoryLabel: 'GWK & Horizon',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Garuda_Wisnu_Kencana_from_below.jpg',
    caption: 'Looking up at the majestic copper and brass wings of Lord Vishnu atop Garuda at the GWK Cultural Park in Jimbaran.',
  },
  {
    id: 'gal-pool-1',
    title: 'Grand Villa Pavilion & Pool at Twilight',
    category: 'pool',
    categoryLabel: 'Swimming Pool',
    imageUrl: '/images/bali_villa_main_building.jpg',
    caption: 'Authentic Balinese alang-alang thatched pavilion and calm pool waters reflecting warm amber lanterns at dusk.',
  },
  {
    id: 'gal-bedroom-1',
    title: 'Traditional Master Canopy Bedroom',
    category: 'rooms',
    categoryLabel: 'Bedroom Sanctuary',
    imageUrl: '/images/bali_villa_bedroom.jpg',
    caption: 'Hand-carved teak wood four-poster bed with sheer canopy draping, warm amber bedside lanterns, and serene garden view.',
  },
  {
    id: 'gal-bedroom-2',
    title: 'Balinese Artisan Bedroom Suite',
    category: 'rooms',
    categoryLabel: 'Bedroom Sanctuary',
    imageUrl: '/images/bali_villa_bedroom_suite.jpg',
    caption: 'Polished teak wood king bed with soft ambient lighting and handcrafted floral wood reliefs in an intimate suite.',
  },
  {
    id: 'gal-living',
    title: 'Traditional Joglo Living Pavilion',
    category: 'rooms',
    categoryLabel: 'Living Room',
    imageUrl: '/images/bali_villa_living_room.jpg',
    caption: 'Open-air teak wood living pavilion with soaring carved beams, glowing rattan lanterns, and tranquil garden breeze.',
  },
  {
    id: 'gal-bath',
    title: 'Semi-Outdoor Balinese Stone Bath',
    category: 'rooms',
    categoryLabel: 'Artistic Bathroom',
    imageUrl: '/images/bali_villa_bathroom.jpg',
    caption: 'Natural river-stone soaking tub filled with fresh frangipani petals, glowing candles, and lush tropical foliage.',
  },
  {
    id: 'gal-surround-1',
    title: 'Jimbaran Sunset & Coastal Waters',
    category: 'surroundings',
    categoryLabel: 'Bali Surroundings',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    caption: 'World-famous Jimbaran Bay sunset, only 5 minutes from the villa gates.',
  },
  {
    id: 'gal-pool-2',
    title: 'Private Pool Terrace Sanctuary',
    category: 'pool',
    categoryLabel: 'Swimming Pool',
    imageUrl: '/images/bali_villa_pool_terrace.jpg',
    caption: 'Stone-paved pool terrace with carved frangipani water spouts and soft twilight ambient illumination.',
  },
  {
    id: 'gal-surround-2',
    title: 'Uluwatu Cliffs & Dramatic Ocean Vista',
    category: 'surroundings',
    categoryLabel: 'Bali Surroundings',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Breathtaking coastal cliffs and ancient temples of the Bukit peninsula, a brief scenic drive away.',
  },
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: 'jimbaran-beach',
    name: 'Jimbaran Bay & Sunset Seafood',
    distance: '1.8 km',
    driveTime: '5 mins',
    category: 'Beach & Culinary',
    description:
      'Famed for golden sands, calm gentle waters for swimming, and atmospheric beachfront tables serving grilled fresh catch over coconut husks under the sunset glow.',
    imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    highlight: 'Candlelit beach dining & breathtaking sunsets',
  },
  {
    id: 'gwk-park',
    name: 'Garuda Wisnu Kencana (GWK)',
    distance: '3.2 km',
    driveTime: '7 mins',
    category: 'Culture & Heritage',
    description:
      'Bali’s grand cultural park crowned by the 121-meter copper and brass monumental statue of Lord Vishnu riding Garuda. Enjoy daily cultural Balinese dance performances, street theatres, and panoramic vistas.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Patung_Garuda_Wisnu_Kencana.jpg',
    highlight: '121m Vishnu & Garuda monument in Jimbaran',
  },
  {
    id: 'uluwatu-temple',
    name: 'Uluwatu Temple & Sea Cliffs',
    distance: '14.5 km',
    driveTime: '20 mins',
    category: 'Historic Landmark',
    description:
      'Perched 70 meters high on sheer limestone cliffs dropping straight into the Indian Ocean. Experience the mystical sunset Kecak fire dance against crashing surf.',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    highlight: 'Dramatically perched temple & sunset fire dance',
  },
  {
    id: 'padang-padang',
    name: 'Padang Padang & Bingin Beaches',
    distance: '10.2 km',
    driveTime: '15 mins',
    category: 'Hidden Cove & Surf',
    description:
      'Enchanting coves sheltered by limestone caves and crystal-clear turquoise waters. Loved by both relaxed sunseekers and world-class surfers.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlight: 'Secret cliff steps & tranquil sheltered waters',
  },
  {
    id: 'airport',
    name: 'Ngurah Rai International Airport',
    distance: '9.0 km',
    driveTime: '18 mins',
    category: 'Convenience',
    description:
      'Quick and stress-free transit. Athanaya Villa provides private air-conditioned VIP transfers directly to and from Bali’s international gateway.',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    highlight: 'Swift, seamless direct private airport escort',
  },
];

export const VILLA_AMENITIES = [
  {
    title: 'Private Swimming Pool',
    desc: 'Each private villa boasts its own crystal-clear pool with sun loungers and tropical frangipani canopy.',
    icon: 'Waves',
  },
  {
    title: 'Floating Breakfast',
    desc: 'Begin your morning with fresh tropical fruits, bakery baskets, and freshly pressed juices afloat your pool.',
    icon: 'Coffee',
  },
  {
    title: 'In-Villa Spa & Wellness',
    desc: 'Traditional Balinese oil massages and body scrubs performed in the tranquility of your private open pavilion.',
    icon: 'Sparkles',
  },
  {
    title: 'Dedicated Concierge & Butler',
    desc: 'Warm Balinese hospitality ready to organize bespoke island tours, scooter rentals, and sunset restaurant bookings.',
    icon: 'UserCheck',
  },
  {
    title: 'High-Speed Fiber Wi-Fi',
    desc: 'Reliable high-speed fiber internet throughout all indoor and outdoor areas for effortless connectivity.',
    icon: 'Wifi',
  },
  {
    title: 'Artisan Kitchenette & Bar',
    desc: 'Complimentary daily mineral water, artisanal local teas, French press coffee, and stocked gourmet mini bar.',
    icon: 'Utensils',
  },
];
