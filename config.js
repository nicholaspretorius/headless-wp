const wp = process.env.WP_API;
const v2 = process.env.API_V;

const config = {
  wp,
  v2,
  api: `${wp}/${v2}`,
};

export default config;
