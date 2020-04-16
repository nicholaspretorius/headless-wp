import Layout from "./../components/Layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    {/* <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link> */}
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {/* <PostLink title="Hello world!" /> */}
        <PostLink id="Hello world" />
        <PostLink id="Our team" />
      </ul>
    </Layout>
  );
};

export default Blog;
