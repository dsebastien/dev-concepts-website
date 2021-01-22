import React from "react";
import styled from "styled-components";
import { ConvertKitForm } from "../convertkit-form";

const Wrapper = styled.div.attrs({
  className: "w-full mt-5 flex flex-col object-center",
})``;

const DevConceptsNewsletterForm: React.FC = () => {
  return (
    <Wrapper id="devConceptsNewsletter">
      <h1>
        <span>Join the Newsletter</span>
      </h1>
      <p className="pb-1">
        Sign-up to join our software crafters <i>community</i>, and receive interesting content about software developement, as well as news
        about the project. Right in your inbox!
      </p>
      <ConvertKitForm />
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
