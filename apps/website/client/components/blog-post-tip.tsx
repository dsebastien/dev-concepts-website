import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
import { FcIdea } from 'react-icons/fc';

const StyledDiv = tw.div``;

type StyledDivProps = PropsWithChildren<{}>;

/**
 * Tip embedded in blog posts
 * @constructor
 */
const BlogPostTip = ({ children }: StyledDivProps) => {
  return (
    <StyledDiv
      className="bg-devConceptsGreen-100 border-l-8 border-devConceptsGreen-500 text-devConceptsGreen-800 p-4 rounded-md"
      role="comment"
    >
      <div className="font-bold mb-2">
        <FcIdea className="inline" size="24" />
        <span className="ml-2">TIP</span>
      </div>
      <div>{children}</div>
    </StyledDiv>
  );
};

export default BlogPostTip;
