import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import { FrontMatter } from '@/lib/front-matter.intf';
import Layout, {SupportedMeta} from './layout';
import tw from 'twin.macro';
import {AUTHOR} from "../constants";

const StyledArticle = tw.article``;

type BlogLayoutProps = PropsWithChildren<{
  frontMatter: FrontMatter;
}>;

/**
 * Layout for blog articles
 * @param children
 * @param frontMatter
 * @constructor
 */
const BlogArticleLayout = ({ children, frontMatter }: BlogLayoutProps) => {
  const coverImageUrl = `https://dev-concepts.dev${frontMatter.image}`;
  const datePublished = new Date(frontMatter.publishedAt).toISOString();

  /**
   * Reference: https://schema.org/Article
   */
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontMatter.title,
    description: frontMatter.summary,
    image: coverImageUrl,
    datePublished,
    author: AUTHOR,
  };

  const customMeta: Partial<SupportedMeta> = {
    title: `${frontMatter.title} – Dev Concepts`,
    description: frontMatter.summary,
    image: coverImageUrl,
    date: datePublished,
    type: 'article',
    keywords: frontMatter.keywords.join(', '),
    canonicalUrl: frontMatter.canonicalUrl,
  }

  return (
    <Layout
      customMeta={customMeta}
    >
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      <StyledArticle className="article-content-wrapper">
        <h1 className="page-heading">{frontMatter.title}</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <a href="https://twitter.com/dSebastien" className="rounded-full">
              <Image
                alt="Dubois Sébastien"
                height={24}
                width={24}
                src="/avatar.jpeg"
                className="rounded-full"
              />
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">

              {`${frontMatter.author? frontMatter.author: AUTHOR.name} / `}
              <time dateTime={format(parseISO(frontMatter.publishedAt), 'yyyy-MM-dd')}>{format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}</time>
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            {frontMatter.readingTime?.text}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
      </StyledArticle>
    </Layout>
  );
};

export default BlogArticleLayout;
