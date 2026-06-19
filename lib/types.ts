export interface SiteSettings {
  logoText: string;
  companyName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  accentColor: string;
  footerText: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  visible: boolean;
  order: number;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  published: boolean;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  category: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
  quarter: string;
  year: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  role: 'Owner' | 'Admin' | 'Editor' | 'Support' | 'User';
  name?: string;
}

export interface Order {
  id: string;
  productId: string;
  productName: string;
  userEmail: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

export interface AircraftContent {
  title: string;
  description: string;
  longDescription: string;
  specs: {
    [key: string]: string;
  };
  features: string[];
  gallery: string[];
}

export interface AboutContent {
  title: string;
  intro: string;
  mission: string;
  story: string;
  team: string;
}

export interface FeaturesContent {
  title: string;
  intro: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}