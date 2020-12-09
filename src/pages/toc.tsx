import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const AboutPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <SEO title="Software Development Concepts - Table of contents" description="Table of contents of the Software Development Concepts book" />
      <section className="flex flex-col">
        <h1>Table of contents</h1>
        <div>Coming soon...</div>
      </section>
    </Layout>
  );
};

export default AboutPage;
