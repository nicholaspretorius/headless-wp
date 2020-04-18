import React from "react";
import App from "next/app";

import Layout from "./../components/Layout";

import config from "./../config";

const { api } = config;

class NextApp extends App {
  state = {
    title: "",
    description: "",
  };

  async componentDidMount() {
    const res = await fetch(api);
    const data = await res.json();

    this.setState({
      title: data.name,
      description: data.description,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { title, description } = this.state;
    return (
      <Layout title={title} description={description}>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }
}

export default NextApp;
