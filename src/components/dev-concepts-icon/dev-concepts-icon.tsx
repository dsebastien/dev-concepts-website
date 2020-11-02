import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { motion } from "framer-motion";

const Wrapper = styled.div``;

const DevConceptsIcon: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      icon: file(relativePath: { eq: "DevConcepts.png" }) {
        childImageSharp {
          fixed(height: 500, width: 313) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.icon.childImageSharp.fixed;
  const { siteMetadata } = data.site;
  const title = siteMetadata.title;

  return (
    <Wrapper>
      <motion.a
        href="https://dev-concepts.dev"
        rel="noopener noreferrer"
        target="_blank"
        css={`
          cursor: pointer;
        `}
        whileHover={{ opacity: 0.5 }}
      >
        <Img fixed={imageData} alt={title} />
      </motion.a>
    </Wrapper>
  );
};

export { DevConceptsIcon };
