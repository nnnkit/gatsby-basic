import React from "react";
import Layout from "../components/layout";
import usePostsData from "../hook/use-postData";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

export default () => {
  const posts = usePostsData();
  return (
    <Layout>
      <ul>
        {posts.map(post => (
          <li
            css={css`
              list-style: none;
            `}
          >
            <Link
              to={post.frontmatter.slug}
              css={css`
                display: flex;
                margin: 1rem 1rem 0 0;
              `}
            >
              <Img
                css={css`
                  width: 200px;
                  border-radius: 10px;
                  margin: 0 1rem 0 0;
                `}
                fluid={post.frontmatter.image.sharp.fluid}
                alt={post.frontmatter.title}
              />
              <div>
                <h2>{post.frontmatter.title}</h2>
                <Link to={post.frontmatter.slug}>Read full post... 👐</Link>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
