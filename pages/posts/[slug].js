import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const api = process.env.WP_API;
const apiV = process.env.API_V;
const url = `${api}${apiV}`;
console.log("URL:", url);

const Post = (props) => {
  const router = useRouter();
  console.log("Router: ", router);
  console.log("Post: ", props.post);

  return (
    <Layout>
      <h1>{router.query.slug}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

Post.getInitialProps = async function () {
  const res = await fetch(`${url}/posts/5`);
  const data = await res.json();

  console.log(`Post data: ${data}`);

  return {
    post: data,
  };
};

export default Post;
