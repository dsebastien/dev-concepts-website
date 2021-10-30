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

export const COLLECTION_NAME = "Dev Concepts";
export const COLLECTION_DESCRIPTION = "A 12-volume collection of digital books to help junior software developers build an exceptional career";
export const COLLECTION_KEYWORDS = 'dev books, dev book, software development concepts, software concepts, programming, software development, coding, it security, it architecture, code quality, books';

/**
 * Products list
 */
export interface Product {
  id: string;
  name: string;
  shortName: string;
  coverDescription: string;
  thumbnailUrl: string;
  gumroadShortUrl: string;
  gumroadUrl: string;
  tocUrl: string;
  price: string;
  rawPrice: string;
  priceCurrency: string;
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
  coverDescription: "Dev Concepts Volume 1: Software craft. A book about software craftsmanship and productivity.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts01Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-01-SoftwareCraft",
  gumroadShortUrl: "https://gumroad.com/l/lnPaD",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#software-craft",
  tocAnchor: "software-craft",
  price: "€9.99",
  rawPrice: "9.99",
  priceCurrency: "EUR",
};

export const volume02: Product = {
  id: "02",
  name: "What clients need",
  shortName: "What clients need",
  coverDescription: "Dev Concepts Volume 2: What clients need. A book about user experience and jobs to be done.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts02Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-02-WhatClientsNeed",
  gumroadShortUrl: "https://gumroad.com/l/aQRvz",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#what-clients-need",
  tocAnchor: "what-clients-need",
  price: "€5.99",
  rawPrice: "5.99",
  priceCurrency: "EUR",
};

export const volume03: Product = {
  id: "03",
  name: "Architecture",
  shortName: "Architecture",
  coverDescription: "Dev Concepts Volume 3: Architecture. A book about IT and software architecture.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts03Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-03-Architecture",
  gumroadShortUrl: "https://gumroad.com/l/xLGAzK",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#architecture",
  tocAnchor: "architecture",
  price: "€19.99",
  rawPrice: "19.99",
  priceCurrency: "EUR",
};

export const volume04: Product = {
  id: "04",
  name: "Software design",
  shortName: "Software design",
  coverDescription: "Dev Concepts Volume 4: Software design. A book about software design, design principles and design patterns.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts04Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-04-SoftwareDesign",
  gumroadShortUrl: "https://gumroad.com/l/hxoEh",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#software-design",
  tocAnchor: "software-design",
  price: "€19.99",
  rawPrice: "19.99",
  priceCurrency: "EUR",
};

export const volume05: Product = {
  id: "05",
  name: "Computer architecture and OS basics",
  shortName: "Computer architecture and OS basics",
  coverDescription: "Dev Concepts Volume 5: Computer architecture and OS basics. A book about computer architecture and operating systems.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts05Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-05-ComputerArchitectureAndOSBasics",
  gumroadShortUrl: "https://gumroad.com/l/iMIzmo",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#computers-and-operating-systems",
  tocAnchor: "computers-and-operating-systems",
  price: "€14.99",
  rawPrice: "14.99",
  priceCurrency: "EUR",
};

export const volume06: Product = {
  id: "06",
  name: "Coding basics",
  shortName: "Coding basics",
  coverDescription: "Dev Concepts Volume 6: Coding basics. A book about the basics of programming and essential development concepts.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts06Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-06-CodingBasics",
  gumroadShortUrl: "https://gumroad.com/l/CJmZo",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#coding-basics",
  tocAnchor: "coding-basics",
  price: "€19.99",
  rawPrice: "19.99",
  priceCurrency: "EUR",
};

export const volume07: Product = {
  id: "07",
  name: "Best practices",
  shortName: "Best practices",
  coverDescription: "Dev Concepts Volume 7: Best practices. A book full of best practices to create rock-solid software.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts07Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-07-BestPractices",
  gumroadShortUrl: "https://gumroad.com/l/MNDDTl",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#best-practices",
  tocAnchor: "best-practices",
  price: "€19.99",
  rawPrice: "19.99",
  priceCurrency: "EUR",
};

export const volume08: Product = {
  id: "08",
  name: "Back-end development",
  shortName: "Back-end development",
  coverDescription: "Dev Concepts Volume 8: Back-end development. A book about back-end software development concepts.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts08Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-08-BackEndDev",
  gumroadShortUrl: "https://gumroad.com/l/aNDsn",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#back-end",
  tocAnchor: "back-end",
  price: "€19.99",
  rawPrice: "19.99",
  priceCurrency: "EUR",
};

export const volume09: Product = {
  id: "09",
  name: "Front-end development",
  shortName: "Front-end development",
  coverDescription: "Dev Concepts Volume 9: Front-end development. A book about front-end software development concepts.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts09Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-09-FrontEndDev",
  gumroadShortUrl: "https://gumroad.com/l/Kzzoi",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#front-end",
  tocAnchor: "front-end",
  price: "€19.99",
  rawPrice: "19.99",
  priceCurrency: "EUR",
};

export const volume10: Product = {
  id: "10",
  name: "IT Infrastructure",
  shortName: "IT Infrastructure",
  coverDescription: "Dev Concepts Volume 10: IT Infrastructure. A book about IT infrastructure, cloud computing and reliability.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts10Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-10-ITInfrastructure",
  gumroadShortUrl: "https://gumroad.com/l/gbTeQ",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#infrastructure",
  tocAnchor: "infrastructure",
  price: "€14.99",
  rawPrice: "14.99",
  priceCurrency: "EUR",
};

export const volume11: Product = {
  id: "11",
  name: "Security",
  shortName: "Security",
  coverDescription: "Dev Concepts Volume 11: Security. A book about IT security and secure coding.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts11Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-11-Security",
  gumroadShortUrl: "https://gumroad.com/l/ROims",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#security",
  tocAnchor: "security",
  price: "€19.99",
  rawPrice: "19.99",
  priceCurrency: "EUR",
};

export const volume12: Product = {
  id: "12",
  name: "Project management and development approaches",
  shortName: "PM and SW. approaches",
  coverDescription: "Dev Concepts Volume 12: Project management and development approaches. A book about project management, leadership, product management and DevSecOps.",
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConcepts12Cover3D%20-%20small%20-%20tinypng.png",
  gumroadUrl: "https://developassion.gumroad.com/l/DevConcepts-Volume-12-PMAndSWApproaches",
  gumroadShortUrl: "https://gumroad.com/l/yzRHE",
  tocUrl: "https://dev-concepts.dev/table-of-contents/#product-project-software",
  tocAnchor: "product-project-software",
  price: "€14.99",
  rawPrice: "14.99",
  priceCurrency: "EUR",
};

/**
 * Person microdata
 * Reference: https://schema.org/Person
 */
export const AUTHOR_MICRODATA = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Sébastien Dubois",
  familyName: "Dubois",
  givenName: "Sébastien",
  image: "https://dsebastien.net/static/images/sebastien.png",
  url: "https://twitter.com/dSebastien",
  sameAs: [
    "https://www.linkedin.com/in/sebastiend/",
    "https://github.com/dsebastien",
    "https://dsebastien.medium.com/",
    "https://dev.to/dsebastien",
    "https://www.youtube.com/channel/UCz0x-VJhvKwV-PK3E_i5G1w",
    "https://www.twitch.tv/dsebastien",
    "https://stackoverflow.com/users/226630/dsebastien",
    "https://www.facebook.com/trankill",
    "https://dsebastien.hashnode.dev/",
    "https://updates.dsebastien.net/",
    "https://www.reddit.com/user/lechtitseb/"
  ],
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "DeveloPassion",
    url: "https://developassion.be"
  }
};

/**
 * Reference: https://schema.org/BookSeries
 */
export const BOOK_SERIES_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "BookSeries",
  name: COLLECTION_NAME,
  genre: "software development",
  startDate: "2019-11-01",
  endDate: "2022-12-31",
  abstract: COLLECTION_DESCRIPTION,
  author: AUTHOR_MICRODATA,
  accountablePerson: AUTHOR_MICRODATA,
  audience: {
    "@type": "Audience",
    name: "Software developers"
  },
  copyrightHolder: AUTHOR_MICRODATA,
  copyrightYear: 2021,
  creativeWorkStatus: "Published",
  editor: AUTHOR_MICRODATA,
  hasPart: [
    {
      "@type": "CreativeWork",
      name: volume01.name,
      url: volume01.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume02.name,
      url: volume02.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume03.name,
      url: volume03.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume04.name,
      url: volume04.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume05.name,
      url: volume05.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume06.name,
      url: volume06.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume07.name,
      url: volume07.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume08.name,
      url: volume08.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume09.name,
      url: volume09.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume10.name,
      url: volume10.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume11.name,
      url: volume11.gumroadUrl
    },
    {
      "@type": "CreativeWork",
      name: volume12.name,
      url: volume12.gumroadUrl
    }
  ],
  inLanguage: "en",
  isAccessibleForFree: false,
  keywords: COLLECTION_KEYWORDS,
  publisher: AUTHOR_MICRODATA,
  thumbnailUrl: "https://dev-concepts.dev/static/images/devConcepts/DevConceptsHardCoverThin%20-%20small%20-%20tinypng.png",
  image: "https://dev-concepts.dev/static/images/devConcepts/DevConceptsHardCoverThin%20-%20small%20-%20tinypng.png",
  url: "https://dev-concepts.dev",
  description: COLLECTION_DESCRIPTION,
  identifier: "https://dev-concepts.dev"
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_01_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume01",
  author: AUTHOR_MICRODATA,
  name: volume01.name,
  url: volume01.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume01",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume01.thumbnailUrl,
      teaches: "Software development",
      abstract: volume01.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume01.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume01.rawPrice,
          priceCurrency: volume01.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume01.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_02_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume02",
  author: AUTHOR_MICRODATA,
  name: volume02.name,
  url: volume02.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume02",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume02.thumbnailUrl,
      teaches: "Software development",
      abstract: volume02.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume02.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume02.rawPrice,
          priceCurrency: volume02.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume02.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_03_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume03",
  author: AUTHOR_MICRODATA,
  name: volume03.name,
  url: volume03.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume03",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume03.thumbnailUrl,
      teaches: "Software development",
      abstract: volume03.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume03.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume03.rawPrice,
          priceCurrency: volume03.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume03.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_04_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume04",
  author: AUTHOR_MICRODATA,
  name: volume04.name,
  url: volume04.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume04",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume04.thumbnailUrl,
      teaches: "Software development",
      abstract: volume04.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume04.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume04.rawPrice,
          priceCurrency: volume04.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume04.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_05_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume05",
  author: AUTHOR_MICRODATA,
  name: volume05.name,
  url: volume05.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume05",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume05.thumbnailUrl,
      teaches: "Software development",
      abstract: volume05.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume05.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume05.rawPrice,
          priceCurrency: volume05.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume05.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_06_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume06",
  author: AUTHOR_MICRODATA,
  name: volume06.name,
  url: volume06.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume06",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume06.thumbnailUrl,
      teaches: "Software development",
      abstract: volume06.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume06.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume06.rawPrice,
          priceCurrency: volume06.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume06.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_07_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume07",
  author: AUTHOR_MICRODATA,
  name: volume07.name,
  url: volume07.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume07",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume07.thumbnailUrl,
      teaches: "Software development",
      abstract: volume07.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume07.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume07.rawPrice,
          priceCurrency: volume07.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume07.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_08_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume08",
  author: AUTHOR_MICRODATA,
  name: volume08.name,
  url: volume08.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume08",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume08.thumbnailUrl,
      teaches: "Software development",
      abstract: volume08.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume08.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume08.rawPrice,
          priceCurrency: volume08.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume08.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_09_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume09",
  author: AUTHOR_MICRODATA,
  name: volume09.name,
  url: volume09.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume09",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume09.thumbnailUrl,
      teaches: "Software development",
      abstract: volume09.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume09.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume09.rawPrice,
          priceCurrency: volume09.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume09.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_10_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume10",
  author: AUTHOR_MICRODATA,
  name: volume10.name,
  url: volume10.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume10",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume10.thumbnailUrl,
      teaches: "Software development",
      abstract: volume10.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume10.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume10.rawPrice,
          priceCurrency: volume10.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume10.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_11_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume11",
  author: AUTHOR_MICRODATA,
  name: volume11.name,
  url: volume11.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume11",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume11.thumbnailUrl,
      teaches: "Software development",
      abstract: volume11.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume11.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume11.rawPrice,
          priceCurrency: volume11.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume11.gumroadUrl
        }
      }
    }
  ]
};

/**
 * References:
 * https://schema.org/Book
 * https://developers.google.com/search/docs/advanced/structured-data/book#book-entity
 */
export const BOOK_VOLUME_12_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://dev-concepts.dev/id/volume12",
  author: AUTHOR_MICRODATA,
  name: volume12.name,
  url: volume12.tocUrl,
  isPartOf: {
    "@type": "CreativeWork",
    name: COLLECTION_NAME,
    url: "https://dev-concepts.dev"
  },
  workExample: [
    {
      "@type": "Book",
      "@id": "https://dev-concepts.dev/id/volume12",
      inLanguage: "en",
      datePublished: "2021-01-01",
      bookEdition: "1st Edition",
      bookFormat: "https://schema.org/EBook",
      publisher: AUTHOR_MICRODATA,
      thumbnailUrl: volume12.thumbnailUrl,
      teaches: "Software development",
      abstract: volume12.coverDescription,
      keywords: COLLECTION_KEYWORDS,
      creativeWorkStatus: "Published",
      isbn: "N/A",
      potentialAction: {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: volume12.gumroadUrl,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/AndroidPlatform",
            "https://schema.org/IOSPlatform"
          ]
        },
        expectsAcceptanceOf: {
          "@type": "Offer",
          category: "purchase",
          price: volume12.rawPrice,
          priceCurrency: volume12.priceCurrency,
          availabilityStarts: "2020-01-01T11:0:00-04:00",
          availabilityEnds: "2050-06-30T23:59:00-04:00",
          url: volume12.gumroadUrl
        }
      }
    }
  ]
};

export const BOOKS_FEED_MICRODATA = {
  "@context": "https://schema.org",
  "@type": "DataFeed",
  dataFeedElement: [
    BOOK_VOLUME_01_MICRODATA,
    BOOK_VOLUME_02_MICRODATA,
    BOOK_VOLUME_03_MICRODATA,
    BOOK_VOLUME_04_MICRODATA,
    BOOK_VOLUME_05_MICRODATA,
    BOOK_VOLUME_06_MICRODATA,
    BOOK_VOLUME_07_MICRODATA,
    BOOK_VOLUME_08_MICRODATA,
    BOOK_VOLUME_09_MICRODATA,
    BOOK_VOLUME_10_MICRODATA,
    BOOK_VOLUME_11_MICRODATA,
    BOOK_VOLUME_12_MICRODATA
  ],
  dateModified: new Date().toISOString()
};
