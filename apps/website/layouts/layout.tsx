import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import ThemeSwitcher from '@/components/theme-switcher';
import {FaArrowUp} from 'react-icons/fa';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import {IS_BROWSER} from '../constants';
import * as metadata from "../utils/metadata.json";
import ShellCode from "../client/components/shell-code"

const StyledPage = tw.div``;

/**
 * Page metadata that pages can customize
 * Reference: https://github.com/leerob/leerob.io/blob/main/components/Container.js
 */
interface SupportedMeta {
  siteName: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date?: string;
  keywords?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  customMeta?: Partial<SupportedMeta>;
}

const Layout = ({ children, customMeta }: LayoutProps) => {
  const router = useRouter();

  /**
   * Default metadata
   */
  const meta: SupportedMeta = {
    siteName: metadata.title,
    title: metadata.title,
    description: metadata.description,
    image: 'https://dev-concepts.net/static/images/banner-2560.jpg',
    type: 'website',
    keywords:
      'software, programming, software development, coding, it security, it architecture, code quality, books',
    /**
     * Replace by custom values if any were defined
     */
    ...(customMeta ? customMeta : []),
  };

  return (
    <StyledPage className="full-page flex flex-col flex-grow dark:prose-dark">
      <Head>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta
          property="og:url"
          content={`https://dev-concepts.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://dev-concepts.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="author" content="Sébastien Dubois" />
        <meta property="article:author" content="https://dev-concepts.dev" />
        <meta name="twitter:creator" content="@dSebastien" />
        <meta name="twitter:site" content="@dSebastien" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <meta name="theme-color" content="#263545" /> {/* devConceptsBlue-700 */}
      </Head>
      <header className="main-header sticky top-0 z-50 py-4 px-8 flex flex-col sm:flex-row justify-between bg-devConceptsBlue-500 text-devConceptsGray-100 border-b-2 border-devConceptsBlue-700 shadow-lg">
        <a
          href="#main"
          aria-label="Skip to the content"
          className="sr-only focus:not-sr-only"
        >
          Skip to content
        </a>
        <div className="flex flex-col sm:flex-row flex-wrap items-center object-center">
          <ThemeSwitcher />
          <div className="header-title">
            <span className="sm:ml-2 text-5xl font-semibold tracking-normal text-gray-100">Dev Concepts</span>
          </div>
          <nav className="header-menu mt-4 lg:mt-0 sm:ml-10 flex flex-col sm:flex-row flex-wrap items-center object-center gap-2 sm:gap-4 font-semibold">
            <Link href="/">
              <a
                className="main-menu-link"
                aria-label="Go to the home page"
                title="Go to the home page"
              >
                <div className="site-button text-base">Home</div>
              </a>
            </Link>
            <Link href="/updates">
              <a
                className="main-menu-link"
                aria-label="Go to the updates"
                title="Go to the updates"
              >
                <div className="site-button text-base">Updates</div>
              </a>
            </Link>

            <Link href="/table-of-contents">
              <a
                className="main-menu-link"
                aria-label="Explore the table of contents"
                title="Explore the table of contents"
              >
                <div className="site-button text-base">Table of contents</div>
              </a>
            </Link>
            <Link href="/about">
              <a
                className="main-menu-link"
                aria-label="Go to the about page"
                title="Go to the about page"
              >
                <div className="site-button text-base">About</div>
              </a>
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex mt-2 md:mt-0 md:flex-row items-center object-center">
          <ShellCode>Teach me how to code</ShellCode>
        </div>
      </header>
      <ScrollToTop
        smooth={true}
        scrollingElement={
          IS_BROWSER ? document.getElementById('__next')! : undefined
        }
        className="scroll-to-top"
        icon={<FaArrowUp className="w-full h-full text-devConceptsWhite" />}
      />
      <main id="main" className="relative mt-12 px-4 sm:px-8 flex-grow">
        {children}
      </main>
      <footer className="mx-0 sm:mx-8 md:mx-24 lg:mx-32 xl:mx-48">
        <Footer />
      </footer>
    </StyledPage>
  );
};

export default Layout;