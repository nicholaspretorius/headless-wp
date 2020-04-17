import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const wp = process.env.WP_API;
const apiV = process.env.API_V;
const api = `${wp}${apiV}`;

const Post = (props) => {
  const router = useRouter();
  const { post } = props;

  return (
    <Layout>
      <h1>{post.title.rendered}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Layout>
  );
};

Post.getInitialProps = async function (props) {
  const { asPath } = props;
  const id = asPath.split("id=")[1];

  const res = await fetch(`${api}/posts/${id}`);
  const data = await res.json();

  return {
    post: data,
  };
};

export default Post;
