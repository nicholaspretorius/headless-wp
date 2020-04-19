import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import config from "./../config";

const { api } = config;

const linkStyle = {
  marginRight: 15,
};

class Header extends Component {
  state = {
    menu: [],
  };

  async componentDidMount() {
    // TODO: Move menus call to _app
    const res = await fetch(`${api}/menus/v1/menus/primary`);
    const data = await res.json();

    this.setState({ menu: data.items });
  }

  render() {
    const { router, title, description } = this.props;
    const { menu } = this.state;
    return (
      <>
        <div className="left">
          <Link href="/">
            <a title={title} style={linkStyle}>
              {title}
            </a>
          </Link>
          {description && <span className="site_description">{description}</span>}
        </div>
        <div className="right">
          {menu.length > 0 &&
            menu.map((item) => {
              return (
                <Link href={`/${item.url.split("/")[3]}`} key={item.ID}>
                  <a
                    title={item.title}
                    style={linkStyle}
                    className={router.pathname == `/${item.slug}` ? "active" : ""}
                  >
                    {item.title}
                  </a>
                </Link>
              );
            })}
        </div>
      </>
    );
  }
}

export default withRouter(Header);
