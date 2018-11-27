import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="header__logo">Logo Here</div>
        <div className="header__pages">List</div>
      </nav>
    );
  }
}

export default Header;
