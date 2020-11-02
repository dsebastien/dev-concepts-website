import React from "react";
import styled from "styled-components";
import {Link} from "../link";
import {graphql, useStaticQuery} from "gatsby";
import {Code} from "../code";

const StyledHeader = styled.header.attrs({
  className: "w-full mx-auto mt-0 py-6 flex flex-row justify-between items-center",
})`
`;

// const Tagline = styled.h2.attrs({
//   className: "text-right",
// })``;

const command = "sudo make me a Software Craftsman";

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
      <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
      <div className=""><Code>{command}</Code></div>

      {/*<Tagline>{data.site.siteMetadata.tagline}</Tagline>*/}
    </StyledHeader>
  );
};

export { Header };
