import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";

const Wrapper = styled.div.attrs({
  className: "relative w-full",
})``;

const DevConceptsCover: React.FC = () => {
  const data = useStaticQuery(graphql`{
  site {
    siteMetadata {
      title
      salesPageUrl
    }
  }
}
`);

  const { siteMetadata } = data.site;
  const { title, salesPageUrl } = siteMetadata;

  return (
    <Wrapper>
      <a href={salesPageUrl} rel="noopener" aria-label="Pre-order now!" title="Pre-order now!" className="pointer">
        <StaticImage src="../../assets/images/DevConceptsAllCovers.png" layout={"fullWidth"} loading="eager" alt={title} />
      </a>
    </Wrapper>
  );
};

export { DevConceptsCover };
