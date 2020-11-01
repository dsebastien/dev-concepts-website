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
    {/*<Link to="/about">About</Link>*/}
    <div className="mt-3 text-xl text-red-100 bg-red-500">Content goes here</div>
    <DevConceptsIcon />
  </Layout>
);

export default App;
