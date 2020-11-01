import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const NotFoundPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <SEO title="About gatsby-starter-template-deluxe" description="Page not found" />
      <h3>
        The page you were looking for could not be found, sorry!
      </h3>
    </Layout>
  );
};
