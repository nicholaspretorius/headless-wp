import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";

const api = process.env.WP_API;
const apiV = process.env.API_V;
const url = `${api}${apiV}`;
console.log("URL:", url);

const Posts = (props) => {
  return (
    <Layout>
      <h3>Posts</h3>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}?id=${post.id} `}>
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Posts.getInitialProps = async function () {
  const res = await fetch(`${url}/posts`);
  const data = await res.json();

  console.log("Num Posts: ", data.length);
  console.log(`Posts: ${data}`);

  return {
    posts: data.map((entry) => entry),
  };
};

export default Posts;
