import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Code } from "../code";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const StyledHeader = styled.div.attrs({
  className: "w-full mx-auto text-left sm:text-center mt-0 pt-4 flex flex-col md:flex-row md:justify-between items-center",
})``;

const Tagline = styled.h2.attrs({
  className: "w-full mx-auto text-left sm:text-center block md:hidden",
})``;

const FULL_COMMAND = "sudo make me a Software Crafter";

const Header: React.FC = () => {
  let COMMAND = FULL_COMMAND;

  const data: {
    site: {
      siteMetadata: {
        title: string;
        tagline: string;
        salesPageUrl: string;
      };
    };
  } = useStaticQuery(graphql`
    query HeaderPageQuery {
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
      <h1 className="w-full lg:w-auto text-5xl sm:text-6xl">
        <FontAwesomeIcon className="mr-3" icon={faCode} />
        <OutboundLink
          href={data.site.siteMetadata.salesPageUrl}
          title="Pre-order the collection now!"
          aria-label="Pre-order the collection now!"
          rel="noopener"
          tabIndex="-1"
        >
          {data.site.siteMetadata.title}
        </OutboundLink>
      </h1>
      <OutboundLink
        href={data.site.siteMetadata.salesPageUrl}
        title="Pre-order the collection now!"
        aria-label="Pre-order the collection now!"
        rel="noopener"
      >
      <div className="hidden lg:block">
        <Code>{COMMAND}</Code>
      </div>
      <Tagline>{data.site.siteMetadata.tagline}</Tagline>
      </OutboundLink>
    </StyledHeader>
  );
};

export { Header };
