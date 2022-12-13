import Work from 'pages/Work';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Proptech from 'components/sections/Proptech';
import Fashion from 'components/sections/Fashion';
import Health from 'components/sections/Health';
import Photography from 'components/sections/Photography';

export const ROUTES = [
  { path: '/', element: Work },
  { path: '/work', element: Work },
  { path: '/about', element: About },
  { path: '/contact', element: Contact },
  { path: '/work/proptech', element: Proptech },
  { path: '/work/health', element: Health },
  { path: '/work/fashion', element: Fashion },
  { path: '/work/photography', element: Photography },
];

export const ACCESSIBLE_HEADER = 'Kimberly Perez';

export const NAV_LINKS = [
  { url: '/', title: 'Work', protected: false },
  { url: '/about', title: 'About', protected: false },
  { url: '/contact', title: 'Contact', protected: false },
];

export const LINKED_IN =
  'https://www.linkedin.com/in/kimberly-perez-19a4b1231/';

export const WORK_LINKS = [
  {
    url: '/work/proptech',
    title: 'Proptech',
    img: 'https://picsum.photos/id/0/367/267',
  },
  {
    url: '/work/health',
    title: 'Health & Lifestyle',
    img: 'https://picsum.photos/id/0/367/268',
  },
  {
    url: '/work/fashion',
    title: 'Fashion & Beauty',
    img: 'https://picsum.photos/id/0/367/269',
  },
  {
    url: '/work/photography',
    title: 'Photography',
    img: 'https://picsum.photos/id/0/367/260',
  },
];

export const INTRODUCTION =
  'Kimberly Perez is a Social Media Marketing Specialist based in NYC. She lives and breathes social media, following trends and creating content that speaks to the brand’s language —all with a clean and minimalist aesthetic.';

export const OUTREACH = "Let's work together.";
