import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
import {FaQuoteLeft} from "react-icons/fa";

const StyledBlockquote = tw.blockquote``;

type StyledDivProps = PropsWithChildren<{
  quote: string;
  by: string;
}>;

/**
 * Quote embedded in blog posts
 * @constructor
 */
const BlogPostQuote = ({ quote, by }: StyledDivProps) => {
  return (
    <StyledBlockquote
      className="relative p-4 rounded-md text-xl italic border-l-8 bg-devConceptsGray-100 border-devConceptsGray-500 quote"
    >
      <div className="stylistic-quote-mark" aria-hidden="true">
        <FaQuoteLeft className="inline" size="24" />
      </div>
      <p className="mb-4 text-devConceptsPink-500">{quote}</p>
      <cite className="flex items-center text-devConceptsGray-500">
        {by}
      </cite>
    </StyledBlockquote>
  );
};

export default BlogPostQuote;
