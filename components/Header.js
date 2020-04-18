import Link from "next/link";
import { useRouter } from "next/router";

const linkStyle = {
  marginRight: 15,
};

const Header = (props) => {
  const router = useRouter();
  const { title, description } = props;

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
        <Link href="/">
          <a title="Home Page" style={linkStyle} className={router.pathname == "/" ? "active" : ""}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            title="About Page"
            style={linkStyle}
            className={router.pathname == "/about" ? "active" : ""}
          >
            About
          </a>
        </Link>
        <Link href="/posts">
          <a
            title="Blog Page"
            style={linkStyle}
            className={router.pathname == "/posts" ? "active" : ""}
          >
            Blog
          </a>
        </Link>
      </div>
    </>
  );
};

export default Header;
