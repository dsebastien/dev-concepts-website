import React, {useEffect} from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  siteUrl?: string;
  author?: string;p
  keywords?: string[];
  meta?: MetaItem[];
  image?: string;
};

interface WindowWithGTag extends Window {
  gtag?: any;
  excludeGtagPaths?: string[];
}

const SEO: React.FC<SEOProps> = (props) => {

  useEffect(() => {
    let windowWithGtag: WindowWithGTag | null = null;
    if(window) {
      windowWithGtag = window;
    }

    if(windowWithGtag?.gtag) {
      const pagePath = location
        ? location.pathname + location.search + location.hash
        : undefined
      console.log("Sending GA pageview for path: ", pagePath);
      windowWithGtag.gtag(`event`, `page_view`, { page_path: pagePath });
    }
  });

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          keywords
          image
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  const { title, description, url, author, meta = [], keywords = [], image } = siteMetadata;
  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const siteUrl = props.siteUrl || url;
  const siteAuthor = props.author || author;
  const siteImage = props.image || image;
  const siteKeywords = [...keywords, props.keywords].join(",");
  const metaData = [
    {
      name: "canonical",
      content: siteUrl,
    },
    {
      name: "description",
      content: siteDescription,
    },
    {
      name: "image",
      content: siteImage,
    },
    {
      name: "og:locale",
      content: "en_US",
    },
    {
      name: "og:url",
      content: siteUrl,
    },
    {
      name: "og:type",
      content: "article",
    },
    {
      name: "og:site_name",
      content: siteTitle,
    },
    {
      name: "og:title",
      content: siteTitle,
    },
    {
      name: "og:description",
      content: siteDescription,
    },
    {
      name: "og:image",
      content: siteImage,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: siteAuthor,
    },
    {
      name: "twitter:title",
      content: siteTitle,
    },
    {
      name: "twitter:description",
      content: siteDescription,
    },
    {
      name: "twitter:image",
      content: siteImage,
    },
    {
      name: "keywords",
      content: siteKeywords,
    },
    {
      name: "HandheldFriendly",
      content: true,
    },
  ].concat(meta);

  const linkData = [
    {
      rel: "shortcut icon",
      href: "favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "icons/apple-touch-icon.png",
    },
  ];
  // Helmet reference: https://github.com/nfl/react-helmet
  return <Helmet htmlAttributes={{ lang: "en", prefix: "og: http://ogp.me/ns#" }} title={siteTitle} meta={metaData} link={linkData} />;
};

export { SEO };
