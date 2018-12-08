import React, { Component } from "react";
import "./Banner.css";

/**
 * Image banner that will run under the navbar of all pages that will give a little more personality on each page.
 */

class Banner extends Component {
  componentDidMount() {
    document.querySelector(".Banner").style.backgroundImage = `url(${
      this.props.bannerData.href
    })`;
  }

  render() {
    return <div className="Banner" />;
  }
}

export default Banner;
