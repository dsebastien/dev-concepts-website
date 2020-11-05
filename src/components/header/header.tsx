import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Code } from "../code";

const StyledHeader = styled.div.attrs({
  className: "w-full mx-auto text-left sm:text-center mt-0 py-6 flex flex-col md:flex-row md:justify-between items-center",
})``;

const Tagline = styled.h2.attrs({
  className: "w-full mx-auto text-left sm:text-center block md:hidden",
})``;

const command = "sudo make me a Software Craftsman";

const Header: React.FC = () => {
  const data: {
    site: {
      siteMetadata: {
        title: string;
        tagline: string;
        salesPageUrl: string;
      };
    };
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          salesPageUrl
        }
      }
    }
  `);

  return (
    <StyledHeader>
      {/*<Link to="/about">About</Link>*/}
      <h1 className="w-full lg:w-auto">
        <a href={data.site.siteMetadata.salesPageUrl} title="Pre-order the book now!" aria-label="Pre-order the book now!">
          {data.site.siteMetadata.title}
        </a>
      </h1>
      <div className="hidden lg:block">
        <Code>{command}</Code>
      </div>

      <Tagline>{data.site.siteMetadata.tagline}</Tagline>
    </StyledHeader>
  );
};

export { Header };
