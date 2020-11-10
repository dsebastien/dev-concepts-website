import React from "react";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";

interface AuthorBioQuery {
  site: {
    siteMetadata: {
      salesPageUrl: string;
      develoPassionSiteUrl: string;
      social: {
        linkedInSebastien: string;
        mediumSebastien: string;
        twitterSebastien: string;
        tsBookLink: string;
      };
    };
  }
  authorPicture: {
    childImageSharp: {
      fluid: any;
    };
  };
}

interface Props {
  data: AuthorBioQuery;
}

const AuthorBioText: React.FC<Props> = ({data}: Props) => {
  return (
    <div>
      <h1 className="text-4xl mb-2">About the author</h1>
      <span className="text-lg">
                <p>
                  Hey everyone! I'm{" "}
                  <a className="link" href={data.site.siteMetadata.social.linkedInSebastien}>
                    Sébastien Dubois
                  </a>
                  , the CEO of{" "}
                  <a className="link" href={data.site.siteMetadata.develoPassionSiteUrl}>
                    DeveloPassion
                  </a>
                  , a software development company located in Belgium (beer & chocolate!). You can find me on{" "}
                  <a className="link" href={data.site.siteMetadata.social.twitterSebastien}>
                    Twitter
                  </a>{" "}
                  and{" "}
                  <a className="link" href={data.site.siteMetadata.social.mediumSebastien}>
                    Medium
                  </a>
                  . I've been working for 15 years in the IT industry and, since day one, I have always been passionate about IT and software
                  development.
                </p>
                <br />
                <p>
                  I've used various programming languages over the years (Java, Kotlin, JavaScript, TypeScript, C, C#, Basic, Bash,
                  PowerShell, Python, etc), wrote <a className="link" href={data.site.siteMetadata.social.tsBookLink}>a book about the TypeScript programming language</a>, led development teams, managed large
                  projects both on the infrastructure side and on the software development side and even spent a few years as a system
                  architect/administrator of hundreds of Windows Server machines and Active Directory infrastructure for a large financial
                  institution (fun times :p).
                </p>
                <br />
                <p>
                  I want to share my passion with anyone willing to learn/discover what IT and software development are all about. Sharing is
                  caring, or so they say. This is why I started giving 1:1 coaching sessions a while ago. I'm convinced that through this book, I'll be able to reach and help many more people, maybe even you? So go ahead,
                  pre-order the book right now, and be amongst my first readers!
                </p>
              </span>
    </div>
  );
};

const AuthorBio: React.FC = () => {
  const data: AuthorBioQuery = useStaticQuery(graphql`
    query AuthorBioQuery {
      site {
        siteMetadata {
          salesPageUrl
          develoPassionSiteUrl
          social {
            linkedInSebastien
            mediumSebastien
            twitterSebastien
            tsBookLink
          }
        }
      }
      authorPicture: file(relativePath: { eq: "seb-square.png" }) {
        childImageSharp {
          fluid(maxWidth: 450, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const authorPicture = data.authorPicture.childImageSharp.fluid;

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16 w-full sm:px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-32">
        { /* Either this */ }
        <div className="hidden lg:block">
          <a href={data.site.siteMetadata.salesPageUrl} className="">
            <Img className="w-full rounded-full border-4 border-devConceptsBlue-700 curve" fluid={authorPicture} alt="Sébastien Dubois" />
          </a>
          <AuthorBioText data={data} />
        </div>

        { /* Either or that */ }
        <div className="w-full lg:hidden text-center"> { /* flex flex-col lg:hidden items-center text-center object-center */}
          <a href={data.site.siteMetadata.salesPageUrl} className="">
            <div className="flex flex-col items-center">
                <Img style={{width: "100%", height: "100%"}} className="rounded-full border-4 border-devConceptsBlue-700" fluid={authorPicture} alt="Sébastien Dubois" />
            </div>
          </a>
          <div className="mt-4">
            <AuthorBioText data={data} />
          </div>
        </div>
      </div>
  );
};

export { AuthorBio };
