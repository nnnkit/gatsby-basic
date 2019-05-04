import { graphql, useStaticQuery } from "gatsby";

export default function usePostsData() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes;
}
