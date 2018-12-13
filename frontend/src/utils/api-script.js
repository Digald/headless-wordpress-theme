import API from "./API";
import axios from "axios";

/**
 * Monolithic function for running through API request and setting expected data to state instead of writing out the process on every little component that needs to make an GET request to wordpress.
 * @param {array} arrOfCalls Input which wordpress api call to make between: banner, logo, pages, posts, guild
 * @return ...TBD
 */
async function fetchWordpress(arrOfCalls) {
  console.log("fetchWordpress called");
  //test starts here ----------
  const apiReturnArray = await arrOfCalls.map(async call => {
    if (!localStorage.getItem(call)) {
      localStorage.removeItem(call);
    }

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
    } else if (call === "pages" || call === "posts" || call === "guild") {
      let results;
      switch (call) {
        case "pages":
          results = await API.getPages();
          break;
        case "posts":
          console.log(results);
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

  const resolvedData = await Promise.all(apiReturnArray);
  console.log(resolvedData);
  let iteration = 0;
  resolvedData.forEach(element => {
    console.log(iteration);
    localStorage.setItem(arrOfCalls[iteration], JSON.stringify(element));
    iteration++;
  });
  // await arrOfCalls.forEach(async call => {
  //   console.log(`${call} running right now`);
  //   // Remove undefined just in-case to reset localstorage
  //   if (localStorage.getItem(call) === undefined) {
  //     localStorage.removeItem(call);
  //   }
  //   // Start Logic for fetching an image
  //   if (call === "banner" || call === "logo") {
  //     // Make API call in background to compare to localstorage
  //     let results;
  //     if (call === "banner") {
  //       results = await API.getGuildBanner();
  //     } else if (call === "logo") {
  //       results = await API.getMainLogo();
  //     }

  //     // Pull image href and alt-text out of post api call
  //     const mediaLink = results.data[0]._links["wp:featuredmedia"][0].href;
  //     const mediaResult = await axios.get(mediaLink);
  //     const finalData = {
  //       href: mediaResult.data.source_url,
  //       alt_text: mediaResult.data.alt_text
  //     };

  //     // Check if the API data and the local storage data are the same
  //     if (JSON.stringify(finalData) !== localStorage.getItem(call)) {
  //       return localStorage.setItem(call, JSON.stringify(finalData));
  //     }
  //     return;
  //   } // end if statement for fetching images

  //   // Start Logic for fetching lists of information
  //   else if (call === "pages" || call === "posts" || call === "guild") {
  //     let results;
  //     if (call === "pages") {
  //       results = await API.getPages();
  //     } else if (call === "posts") {
  //       console.log(results);
  //     } else if (call === "guild") {
  //       results = await API.getGuild();
  //     }

  //     // Collect data into a single variable and add to local storage
  //     const finalData = results.data;
  //     if (JSON.stringify(finalData) !== localStorage.getItem(call)) {
  //       return localStorage.setItem(call, JSON.stringify(finalData));
  //     }
  //     return;
  //   }
  // }); // end foreach()
} // end fetchWordpress()

export default fetchWordpress;
