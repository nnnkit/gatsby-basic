import { graphql, useStaticQuery } from "gatsby";

export default function useSitemapData() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return site.siteMetadata;
}
