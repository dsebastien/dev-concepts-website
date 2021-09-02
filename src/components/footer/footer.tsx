import React from "react";
import styled from "styled-components";

import metadata from "../../metadata.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer.attrs({
  className: "ml-0 mr-0 w-full py-2 mt-16 sm:py-6 text-center bg-gray-900 sm:rounded-t-lg",
})``;

const StyledList = styled.ul.attrs({
  className: "",
})`
> li {
  &:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  }
`;

const StyledListElement = styled.li.attrs({
  className: "sm:border-l-2 sm:border-devConceptsBlue-500 ml-2 pl-2 leading-4 block sm:inline-block mt-2 sm:mt-0",
})`
  > a:hover {
    opacity: 0.5;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledList>
        <StyledListElement>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href={metadata.social.blogSebastien}
            target="_blank"
            rel="noreferrer noopener"
            title="Dubois Sébastien's Website"
            aria-label="Dubois Sébastien's Website"
          >
            Dubois Sébastien
          </a>
        </StyledListElement>
        <StyledListElement>
          <a
            href={metadata.develoPassionSiteUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="DeveloPassion"
          >
            DeveloPassion
          </a>
        </StyledListElement>
        <StyledListElement>
          <a
            href={metadata.siteSources}
            target="_blank"
            rel="noreferrer noopener"
            title="Website sources"
            aria-label="Website sources"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </StyledListElement>
        <StyledListElement>
          <a
            href={metadata.social.twitterSebastien}
            target="_blank"
            rel="noreferrer noopener"
            title="Dubois Sébastien @ Twitter"
            aria-label="Dubois Sébastien @ Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </StyledListElement>
      </StyledList>
    </StyledFooter>
  );
};

export { Footer };
