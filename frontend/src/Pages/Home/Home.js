import React, { Component } from "react";
import "./Home.css";
import fetchWordpress from "../../utils/api-script";

// import components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import GuildTitle from "../../Components/GuildTitle/GuildTitle";

/**
 * Front-Page of the application that will be rendered
 */

class Home extends Component {
  state = {
    logoData: [],
    pagesData: [],
    guildData: [],
    postsData: []
  };

  async componentDidMount() {
    if (!localStorage.getItem("banner")) {
      await fetchWordpress(["banner", "pages", "logo", "guild"]);
    }
    fetchWordpress(["banner", "pages", "logo", "guild"]);
    this.setState({
      ...this.state,
      bannerData: JSON.parse(localStorage.getItem("banner")),
      pagesData: JSON.parse(localStorage.getItem("pages")),
      logoData: JSON.parse(localStorage.getItem("logo")),
      guildData: JSON.parse(localStorage.getItem("guild"))
    });
  }

  render() {
    if (!this.state.bannerData) {
      return <div>Loading</div>;
    }
    return (
      <div className="Home">
        <Header
          pagesData={this.state.pagesData}
          logoData={this.state.logoData}
        />
        <Banner bannerData={this.state.bannerData} />
        <GuildTitle guildData={this.state.guildData} />
        <Footer />
      </div>
    );
  }
}

export default Home;
