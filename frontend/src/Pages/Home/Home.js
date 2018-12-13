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
    // logoData: {},
    // pagesData: [],
    // guildData: [],
    // postsData: [],
    // bannerData: {}
  };

  async componentDidMount() {
    const calls = ["banner", "pages", "logo", "guild"];
    calls.forEach(call => {
      if (localStorage.getItem(call)) {
        this.setState({
          ...this.state,
          [call]: JSON.parse(localStorage.getItem(call))
        });
      }
    });
    await fetchWordpress(calls);
    // this.setState({
    //   ...this.state,
    //   banner: JSON.parse(localStorage.getItem("banner")),
    //   pages: JSON.parse(localStorage.getItem("pages")),
    //   logo: JSON.parse(localStorage.getItem("logo")),
    //   guild: JSON.parse(localStorage.getItem("guild"))
    // });
  }

  render() {
    console.log(this.state);
    if (!this.state.banner) {
      return <div>Loading</div>;
    }
    console.log("components activated");
    console.log("------------------");
    console.log(this.state);
    return (
      <div className="Home">
        <Header
          pagesData={this.state.pages}
          logoData={this.state.logo}
        />
        <Banner bannerData={this.state.banner} />
        <GuildTitle
          guildData={this.state.guild}
          pagesData={this.state.pages}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
