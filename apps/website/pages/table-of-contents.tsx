import React from 'react';
import Layout from '@/layouts/layout';
import {
  FaBook,
} from 'react-icons/fa';
import tw from 'twin.macro';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledArticle = tw.article``;

const TocPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Table of Contents – Dev Concepts',
        description: 'The table of contents of the Dev Concepts collection',
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <h1 className="page-heading">
          Table of contents <FaBook className="ml-2 inline" />
        </h1>
        <section className="mb-8 prose leading-6 text-gray-900 dark:text-gray-400">
          Coming soon...
        </section>
        <section>
          <NewsletterSubscribe />
        </section>
      </StyledArticle>
    </Layout>
  );
};

export default TocPage;
