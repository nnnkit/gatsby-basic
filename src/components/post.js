import React from "react";
import Layout from "./layout";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
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
      <Link
        to="/posts"
        css={css`
          font-size: 40px;
        `}
      >
        <span role="img">👈</span>
      </Link>
      <h1
        css={css`
          text-align: center;
          margin-bottom: 20px;
        `}
      >
        {post.frontmatter.title}
      </h1>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  );
}
