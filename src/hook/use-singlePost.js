import { graphql, useStaticQuery } from "gatsby";

export default function usePostsData() {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { slug: { eq: "first-post" } }) {
        frontmatter {
          title
        }
        excerpt
      }
    }
  `);
  return data.allMdx.nodes;
}
