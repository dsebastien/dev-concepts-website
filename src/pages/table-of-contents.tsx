import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faLink, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const AboutPage: React.FC<RouteComponentProps> = () => {
  const data: {
    site: {
      siteMetadata: {
        salesPageUrl: string;
      };
    };
  } = useStaticQuery(graphql`
    query TableOfContentsPageQuery {
      site {
        siteMetadata {
          salesPageUrl
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Software Development Concepts - Table of contents"
        description="Table of contents of the Software Development Concepts book"
      />

      <section className="flex flex-col">
        <h1>Table of contents</h1>

        {/* -------------------------------------- PART 1 -------------------------------------- */}
        <section id="software-craft" className="mt-4">
          <a href="#software-craft" className="anchor">
            <h2>
              Part 1: Software craft
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            This part explains the different <span className="font-bold italic">skills</span> that you’ll need to acquire and improve over
            the course of your career to become a software crafter. There are no secrets and no magic; to become one. It’s mostly a question
            of work, dedication, passion, and <span className="italic">fun</span>.
          </p>
          <br />
          <p>
            This part is much less about technology than about personality traits and psychology. Even if we all start with our own
            background, strengths and weaknesses, there are things to know, tips and tricks that will guide you on the path towards becoming
            a software crafter.
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>What is software development</li>
            <li>What is a software crafter</li>
            <li>Important skills and practical advice</li>
          </ol>
        </section>

        {/* -------------------------------------- PART 2 -------------------------------------- */}
        <section id="what-clients-need" className="mt-4">
          <a href="#what-clients-need" className="anchor">
            <h2>
              Part 2: What clients need
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            All software development endeavors have one thing in common: they aim to solve real-world{" "}
            <span className="font-bold">problems</span>.
          </p>
          <br />
          <p>
            This part focuses on how to understand what clients truly need. It covers concepts such as functional & non-functional
            requirements, techniques that you can use to understand business problems and end user goals. It also covers what specifications
            are and why they matter.
          </p>
          <br />
          <p>
            These ideas are important because,{" "}
            <span className="font-bold">
              no matter how good a software developer you are, it doesn’t matter at all if you end up building something that solves the
              wrong problems.
            </span>
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>
              Requirements
              <ol>
                <li>Functional</li>
                <li>Non-functional</li>
                <li>Discovery process</li>
              </ol>
            </li>
            <li>User Centered Design (UCD)</li>
            <li>
              User Experience Design (UX)
              <ol>
                <ul>
                  <li>What is it</li>
                  <li>Why you should care</li>
                  <li>Concepts</li>
                  <li>Tools</li>
                </ul>
              </ol>
            </li>
            <li>
              Specifications
              <ol>
                <ul>
                  <li>Business analysis</li>
                  <li>Business rules</li>
                  <li>Ubiquitous language</li>
                  <li>Functional/Technical analysis</li>
                </ul>
              </ol>
            </li>
            <li>Minimum Viable Product (MVP)</li>
          </ol>
        </section>

        {/* -------------------------------------- PART 3 -------------------------------------- */}
        <section id="architecture" className="mt-4">
          <a href="#architecture" className="anchor">
            <h2>
              Part 3: Architecture
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>Coming soon...</p>
          <br />
        </section>

        {/* ------------------ Links ------------ */}
        <hr className="my-6" />
        <div className="w-full flex flex-col sm:flex-row sm:space-between items-center">
          <div className="w-1/2 text-center">
            <h2>
              <Link to="/" className="link">
                <FontAwesomeIcon className="text-4xl mr-3" icon={faBackward} />
                <br />
                Go back
              </Link>
            </h2>
          </div>
          <div className="w-1/2 text-center">
            <h2>
              <OutboundLink
                href={data.site.siteMetadata.salesPageUrl}
                title="Pre-order the book now!"
                aria-label="Pre-order the book now!"
                rel="noopener"
                className="link"
              >
                <FontAwesomeIcon className="text-4xl mr-3" icon={faShoppingCart} />
                <br />
                Pre-order now!
              </OutboundLink>
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
