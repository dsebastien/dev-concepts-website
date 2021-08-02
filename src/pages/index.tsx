import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { DevConceptsCover } from "../components/dev-concepts-cover/dev-concepts-cover";
import styled from "styled-components";
import { DevConceptsNewsletterForm } from "../components/dev-concepts-newsletter-form";
import {
  faQuoteLeft,
  faQuoteRight,
  faSitemap,
  faLayerGroup,
  faServer,
  faArrowRight,
  faShoppingCart,
  faCheck,
  faNewspaper,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Separator } from "../components/separator";
import { AuthorBio } from "../components/author-bio";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const IntroText = styled.div.attrs({
  className: "",
})``;

const App = () => {
  const data: {
    site: {
      siteMetadata: {
        salesPageUrl: string;
        salesPageUrlVolume01: string;
        salesPageUrlVolume02: string;
        salesPageUrlVolume03: string;
      };
    };
  } = useStaticQuery(graphql`
    query IndexPageQuery {
      site {
        siteMetadata {
          salesPageUrl
          salesPageUrlVolume01
          salesPageUrlVolume02
          salesPageUrlVolume03
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO />
      <div className="w-full flex flex-col sm:flex-row">
        <div className="flex w-full sm:w-2/4">
          <DevConceptsCover />
        </div>
        <div className="w-full h-full sm:w-2/4 mt-8 sm:mt-0">
          <IntroText>
            <header>
              {/*<h1 className="text-5xl tracking-wider leading-tight italic">Your guide towards full stack development.</h1>*/}
              <div className="mt-6">
                <h1 className="text-5xl tracking-wider leading-tight italic">
                  A{" "}
                  <Link to="/table-of-contents" className="link">
                    <b>12 volumes</b> e-book collection
                  </Link>{" "}
                  explaining every concept of Software Development:
                </h1>
                <ul className="mt-6 text-2xl xxl:text-3xl">
                  <li className="flex flex-row items-center">
                    <span className="text-3xl xxl:text-4xl !important">
                      <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                    </span>
                    Full Stack: Back-end, Front-end & APIs
                  </li>
                  <li className="flex flex-row items-center">
                    <span className="text-3xl xxl:text-4xl !important">
                      <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                    </span>
                    Coding basics, code quality & maintenance
                  </li>
                  <li className="flex flex-row items-center">
                    <span className="text-3xl xxl:text-4xl !important">
                      <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                    </span>
                    Security, Operating Systems, Infrastructure
                  </li>
                  <li className="flex flex-row items-center">
                    <span className="text-3xl xxl:text-4xl !important">
                      <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                    </span>
                    Analysis, Architecture, Design
                  </li>
                  <li className="flex flex-row items-center">
                    <span className="text-3xl xxl:text-4xl !important">
                      <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                    </span>
                    Project/Product/Team management
                  </li>
                </ul>
                <p className="mt-6">
                  <span className="text-3xl xxl:text-4xl !important">
                    <FontAwesomeIcon className="mr-2" icon={faArrowRight} />
                  </span>
                  <span className="text-2xl font-semibold">
                    <Link to="/table-of-contents" className="link">
                      Check out the full table of contents
                    </Link>
                  </span>
                </p>
              </div>
              <div className="mt-6 text-xl">
                The release date of the whole series is set to <strong>December 20 2021</strong>.
              </div>
            </header>
            <Separator />
            <div className="mt-6">
              <span className="text-3xl !important">
                <FontAwesomeIcon className="mr-2" icon={faNewspaper} />
              </span>
              <span className="text-3xl">Volume 3 is now available for pre-order!</span>

              {/*<Countdown date={new Date("2021-04-27T10:00:00")} />*/}
              {/*<Countdown date={new Date("2021-12-20T18:00:00")} />*/}

              <div className="flex justify-center flex-wrap mt-6 gap-3">
                <OutboundLink
                  href={data.site.siteMetadata.salesPageUrlVolume01}
                  className="bg-devConceptsBlue-500 hover:bg-devConceptsBlue-400 homepage-order-link"
                  rel="noopener"
                  aria-label="Buy volume 1 now"
                >
                  <FontAwesomeIcon className="text-2xl mr-2" icon={faShoppingCart} />
                  <span className="text-2xl">Buy volume 1 now!</span>
                </OutboundLink>
                <OutboundLink
                  href={data.site.siteMetadata.salesPageUrlVolume02}
                  className="bg-devConceptsGreen-700 hover:bg-devConceptsGreen-600 homepage-order-link"
                  rel="noopener"
                  aria-label="Buy volume 2 now"
                >
                  <FontAwesomeIcon className="text-2xl mr-2" icon={faShoppingCart} />
                  <span className="text-2xl">Buy volume 2 now!</span>
                </OutboundLink>
                <OutboundLink
                  href={data.site.siteMetadata.salesPageUrlVolume03}
                  className="bg-devConceptsTeal-800 hover:bg-devConceptsTeal-700 homepage-order-link"
                  rel="noopener"
                  aria-label="Pre-order volume 3 now"
                >
                  <FontAwesomeIcon className="text-2xl mr-2" icon={faShoppingCart} />
                  <span className="text-2xl">Pre-order volume 3 now!</span>
                </OutboundLink>
                <OutboundLink
                  href={data.site.siteMetadata.salesPageUrl}
                  className="bg-devConceptsGray-800 hover:bg-devConceptsGray-700 homepage-order-link"
                  rel="noopener"
                >
                  <FontAwesomeIcon className="text-2xl mr-2" icon={faShoppingBasket} />
                  <span className="text-2xl">Pre-order a bundle!</span>
                </OutboundLink>
              </div>
            </div>
          </IntroText>
          <div className="hidden xxl:block mt-10 w-full">
            <Separator />
            <div className="flex flex-col items-center">
              <DevConceptsNewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <Separator className="block xxl:hidden" />
      <div className="w-full flex flex-col items-center my-8 block xxl:hidden">
        <DevConceptsNewsletterForm />
      </div>
      <Separator />
      <h1 className="my-8 sm:my-12 lg:my-16 sm:mx-8 lg:mx-32 xl:mx-48 xxl:mx-64">
        <FontAwesomeIcon className="text-2xl" icon={faQuoteLeft} />
        <span className="px-3">Learn all the software development concepts, practices and attention points in no time.</span>
        <FontAwesomeIcon className="text-2xl" icon={faQuoteRight} />
      </h1>
      <Separator />
      <div className="w-full min-w-full flex flex-col md:flex-row justify-start md:justify-between">
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center justify-start border-devConceptsGray-200">
          <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener" aria-label="Pre-order now" tabIndex="-1">
          <div className="giant-icon">
              <FontAwesomeIcon className="text-devConceptsGreen-500" icon={faLayerGroup} />
          </div>
          <div className="">
              <h1 className="text-3xl">Full Stack</h1>
            <span class="text-xl">
                Full Stack developers are great to have on a team because they are able to understand and to be productive in both back-end
                and front-end development. This collection of e-books will tell you about <i>everything</i> that matters to become one.
              </span>
          </div>
          </OutboundLink>
        </div>
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center md:mx-5 justify-start border-devConceptsGray-200">
          <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener" aria-label="Pre-order now" tabIndex="-1">
          <div className="giant-icon">
              <FontAwesomeIcon className="text-devConceptsPink-450" icon={faSitemap} />
          </div>
          <div className="">
              <h1 className="text-3xl">A clear map</h1>
              <span className="text-xl">
                The Dev Concepts series will help you to create a clear mental map of everything that gravitates around software
                development.
              </span>
          </div>
          </OutboundLink>
        </div>
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center justify-start border-devConceptsGray-200">
          <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener" aria-label="Pre-order now" tabIndex="-1">
          <div className="giant-icon">
              <FontAwesomeIcon className="text-devConceptsOrange-550" icon={faServer} />
          </div>
          <div className="">
              <h1 className="text-3xl">DevSecOps</h1>
              <span className="text-xl">
                The best software developers understand that code is only part of the story. This series of books will teach you the bare
                minimum you need to know about IT security, IT infrastructure and IT operations.
              </span>
          </div>
          </OutboundLink>
        </div>
      </div>
      <Separator />
      <AuthorBio />
    </Layout>
  );
};

export default App;
