import React from "react";
import styled from "styled-components";
import { ConvertKitForm } from "../convertkit-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div.attrs({
  className: "w-full mt-5 flex flex-col object-center",
})``;

const DevConceptsNewsletterForm: React.FC = () => {
  return (
    <Wrapper id="devConceptsNewsletter">
      <h3>
        <span>Join the Newsletter</span>
        <a href="#newsletter" aria-label="Newsletter permalink" className="anchor after pl-3">
          <FontAwesomeIcon className="" icon={faLink} />
        </a>
      </h3>
      <ConvertKitForm />
    </Wrapper>
  );
};

export { DevConceptsNewsletterForm };
