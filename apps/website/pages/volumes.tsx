import React from 'react';
import Layout from '@/layouts/layout';
import tw from 'twin.macro';
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import {BsCollection} from "react-icons/bs";

const StyledArticle = tw.article``;

const VolumeSummariesPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Volumes – Dev Concepts',
        description: 'The Dev Concepts Collection',
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <h1 className="page-heading">
          The Dev Concepts Collection <BsCollection className="ml-2 inline" />
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

export default VolumeSummariesPage;
