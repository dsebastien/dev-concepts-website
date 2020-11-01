import React from "react";
import styled from "styled-components";

import metadata from "../../metadata.json";

const StyledFooter = styled.footer.attrs({
  className: "w-full py-6 text-center",
})`
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <ul className="copyright">
        <li>&copy; {new Date().getFullYear()} Sébastien Dubois / DeveloPassion SPRL</li>
        <li><a href={metadata.siteSources} className="icon alt fa-github fa-xs" target="_blank" rel="noreferrer noopener" title="Website sources" aria-label="Website sources"/>
        </li>
        <li><a href={metadata.social.twitterSebastien} target="_blank" rel="noreferrer noopener" title="dSebastien @ Twitter" aria-label="dSebastien @ Twitter">dSebastien</a></li>
      </ul>
    </StyledFooter>
  );
};

export { Footer };
