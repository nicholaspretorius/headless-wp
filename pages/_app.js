import React from "react";
import App from "next/app";
import fetch from "isomorphic-unfetch";

import Layout from "./../components/Layout";

import config from "./../config";
import "./../styles/styles.css";

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
