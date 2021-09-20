import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
import { RiErrorWarningLine } from 'react-icons/ri';

const StyledDiv = tw.div``;

type StyledDivProps = PropsWithChildren<{}>;

/**
 * Warning embedded in blog posts
 * @constructor
 */
const BlogPostNote = ({ children }: StyledDivProps) => {
  return (
    <StyledDiv
      className="bg-devConceptsBlue-100 border-l-8 border-devConceptsBlue-500 text-devConceptsBlue-800 p-4 rounded-md"
      role="alert"
    >
      <div className="font-bold mb-2">
        <RiErrorWarningLine className="inline" size="24" />
        <span className="ml-2">NOTE</span>
      </div>
      <div>{children}</div>
    </StyledDiv>
  );
};

export default BlogPostNote;
