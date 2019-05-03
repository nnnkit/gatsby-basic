import { graphql, useStaticQuery } from "gatsby";

export default function useSitemapData() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
