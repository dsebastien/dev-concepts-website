import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
import { RiErrorWarningLine } from 'react-icons/ri';

const StyledDiv = tw.div``;

type StyledDivProps = PropsWithChildren<{}>;

/**
 * Warning embedded in blog posts
 * @constructor
 */
const BlogPostWarning = ({ children }: StyledDivProps) => {
  return (
    <StyledDiv
      className="bg-devConceptsOrange-100 border-l-8 border-devConceptsOrange-500 text-devConceptsOrange-800 p-4 rounded-md"
      role="alert"
    >
      <div className="font-bold mb-2">
        <RiErrorWarningLine className="inline" size="24" />
        <span className="ml-2">WARNING</span>
      </div>
      <div>{children}</div>
    </StyledDiv>
  );
};

export default BlogPostWarning;
