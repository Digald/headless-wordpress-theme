import API from "./API";
import axios from "axios";

/**
 * Monolithic function for running through API request and setting expected data to state instead of writing out the process on every little component that needs to make an GET request to wordpress.
 * @param {string} script Input which wordpress api call to make between: banner, logo, etc...
 * @return The function just sets state and then exits. Does not return any value.
 */
export default async function fetchWordpress(script) {
  /**
   * Checks if the stringified values of two arrays are equal
   * @param {array} array1 First array
   * @param {array} array2 Second array
   * @return {boolean}
   */
  function checkIfArraysEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  // define localstorage variables
  const getLocalData = localStorage.getItem(script);

  // For fetching an image
  if (script === "banner" || script === "logo") {
    // Remove undefined just in-case to reset localstorage
    if (getLocalData === undefined) {
      localStorage.removeItem(script);
    }

    // Check if local storage has data, then add to state
    if (getLocalData) {
      console.log('Point 2');
    }

    // Make API call in background to compare to localstorage
    let results;
    if (script === "banner") {
      results = await API.getGuildBanner();
    } else if (script === "logo") {
      results = await API.getMainLogo();
    }

    // Pull image href and alt-text out of post api call
    const mediaLink = results.data[0]._links["wp:featuredmedia"][0].href;
    const mediaResult = await axios.get(mediaLink);
    const href = mediaResult.data.source_url;
    const altText = mediaResult.data.alt_text;
    console.log('Point 3');
    // Compare API results to current data in localstorage
    if (!checkIfArraysEqual([href, altText], JSON.parse(getLocalData))) {
      localStorage.setItem(script, JSON.stringify([href, altText]));
    }
  } // end if statement for fetching images
} // end fetchWordpress()
