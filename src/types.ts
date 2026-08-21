export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'live' | 'decor' | 'events' | 'clients';
  image: string;
  description: string;
  highlights: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'bengali' | 'mughlai' | 'live_starters' | 'salad_bar' | 'desserts';
  description: string;
  isChefSpecial?: boolean;
  type: 'veg' | 'non-veg';
  spiciness?: 'mild' | 'medium' | 'rich';
  tags: string[];
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  eventType: string;
  comment: string;
  location: string;
  verified: boolean;
}

export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  numberOfEvents: string;
  eventDate: string;
  guestCount: number;
  venueLocation: string;
  cuisinePreferences: string[];
  budgetPerPlate?: string;
  specialRequests: string;
}

export interface UserProfile {
  name: string;
  email: string;
  picture?: string;
  signedInWith: 'google';
}
