import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const AboutPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <SEO title="Software Development Concepts - About" description="The Story behind the Software Development Concepts project" />
      <section className="flex flex-col">
        <h1>About</h1>
        <div>Coming soon...</div>
      </section>
    </Layout>
  );
};

export default AboutPage;
