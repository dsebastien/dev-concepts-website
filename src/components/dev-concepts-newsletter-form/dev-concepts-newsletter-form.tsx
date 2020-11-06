import React from "react";
import styled from "styled-components";
import { ConvertKitForm } from "../convertkit-form";

const Wrapper = styled.div.attrs({
  className: "w-full mt-8 flex flex-col object-center",
})``;

const DevConceptsNewsletterForm: React.FC = () => {
  return (
    <Wrapper id="devConceptsNewsletter">
      <h3>Join the Newsletter</h3>
      <ConvertKitForm />
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
