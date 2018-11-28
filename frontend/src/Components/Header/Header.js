import React, { Component } from "react";
import "./Header.css";
import API from "../../utils/API";

/**
 * Header component that will appear on all pages to serve as navigation and display logos
 */

class Header extends Component {
  state = {
    pages: []
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
    }

    // Check if local storage has data, then add to state
    if (localStorage.getItem("pages")) {
      this.setState({
        pages: [...JSON.parse(localStorage.getItem("pages"))]
      });
    }

    // Make API call in background to compare to localstorage
    const results = await API.getPages();

    // Compare API data to current data to update
    if (
      !this.checkIfArraysEqual(
        results.data,
        JSON.parse(localStorage.getItem("pages"))
      )
    ) {
      localStorage.setItem("pages", JSON.stringify(results.data));
      this.setState({
        pages: [...JSON.parse(localStorage.getItem("pages"))]
      });
    }
  }

  render() {
    console.log(this.state);
    if (this.state.pages < 1) {
      return <div>Loading...</div>;
    }
    return (
      <nav className="header">
        <div className="header__logo">Logo Here</div>
        <ul className="header__pages">
          {this.state.pages.map(page => {
            return (
              <li className="header__pages__page" key={page.id}>
                {page.title.rendered}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Header;
