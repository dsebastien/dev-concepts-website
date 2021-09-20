import tw, { styled } from "twin.macro";

const ShellCode = styled.code`
    ${tw`text-xl! font-normal! text-devConceptsBlue-500! bg-devConceptsWhite! h-full! rounded! p-2! h-auto!`};

    &:before {
      content: "$ " !important;
    }

    &:after {
      content: "" !important;
    }
`;

export default ShellCode;
