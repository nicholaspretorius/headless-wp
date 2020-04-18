import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = (props) => {
  const { title, description } = props;

  return (
    <div style={layoutStyle}>
      <Header title={title} description={description} />
      {props.children}
    </div>
  );
};

export default Layout;
