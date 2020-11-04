import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div.attrs({
  className: "relative",
})`
  figure.devConceptsLogoFigure > div > img {
    transition: opacity 0.35s;
  }
  figure.devConceptsLogoFigure figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3em 3em;
    width: 100%;
    opacity: 0.9;
    //background-color: white;
    text-align: center;
    text-color: white;
  }
  figure.devConceptsLogoFigure figcaption::before {
    position: absolute;
    top: 50%;
    right: 30px;
    bottom: 50%;
    left: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    content: "";
    opacity: 0;
    background-color: #ffffff;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s;
  }
  figure.devConceptsLogoFigure h2 {
    margin: 0 0 5px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, -webkit-transform 0.35s, -moz-transform 0.35s, -o-transform 0.35s, transform 0.35s;
  }
  figure.devConceptsLogoFigure h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    text-transform: uppercase;
    -webkit-transform: translate3d(0%, 50%, 0);
    transform: translate3d(0%, 50%, 0);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  figure.devConceptsLogoFigure h2 span {
    font-weight: 800;
  }
  figure.devConceptsLogoFigure:hover {
    opacity: 0.8;
    // Alternative: block; goes along with the padding below
    //background-color: RGBA(0, 0, 0, 0.35);
    //border-radius: 0.5rem;
  }
  // figure.devConceptsLogoFigure {
  //   padding: 1rem;
  // }
  figure.devConceptsLogoFigure:hover figcaption:hover {
    opacity: 1 !important;
  }
  figure.devConceptsLogoFigure:hover figcaption h2 {
    opacity: 1;
    -webkit-transform: translate3d(0%, 0%, 0);
    transform: translate3d(0%, 0%, 0);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  figure.devConceptsLogoFigure:hover figcaption {
    opacity: 1;
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s;
  }
  figure.devConceptsLogoFigure:hover figcaption::before {
    background: rgba(255, 255, 255, 0);
    top: 30px;
    bottom: 30px;
    opacity: 1;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
`;

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
      <a href={salesPageUrl} rel="noopener noreferrer" aria-label="Pre-order now!" title="Pre-order now!" className="pointer">
        <figure className="devConceptsLogoFigure">
          <Img fixed={imageData} alt={title} />
          <figcaption>
            <h2>
              Pre-order&nbsp;&nbsp;<span>now!</span>
            </h2>
          </figcaption>
        </figure>
      </a>
    </Wrapper>
  );
};

export { DevConceptsIcon };
