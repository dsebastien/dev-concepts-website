import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faGem,
  faGopuram,
  faInfinity,
  faLayerGroup,
  faLink,
  faLock,
  faMagic,
  faNetworkWired,
  faSeedling,
  faServer,
  faShoppingCart,
  faSitemap,
  faSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import { graphql, Link, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from "gatsby-image";

const AboutPage: React.FC<RouteComponentProps> = () => {
  const data = useStaticQuery(graphql`
    query TableOfContentsPageQuery {
      site {
        siteMetadata {
          salesPageUrl
          salesPageUrlTome01
        }
      }
      tome01CoverImage: file(relativePath: { eq: "DevConceptsTome01SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome02CoverImage: file(relativePath: { eq: "DevConceptsTome02SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome03CoverImage: file(relativePath: { eq: "DevConceptsTome03SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome04CoverImage: file(relativePath: { eq: "DevConceptsTome04SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome05CoverImage: file(relativePath: { eq: "DevConceptsTome05SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome06CoverImage: file(relativePath: { eq: "DevConceptsTome06SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome07CoverImage: file(relativePath: { eq: "DevConceptsTome07SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome08CoverImage: file(relativePath: { eq: "DevConceptsTome08SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome09CoverImage: file(relativePath: { eq: "DevConceptsTome09SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome10CoverImage: file(relativePath: { eq: "DevConceptsTome10SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome11CoverImage: file(relativePath: { eq: "DevConceptsTome11SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tome12CoverImage: file(relativePath: { eq: "DevConceptsTome12SoftwareCraftCover3D.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const tome01CoverImage = data.tome01CoverImage.childImageSharp.fluid;
  const tome02CoverImage = data.tome02CoverImage.childImageSharp.fluid;
  const tome03CoverImage = data.tome03CoverImage.childImageSharp.fluid;
  const tome04CoverImage = data.tome04CoverImage.childImageSharp.fluid;
  const tome05CoverImage = data.tome05CoverImage.childImageSharp.fluid;
  const tome06CoverImage = data.tome06CoverImage.childImageSharp.fluid;
  const tome07CoverImage = data.tome07CoverImage.childImageSharp.fluid;
  const tome08CoverImage = data.tome08CoverImage.childImageSharp.fluid;
  const tome09CoverImage = data.tome09CoverImage.childImageSharp.fluid;
  const tome10CoverImage = data.tome10CoverImage.childImageSharp.fluid;
  const tome11CoverImage = data.tome11CoverImage.childImageSharp.fluid;
  const tome12CoverImage = data.tome12CoverImage.childImageSharp.fluid;
  const tome01SalesPageUrl = data.site.siteMetadata.salesPageUrlTome01;

  return (
    <Layout>
      <SEO
        title="Software Development Concepts - Table of contents (draft)"
        description="Table of contents of the Software Development Concepts series"
      />

      <section className="flex flex-col">
        <header className="md:px-2 lg:px-16">
          <h1 id="top">Table of contents (draft)</h1>
          <span>
            This is the outline of the whole Dev Concepts series of e-books. The table of contents will probably evolve during the project.
            Note that this version is intentionally kept "short". The actual outline is much longer; DM me on Twitter if you're curious ;-)
          </span>
        </header>
        <div className="mt-4 flex flex-col md:flex-row-reverse md:h-full md:min-h-full w-full">
          <div className="md:h-full md:min-h-full md:sticky md:top-0 md:w-5/12 lg:w-4/12">
            <div>
              <h2 className="w-full text-center text-xl lg:text-3xl">Dev Concepts Tomes</h2>
              <section className="grid object-center grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
                <AnchorLink
                  to="/table-of-contents/#software-craft"
                  onAnchorLinkClick={() =>
                    history.pushState(null, "Software Development Concepts - Table of contents (draft) - Software craft", "#software-craft")
                  }
                  aria-label="Tome 1: Software craft"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsBlue-400 hover:bg-devConceptsBlue-500 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">01</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faInfinity} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Software craft</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#what-clients-need"
                  onAnchorLinkClick={() =>
                    history.pushState(
                      null,
                      "Software Development Concepts - Table of contents (draft) - What clients need",
                      "#what-clients-need",
                    )
                  }
                  aria-label="Tome 2: What clients need"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsGreen-600 hover:bg-devConceptsGreen-700 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">02</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faSmileWink} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">What clients need</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#architecture"
                  onAnchorLinkClick={() =>
                    history.pushState(null, "Software Development Concepts - Table of contents (draft) - Architecture", "#architecture")
                  }
                  aria-label="Tome 3: Architecture"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsTeal-700 hover:bg-devConceptsTeal-800 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">03</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faGopuram} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Architecture</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#software-design"
                  onAnchorLinkClick={() =>
                    history.pushState(
                      null,
                      "Software Development Concepts - Table of contents (draft) - Software design",
                      "#software-design",
                    )
                  }
                  aria-label="Tome 4: Software design"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsPink-500 hover:bg-devConceptsPink-600 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">04</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faGem} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Software design</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#computers-and-operating-systems"
                  onAnchorLinkClick={() =>
                    history.pushState(
                      null,
                      "Software Development Concepts - Table of contents (draft) - Computer architecture and Operating systems basics",
                      "#computers-and-operating-systems",
                    )
                  }
                  aria-label="Tome 5: Computer architecture and Operating systems basics"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsOrange-500 hover:bg-devConceptsOrange-600 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">05</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faServer} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Computer architecture and OS basics</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#coding-basics"
                  onAnchorLinkClick={() =>
                    history.pushState(null, "Software Development Concepts - Table of contents (draft) - Coding basics", "#coding-basics")
                  }
                  aria-label="Tome 6: Coding basics"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsIndigo-700 hover:bg-devConceptsIndigo-800 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">06</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faSeedling} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Coding basics</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#general-concerns"
                  onAnchorLinkClick={() =>
                    history.pushState(
                      null,
                      "Software Development Concepts - Table of contents (draft) - General concerns",
                      "#general-concerns",
                    )
                  }
                  aria-label="Tome 7: General concerns"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsCerise-600 hover:bg-devConceptsCerise-700 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">07</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faSitemap} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">General concerns</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#back-end"
                  onAnchorLinkClick={() =>
                    history.pushState(null, "Software Development Concepts - Table of contents (draft) - Back-end", "#back-end")
                  }
                  aria-label="Tome 8: Back-end development"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsOrange-800 hover:bg-devConceptsOrange-900 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">08</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faLayerGroup} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Back-end development</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#front-end"
                  onAnchorLinkClick={() =>
                    history.pushState(null, "Software Development Concepts - Table of contents (draft) - Front-end", "#front-end")
                  }
                  aria-label="Tome 9: Front-end development"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsTeal-700 hover:bg-devConceptsTeal-800 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">09</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faMagic} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Front-end development</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#infrastructure"
                  onAnchorLinkClick={() =>
                    history.pushState(null, "Software Development Concepts - Table of contents (draft) - Infrastructure", "#infrastructure")
                  }
                  aria-label="Tome 10: IT Infrastructure"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsPurple-600 hover:bg-devConceptsPurple-700 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">10</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faNetworkWired} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">IT Infrastructure</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#security"
                  onAnchorLinkClick={() =>
                    history.pushState(null, "Software Development Concepts - Table of contents (draft) - Security", "#security")
                  }
                  aria-label="Tome 11: Security"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsAmber-500 hover:bg-devConceptsAmber-600 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">11</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faLock} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">Security</div>
                    </div>
                  </div>
                </AnchorLink>

                <AnchorLink
                  to="/table-of-contents/#product-project-software"
                  onAnchorLinkClick={() =>
                    history.pushState(
                      null,
                      "Software Development Concepts - Table of contents (draft) - Product/Project management and Software development approaches",
                      "#product-project-software",
                    )
                  }
                  aria-label="Tome 12: Product/Project management and Software development approaches"
                  className="no-underline"
                >
                  <div className="h-full rounded bg-devConceptsGray-700 hover:bg-devConceptsGray-800 hover:no-underline shadow-lg flex flex-row object-center py-2 px-2">
                    <div className="text-xl flex items-center">12</div>
                    <div className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FontAwesomeIcon className="" icon={faLock} />
                      </span>
                      <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">PM & Dev. approaches</div>
                    </div>
                  </div>
                </AnchorLink>
              </section>
            </div>
            <div className="hidden md:block">
              {/* ------------------ Links in the aside ------------ */}
              <hr className="my-6" />
              <div className="w-full flex flex-col lg:flex-row sm:space-between items-center select-none">
                <div className="lg:w-1/2 text-center">
                  <h2>
                    <Link to="/" className="link">
                      <FontAwesomeIcon className="text-4xl mr-3" icon={faBackward} />
                      <br />
                      Go back
                    </Link>
                  </h2>
                </div>
                <div className="lg:w-1/2 text-center">
                  <h2>
                    <OutboundLink
                      href={data.site.siteMetadata.salesPageUrl}
                      title="Pre-order the collection now!"
                      aria-label="Pre-order the collection now!"
                      rel="noopener"
                      className="link hover:text-devConceptsGreen-500"
                    >
                      <FontAwesomeIcon className="text-4xl mr-3" icon={faShoppingCart} />
                      <br />
                      Pre-order now!
                    </OutboundLink>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div id="main-toc" className="mt-4 md:mt-0 md:px-4 lg:px-16 md:w-7/12 lg:w-8/12">
            {/* -------------------------------------- TOME 1 -------------------------------------- */}
            <section id="software-craft" className="">
              <a href="#software-craft" className="anchor">
                <h2>
                  Tome 1: Software craft (<span className="font-semibold">completed</span>)
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <div className="sm:flex sm:justify-between">
                <div className="items-center flex">
                  Page count:&nbsp;<span className="font-bold">100</span>
                </div>
                <div className="mt-4 flex justify-center sm:mt-0">
                  <a
                    href="https://gum.co/DevConcepts-Part-01-SoftwareCraft"
                    aria-label="Buy tome 1 now"
                    className="bg-devConceptsBlue-400 hover:bg-devConceptsBlue-500 hover:no-underline shadow-lg p-2 rounded-md"
                  >
                    <FontAwesomeIcon className="text-xl mr-2" icon={faShoppingCart} />
                    Buy tome 1 now!
                  </a>
                </div>
              </div>
              <div className="opacity-75 hover:opacity-100">
                <OutboundLink
                  href={tome01SalesPageUrl}
                  rel="noopener"
                  aria-label="Buy tome 1 now!"
                  title="Buy tome 1 now!"
                  className="pointer"
                >
                  <Img loading="eager" fluid={tome01CoverImage} alt="Tome 1: Software Craft" className="hover:opacity-10" />
                </OutboundLink>
              </div>
              <br />
              <p>
                This tome explains the different <span className="font-bold italic">skills</span> that you’ll need to acquire and improve
                over the course of your career to become a software crafter. There are no secrets and no magic to become one. It’s mostly a
                question of work, dedication, passion, and <span className="italic">fun</span>.
              </p>
              <br />
              <p>
                This tome is much less about technology than about personality traits and psychology. Even if we all start with our own
                background, strengths and weaknesses, there are things to know, tips and tricks that will guide you on the path towards
                becoming a software crafter.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>Introduction</li>
                <li>What is software development</li>
                <li>What is software engineering</li>
                <li>What is a software developer/engineer/coder/programmer</li>
                <li>Evolution</li>
                <li>What is a software crafter</li>
                <li>Quality vs user satisfaction</li>
                <li>
                  Important skills and practical advice
                  <ol>
                    <li>Enjoy solving problems</li>
                    <li>Improve your analytical skills</li>
                    <li>Be creative and open-minded</li>
                    <li>Be organized</li>
                    <li>Always Be Curious (ABC)</li>
                    <li>Improve continuously</li>
                    <li>Build habits</li>
                    <li>Learn your craft</li>
                    <li>Understand client needs</li>
                    <li>Go above and beyond</li>
                    <li>Learn to deal with hard problems</li>
                    <li>Learn to deal with failure</li>
                    <li>Focus on quality</li>
                    <li>Focus on security</li>
                    <li>Be reliable</li>
                    <li>Be pragmatic</li>
                    <li>Be super productive</li>
                    <li>Work in a structured manner</li>
                    <li>Have fun</li>
                    <li>Be a good communicator</li>
                    <li>Be a true team member</li>
                    <li>Be an Innovator and Influence others</li>
                    <li>Be a great decision maker</li>
                    <li>Manage your career</li>
                    <li>Preserve yourself</li>
                  </ol>
                </li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 2 -------------------------------------- */}
            <section id="what-clients-need" className="mt-4">
              <a href="#what-clients-need" className="anchor">
                <h2>
                  Tome 2: What clients need (<span className="font-semibold">completed</span>)
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <div className="items-center flex">
                Page count:&nbsp;<span className="font-bold">50</span>
              </div>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome02CoverImage} alt="Tome 2: What clients need" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                All software development endeavors have one thing in common: they aim to solve real-world{" "}
                <span className="font-bold">problems</span>.
              </p>
              <br />
              <p>
                This tome focuses on how to understand what clients truly need. It covers concepts such as functional & non-functional
                requirements, techniques that you can use to understand business problems and end user goals. It also covers what
                specifications are and why they matter.
              </p>
              <br />
              <p>
                These ideas are important because,{" "}
                <span className="font-bold">
                  no matter how good a software developer you are, it doesn’t matter at all if you end up building something that solves the
                  wrong problems.
                </span>
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>Introduction</li>
                <li>What do clients need?</li>
                <li>
                  Requirements
                  <ol>
                    <li>Functional requirements and jobs to be done</li>
                    <li>Non-functional requirements</li>
                    <li>Software Requirements Specification (SRS)</li>
                    <li>Actors, use cases and user stories</li>
                    <li>Business domain and Ubiquitous language</li>
                  </ol>
                </li>
                <li>
                  Requirements discovery
                  <ol>
                    <li>Requirements always change</li>
                    <li>Event storming</li>
                    <li>Discovery tools and techniques</li>
                    <li>Clarify and refine gradually</li>
                  </ol>
                </li>
                <li>
                  User Centered Design (UCD)
                  <ol>
                    <li>User Research</li>
                    <li>Jobs to be done</li>
                    <li>Design Thinking</li>
                  </ol>
                </li>
                <li>
                  User Experience Design (UX)
                  <ol>
                    <li>What UX designers focus on</li>
                    <li>
                      UX Concepts overview
                      <ol>
                        <li>UX User Research</li>
                        <li>User personas</li>
                        <li>User path, scenario, journey, and journey mapping</li>
                        <li>Human-Computer Interaction (HCI)</li>
                        <li>Interaction Design (IxD)</li>
                        <li>Usability and ergonomics</li>
                        <li>Accessibility</li>
                        <li>Information architecture & content strategy</li>
                        <li>UX/UI Design Patterns</li>
                        <li>A/B testing</li>
                      </ol>
                    </li>
                    <li>UX Workflow</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>Design Sprints</li>
                <li>The Lean Startup and Minimum Lovable Products</li>
                <li>Specifications</li>
                <li>Conclusion</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 3 -------------------------------------- */}
            <section id="architecture" className="mt-4">
              <a href="#architecture" className="anchor">
                <h2>
                  Tome 3: Architecture (<span className="font-semibold">in progress</span>)
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">70</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome03CoverImage} alt="Tome 3: Architecture" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                Once you have accumulated enough understanding about the requirements, you need to create IT solutions that efficiently
                solve the problems.
              </p>
              <br />
              <p>
                Before diving into design and code, you need to get in the shoes of an architect and devise{" "}
                <span className="italic">solutions</span>. Software crafters are not necessarily architects, but they should at least
                understand what architects do and should be able to provide useful input to them.
              </p>
              <br />
              <p>
                Sometimes, you’ll also have to play the role of the architect (e.g., in small startups) and when that happens, you need to
                know what needs to be done to avoid disasters. Here, we'll explore some key ideas about IT architecture in general and
                software architecture in particular.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>
                  Introduction
                  <ol>
                    <li>Hype cycle</li>
                  </ol>
                </li>
                <li>Solution architecture</li>
                <li>
                  Software architecture
                  <ol>
                    <li>
                      Architectural/high level design patterns
                      <ol>
                        <li>Multi-tier architectures</li>
                        <li>Microservices vs monoliths</li>
                        <li>Cloud-native apps</li>
                        <li>Serverless & Functions as a Service (FaaS)</li>
                        <li>Command Query Responsibility Segregation (CQRS)</li>
                        <li>Event Sourcing (ES)</li>
                        <li>Event-Driven Architecture (EDA)</li>
                        <li>RDBMs vs NoSQL</li>
                        <li>Enterprise Application Integration (EAI)</li>
                        <li>Micro Front-ends</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  Information/Data architecture
                  <ol>
                    <li>Data modeling</li>
                    <li>Data storage</li>
                    <li>
                      Data integration
                      <ol>
                        <li>Extract Transform Load (ETL)</li>
                        <li>Change Data Capture (CDC)</li>
                        <li>Web Services / SOA</li>
                      </ol>
                    </li>
                    <li>Data governance</li>
                    <li>Big Data</li>
                    <li>
                      Data analytics
                      <ol>
                        <li>Data Mining</li>
                        <li>Business Intelligence (BI)</li>
                        <li>Artificial Intelligence (AI)</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Infrastructure architecture</li>
                <li>Security architecture</li>
                <li>Enterprise architecture</li>
              </ol>
            </section>

            {/*-------------------------------------- TOME 4 -------------------------------------- */}
            <section id="software-design" className="mt-4">
              <a href="#software-design" className="anchor">
                <h2>
                  Tome 4: Software design
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">80</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome04CoverImage} alt="Tome 4: Software Design" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                Software design is where the real action begins. Previous tomes covered much higher level concepts. Solving the wrong
                problem means game over, a bad architecture means tons of waste, and bad software design means costly maintenance. Here, we
                explore software design, explain why it is critical for mental health (seriously!) and key concepts that you’ll use on a
                daily basis during your software crafter’s career.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>
                  Technical design
                  <ol>
                    <li>
                      Data
                      <ol>
                        <li>Data models</li>
                        <li>Data structures</li>
                        <li>State machines (FSM)</li>
                      </ol>
                    </li>
                    <li>Business rules</li>
                    <li>Database design</li>
                    <li>
                      Algorithms
                      <ol>
                        <li>Complexity and the Big-O notation</li>
                      </ol>
                    </li>
                    <li>Workflows</li>
                    <li>
                      Code design principles
                      <ol>
                        <li>Problem partitioning</li>
                        <li>Design strategies</li>
                        <li>Abstraction</li>
                        <li>Modularity</li>
                        <li>Encapsulation</li>
                        <li>Law of Demeter (LoD)</li>
                        <li>Separation of concerns</li>
                        <li>SOLID principles</li>
                        <li>Don't Repeat Yourself (DRY)</li>
                        <li>Don't reinvent the wheel</li>
                        <li>You aren't gonna need it (YAGNI)</li>
                        <li>Pareto principle</li>
                        <li>Convention over configuration</li>
                        <li>API design</li>
                        <li>Refactoring/Refinement</li>
                      </ol>
                    </li>
                    <li>Design patterns</li>
                    <li>Naming</li>
                    <li>Choosing frameworks and libraries</li>
                    <li>
                      Documentation
                      <ol>
                        <li>Diagrams / Notations</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Domain Driven Design (DDD)</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 5 -------------------------------------- */}
            <section id="computers-and-operating-systems" className="mt-4">
              <a href="#computers-and-operating-systems" className="anchor">
                <h2>
                  Tome 5: Computer architecture and Operating systems basics
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">100</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img
                  loading="eager"
                  fluid={tome05CoverImage}
                  alt="Tome 5: Computer architecture and Operating systems basics"
                  className="hover:opacity-10"
                />
              </div>
              <br />
              <p>
                This tome is dedicated to real beginners who first want to understand computers and operating systems. We all need to start
                somewhere, and this is an excellent introduction to basic principles underlying everything that we do as software crafters.
                Whether our code runs locally on our computer or somewhere in the cloud, it is always executed by a CPU (physical or
                virtual), accesses memory, reads/writes files, etc.
              </p>
              <br />
              <p>
                If you want to learn about CPUs, memory, file systems, files, processes, scheduling and whatnot, then this tome is for you.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>Introduction</li>
                <li>
                  Computer architecture basics
                  <ol>
                    <li>Central Processing Unit (CPU)</li>
                    <li>Memory (RAM)</li>
                    <li>Graphical Processing Unit (GPU)</li>
                    <li>Binary</li>
                    <li>Hexadecimal</li>
                  </ol>
                </li>
                <li>
                  Operating system basics
                  <ol>
                    <li>Major components</li>
                    <li>Programs</li>
                    <li>Processes and process management</li>
                    <li>Memory management</li>
                    <li>I/O management</li>
                    <li>File systems and files</li>
                    <li>Users and groups</li>
                    <li>Inter-Process Communication (IPC)</li>
                    <li>Ports</li>
                    <li>POSIX</li>
                    <li>Built-in programs</li>
                    <li>Shells</li>
                    <li>Environment variables</li>
                    <li>Services/Daemons</li>
                    <li>Scheduled tasks</li>
                    <li>Virtualization</li>
                    <li>Containerization</li>
                  </ol>
                </li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 6 -------------------------------------- */}
            <section id="coding-basics" className="mt-4">
              <a href="#coding-basics" className="anchor">
                <h2>
                  Tome 6: Coding basics
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">150</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome06CoverImage} alt="Tome 6: Coding basics" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                This tome is dedicated to real beginners who’d like to learn how to C-O-D-E. We will only scratch the surface but this tome
                is a great and practical introduction to{" "}
                <span className="font-bold">
                  coding concepts that all software crafters <span className="italic">must</span> know
                </span>{" "}
                and use literally all the time.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>Introduction</li>
                <li>
                  Programming concepts
                  <ol>
                    <li>Pseudocode</li>
                    <li>Variables</li>
                    <li>Constants</li>
                    <li>References</li>
                    <li>Special values</li>
                    <li>Operators</li>
                    <li>Statements</li>
                    <li>Expressions</li>
                    <li>Keywords</li>
                    <li>Data types</li>
                    <li>Mutability</li>
                    <li>Conditional structures</li>
                    <li>Functions</li>
                    <li>Loops</li>
                    <li>Errors/Exceptions</li>
                    <li>Generics</li>
                    <li>Decorators/annotations</li>
                    <li>Regular expressions (Regex)</li>
                    <li>Recursion</li>
                    <li>Serialization</li>
                    <li>Modules/Packages</li>
                    <li>Concurrency</li>
                    <li>Streams</li>
                    <li>Libraries</li>
                    <li>Frameworks</li>
                    <li>Bugs</li>
                    <li>Debugging</li>
                  </ol>
                </li>
                <li>
                  Programming paradigms
                  <ol>
                    <li>
                      Imperative
                      <ol>
                        <li>Procedural</li>
                        <li>Object-Oriented Programming (OOP)</li>
                      </ol>
                    </li>
                    <li>
                      Declarative
                      <ol>
                        <li>Functional Programming (FP)</li>
                        <li>Functional Reactive Programming (FRP)</li>
                      </ol>
                    </li>
                    <li>Aspect Oriented Programming (AOP)</li>
                  </ol>
                </li>
                <li>
                  Programming languages & platforms
                  <ol>
                    <li>Generations</li>
                    <li>Families</li>
                    <li>Characteristics</li>
                    <li>Examples</li>
                    <li>How to choose</li>
                  </ol>
                </li>
                <li>
                  Development tools
                  <ol>
                    <li>Integrated Development Environment (IDE)</li>
                    <li>Source Control Management client</li>
                    <li>Build tools</li>
                    <li>Development environment setup</li>
                  </ol>
                </li>
                <li>Free and Open Source Software (FOSS)</li>
                <li>
                  Databases
                  <ol>
                    <li>Database transactions</li>
                    <li>Relational Database Management Systems (RDBMS)</li>
                    <li>NoSQL</li>
                  </ol>
                </li>
                <li>Character encoding</li>
                <li>
                  Internet
                  <ol>
                    <li>How does it work?</li>
                    <li>
                      Hypertext Transfer Protocol (HTTP)
                      <ol>
                        <li>Server/Clients</li>
                        <li>Requests/Responses</li>
                        <li>URLs</li>
                        <li>Verbs</li>
                        <li>Headers</li>
                        <li>Status codes</li>
                        <li>Protocol versions</li>
                        <li>Tools</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Full Text Search (FTS)</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 7 -------------------------------------- */}
            <section id="general-concerns" className="mt-4">
              <a href="#general-concerns" className="anchor">
                <h2>
                  Tome 7: General concerns
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">120</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome07CoverImage} alt="Tome 7: General concerns" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                This tome is dedicated to elements that must be taken care of <span className="font-bold italic">everywhere</span>; whether
                you’re doing back-end or front-end software development. Note that I also consider those necessary for infrastructure
                scripting (but it’s always hard to make IT operations personnel realize that they are also software developers ;-)
              </p>
              <br />
              <p>
                This is a critical tome for true software crafters because many of these points are unfortunately often overlooked for
                various reasons (mostly bad ones). If you want to become a <span className="italic">true</span> software crafter, then
                you’ll make sure to always pay attention to those and to convince everyone else to do the same; even if it means going
                against some pointy-haired manager ;-)
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>Error handling</li>
                <li>
                  Code quality & Quality Assurance (QA)
                  <ol>
                    <li>Broken windows theory</li>
                    <li>Technical debt</li>
                    <li>
                      Code quality checks
                      <ol>
                        <li>
                          Static Code Analysis (SCA)
                          <ol>
                            <li>Metrics</li>
                            <li>Tools</li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>Testing</li>
                    <li>
                      Clean code advice
                      <ol>
                        <li>
                          General
                          <ol>
                            <li>Code duplication</li>
                            <li>Coding conventions</li>
                            <li>Defensive programming</li>
                            <li>Dead code elimination</li>
                            <li>Code quality checklist</li>
                            <li>Code comments</li>
                          </ol>
                        </li>
                        <li>Variables</li>
                        <li>Functions</li>
                        <li>Conditionals</li>
                        <li>Error handling</li>
                        <li>Testing</li>
                        <li>Performance</li>
                      </ol>
                    </li>
                    <li>Continuous Integration (CI)</li>
                    <li>Code review process</li>
                    <li>Issue/Bug tracking</li>
                  </ol>
                </li>
                <li>Logging</li>
                <li>Performance/resource usage</li>
                <li>Internationalization (i18n) and localization (l10n)</li>
                <li>Encoding</li>
                <li>
                  Caching
                  <ol>
                    <li>Concepts</li>
                    <li>Types</li>
                    <li>Patterns</li>
                  </ol>
                </li>
                <li>Feature flagging</li>
                <li>How to fix bugs</li>
                <li>Version management</li>
                <li>
                  Source Control Management (SCM)
                  <ol>
                    <li>Workflows</li>
                    <li>Monorepos</li>
                    <li>Practical advice</li>
                  </ol>
                </li>
                <li>Continuous Delivery/Deployment</li>
                <li>
                  Operational Maturity (OM)
                  <ol>
                    <li>Business Continuity Management (BCM)</li>
                    <li>IT Service Management (ITSM)</li>
                    <li>Backup/restore</li>
                    <li>Disaster Recovery (DR)</li>
                  </ol>
                </li>
                <li>Security</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 8 -------------------------------------- */}
            <section id="back-end" className="mt-4">
              <a href="#back-end" className="anchor">
                <h2>
                  Tome 8: Back-end development
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">100</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome08CoverImage} alt="Tome 8: Back-end development" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                This tome is all about back-end software, where most of the action occurs under the hood… without anyone knowing. Back-end
                developers have to focus on very different aspects of IT systems, compared to front-end developers. Software crafters need
                to understand those differences.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>What back-end developers focus on and why</li>
                <li>
                  Data
                  <ol>
                    <li>Models</li>
                    <li>Persistence / Retrieval / Search</li>
                    <li>Exposure through APIs</li>
                    <li>Batch processing</li>
                  </ol>
                </li>
                <li>
                  Usual layers and responsibilities
                  <ol>
                    <li>Domain</li>
                    <li>Repository</li>
                    <li>Business</li>
                    <li>Web services</li>
                    <li>Integration</li>
                    <li>Batch</li>
                    <li>Shared</li>
                    <li>Cross-cutting</li>
                  </ol>
                </li>
                <li>Security</li>
                <li>Performance</li>
                <li>Scalability</li>
                <li>
                  APIs
                  <ol>
                    <li>
                      Types
                      <ol>
                        <li>RESTful</li>
                        <li>GraphQL</li>
                        <li>SOAP</li>
                        <li>GRPC</li>
                      </ol>
                    </li>
                    <li>Comparison</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>Frameworks and major libraries</li>
                <li>Going full-stack</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 9 -------------------------------------- */}
            <section id="front-end" className="mt-4">
              <a href="#front-end" className="anchor">
                <h2>
                  Tome 9: Front-end development
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">130</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome09CoverImage} alt="Tome 9: Front-end development" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                This tome is all about front-end systems, which are the tip of the iceberg; the one concrete part that end users see and can
                feel. Given the visual nature of front-end applications, front-end developers have to focus on very different aspects,
                compared to back-end developers. Software crafters must not necessarily be artists, but they still have to pay attention to
                the aesthetics… among many other things.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>What front-end developers focus on and why</li>
                <li>Usual layers and responsibilities</li>
                <li>
                  Component architecture
                  <ol>
                    <li>Smart components</li>
                    <li>Dumb components</li>
                    <li>Component libraries</li>
                  </ol>
                </li>
                <li>
                  User Interface Design (UI)
                  <ol>
                    <li>Principles</li>
                    <li>Elements</li>
                    <li>Design systems</li>
                    <li>Mockups/prototypes & fidelity</li>
                  </ol>
                </li>
                <li>
                  Web Design
                  <ol>
                    <li>Technologies</li>
                    <li>Progressive enhancement</li>
                    <li>Graceful degradation</li>
                    <li>Responsive Web Design (RWD)</li>
                    <li>Cross-browser testing</li>
                  </ol>
                </li>
                <li>
                  Accessibility (a11y)
                  <ol>
                    <li>Standards</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  Performance
                  <ol>
                    <li>Testing/Scoring</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  The Web Platform
                  <ol>
                    <li>Main technologies of the Web</li>
                    <li>How Web browsers work</li>
                    <li>Web standards</li>
                  </ol>
                </li>
                <li>HTML basics</li>
                <li>CSS basics</li>
                <li>Metadata on the Web</li>
                <li>
                  Data entry
                  <ol>
                    <li>HTML forms</li>
                    <li>Captcha & security</li>
                  </ol>
                </li>
                <li>
                  Approaches to create Web applications
                  <ol>
                    <li>Old school</li>
                    <li>Single Page Applications (SPAs)</li>
                    <li>Server-Side Rendering (SSR)</li>
                    <li>Static sites</li>
                    <li>Micro front-ends</li>
                  </ol>
                </li>
                <li>Progressive Web Apps (PWAs)</li>
                <li>
                  UI state management
                  <ol>
                    <li>Types</li>
                    <li>
                      Redux
                      <ol>
                        <li>Architecture</li>
                        <li>Libraries</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Scalable Vector Graphics (SVG)</li>
                <li>Web fonts</li>
                <li>Desktop/Mobile apps</li>
                <li>Frameworks and major libraries</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 10 -------------------------------------- */}
            <section id="infrastructure" className="mt-4">
              <a href="#infrastructure" className="anchor">
                <h2>
                  Tome 10: IT Infrastructure
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">100</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome10CoverImage} alt="Tome 10: IT Infrastructure" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                Back-end software is conceptually below the front-end in terms of visibility, but IT infrastructure goes way further down,
                from services, servers and networks down to cable and electrical signals; phew! ;-)
              </p>
              <br />
              <p>
                Having a good understanding of where our applications are hosted, how the environment is configured/secured/monitored, etc
                is super valuable and makes the difference between someone who “just” writes code and someone who contributes to develop
                end-to-end solutions. This tome explains some important concepts about IT infrastructure. All DevSecOps engineers (and thus
                software crafters) should be aware of at least a part of those ideas.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>What IT infrastructure focuses on and why</li>
                <li>
                  Networking concepts
                  <ol>
                    <li>OSI Model</li>
                    <li>Networks</li>
                    <li>Routing</li>
                    <li>Network Address Translation (NAT)</li>
                    <li>Ports</li>
                    <li>Port Address Translation (PAT)</li>
                    <li>Network zones</li>
                    <li>Cloud networks</li>
                    <li>DHCP</li>
                    <li>DNS</li>
                  </ol>
                </li>
                <li>Network domains</li>
                <li>
                  Availability & performance
                  <ol>
                    <li>High Availability (HA)</li>
                    <li>Clustering</li>
                    <li>Load Balancing (LB)</li>
                  </ol>
                </li>
                <li>Systems maintenance</li>
                <li>
                  Systems management
                  <ol>
                    <li>Databases</li>
                    <li>Configuration management</li>
                    <li>Compliance management</li>
                    <li>Naming conventions</li>
                  </ol>
                </li>
                <li>
                  Data
                  <ol>
                    <li>Storage</li>
                    <li>Backup/restore</li>
                    <li>File services</li>
                    <li>Enterprise Content Management (ECM)</li>
                    <li>Databases</li>
                  </ol>
                </li>
                <li>
                  Cloud computing
                  <ol>
                    <li>Infrastructure as a Service (IaaS)</li>
                    <li>Software as a Service (SaaS)</li>
                    <li>Platform as a Service (PaaS</li>
                    <li>Cloud types</li>
                    <li>Workload portability</li>
                  </ol>
                </li>
                <li>
                  Hosting
                  <ol>
                    <li>Applications</li>
                    <li>Services</li>
                    <li>Functions</li>
                  </ol>
                </li>
                <li>Deployments</li>
                <li>Environments</li>
                <li>Security</li>
                <li>
                  Automation
                  <ol>
                    <li>Scripting</li>
                    <li>Infrastructure as code</li>
                    <li>GitOps</li>
                    <li>ChatOps</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>API integration</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 11 -------------------------------------- */}
            <section id="security" className="mt-4">
              <a href="#security" className="anchor">
                <h2>
                  Tome 11: Security
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">180</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img loading="eager" fluid={tome11CoverImage} alt="Tome 11: Security" className="hover:opacity-10" />
              </div>
              <br />
              <p>
                IT security (ITSEC) is paramount for digital solutions. 20 years ago, things were less complicated, but nowadays, leaving an
                insecure system online even for a few seconds is enough to get hacked. Everyday, there are countless stories of security
                breaches and stolen data. Together, we’ll learn about the most important IT security concepts; knowledge that will expand
                your understanding of this complex, but incredibly important field of IT:
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>Attackers</li>
                <li>
                  Key concepts
                  <ol>
                    <li>Attack vectors</li>
                    <li>Attack surface</li>
                    <li>Physical security</li>
                    <li>Confidentiality, Integrity, Availability (CIA)</li>
                    <li>Non-repudiation</li>
                    <li>Defense-in-depth</li>
                    <li>Identification</li>
                    <li>Authentication, Authorization, Auditing (AAA)</li>
                    <li>Principle of least privilege</li>
                    <li>Allow lists and deny lists</li>
                    <li>Privilege escalation</li>
                    <li>Need to know</li>
                    <li>Segregation of duties</li>
                    <li>Responsibility Assignment Matrix (RACI)</li>
                    <li>Security by obscurity</li>
                    <li>Personally Identifiable Information (PII)</li>
                  </ol>
                </li>
                <li>
                  Risk management
                  <ol>
                    <li>Operational Risk Management (ORM)</li>
                    <li>Risk assessment</li>
                    <li>Risk mitigation</li>
                  </ol>
                </li>
                <li>
                  Security controls
                  <ol>
                    <li>Common controls</li>
                    <li>OWASP</li>
                  </ol>
                </li>
                <li>
                  Cryptography
                  <ol>
                    <li>Encryption</li>
                    <li>Hashing</li>
                    <li>Digital Signatures</li>
                    <li>Pseudo-Random Number Generators (PRNG)</li>
                    <li>Keys</li>
                  </ol>
                </li>
                <li>
                  Secure communications
                  <ol>
                    <li>
                      Secure protocols
                      <ol>
                        <li>Why HTTPS matters</li>
                        <li>Transport Layer Security (TLS)</li>
                        <li>Perfect Forward Secrecy</li>
                      </ol>
                    </li>
                    <li>Public Key Infrastructure (PKI)</li>
                    <li>Firewalls</li>
                    <li>Network segregation</li>
                    <li>Proxies</li>
                    <li>NAC, IDS, IPS</li>
                  </ol>
                </li>
                <li>
                  Configuration hardening
                  <ol>
                    <li>Accounts security</li>
                    <li>Hosts security</li>
                    <li>Web servers security</li>
                    <li>Domain security</li>
                    <li>Cloud security</li>
                    <li>Configuration drift</li>
                  </ol>
                </li>
                <li>
                  Secret management
                  <ol>
                    <li>Password management</li>
                    <li>Privileged Access Management (PAM)</li>
                    <li>Hardware Security Modules (HSM)</li>
                  </ol>
                </li>
                <li>
                  Vulnerability tracking
                  <ol>
                    <li>Vulnerability databases</li>
                    <li>How to track vulnerabilities</li>
                  </ol>
                </li>
                <li>
                  Security testing
                  <ol>
                    <li>Security verification</li>
                    <li>Penetration testing</li>
                    <li>Bug bounty programs</li>
                  </ol>
                </li>
                <li>
                  Web platform security
                  <ol>
                    <li>Same Origin Policy (SOP)</li>
                    <li>Mixed content</li>
                    <li>Browser sandbox</li>
                    <li>Content Security Policy (CSP)</li>
                    <li>Cross-Origin Resource Sharing (CORS)</li>
                    <li>Cookies security</li>
                    <li>Privacy sandbox</li>
                  </ol>
                </li>
                <li>
                  Secure coding
                  <ol>
                    <li>OWASP top vulnerabilities</li>
                    <li>Integrating security in the SDLC</li>
                    <li>General advice</li>
                    <li>Input validation</li>
                    <li>Output encoding</li>
                    <li>Authentication</li>
                    <li>Session management</li>
                    <li>Authorization</li>
                    <li>Error handling</li>
                    <li>Logging and auditing</li>
                    <li>Data security</li>
                    <li>... and more!</li>
                  </ol>
                </li>
                <li>Incident response</li>
                <li>Security monitoring</li>
                <li>Security automation</li>
                <li>Administrative measures</li>
                <li>Laws and regulations</li>
              </ol>
            </section>

            {/* -------------------------------------- TOME 12 -------------------------------------- */}
            <section id="product-project-software" className="mt-4">
              <a href="#product-project-software" className="anchor">
                <h2>
                  Tome 12: Product/Project management and Software development approaches
                  <span className="anchor-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </h2>
              </a>
              <p>
                Estimated page count:&nbsp;<span className="font-bold">80</span>
              </p>
              <div className="opacity-75 hover:opacity-100">
                <Img
                  loading="eager"
                  fluid={tome12CoverImage}
                  alt="Tome 12: Product/Project management and Software development approaches"
                  className="hover:opacity-10"
                />
              </div>
              <br />
              <p>
                Once you understand what your clients need (or at least, what they need right now), you can think about the “product”.
                Product management is a specific job, but as a software crafter, it is important to at least understand what it is and what
                it entails because, sometimes, you might have to take the lead for some parts of product management.
              </p>
              <br />
              <p>
                How are products and their features defined, prioritized and organized? Dive into this tome to learn about technical product
                management, product backlogs, product roadmaps as well as how to create, structure and maintain those.
              </p>
              <h4 className="mt-2">In this tome:</h4>
              <ol>
                <li>Project roles</li>
                <li>
                  Product management
                  <ol>
                    <li>Product manager's role</li>
                    <li>
                      Product roadmap
                      <ol>
                        <li>Phases/Milestones</li>
                        <li>User Story Map</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  Backlog management
                  <ol>
                    <li>Advice</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  Software development process
                  <ol>
                    <li>Cowboy coding</li>
                    <li>Software/System Development Life Cycle (SDLC)</li>
                  </ol>
                </li>
                <li>
                  Software development approaches
                  <ol>
                    <li>Waterfall</li>
                    <li>Rational Unified Process (RUP)</li>
                    <li>
                      Agile
                      <ol>
                        <li>Scrum</li>
                        <li>Kanban</li>
                        <li>Scrumban</li>
                        <li>Disciplined Agile Delivery (DAD)</li>
                        <li>Agile Unified Process (AUP)</li>
                      </ol>
                    </li>
                    <li>
                      Lean
                      <ol>
                        <li>Lean thinking</li>
                        <li>Lean Product Development (LPD)</li>
                      </ol>
                    </li>
                    <li>Extreme Programming (XP)</li>
                    <li>Feature-driven Development (FDD)</li>
                    <li>DevOps and DevSecOps</li>
                  </ol>
                </li>
                <li>Project management basics</li>
                <li>
                  Important definitions for teams
                  <ol>
                    <li>Definition of Ready to implement</li>
                    <li>Definition of Done</li>
                  </ol>
                </li>
                <li>Release management</li>
              </ol>
            </section>
          </div>
        </div>
        <div className="block md:hidden">
          {/* ------------------ Links bottom ------------ */}
          <hr className="my-6" />
          <div className="w-full flex flex-col sm:flex-row sm:space-between items-center select-none">
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
                  title="Pre-order the collection now!"
                  aria-label="Pre-order the collection now!"
                  rel="noopener"
                  className="link hover:text-devConceptsGreen-500"
                >
                  <FontAwesomeIcon className="text-4xl mr-3" icon={faShoppingCart} />
                  <br />
                  Pre-order now!
                </OutboundLink>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
