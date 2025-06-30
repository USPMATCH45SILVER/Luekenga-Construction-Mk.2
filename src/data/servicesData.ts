import { Home, Wrench, Paintbrush, Hammer, TreePine, Shield } from 'lucide-react';

export interface Service {
  icon: typeof Home;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Home,
    title: 'Custom Home Construction',
    description: 'Build your dream home from the ground up with personalized design and quality craftsmanship.',
    features: ['Custom Floor Plans', 'Foundation to Finish', 'Energy Efficient Design', 'Quality Materials']
  },
  {
    icon: Hammer,
    title: 'Home Additions',
    description: 'Expand your living space with seamless additions that match your existing home.',
    features: ['Room Additions', 'Second Story Additions', 'Garage Construction', 'In-Law Suites']
  },
  {
    icon: Wrench,
    title: 'Kitchen & Bath Remodeling',
    description: 'Transform your kitchen and bathrooms into beautiful, functional spaces.',
    features: ['Custom Cabinetry', 'Countertop Installation', 'Plumbing & Electrical', 'Tile & Flooring']
  },
  {
    icon: Paintbrush,
    title: 'Interior Renovations',
    description: 'Modernize and refresh your interior spaces with professional renovation services.',
    features: ['Flooring Installation', 'Interior Painting', 'Trim & Molding', 'Lighting Upgrades']
  },
  {
    icon: TreePine,
    title: 'Exterior Improvements',
    description: 'Enhance your home\'s curb appeal and outdoor living spaces.',
    features: ['Deck & Patio Construction', 'Siding & Roofing', 'Windows & Doors', 'Landscaping Features']
  },
  {
    icon: Shield,
    title: 'Home Repairs & Maintenance',
    description: 'Keep your home in top condition with reliable repair and maintenance services.',
    features: ['Emergency Repairs', 'Preventive Maintenance', 'Structural Repairs', 'Weather Damage Restoration']
  }
];