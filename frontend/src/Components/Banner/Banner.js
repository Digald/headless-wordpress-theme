import React, { Component } from "react";
import "./Banner.css";
import API from "../../utils/API";
import fetchWordpress from '../../utils/api-script';
import axios from "axios";

/**
 * Image banner that will run under the navbar of all pages that will give a little more personality on each page.
 */

class Banner extends Component {

  render() {
    return (
      <div className="Banner">
        <img className="Banner__img" src={this.props.bannerInfo[0]} alt={this.props.bannerInfo[1]} />
      </div>
    );
  }
}

export default Banner;
