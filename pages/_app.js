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
    menu_primary: [],
  };

  async componentDidMount() {
    const site = await fetch(api);
    const menu = await fetch(`${api}/menus/v1/menus/primary`);
    const site_data = await site.json();
    const menu_data = await menu.json();

    this.setState({
      title: site_data.name,
      description: site_data.description,
      menu_primary: menu_data.items,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { title, description, menu_primary } = this.state;
    return (
      <Layout title={title} description={description} menu_primary={menu_primary}>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }
}

export default NextApp;
