import React from "react";
import styled from "styled-components";

import metadata from "../../metadata.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "../link";

const StyledFooter = styled.footer.attrs({
  className: "ml-0 mr-0 w-full py-6 text-center bg-gray-900 rounded-t-lg",
})``;

const StyledList = styled.ul.attrs({
  className: "",
})`
li {
  @apply text-devConceptsRed-700 ml-1;
      border-left: solid 1px _palette(border);
      display: inline-block;
      line-height: 1;
      margin-left: 1em;
      padding-left: 1em;

      &:first-child {
        border-left: 0;
        margin-left: 0;
        padding-left: 0;
      }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledList>
        <li>
          &copy; {new Date().getFullYear()}{" "}
          <Link
            to={metadata.social.mediumSebastien}
            target="_blank"
            rel="noreferrer noopener"
            title="Dubois Sébastien @ Medium"
            aria-label="Dubois Sébastien @ Medium"
          >
            Dubois Sébastien
          </Link>
        </li>
        <li>
          <Link
            to={metadata.develoPassionSiteUrl}
            target="_blank"
            rel="noreferrer noopener"
            title="DeveloPassion"
            aria-label="DeveloPassion"
          >
            DeveloPassion
          </Link>
        </li>
        <li>
          <Link to={metadata.siteSources} target="_blank" rel="noreferrer noopener" title="Website sources" aria-label="Website sources">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link
            to={metadata.social.twitterSebastien}
            target="_blank"
            rel="noreferrer noopener"
            title="Dubois Sébastien @ Twitter"
            aria-label="Dubois Sébastien @ Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li>
      </StyledList>
    </StyledFooter>
  );
};

export { Footer };
