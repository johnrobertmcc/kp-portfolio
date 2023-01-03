import Work from 'components/pages/Work';
import About from 'components/pages/About';
import ArticleList from 'components/utils/ArticleList';
import * as propTechProps from 'constants/proptech';
import * as healthProps from 'constants/health';
import * as fashionProps from 'constants/fashion';
import * as photographyProps from 'constants/photography';

export const ROUTES = [
  { path: '/', element: Work },
  { path: '/work', element: Work },
  { path: '/about', element: About },
  { path: '/work/proptech', element: ArticleList, props: { ...propTechProps } },
  { path: '/work/health', element: ArticleList, props: { ...healthProps } },
  { path: '/work/fashion', element: ArticleList, props: { ...fashionProps } },
  {
    path: '/work/photography',
    element: ArticleList,
    props: { ...photographyProps },
  },
];

export const ACCESSIBLE_HEADER = 'Kimberly Perez';

export const NAV_LINKS = [
  { url: '/', title: 'Work', protected: false },
  { url: '/about', title: 'About', protected: false },
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
