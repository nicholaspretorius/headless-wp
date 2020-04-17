module.exports = () => {
  return {
    env: {
      WP_API: "http://localhost:10000",
      API_V: "/wp-json/wp/v2",
    },
  };
};
