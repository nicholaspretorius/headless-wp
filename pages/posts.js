import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import config from "./../config";

const { api } = config;

const Posts = (props) => {
  return (
    <Layout>
      <h3>Posts</h3>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Posts.getInitialProps = async function () {
  const res = await fetch(`${api}/posts`);
  const data = await res.json();

  return {
    posts: data.map((entry) => entry),
  };
};

export default Posts;
