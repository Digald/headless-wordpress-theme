import React, { Component } from "react";
import "./Banner.css";

/**
 * Image banner that will run under the navbar of all pages that will give a little more personality on each page.
 */

class Banner extends Component {

  render() {
    return (
      <div className="Banner">
        <img className="Banner__img" src={this.props.bannerData.href} alt={this.props.bannerData.alt_text} />
      </div>
    );
  }
}

export default Banner;
