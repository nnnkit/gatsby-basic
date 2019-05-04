import React from "react";
import Layout from "../components/layout";
import usePostsData from "../hook/use-postData";
import { Link } from "gatsby";
import Image from "gatsby-image";
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
              <Image
                css={css`
                  width: 100px;
                `}
                fluid={post.frontmatter.image.sharp.fluid}
              />
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
