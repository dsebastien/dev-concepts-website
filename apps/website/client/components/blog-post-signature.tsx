import React from 'react';
import { TwitterFollowButton } from 'mdx-embed';
import NewsletterSubscribe from '@/components/newsletter-subscribe';

/**
 * Signature for my blog posts
 * @constructor
 */
const BlogPostSignature = () => {
  return (
    <>
      <h2>About Sébastien</h2>
      <div className="mb-2">
        Hello everyone! I'm Sébastien Dubois. I'm an author, founder, and CTO. I write books and articles about programming (TypeScript,
        Web, React, Angular, NestJS, etc), personal knowledge management, personal organization, and productivity.
        <br />
        <br />
        If you've enjoyed this article and want to read more like this, then subscribe to{' '}
        <a href="https://newsletter.dsebastien">my newsletter</a> and check out my{' '}
        <a href="https://dev-concepts.dev">Dev Concepts collection of e-books about Software Development</a> 🔥.
        <br />
        <br />
        You can follow me on Twitter: https://twitter.com/dSebastien 🐦
        <br />
        <br />
        If you want to discuss, then don't hesitate to join one of my communities:{' '}
        <a href="https://dsebastien.net/blog/2021-11-12-personal-knowledge-management-community" rel="noopener">
          the Software Crafters community
        </a>
        , the{' '}
        <a href="https://dsebastien.net/pkm-community" rel="noopener">
          Personal Knowledge Management community
        </a>
        , and the{' '}
        <a href="https://join.slack.com/t/focusdgroup/shared_invite/zt-113gxeetf-kXTPA8Y9NyHVj1Wj3Rdd~A" rel="noopener">
          focusd Productivity community
        </a>
        <div className="mt-6">
          <NewsletterSubscribe />
        </div>
      </div>

      <TwitterFollowButton username="dSebastien" size="large" />
    </>
  );
};

export default BlogPostSignature;
