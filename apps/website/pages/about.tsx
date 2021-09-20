import React from 'react';
import Layout from '@/layouts/layout';
import {
  FaCoffee,
} from 'react-icons/fa';
import tw from 'twin.macro';
import Image from 'next/image';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledArticle = tw.article``;

const AboutPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'About – Sébastien Dubois',
        description: 'A few things about who I am',
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <h1 className="page-heading">
          About this project <FaCoffee className="inline" />
        </h1>
        <section className="mb-8 prose leading-6 text-gray-900 dark:text-gray-400">
          <p>
            Hey there! I'm{' '}
            <a href="https://twitter.com/dSebastien" rel="noopener">
              Sébastien Dubois
            </a>{' '}
            👋
          </p>
          <div className="">
            <Image
              alt="Dubois Sébastien"
              height={317}
              width={264}
              src="/static/images/sebastien.png"
              className="rounded-lg"
            />
          </div>
        </section>
        <div className="mt-16 flex flex-row justify-center">
          <NewsletterSubscribe />
        </div>
      </StyledArticle>
    </Layout>
  );
};

export default AboutPage;
