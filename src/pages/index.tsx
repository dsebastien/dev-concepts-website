import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Code } from "../components/code";
import { DevConceptsIcon } from "../components/dev-concepts-icon/dev-concepts-icon";
import {Helmet} from "react-helmet";

const command = "sudo make me a Software Craftsman";

const App = () => (
  <Layout>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,600,600italic" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,600,600italic" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kaushan+Script" />
      <script nonce="fcd8146f-6701-4dca-9165-3ed4c96a3b5a">
        {`

        `}
      </script>
    </Helmet>
    <SEO />
    <Code>{command}</Code>
    <DevConceptsIcon />
  </Layout>
);

export default App;
