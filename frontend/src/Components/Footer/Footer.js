import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__content">
          <p>Headless Wordpress by Mark Alaniz</p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Digald"
          >
            <i className="fab fa-github-alt" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/markalaniz/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
