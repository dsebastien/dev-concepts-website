import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { theme, GlobalStyles } from "../../styles";
// Components
import { Link } from "../link";
import { Footer } from "../footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.theme.screens.sm ? "1.8rem" : "2.2rem")};
  margin: 20px 0px;
  color: white;
`;

const Tagline = styled.h2`
  @apply text-xl bg-red-100;
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.blue};
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
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        <Link to="/">
          <Title>{data.site.siteMetadata.title.toUpperCase()}</Title>
        </Link>
        <Tagline>{data.site.siteMetadata.tagline}</Tagline>
        <br />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
