import React from 'react';
import tw from 'twin.macro';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledDiv = tw.div``;

/**
 * Signature for my blog posts
 * @constructor
 */
const BlogPostSignature = () => {
  return (
    <>
      <StyledDiv className="mt-8 mb-2">
        PS: <a href="https://dsebastien.net" rel="noopener">
          check out my Website</a>, {' '}<a href="https://join.slack.com/t/softwarecrafterstalk/shared_invite/zt-umgx3v06-4rtJ20PXz867GTPzCk1zeQ" rel="noopener">
        join the Software Crafters community</a>, and{' '}
        <a href="https://twitter.com/dSebastien" rel="noopener">
          come say hi on Twitter!
        </a>
        <div className="mt-6 flex flex-row justify-center">
          <NewsletterSubscribe />
        </div>
      </StyledDiv>
    </>
  );
};

export default BlogPostSignature;
