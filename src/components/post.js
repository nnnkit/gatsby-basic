import React from "react";
import Layout from "./layout";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
export default function Post({ data: { mdx: post } }) {
  return (
    <Layout>
      <Link to="/posts">👈</Link>
      <div>{post.frontmatter.titlt}</div>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  );
}
