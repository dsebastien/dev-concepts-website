import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { DevConceptsCover } from "../components/dev-concepts-cover/dev-concepts-cover";
import styled from "styled-components";
import { DevConceptsNewsletterForm } from "../components/dev-concepts-newsletter-form";
import { Countdown } from "../components/countdown";
import {
  faQuoteLeft,
  faQuoteRight,
  faSitemap,
  faLayerGroup,
  faServer,
  faArrowRight,
  faShoppingCart,
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
        salesPageUrlTome01: string;
        salesPageUrlTome02: string;
      };
    };
  } = useStaticQuery(graphql`
    query IndexPageQuery {
      site {
        siteMetadata {
          salesPageUrl
          salesPageUrlTome01
          salesPageUrlTome02
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
              <h1 className="text-5xl tracking-wider leading-none">The perfect guide towards full stack development.</h1>
              <br />
              <span className="text-xl">
                Front-end, back-end, architecture, analysis/design, quality assurance, code quality, IT infrastructure, security, and much
                more. I've got you <i>covered</i>. Get a <strong>crystal clear view of modern software development in no time.</strong>
                <br />
                <br />
                <p>
                  <FontAwesomeIcon icon={faArrowRight} /> Check out the{" "}
                  <b>
                    <Link to="/table-of-contents" className="link text-xl">
                      full table of contents
                    </Link>
                  </b>
                </p>
              </span>
            </header>
            <Separator />
            <div className="mt-4">
              <p className="text-lg">Tome 2 will be available soon:</p>

              <Countdown date={new Date("2021-04-20T10:00:00")} />
              {/*<Countdown date={new Date("2021-12-20T18:00:00")} />*/}
              <div className="flex justify-center flex-wrap mt-4 gap-2">
                <a
                  href={data.site.siteMetadata.salesPageUrlTome01}
                  aria-label="Buy tome 1 now"
                  className="bg-devConceptsBlue-400 hover:bg-devConceptsBlue-500 hover:no-underline shadow-lg p-2 rounded-md"
                >
                  <FontAwesomeIcon className="text-xl mr-2" icon={faShoppingCart} />
                  Buy tome 1 now!
                </a>
                <a
                  href={data.site.siteMetadata.salesPageUrlTome02}
                  aria-label="Pre-order tome 2 now"
                  className="bg-devConceptsGreen-600 hover:bg-devConceptsGreen-700 hover:no-underline shadow-lg p-2 rounded-md"
                >
                  <FontAwesomeIcon className="text-xl mr-2" icon={faShoppingCart} />
                  Pre-order tome 2 now!
                </a>
              </div>
              <div className="mt-4 text-lg">
                The release date of the whole series is set to <strong>December 20 2021</strong>.
              </div>
              <div className="mt-4 flex justify-center flex-wrap">
                <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="text-xl" rel="noopener">
                  <span className="bg-devConceptsGray-700 hover:bg-devConceptsGray-800 hover:no-underline shadow-lg p-2 rounded-md px-4">
                    I want to pre-order the series!
                  </span>
                </OutboundLink>
              </div>
            </div>
          </IntroText>
          <div className="hidden lg:block">
            <DevConceptsNewsletterForm />
          </div>
        </div>
      </div>
      <div className="block lg:hidden w-4/5 sm:w-3/5 md:w-4/5">
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
          <div className="giant-icon">
            <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
              <FontAwesomeIcon className="text-devConceptsGreen-500" icon={faLayerGroup} />
            </OutboundLink>
          </div>
          <div className="">
            <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
              <h1 className="text-3xl">Full Stack</h1>
              <span className="text-xl">
                Full Stack developers are great to have on a team because they are able to understand and to be productive in both back-end
                and front-end development. This collection of e-books will tell you about <i>everything</i> that matters to become one.
              </span>
            </OutboundLink>
          </div>
        </div>
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center md:mx-5 justify-start border-devConceptsGray-200">
          <div className="giant-icon">
            <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
              <FontAwesomeIcon className="text-devConceptsPink-450" icon={faSitemap} />
            </OutboundLink>
          </div>
          <div className="">
            <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
              <h1 className="text-3xl">A clear map</h1>
              <span className="text-xl">
                The Dev Concepts series will help you to create a clear mental map of everything that gravitates around software
                development.
              </span>
            </OutboundLink>
          </div>
        </div>
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center justify-start border-devConceptsGray-200">
          <div className="giant-icon">
            <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
              <FontAwesomeIcon className="text-devConceptsOrange-550" icon={faServer} />
            </OutboundLink>
          </div>
          <div className="">
            <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
              <h1 className="text-3xl">DevSecOps</h1>
              <span className="text-xl">
                The best software developers understand that code is only part of the story. This series of books will teach you the bare
                minimum you need to know about IT security, IT infrastructure and IT operations.
              </span>
            </OutboundLink>
          </div>
        </div>
      </div>
      <Separator />
      <AuthorBio />
    </Layout>
  );
};

export default App;
