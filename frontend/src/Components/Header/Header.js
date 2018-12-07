import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import API from "../../utils/API";

/**
 * Header component that will appear on all pages to serve as navigation and display logos
 */

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="header">
        <div className="header__container">
          <div className="header__logo">
            <img
              src={this.props.logoData.href}
              alt={this.props.logoData.alt_text}
            />
          </div>
          <ul className="header__pages">
            <Link to="/">
              <li className="header__pages__page">Home</li>
            </Link>
            {this.props.pagesData.map(page => {
              return (
                <Link
                  to={`/pages/${page.title.rendered
                    .replace(" ", "-")
                    .toLowerCase()}/${page.id}`}
                  key={page.id}
                >
                  <li className="header__pages__page">{page.title.rendered}</li>
                </Link>
              );
            })}
          </ul>
          <div className="header__pages--mobile">
            <div />
            <div />
            <div />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
