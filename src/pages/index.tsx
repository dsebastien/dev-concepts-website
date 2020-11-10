import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { DevConceptsCover } from "../components/dev-concepts-cover/dev-concepts-cover";
import styled from "styled-components";
import { DevConceptsNewsletterForm } from "../components/dev-concepts-newsletter-form";
import { Countdown } from "../components/countdown";
import { faQuoteLeft, faQuoteRight, faSitemap, faLayerGroup, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import { Separator } from "../components/separator";
import {AuthorBio} from "../components/author-bio";

const IntroText = styled.div.attrs({
  className: "",
})``;

const App = () => {
  const data: {
    site: {
      siteMetadata: {
        salesPageUrl: string;
      };
    };
    authorPicture: {
      childImageSharp: {
        fluid: any;
      };
    };
  } = useStaticQuery(graphql`
    query IndexPageQuery {
      site {
        siteMetadata {
          salesPageUrl
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
                Front-end, back-end, architecture, analysis, design, quality assurance, code quality, IT infrastructure, IT security. We've
                got you <i>covered</i>. Get a <strong>crystal clear view of modern software development in no time.</strong>
              </span>
            </header>
            <div className="mt-4">
              <Countdown date={new Date(2021, 2, 15, 6, 30, 0, 0)} />
              <br />
              <p>
                The release date is set to <strong>March 31 2021</strong>, but you can{" "}
                <a href={data.site.siteMetadata.salesPageUrl} className="link uppercase text-xl">
                  pre-order it now.
                </a>
              </p>
            </div>
          </IntroText>
          <DevConceptsNewsletterForm />
        </div>
      </div>
      <Separator />
      <h1 className="my-8 sm:my-12 lg:my-16 sm:mx-8 lg:mx-32 xl:mx-48 xxl:mx-64">
        <FontAwesomeIcon className="text-2xl" icon={faQuoteLeft} />
        <span className="px-3">
          Learn all the software development concepts, practices and attention points in no time. All in one book.
        </span>
        <FontAwesomeIcon className="text-2xl" icon={faQuoteRight} />
      </h1>
      <Separator />
      <div className="w-full min-w-full flex flex-col md:flex-row justify-start md:justify-between">
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center justify-start border-devConceptsGray-200">
          <div className="giant-icon">
            <a href={data.site.siteMetadata.salesPageUrl} className="">
              <FontAwesomeIcon className="text-devConceptsGreen-500" icon={faLayerGroup} />
            </a>
          </div>
          <div className="">
            <a href={data.site.siteMetadata.salesPageUrl} className="">
              <h1 className="text-3xl">Full Stack</h1>
              <span className="text-xl">
                Full Stack developers are great to have on a team because they are able to understand and to be productive in both back-end
                and front-end development. This book will tell you about everything that matters to become one.
              </span>
            </a>
          </div>
        </div>
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center md:mx-5 justify-start border-devConceptsGray-200">
          <div className="giant-icon">
            <a href={data.site.siteMetadata.salesPageUrl} className="">
              <FontAwesomeIcon className="text-devConceptsPink-450" icon={faSitemap} />
            </a>
          </div>
          <div className="">
            <a href={data.site.siteMetadata.salesPageUrl} className="">
              <h1 className="text-3xl">A clear map</h1>
              <span className="text-xl">
                This book will help you to create a clear mental map of everything that gravitates around software development.
              </span>
            </a>
          </div>
        </div>
        <div className="w-full p-2 my-2 md:my-0 flex flex-col object-center text-center justify-start border-devConceptsGray-200">
          <div className="giant-icon">
            <a href={data.site.siteMetadata.salesPageUrl} className="">
              <FontAwesomeIcon className="text-devConceptsOrange-550" icon={faServer} />
            </a>
          </div>
          <div className="">
            <a href={data.site.siteMetadata.salesPageUrl} className="">
              <h1 className="text-3xl">DevSecOps</h1>
              <span className="text-xl">
                The best software developers understand that code is only part of the story. This book will teach you the bare minimum you
                need to know about IT security, IT infrastructure and IT operations.
              </span>
            </a>
          </div>
        </div>
      </div>
      <Separator />
      <AuthorBio />
    </Layout>
  );
};

export default App;
