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
          salesPageUrl
        }
      }
      icon: file(relativePath: { eq: "DevConceptsCover3DTransparentBackground.png" }) {
        childImageSharp {
          fixed(height: 641, width: 563) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.icon.childImageSharp.fixed;
  const { siteMetadata } = data.site;
  const title = siteMetadata.title;
  const salesPageUrl = siteMetadata.salesPageUrl;

  return (
    <Wrapper>
      <motion.a
        href={salesPageUrl}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Pre-order now!"
        title="Pre-order now!"
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
