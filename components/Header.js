import React, { Component } from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

class Header extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <div className="left">
          <Link href="/">
            <a title={title} style={linkStyle} className="site_title">
              {title}
            </a>
          </Link>
          {description && <span className="site_description">{description}</span>}
        </div>
        <div className="right">
          <Link href="/">
            <a title="Home Page" style={linkStyle}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a title="About Page" style={linkStyle}>
              About
            </a>
          </Link>
          <Link href="/posts">
            <a title="Blog Page" style={linkStyle}>
              Blog
            </a>
          </Link>
        </div>
      </>
    );
  }
}

export default Header;
