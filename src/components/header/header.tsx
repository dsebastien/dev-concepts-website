import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Code } from "../code";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHeader = styled.div.attrs({
  className: "w-full mx-auto text-left sm:text-center mt-0 pt-4 flex flex-col md:flex-row md:justify-between items-center",
})``;

const Tagline = styled.h2.attrs({
  className: "w-full mx-auto text-left sm:text-center block md:hidden",
})``;

const FULL_COMMAND = "sudo make me a Software Craftsman";

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
      <h1 className="w-full lg:w-auto">
        <FontAwesomeIcon className="mr-3" icon={faCode} />
        <a href={data.site.siteMetadata.salesPageUrl} title="Pre-order the book now!" aria-label="Pre-order the book now!">
          {data.site.siteMetadata.title}
        </a>
        <a href="#top" aria-label="Newsletter permalink" className="anchor after pl-3">
          <FontAwesomeIcon className="" icon={faLink} />
        </a>
        {/* Alternative: internal link first, but it only adds an uninteresting flash */}
        {/*<Link to="/pre-order" title="Pre-order the book now!" aria-label="Pre-order the book now!">*/}
        {/*  {data.site.siteMetadata.title}*/}
        {/*</Link>*/}
      </h1>
      <div className="hidden lg:block">
        <Code>{COMMAND}</Code>
      </div>
      <Tagline>{data.site.siteMetadata.tagline}</Tagline>
    </StyledHeader>
  );
};

export { Header };
