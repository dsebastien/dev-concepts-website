import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import LogoJava from "../../assets/images/svg/java.svg";
import LogoC from "../../assets/images/svg/c.svg";
import LogoKotlin from "../../assets/images/svg/kotlin.svg";
import LogoJavaScript from "../../assets/images/svg/javascript.svg";
import LogoPython from "../../assets/images/svg/python.svg";
import LogoCSharp from "../../assets/images/svg/csharp.svg";
import LogoTypeScript from "../../assets/images/svg/typescript.svg";
import LogoBash from "../../assets/images/svg/bash.svg";

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
  };
  authorPicture: {
    childImageSharp: {
      fluid: any;
    };
  };
  logoJava: {
    childImageSharp: {
      fluid: any;
    };
  };
}

interface Props {
  data: AuthorBioQuery;
}

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
      {/* Either this */}
      <div className="hidden lg:block">
        <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
          <Img className="w-full rounded-full border-4 border-devConceptsBlue-700 curve" fluid={authorPicture} alt="Sébastien Dubois" />
        </OutboundLink>
        <AuthorBioText data={data} />
      </div>

      {/* Or that */}
      <div className="w-full lg:hidden text-center">
        {" "}
        <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
          <div className="flex flex-col items-center">
            <Img
              style={{ width: "100%", height: "100%" }}
              className="rounded-full border-4 border-devConceptsBlue-700"
              fluid={authorPicture}
              alt="Sébastien Dubois"
            />
          </div>
        </OutboundLink>
        <div className="mt-4 w-full">
          <AuthorBioText data={data} />
        </div>
      </div>
    </div>
  );
};

const AuthorBioText: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className="">
      <h1 className="text-4xl mb-2">About the author</h1>
      <div className="">
        <p className="text-lg">
          Hey everyone! I'm{" "}
          <OutboundLink className="link" href={data.site.siteMetadata.social.linkedInSebastien} rel="noopener">
            Sébastien Dubois
          </OutboundLink>
          , the CEO of{" "}
          <OutboundLink className="link" href={data.site.siteMetadata.develoPassionSiteUrl} rel="noopener">
            DeveloPassion
          </OutboundLink>
          , a software development company located in Belgium. You can find me on{" "}
          <OutboundLink className="link" href={data.site.siteMetadata.social.twitterSebastien} rel="noopener">
            Twitter
          </OutboundLink>{" "}
          and{" "}
          <OutboundLink className="link" href={data.site.siteMetadata.social.mediumSebastien} rel="noopener">
            Medium
          </OutboundLink>
          . I've been working for 15 years in the IT industry and, since day one, I have always been passionate about IT and software
          development.
        </p>
        <div className="my-4 grid grid-cols-4 gap-4 place-items-center">
          <OutboundLink className="w-8 h-8" href="https://developer.mozilla.org/nl/docs/Web/JavaScript" rel="noopener" title="JavaScript">
            <LogoJavaScript className="w-8 h-8" role="button" aria-label="JavaScript" />
          </OutboundLink>
          <OutboundLink className="w-8 h-8" href="https://www.typescriptlang.org/" rel="noopener" title="TypeScript">
            <LogoTypeScript className="w-8 h-8" role="button" aria-label="TypeScript" />
          </OutboundLink>
          <OutboundLink className="w-8 h-8" href="https://kotlinlang.org/" rel="noopener" title="Kotlin">
            <LogoKotlin className="w-8 h-8" role="button" aria-label="Kotlin" />
          </OutboundLink>
          <OutboundLink className="w-8 h-8" href="https://www.java.com" rel="noopener" title="Java">
            <LogoJava className="w-8 h-8" role="button" aria-label="Java" />
          </OutboundLink>
          <OutboundLink className="w-8 h-8" href="https://www.python.org/" rel="noopener" title="Python">
            <LogoPython className="w-8 h-8" role="button" aria-label="Python" />
          </OutboundLink>
          <OutboundLink className="w-8 h-8" href="https://en.wikipedia.org/wiki/C_(programming_language)" rel="noopener" title="C">
            <LogoC className="w-8 h-8" role="button" aria-label="C" />
          </OutboundLink>
          <OutboundLink className="w-8 h-8" href="https://docs.microsoft.com/en-us/dotnet/csharp/" rel="noopener" title="C#">
            <LogoCSharp className="w-8 h-8" role="button" aria-label="C#" />
          </OutboundLink>
          <OutboundLink className="w-8 h-8" href="https://www.gnu.org/software/bash/" rel="noopener" title="Bash">
            <LogoBash className="w-8 h-8" role="button" aria-label="Bash" />
          </OutboundLink>
        </div>
        <p className="text-lg">
          I've used various programming languages over the years (JavaScript, TypeScript, Kotlin, Java, Python, C#, C, Bash, PowerShell,
          etc), wrote{" "}
          <OutboundLink className="link" href={data.site.siteMetadata.social.tsBookLink} rel="noopener">
            a book about the TypeScript programming language
          </OutboundLink>
          , led development teams, managed large software development & infrastructure projects.
        </p>
        <br />
        <p className="text-lg">
          I want to share my passion, and I'm convinced that through this project, I'll be able to reach and help many more people, maybe
          even you?{" "}
          <OutboundLink href={data.site.siteMetadata.salesPageUrl} className="link" rel="noopener">
            Pre-order the series right now, and be amongst my first readers!
          </OutboundLink>
        </p>
      </div>
    </div>
  );
};

export { AuthorBio };
