import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
// Components
import { Link } from "../link";
import { Footer } from "../footer";

const Container = styled.div.attrs({
  className: "flex flex-col h-screen max-h-screen justify-between m-0"
})`
`;

const Title = styled.h1.attrs({
  className: "text-devConceptsWhite"
  //font-size: ${(props) => (props.theme.screens.sm ? "1.8rem" : "2.2rem")};
  //margin: 20px 0px;
})`
`;

const Tagline = styled.h2.attrs({
  className: "text-xl"
})`
`;

const Layout: React.FC = ({ children }) => {
  const data: {
    site: {
      siteMetadata: {
        title: string;
        tagline: string;
      }
    }
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
    <Container>
      <header>
        <Link to="/">
          <Title>{data.site.siteMetadata.title.toUpperCase()}</Title>
        </Link>
        <Tagline>{data.site.siteMetadata.tagline}</Tagline>
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </Container>
  );
};

export { Layout };
