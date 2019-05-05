import { graphql, useStaticQuery } from "gatsby";

export default function usePostsData() {
  const data = useStaticQuery(graphql`
    query AllBlogPosts {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 200
                  maxHeight: 120
                  duotone: { highlight: "#f00e2e", shadow: "#192550" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes;
}
