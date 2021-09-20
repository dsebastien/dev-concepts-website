import React, {useState} from 'react';
import {getAllFilesFrontMatter} from '@/lib/mdx';
import {FrontMatter} from '@/lib/front-matter.intf';
import BlogPostSummary from '@/components/blog-post-summary';
import Layout from '@/layouts/layout';
import tw from 'twin.macro';
import {WebsiteDataType} from "@/lib/website-data-types.intf";
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledArticle = tw.article``;

/**
 * Updates homepage
 * @param input
 * @constructor
 */
export default function Updates(input: { entries: FrontMatter[] }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = input.entries
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) => {
      if (!post.title) {
        throw new Error(`Invalid post title: ${JSON.stringify(post, null, 2)}`);
      }
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    });

  return (
    <Layout
      customMeta={{
        title: 'Updates – Dev Concepts',
      }}
    >
      <StyledArticle className="page-content-wrapper max-w-4xl">
        <h1 className="page-heading">Updates</h1>
        <p className="text-gray-900 dark:text-gray-400 mb-4">
          I've published <b>{`${input.entries.length}`}</b> update
          {input.entries.length > 1 && 's'} here. Use the search below to filter by title.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search updates"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search updates"
            className="px-4 py-2 border-2 border-devConceptsGray-300 dark:border-devConceptsGray-900 focus:ring-devConceptsBlue-500 focus:border-devConceptsBlue-500 block w-full rounded-md bg-devConceptsGray-100 dark:bg-devConceptsGray-800 text-devConceptsGray-900 dark:text-devConceptsGray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-devConceptsBlack dark:text-devConceptsWhite">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="text-gray-900 dark:text-gray-400 mb-4">
            No match found. Please refine your search criteria.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <div
            className="blog-post-summary-container"
            key={post.title}
          >
            <BlogPostSummary {...post} />
          </div>
        ))}

        <div className="mt-16 flex flex-row justify-center">
          <NewsletterSubscribe />
        </div>

      </StyledArticle>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(WebsiteDataType.BLOG);

  return { props: { entries: posts } };
}
