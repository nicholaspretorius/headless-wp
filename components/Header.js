import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  return (
    <div>
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
  );
};

export default Header;
