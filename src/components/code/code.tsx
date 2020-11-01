import styled from "styled-components";

export const Code = styled.code.attrs({
  className: "text-devConceptsBlue-300",
})`
  display: inline-block;
  font-size: 1.2rem;
  background: #f5f5f5;
  margin-top: 1rem;
  border-radius: 5px;
  padding: 0.5rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  ::before {
    content: "$ ";
  }
`;
