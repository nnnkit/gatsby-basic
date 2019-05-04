import React from "react";
import Layout from "../components/layout";
import usePostsData from "../hook/use-postData";
import { Link } from "gatsby";

export default () => {
  const posts = usePostsData();
  return (
    <Layout>
      <ul>
        {posts.map(post => (
          <Link to={post.frontmatter.slug}>
            <li key={post.slug}>{post.excerpt}</li>
          </Link>
        ))}
      </ul>
    </Layout>
  );
};
