import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const Wrapper = styled.div.attrs({
  className: "relative w-full",
})``;

const DevConceptsCover: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          salesPageUrl
        }
      }
      devConceptsCoverImage: file(relativePath: { eq: "DevConceptsCover3DTransparentBackground.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const devConceptsCoverImageData = data.devConceptsCoverImage.childImageSharp.fluid;
  const { siteMetadata } = data.site;
  const { title, salesPageUrl } = siteMetadata;

  return (
    <Wrapper>
      <OutboundLink href={salesPageUrl} rel="noopener" aria-label="Pre-order now!" title="Pre-order now!" className="pointer">
        <figure className="devConceptsLogoFigure">
          <Img loading="eager" fluid={devConceptsCoverImageData} alt={title} />
          <figcaption>
            <h2>
              Pre-order&nbsp;&nbsp;<span>now!</span>
            </h2>
          </figcaption>
        </figure>
      </OutboundLink>
    </Wrapper>
  );
};

export { DevConceptsCover };
