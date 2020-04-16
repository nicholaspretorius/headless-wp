import Layout from "./../components/Layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <PostLink title="Hello world!" />
        <PostLink title="Let's get going" />
        <PostLink title="Our team" />
      </ul>
    </Layout>
  );
};

export default Blog;
