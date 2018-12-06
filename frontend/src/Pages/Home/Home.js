import React, { Component } from "react";
import "./Home.css";
import fetchWordpress from "../../utils/api-script";

// import components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";

/**
 * Front-Page of the application that will be rendered
 */

class Home extends Component {
  state = {
    logoData: [],
    pagesData: []
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
    console.log(JSON.parse(localStorage.getItem('banner')).altText);
    if (!localStorage.getItem("banner")) {
      await fetchWordpress(['banner']);
    }
    fetchWordpress(['banner']);
    this.setState({
      ...this.state,
      bannerData: JSON.parse(localStorage.getItem("banner")),
    });
  }

  render() {
    if (!this.state.bannerData) {
      return <div>Loading</div>;
    }
    return (
      <div className="Home">
        <Header checkIfArraysEqual={this.checkIfArraysEqual} />
        <Banner bannerInfo={this.state.bannerData} />
        <div>Sup</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
