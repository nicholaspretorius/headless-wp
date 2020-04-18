const wp = process.env.WP_URL;
const wp_info = process.env.WP_JSON;
const v2 = process.env.API_V;
const api = `${wp}/${wp_info}`;

const config = {
  wp,
  wp_info,
  v2,
  api,
  api_posts: `${api}/${v2}`,
};

export default config;
