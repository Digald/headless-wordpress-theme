import API from "./API";
import axios from "axios";

/**
 * Monolithic function for running through API request and setting expected data to state instead of writing out the process on every little component that needs to make an GET request to wordpress.
 * @param {array} arrOfCalls Input which wordpress api call to make between: banner, logo, pages, posts, guild
 * @return ...TBD
 */
async function fetchWordpress(arrOfCalls) {

  // Map over each element and call specific API url
  const apiReturnArray = await arrOfCalls.map(async call => {
    if (!localStorage.getItem(call)) {
      localStorage.removeItem(call);
    }

    // API calls that require images and alt text
    if (call === "banner" || call === "logo") {
      let results;
      switch (call) {
        case "banner":
          results = await API.getGuildBanner();
          break;
        case "logo":
          results = await API.getMainLogo();
          break;
        default:
          break;
      }

      const mediaLink = results.data[0]._links["wp:featuredmedia"][0].href;
      const mediaResult = await axios.get(mediaLink);
      const finalData = {
        href: mediaResult.data.source_url,
        alt_text: mediaResult.data.alt_text
      };
      return finalData;
    }

    // API calls that will simply return array of information
    else if (call === "pages" || call === "posts" || call === "guild") {
      let results;
      switch (call) {
        case "pages":
          results = await API.getPages();
          break;
        case "posts":
          results = await API.getPosts();
          break;
        case "guild":
          results = await API.getGuild();
          break;
        default:
          break;
      }

      const finalData = results.data;
      return finalData;
    }
  }); // end map

  // Take resolved data and add it to local storage
  const resolvedData = await Promise.all(apiReturnArray);
  let iteration = 0;
  resolvedData.forEach(element => {
    localStorage.setItem(arrOfCalls[iteration], JSON.stringify(element));
    iteration++;
  });
} // end fetchWordpress()

export default fetchWordpress;
