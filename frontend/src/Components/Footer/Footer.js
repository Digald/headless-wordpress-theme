import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return <div className="Footer">
      <div className="Footer__content">
        <p>Headless Wordpress by Mark Alaniz</p>
        <i className="fab fa-github-alt"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>;
  }
}

export default Footer;
