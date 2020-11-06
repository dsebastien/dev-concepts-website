import styled from "styled-components";

const Button = styled.button.attrs({
  className: "text-devConceptsGray-200 text-xl rounded pointer bg-devConceptsBlue-700 hover:bg-devConceptsPink-600 py-2 px-10",
})`
  :disabled {
    background: lightgray;
  }
`;

export { Button };
