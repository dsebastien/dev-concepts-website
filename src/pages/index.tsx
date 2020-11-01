import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Code } from "../components/code";
import { DevConceptsIcon } from "../components/dev-concepts-icon/dev-concepts-icon";

const command = "sudo make me a Software Craftsman";

const App = () => (
  <Layout>
    <SEO />
    <Code>{command}</Code>
    <DevConceptsIcon />
  </Layout>
);

export default App;
