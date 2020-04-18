import config from "./../../config";

const { api_posts } = config;

const Post = (props) => {
  const { post } = props;

  return (
    <>
      <h1>{post.title.rendered}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </>
  );
};

Post.getInitialProps = async function (props) {
  const { slug } = props.query;

  const res = await fetch(`${api_posts}/posts?slug=${slug}`);
  const data = await res.json();

  return {
    post: data[0],
  };
};

export default Post;
