import React, { PropsWithChildren } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

type BlogPostWarningProps = PropsWithChildren<{}>;

/**
 * Warning embedded in blog posts
 * @constructor
 */
const BlogPostWarning = ({ children }: BlogPostWarningProps) => {
  return (
    <div
      className="bg-devConceptsOrange-100 border-l-8 border-devConceptsOrange-500 text-devConceptsOrange-800 p-4 rounded-md"
      role="alert"
    >
      <div className="font-bold mb-2">
        <RiErrorWarningLine className="inline" size="24" />
        <span className="ml-2">WARNING</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BlogPostWarning;
