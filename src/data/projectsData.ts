export interface Project {
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  fallbackImage: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Custom Home Construction',
    location: 'Treasure Valley, ID',
    year: '2022',
    description: 'Complete custom home construction featuring quality craftsmanship and attention to detail in every aspect of the build.',
    image: '/JW House.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'New Construction'
  },
  {
    title: 'Professional Deck Construction',
    location: 'Boise, ID',
    year: '2023',
    description: 'Beautiful custom deck construction with premium wood materials and professional railings for enhanced outdoor living.',
    image: '/Deck WIP Prtty.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Exterior'
  },
  {
    title: 'No Cut Corners',
    location: 'Meridian, ID',
    year: '2023',
    description: 'freshly poured concrete steps neatly held in place by robust timber formwork and tensioned tie rods, ensuring precise rise and run compliance. The sub-base has been professionally prepared, with compacted aggregate and chamfered edges ready for final finishing, while plastic sheeting protects the white brick façade from overspray. Surrounding soil is graded to facilitate proper drainage, and all form supports are securely braced to maintain alignment during curing. The smooth, even trowel finish on each riser and tread exemplifies our dedication to structural integrity and refined aesthetics.',
    image: '/Steps Project.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Roofing'
  },
  {
    title: 'Foundation & Concrete Work',
    location: 'Star, ID',
    year: '2022',
    description: 'Professional foundation and concrete work with precision finishing and structural integrity for lasting results.',
    image: '/Foundation.jpg',
    fallbackImage: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Foundation'
  },
  {
    title: 'Luxury Home Remodeling',
    location: 'Meridian, ID',
    year: '2025',
    description: 'Complete luxury home remodeling with high-end finishes, custom concrete work, and premium outdoor living spaces.',
    image: '/Remodel at Don\'s.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Remodeling'
  },
  {
    title: 'Multi-Generational Craftsmanship',
    location: 'Treasure Valley, ID',
    year: '2020',
    description: 'Family tradition of quality construction work, showcasing decades of experience and professional expertise passed down through generations.',
    image: '/Grandpa and Dad.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Heritage'
  },
  {
    title: 'Professional Concrete Finishing',
    location: 'Boise, ID',
    year: '2023',
    description: 'Expert concrete work with precision finishing techniques, ensuring smooth surfaces and professional results.',
    image: '/Concrete.jpg',
    fallbackImage: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Concrete'
  },
  {
    title: 'Luxury Shower Installation',
    location: 'Meridian, ID',
    year: '2021',
    description: 'High-end custom shower installation with premium tile work, built-in shelving, and meticulous attention to detail.',
    image: '/Shower Room.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Bathroom'
  },
  {
    title: 'Cascade Patio Construction',
    location: 'Cascade, ID',
    year: '2020',
    description: 'Multi-level patio construction with professional concrete work and landscape integration for enhanced outdoor living.',
    image: '/Cascade in Patio.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Exterior'
  },
  {
    title: 'Custom Built-in Shelving',
    location: 'Star, ID',
    year: '2019',
    description: 'Custom built-in shelving installation with precision carpentry work and seamless integration with existing architecture.',
    image: '/Shelves.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Interior'
  },
  {
    title: 'Custom Deck Construction',
    location: 'Nampa, ID',
    year: '2018',
    description: 'Beautiful custom deck construction with premium materials and expert craftsmanship for enhanced outdoor living space.',
    image: '/Amazing Deck.jpg',
    fallbackImage: 'https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    category: 'Exterior'
  }
];