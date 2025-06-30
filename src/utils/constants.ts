export const CONTACT_INFO = [
  {
    type: 'phone',
    title: 'Phone',
    content: '(208) 880-2636',
    href: 'tel:+12088802636'
  },
  {
    type: 'email',
    title: 'Email',
    content: 'luekengabros@gmail.com',
    href: 'mailto:luekengabros@gmail.com'
  },
  {
    type: 'location',
    title: 'Service Area',
    content: 'Treasure Valley, Idaho',
    href: null
  },
  {
    type: 'hours',
    title: 'Business Hours',
    content: 'Monday - Friday: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 4:00 PM',
    href: null
  }
] as const;

export const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service' },
  { value: 'new-construction', label: 'New Home Construction' },
  { value: 'addition', label: 'Home Addition' },
  { value: 'remodeling', label: 'Kitchen/Bath Remodeling' },
  { value: 'renovation', label: 'Interior Renovation' },
  { value: 'exterior', label: 'Exterior Improvements' },
  { value: 'repairs', label: 'Home Repairs' },
  { value: 'other', label: 'Other' }
] as const;

export const NAVIGATION_ITEMS = ['Home', 'Services', 'Projects', 'About', 'Contact'] as const;

export const ANIMATION_DELAYS = {
  SHORT: 100,
  MEDIUM: 200,
  LONG: 300,
  EXTRA_LONG: 600
} as const;