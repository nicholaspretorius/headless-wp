import Layout from "../../components/Layout";
import config from "./../config";

const { api } = config;

const Post = (props) => {
  const { post } = props;

  return (
    <Layout>
      <h1>{post.title.rendered}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Layout>
  );
};

Post.getInitialProps = async function (props) {
  const { slug } = props.query;

  const res = await fetch(`${api}/posts?slug=${slug}`);
  const data = await res.json();

  return {
    post: data[0],
  };
};

export default Post;
