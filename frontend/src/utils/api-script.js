import API from "./API";
import axios from "axios";

/**
 * Monolithic function for running through API request and setting expected data to state instead of writing out the process on every little component that needs to make an GET request to wordpress.
 * @param {array} arrOfCalls Input which wordpress api call to make between: banner, logo, etc...
 * @return ...TBD
 */
export default function fetchWordpress(arrOfCalls) {
  arrOfCalls.forEach(async call => {
    // Start Logic for fetching an image
    if (call === "banner" || call === "logo") {
      // Remove undefined just in-case to reset localstorage
      if (localStorage.getItem(call) === undefined) {
        localStorage.removeItem(call);
      }

      // Possibly return data here in the future***
      /* 
    if (getLocalData) {
      Return data here
    } 
    */

      // Make API call in background to compare to localstorage
      let results;
      if (call === "banner") {
        results = await API.getGuildBanner();
      } else if (call === "logo") {
        results = await API.getMainLogo();
      }

      // Pull image href and alt-text out of post api call
      const mediaLink = results.data[0]._links["wp:featuredmedia"][0].href;
      const mediaResult = await axios.get(mediaLink);
      const finalData = {
        href: mediaResult.data.source_url,
        alt_text: mediaResult.data.alt_text
      };

      // Check if the API data and the local storage data are the same
      if (JSON.stringify(finalData) !== localStorage.getItem(call)) {
        localStorage.setItem(call, JSON.stringify(finalData));
      }
    } // end if statement for fetching images

    // Start Logic for fetching lists of information
    else if (call === "pages" || call === "posts") {
    }
  });
} // end fetchWordpress()
