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
      <ConvertKitForm />
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
