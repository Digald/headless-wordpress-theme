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
  render() {
    return (
      <div className="Home">
        <Header />
        <Banner />
        <div>Sup</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
