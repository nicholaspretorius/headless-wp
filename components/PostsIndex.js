import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import config from "./../config";

const { api } = config;

class PostsIndex extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const res = await fetch(`${api}/posts`);
    const data = await res.json();
    this.setState({ posts: data.map((entry) => entry) });
  }

  render() {
    const { posts } = this.state;

    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default PostsIndex;
