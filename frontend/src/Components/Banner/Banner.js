import React, { Component } from "react";
import "./Banner.css";
import API from "../../utils/API";
import axios from "axios";

/**
 * Image banner that will run under the navbar of all pages that will give a little more personality on each page.
 */

class Banner extends Component {
  state = {
    bannerInfo: []
  };

  /**
   * Checks if the stringified values of two arrays are equal
   * @param {array} array1 First array
   * @param {array} array2 Second array
   * @return {boolean}
   */
  checkIfArraysEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  async componentDidMount() {
    // Remove undefined just in-case to reset localstorage
    if (localStorage.getItem("banner") === undefined) {
      localStorage.removeItem("banner");
    }

    // Check if local storage has data, then add to state
    if (localStorage.getItem("banner")) {
      this.setState({
        bannerInfo: [...JSON.parse(localStorage.getItem("banner"))]
      });
    }

    // Make API call in background to compare to localstorage
    const bannerResults = await API.getGuildBanner();

    // Pull specific data out of api call
    const bannerMediaPost = bannerResults.data[0]._links['wp:featuredmedia'][0].href;
    const bannerMediaResult = await axios.get(bannerMediaPost);
    const bannerHref = bannerMediaResult.data.source_url;
    const altText = bannerMediaResult.data.alt_text;

    // Compare API results to current data in localstorage
    if (
      !this.checkIfArraysEqual(
        [bannerHref, altText],
        JSON.parse(localStorage.getItem("banner"))
      )
    ) {
      localStorage.setItem("banner", JSON.stringify([bannerHref, altText]));
      this.setState({
        bannerInfo: [...JSON.parse(localStorage.getItem("banner"))]
      });
    }
  }

  render() {
    return <div className="Banner" />;
  }
}

export default Banner;
