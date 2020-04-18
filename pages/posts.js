import PostsIndex from "./../components/PostsIndex";

const Posts = () => {
  return (
    <>
      <h3>Posts</h3>
      <PostsIndex limit="2" order="desc" />
    </>
  );
};

export default Posts;
