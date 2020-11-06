import React from "react";
import styled from "styled-components";
import {ConvertKitForm} from "../convertkit-form";

const Wrapper = styled.div.attrs({
  className: "w-full h-full mt-4 sm:mt-0 flex flex-col object-center",
})`
`;

const DevConceptsNewsletterForm: React.FC = () => {
  // "Thanks for subscribing to the Dev Concepts newsletter. You're all set! You'll receive the updates about the book directly in your inbox.",

  return (
    <Wrapper id="devConceptsNewsletterSubscriptionForm">
      <ConvertKitForm />
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
