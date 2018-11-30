import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import API from "../../utils/API";

/**
 * Header component that will appear on all pages to serve as navigation and display logos
 */

class Header extends Component {
  state = {
    pages: [],
    logo: []
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
    if (localStorage.getItem === undefined) {
      localStorage.removeItem("pages");
      localStorage.removeItem("logo");
    }

    // Check if local storage has data, then add to state
    if (localStorage.getItem("pages") && localStorage.getItem("logo")) {
      this.setState({
        pages: [...JSON.parse(localStorage.getItem("pages"))],
        logo: [...JSON.parse(localStorage.getItem("logo"))]
      });
    }

    // Make API call in background to compare to localstorage
    const pageResults = await API.getPages();
    const logoResults = await API.getMainLogo();

    // Compare API data to current data to update
    if (
      !this.checkIfArraysEqual(
        pageResults.data,
        JSON.parse(localStorage.getItem("pages"))
      )
    ) {
      localStorage.setItem("pages", JSON.stringify(pageResults.data));
      this.setState({
        pages: [...JSON.parse(localStorage.getItem("pages"))]
      });
    }

    // Compare API data to localstorage logo
    const logoPostLink = logoResults.data[0]._links["wp:featuredmedia"][0].href;
    const logoImageResults = await axios.get(logoPostLink);
    const logoHref = logoImageResults.data.source_url;
    const altText = logoImageResults.data.alt_text;
    if (
      !this.checkIfArraysEqual(
        [logoHref, altText],
        JSON.parse(localStorage.getItem("logo"))
      )
    ) {
      localStorage.setItem("logo", JSON.stringify([logoHref, altText]));
      this.setState({
        logo: [...JSON.parse(localStorage.getItem("logo"))]
      });
    }
  } // End of componentDidMount()

  render() {
    if (this.state.pages < 1) {
      return <div>Loading...</div>;
    }
    return (
      <nav className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={this.state.logo[0]} alt={this.state.logo[1]} />
          </div>
          <ul className="header__pages">
            {this.state.pages.map(page => {
              return (
                <Link
                  to={`/pages/${page.title.rendered
                    .replace(" ", "-")
                    .toLowerCase()}/${page.id}`}
                    key={page.id}
                >
                  <li className="header__pages__page">
                    {page.title.rendered}
                  </li>
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
