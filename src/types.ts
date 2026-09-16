export interface VillaRoom {
  id: string;
  name: string;
  tagline: string;
  category: string;
  bedrooms: number;
  maxGuests: number;
  size: string; // e.g., "120 m²"
  poolSize: string; // e.g., "7 x 3.5 m"
  priceIdr: number;
  priceUsd: number;
  image: string;
  additionalImages?: string[];
  description: string;
  highlights: string[];
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'pool' | 'gwk' | 'surroundings';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  driveTime: string;
  category: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
  message: string;
}

export type Currency = 'USD' | 'IDR';
