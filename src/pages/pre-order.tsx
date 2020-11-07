import React from "react";
import { RouteComponentProps } from "@reach/router";
import {Helmet} from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

const PreOrderPage: React.FC<RouteComponentProps> = () => {
  const data: {
    site: {
      siteMetadata: {
        salesPageUrl: string;
      };
    };
  } = useStaticQuery(graphql`
    query SalesPageQuery {
      site {
        siteMetadata {
          salesPageUrl
        }
      }
    }
  `);

  const redirectMetaData = [{
      'http-equiv': "refresh",
      content: `0; URL="${data.site.siteMetadata.salesPageUrl}"`,
    }];

  return (
    <Helmet meta={redirectMetaData}>
      Redirecting you to the pre-order page...
    </Helmet>
  );
};

export default PreOrderPage;
