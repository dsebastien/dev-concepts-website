import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "w-full mt-4 sm:mt-0",
})`
`;

const DevConceptsNewsletterForm: React.FC = () => {
  // "Thanks for subscribing to the Dev Concepts newsletter. You're all set! You'll receive the updates about the book directly in your inbox.",

  return (
    <Wrapper id="devConceptsNewsletterSubscriptionForm">
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
