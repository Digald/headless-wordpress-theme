// API calls here
import axios from "axios";

export default {
  getPages: async () => {
    return await axios.get(
      `http://localhost/headless-wordpress-theme/wordpress/wp-json/wp/v2/pages`
    );
  },
  getMainLogo: async () => {
    return await axios.get(
      "http://localhost/headless-wordpress-theme/wordpress/wp-json/wp/v2/logos"
    );
  },
  getGuildBanner: async () => {
    return await axios.get(
      "http://localhost/headless-wordpress-theme/wordpress/wp-json/wp/v2/banner"
    );
  },
  getGuild: async () => {
    return await axios.get('http://localhost/headless-wordpress-theme/wordpress/wp-json/wp/v2/guild');
  }
};
