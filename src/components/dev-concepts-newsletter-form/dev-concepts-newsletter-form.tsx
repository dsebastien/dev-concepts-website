import React from "react";
import styled from "styled-components";
import { ConvertKitForm } from "../convertkit-form";

import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div.attrs({
  className: "w-full mx-6 sm:m-0 sm:w-4/5 lg:w-3/5 xl:w-2/5 xxl:w-3/5 flex flex-col items-center rounded-lg bg-blue-700 shadow-lg p-4",
})``;

const DevConceptsNewsletterForm: React.FC = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon className="text-4xl !important" icon={faEnvelopeOpenText} />
      <h1 className="mt-4">
        <span className="w-full text-center">Join the Newsletter</span>
      </h1>
      <p className="my-2">
        Sign-up to join the Software Crafters <i>community</i>, and receive interesting content about software development, as well as news
        about the project. Right in your inbox!
      </p>
      <ConvertKitForm />
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
