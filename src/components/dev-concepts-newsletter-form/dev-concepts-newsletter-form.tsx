import React from "react";
import styled from "styled-components";
import { ConvertKitForm } from "../convertkit-form";

import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div.attrs({
  className: "flex flex-col items-center rounded-lg bg-blue-700 shadow-lg p-4",
})``;

const DevConceptsNewsletterForm: React.FC = () => {
  return (
    <Wrapper id="devConceptsNewsletter">
      <FontAwesomeIcon className="text-4xl" icon={faEnvelopeOpenText} />
      <h1>
        <span className="w-full text-center">Join the Newsletter</span>
      </h1>
      <p className="pb-1">
        Sign-up to join the Software Crafters <i>community</i>, and receive interesting content about software development, as well as news
        about the project. Right in your inbox!
      </p>
      <ConvertKitForm />
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
