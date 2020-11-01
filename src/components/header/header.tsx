import React from "react";
import styled from "styled-components";
import {Link} from "../link";
import {graphql, useStaticQuery} from "gatsby";

const StyledHeader = styled.header.attrs({
  className: "w-full mx-auto mt-0 py-2",
})`
`;

const Tagline = styled.h2.attrs({
  className: "text-right",
})``;

const Header: React.FC = () => {
  const data: {
    site: {
      siteMetadata: {
        title: string;
        tagline: string;
      };
    };
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `);

  return (
    <StyledHeader>
      {/*<Link to="/about">About</Link>*/}
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <Tagline>{data.site.siteMetadata.tagline}</Tagline>
    </StyledHeader>
  );
};

export { Header };
