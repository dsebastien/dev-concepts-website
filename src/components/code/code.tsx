import styled from "styled-components";

export const Code = styled.code.attrs({
  className: "text-xl text-devConceptsBlue-500 bg-devConceptsWhite h-full rounded p-2",
})`
  ::before {
    content: "$ ";
  }
`;
