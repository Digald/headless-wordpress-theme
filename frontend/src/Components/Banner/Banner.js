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

  async componentDidMount() {
    console.log(this.props);
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
    const bannerMediaPost =
      bannerResults.data[0]._links["wp:featuredmedia"][0].href;
    const bannerMediaResult = await axios.get(bannerMediaPost);
    const bannerHref = bannerMediaResult.data.source_url;
    const altText = bannerMediaResult.data.alt_text;

    // Compare API results to current data in localstorage
    if (
      !this.props.checkIfArraysEqual(
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
    return (
      <div className="Banner">
        <img className="Banner__img" src={this.state.bannerInfo[0]} alt={this.state.bannerInfo[1]} />
      </div>
    );
  }
}

export default Banner;
