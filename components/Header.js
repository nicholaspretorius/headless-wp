import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const linkStyle = {
  marginRight: 15,
};

class Header extends Component {
  render() {
    const { router, title, description, menu_items } = this.props;

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
          {menu_items.length > 0 &&
            menu_items.map((item) => {
              return (
                <Link href={`/${item.url.split("/")[3]}`} key={item.ID}>
                  <a
                    title={item.title}
                    style={linkStyle}
                    className={router.pathname == `/${item.url.split("/")[3]}` ? "active" : ""}
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
