import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeSwitcher from '@/components/theme-switcher';
import { FaArrowUp } from 'react-icons/fa';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import {
  //   AUTHOR_MICRODATA,
  //   BOOK_SERIES_MICRODATA,
  //   BOOK_VOLUME_01_MICRODATA,
  //   BOOK_VOLUME_02_MICRODATA,
  //   BOOK_VOLUME_03_MICRODATA,
  //   BOOK_VOLUME_04_MICRODATA,
  //   BOOK_VOLUME_05_MICRODATA,
  //   BOOK_VOLUME_06_MICRODATA,
  //   BOOK_VOLUME_07_MICRODATA,
  //   BOOK_VOLUME_08_MICRODATA,
  //   BOOK_VOLUME_09_MICRODATA,
  //   BOOK_VOLUME_10_MICRODATA,
  //   BOOK_VOLUME_11_MICRODATA,
  //   BOOK_VOLUME_12_MICRODATA,
  //   BOOKS_FEED_MICRODATA,
  //   FAQ_MICRODATA
  COLLECTION_KEYWORDS,
  IS_BROWSER,
} from '../constants';
import { siteName as site, title as siteTitle, description as siteDescription } from '../utils/metadata.json';
import ShellCode from '../client/components/shell-code';
import { propertiesOf } from '../utils/type.utils';

/**
 * Page metadata that pages can customize
 * WARNING: Whenever this changes, the for loop below processing custom meta MUST be adapted
 * Reference: https://github.com/leerob/leerob.io/blob/main/components/Container.js
 */
export interface SupportedMeta {
  siteName: string;
  author?: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const supportedMetaProperties = propertiesOf<SupportedMeta>();

interface LayoutProps {
  children: React.ReactNode;
  customMeta?: Partial<SupportedMeta>;
}

const Layout = ({ children, customMeta }: LayoutProps) => {
  const router = useRouter();

  // const siteMicrodata = {
  //   "@context": "https://schema.org",
  //   "@type": "WebSite",
  //   name: siteTitle,
  //   alternateName: "Dev Concepts collection official Website",
  //   description: siteDescription,
  //   publisher: AUTHOR_MICRODATA,
  //   url: 'https://dev-concepts.dev',
  // };

  /**
   * Default metadata
   */
  let meta: SupportedMeta = {
    siteName: site,
    author: 'Sébastien Dubois',
    title: siteTitle,
    description: siteDescription,
    image: 'https://dev-concepts.dev/static/images/banner-2560.jpg',
    type: 'website',
    canonicalUrl: `https://dev-concepts.dev${router.asPath}`,
    keywords: COLLECTION_KEYWORDS,
  };

  if (customMeta) {
    for (const customMetaKey of Object.keys(customMeta ? customMeta : [])) {
      let propertyHandled = false;

      if (supportedMetaProperties('title') === customMetaKey) {
        if (customMeta.title && customMeta.title.trim().length > 0) {
          meta.title = customMeta.title;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('date') === customMetaKey) {
        if (customMeta.date && customMeta.date.trim().length > 0) {
          meta.date = customMeta.date;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('description') === customMetaKey) {
        if (customMeta.description && customMeta.description.trim().length > 0) {
          meta.description = customMeta.description;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('type') === customMetaKey) {
        if (customMeta.type && customMeta.type.trim().length > 0) {
          meta.type = customMeta.type;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('image') === customMetaKey) {
        if (customMeta.image && customMeta.image.trim().length > 0) {
          meta.image = customMeta.image;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('keywords') === customMetaKey) {
        if (customMeta.keywords && customMeta.keywords.trim().length > 0) {
          meta.keywords = customMeta.keywords;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('canonicalUrl') === customMetaKey) {
        if (customMeta.canonicalUrl && customMeta.canonicalUrl.trim().length > 0) {
          meta.canonicalUrl = customMeta.canonicalUrl;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('siteName') === customMetaKey) {
        if (customMeta.siteName && customMeta.siteName.trim().length > 0) {
          meta.siteName = customMeta.siteName;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties('author') === customMetaKey) {
        if (customMeta.author && customMeta.author.trim().length > 0) {
          meta.author = customMeta.author;
        }
        propertyHandled = true;
      }

      if (!propertyHandled) {
        throw new Error(`Unhandled meta property: ${customMetaKey}`);
      }
    }
  }

  return (
    <>
      {/* FIXME Find solution for including scripts without causing differences between server-side and client-side rendering */}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(siteMicrodata)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_SERIES_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_01_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_02_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_03_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_04_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_05_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_06_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_07_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_08_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_09_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_10_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_11_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOK_VOLUME_12_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(BOOKS_FEED_MICRODATA)}*/}
      {/*</script>*/}
      {/*<script type="application/ld+json">*/}
      {/*  {JSON.stringify(FAQ_MICRODATA)}*/}
      {/*</script>*/}
      <div className="full-page flex flex-col flex-grow dark:prose-dark">
        <Head>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <meta name="robots" content="index,follow,max-image-preview:large" />
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
          <meta property="og:url" content={`https://dev-concepts.dev${router.asPath}`} />
          <link rel="canonical" href={meta.canonicalUrl} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content={meta.siteName} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta property="og:locale" content="en_US" />
          <meta property="image" content={meta.image} />
          <meta name="author" content={meta.author} />
          <meta property="article:author" content="https://dev-concepts.dev" />
          <meta name="twitter:creator" content="@dSebastien" />
          <meta name="twitter:site" content="@dSebastien" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && <meta property="article:published_time" content={meta.date} />}
          <meta name="theme-color" content="#263545" />
          {/* devConceptsBlue-700 */}
        </Head>
        <header className="main-header top-0 z-50 py-4 px-8 flex flex-col sm:flex-row justify-between bg-devConceptsBlue-500 text-devConceptsGray-100 border-b-2 border-devConceptsBlue-700 shadow-lg">
          <a href="#main" aria-label="Skip to the content" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <div className="flex flex-col sm:flex-row flex-wrap items-center object-center">
            <ThemeSwitcher />
            <div className="header-title">
              <span className="sm:ml-2 text-5xl font-semibold tracking-normal text-gray-100">
                <Link href="/">Dev Concepts</Link>
              </span>
            </div>
            <nav className="header-menu mt-4 lg:mt-0 sm:ml-10 flex flex-col sm:flex-row flex-wrap items-center object-center gap-2 sm:gap-4 font-semibold">
              <Link href="/" className="main-menu-link" aria-label="Go to the home page" title="Go to the home page">
                <div className="site-button text-base">Home</div>
              </Link>
              <Link
                href="/volumes"
                className="main-menu-link"
                aria-label="Go to the volume summaries page"
                title="Go to the volume summaries page"
              >
                <div className="site-button text-base">Collection contents</div>
              </Link>
              <Link
                href="/table-of-contents"
                className="main-menu-link"
                aria-label="Explore the table of contents"
                title="Explore the table of contents"
              >
                <div className="site-button text-base">Table of contents</div>
              </Link>
              <Link href="/updates" className="main-menu-link" aria-label="Go to the updates" title="Go to the updates">
                <div className="site-button text-base">Updates</div>
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex mt-2 md:mt-0 md:flex-row items-center object-center">
            <ShellCode>sudo teach me how to code</ShellCode>
          </div>
        </header>
        <ScrollToTop
          smooth={true}
          scrollingElement={IS_BROWSER ? document.getElementById('__next')! : undefined}
          className="scroll-to-top"
          icon={<FaArrowUp className="w-full h-full text-devConceptsWhite" />}
        />
        <main id="main" className="relative mt-12 px-4 sm:px-8 flex-grow">
          {children}
        </main>
        <footer className="mx-0 sm:mx-8 md:mx-24 lg:mx-32 xl:mx-48">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
