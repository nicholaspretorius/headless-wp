import Layout from "../components/Layout";
import PostsIndex from "./../components/PostsIndex";

const Posts = () => {
  return (
    <Layout>
      <h3>Posts</h3>
      <PostsIndex limit="2" order="desc" />
    </Layout>
  );
};

export default Posts;
