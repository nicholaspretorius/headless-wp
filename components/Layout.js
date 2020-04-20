import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = (props) => {
  const { title, description, menu_primary } = props;

  return (
    <div style={layoutStyle}>
      <Header title={title} description={description} menu_items={menu_primary} />
      {props.children}
    </div>
  );
};

export default Layout;
