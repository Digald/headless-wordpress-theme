import React, { Component } from "react";
import "./Home.css";

// import components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";

/**
 * Front-Page of the application that will be rendered
 */

class Home extends Component {

   /**
   * Checks if the stringified values of two arrays are equal
   * @param {array} array1 First array
   * @param {array} array2 Second array
   * @return {boolean}
   */
  checkIfArraysEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  render() {
    return (
      <div className="Home">
        <Header checkIfArraysEqual={this.checkIfArraysEqual}/>
        <Banner checkIfArraysEqual={this.checkIfArraysEqual}/>
        <div>Sup</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
