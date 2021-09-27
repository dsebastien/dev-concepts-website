/**
 * Utils
 */
export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';
export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_TEST = process.env.NODE_ENV === 'test';

/**
 * Meta
 */
export const BUILD_TIME = new Date().toString();
export const BUILD_TIMESTAMP = Date.now();

/**
 * Newsletter errors
 */
export const NEWSLETTER_MUST_VALIDATE_EMAIL = 'Please check your inbox to confirm your subscription!';

/**
 * Products list
 */
export interface Product {
  id: string;
  name: string;
  shortName: string;
  gumroadShortUrl: string;
  gumroadUrl: string;
  tocUrl: string;
  price: string;
  tocAnchor: string;
  // shortDescription: string;
  // longDescription: string;
  // keyFeature1: string;
  // keyFeature2: string;
  // keyFeature3: string;
}

export const volume01: Product = {
  id: "01",
  name: "Software craft",
  shortName: "Software craft",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-01-SoftwareCraft",
  gumroadShortUrl: "https://gumroad.com/l/lnPaD",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#software-craft",
  tocAnchor: "software-craft",
  price: "€9.99",
};

export const volume02: Product = {
  id: "02",
  name: "What clients need",
  shortName: "What clients need",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-02-WhatClientsNeed",
  gumroadShortUrl: "https://gumroad.com/l/aQRvz",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#what-clients-need",
  tocAnchor: "what-clients-need",
  price: "€5.99",
};

export const volume03: Product = {
  id: "03",
  name: "Architecture",
  shortName: "Architecture",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-03-Architecture",
  gumroadShortUrl: "https://gumroad.com/l/xLGAzK",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#architecture",
  tocAnchor: "architecture",
  price: "€19.99",
};

export const volume04: Product = {
  id: "04",
  name: "Software design",
  shortName: "Software design",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-04-SoftwareDesign",
  gumroadShortUrl: "https://gumroad.com/l/hxoEh",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#software-design",
  tocAnchor: "software-design",
  price: "€19.99",
};

export const volume05: Product = {
  id: "05",
  name: "Computer architecture and OS basics",
  shortName: "Computer architecture and OS basics",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-05-ComputerArchitectureAndOSBasics",
  gumroadShortUrl: "https://gumroad.com/l/iMIzmo",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#computers-and-operating-systems",
  tocAnchor: "computers-and-operating-systems",
  price: "€14.99",
};

export const volume06: Product = {
  id: "06",
  name: "Coding basics",
  shortName: "Coding basics",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-06-CodingBasics",
  gumroadShortUrl: "https://gumroad.com/l/CJmZo",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#coding-basics",
  tocAnchor: "coding-basics",
  price: "€19.99",
};

export const volume07: Product = {
  id: "07",
  name: "Best practices",
  shortName: "Best practices",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-07-BestPractices",
  gumroadShortUrl: "https://gumroad.com/l/MNDDTl",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#best-practices",
  tocAnchor: "best-practices",
  price: "€19.99",
};

export const volume08: Product = {
  id: "08",
  name: "Back-end development",
  shortName: "Back-end development",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-08-BackEndDev",
  gumroadShortUrl: "https://gumroad.com/l/aNDsn",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#back-end",
  tocAnchor: "back-end",
  price: "€19.99",
};

export const volume09: Product = {
  id: "09",
  name: "Front-end development",
  shortName: "Front-end development",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-09-FrontEndDev",
  gumroadShortUrl: "https://gumroad.com/l/Kzzoi",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#front-end",
  tocAnchor: "front-end",
  price: "€19.99",
};

export const volume10: Product = {
  id: "10",
  name: "IT Infrastructure",
  shortName: "IT Infrastructure",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-10-ITInfrastructure",
  gumroadShortUrl: "https://gumroad.com/l/gbTeQ",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#infrastructure",
  tocAnchor: "infrastructure",
  price: "€14.99",
};

export const volume11: Product = {
  id: "11",
  name: "Security",
  shortName: "Security",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-11-Security",
  gumroadShortUrl: "https://gumroad.com/l/ROims",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#security",
  tocAnchor: "security",
  price: "€19.99",
};

export const volume12: Product = {
  id: "12",
  name: "Project management and development approaches",
  shortName: "PM and SW. approaches",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-12-PMAndSWApproachesSecurity",
  gumroadShortUrl: "https://gumroad.com/l/yzRHE",
  tocUrl: "https://www.dev-concepts.dev/table-of-contents/#product-project-software",
  tocAnchor: "product-project-software",
  price: "€14.99",
};
