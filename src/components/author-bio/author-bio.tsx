import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

// @ts-ignore
import LogoJava from "../../assets/images/svg/java.svg";
// @ts-ignore
import LogoC from "../../assets/images/svg/c.svg";
// @ts-ignore
import LogoKotlin from "../../assets/images/svg/kotlin.svg";
// @ts-ignore
import LogoJavaScript from "../../assets/images/svg/javascript.svg";
// @ts-ignore
import LogoPython from "../../assets/images/svg/python.svg";
// @ts-ignore
import LogoCSharp from "../../assets/images/svg/csharp.svg";
// @ts-ignore
import LogoTypeScript from "../../assets/images/svg/typescript.svg";
// @ts-ignore
import LogoBash from "../../assets/images/svg/bash.svg";

interface AuthorBioQuery {
  site: {
    siteMetadata: {
      salesPageUrl: string;
      develoPassionSiteUrl: string;
      social: {
        linkedInSebastien: string;
        blogSebastien: string;
        twitterSebastien: string;
        tsBookLink: string;
      };
    };
  };
}

interface Props {
  data: AuthorBioQuery;
}

const AuthorBio: React.FC = () => {
  const data: AuthorBioQuery = useStaticQuery(graphql`query AuthorBioQuery {
  site {
    siteMetadata {
      salesPageUrl
      develoPassionSiteUrl
      social {
        linkedInSebastien
        blogSebastien
        twitterSebastien
        tsBookLink
      }
    }
  }
}
`);

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16 w-full sm:px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-32">
      {/* Either this */}
      <div className="hidden lg:block">
        <a href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
          <div className="max-w-sm">
          <StaticImage src="../../assets/images/seb-square.png" layout={"fullWidth"} alt="Sébastien Dubois" className="rounded-full border-4 border-devConceptsBlue-700 curve" />
          </div>
        </a>
        <AuthorBioText data={data} />
      </div>

      {/* Or that */}
      <div className="w-full lg:hidden text-center">
        {" "}
        <a href={data.site.siteMetadata.salesPageUrl} className="" rel="noopener">
          <div className="flex flex-col items-center">
            <StaticImage src="../../assets/images/seb-square.png" alt="Sébastien Dubois" layout={"fullWidth"} style={{ width: "100%", height: "100%" }} className="rounded-full border-4 border-devConceptsBlue-700" />
          </div>
        </a>
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
          <a className="link" href={data.site.siteMetadata.social.linkedInSebastien} rel="noopener">
            Sébastien Dubois
          </a>
          , the founder of{" "}
          <a className="link" href={data.site.siteMetadata.develoPassionSiteUrl} rel="noopener">
            DeveloPassion
          </a>
          , a software development company located in Belgium. You can find me on{" "}
          <a className="link" href={data.site.siteMetadata.social.twitterSebastien} rel="noopener">
            Twitter
          </a>{" "}
          and{" "}
          <a className="link" href={data.site.siteMetadata.social.blogSebastien} rel="noopener">
            my Website
          </a>
          . I've been working for 15 years in the IT industry and, since day one, I have always been passionate about IT and software
          development.
        </p>
        <div className="my-4 grid grid-cols-4 gap-4 place-items-center">
          <a className="w-8 h-8" href="https://developer.mozilla.org/nl/docs/Web/JavaScript" rel="noopener" title="JavaScript">
            <LogoJavaScript className="w-8 h-8" role="button" aria-label="JavaScript" />
          </a>
          <a className="w-8 h-8" href="https://www.typescriptlang.org/" rel="noopener" title="TypeScript">
            <LogoTypeScript className="w-8 h-8" role="button" aria-label="TypeScript" />
          </a>
          <a className="w-8 h-8" href="https://kotlinlang.org/" rel="noopener" title="Kotlin">
            <LogoKotlin className="w-8 h-8" role="button" aria-label="Kotlin" />
          </a>
          <a className="w-8 h-8" href="https://www.java.com" rel="noopener" title="Java">
            <LogoJava className="w-8 h-8" role="button" aria-label="Java" />
          </a>
          <a className="w-8 h-8" href="https://www.python.org/" rel="noopener" title="Python">
            <LogoPython className="w-8 h-8" role="button" aria-label="Python" />
          </a>
          <a className="w-8 h-8" href="https://en.wikipedia.org/wiki/C_(programming_language)" rel="noopener" title="C">
            <LogoC className="w-8 h-8" role="button" aria-label="C" />
          </a>
          <a className="w-8 h-8" href="https://docs.microsoft.com/en-us/dotnet/csharp/" rel="noopener" title="C#">
            <LogoCSharp className="w-8 h-8" role="button" aria-label="C#" />
          </a>
          <a className="w-8 h-8" href="https://www.gnu.org/software/bash/" rel="noopener" title="Bash">
            <LogoBash className="w-8 h-8" role="button" aria-label="Bash" />
          </a>
        </div>
        <p className="text-lg">
          I've used various programming languages over the years (JavaScript, TypeScript, Kotlin, Java, Python, C#, C, Bash, PowerShell,
          etc), wrote{" "}
          <a className="link" href={data.site.siteMetadata.social.tsBookLink} rel="noopener">
            a book about the TypeScript programming language
          </a>
          , led development teams, managed large software development & infrastructure projects.
        </p>
        <br />
        <p className="text-lg">
          I want to share my passion, and I'm convinced that through this project, I'll be able to reach and help many more people, maybe
          even you?{" "}
          <a href={data.site.siteMetadata.salesPageUrl} className="link" rel="noopener">
            Pre-order the series right now, and be amongst my first readers!
          </a>
        </p>
      </div>
    </div>
  );
};

export { AuthorBio };
