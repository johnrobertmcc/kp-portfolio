import Work from 'pages/Work';
import About from 'pages/About';
import Contact from 'pages/Contact';

export const ROUTES = [
  { path: '/', element: Work },
  { path: '/about', element: About },
  { path: '/contact', element: Contact },
];

export const ACCESSIBLE_HEADER = 'Kimberly Perez';

export const NAV_LINKS = [
  { url: '/', title: 'Work', protected: false },
  { url: '/about', title: 'About', protected: false },
  { url: '/contact', title: 'Contact', protected: false },
];

export const LINKED_IN =
  'https://www.linkedin.com/in/kimberly-perez-19a4b1231/';
