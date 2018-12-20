import React, { Component } from "react";
import "./Home.css";
import fetchWordpress from "../../utils/api-script";

// import components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import GuildTitle from "../../Components/GuildTitle/GuildTitle";
import FeaturedBlogs from "../../Components/FeaturedBlogs/FeaturedBlogs";

/**
 * Front-Page of the application that will be rendered
 */

class Home extends Component {
  state = {};

  async componentDidMount() {
    const calls = ["banner", "pages", "logo", "guild", "posts"];
    calls.forEach(call => {
      if (localStorage.getItem(call)) {
        this.setState({
          ...this.state,
          [call]: JSON.parse(localStorage.getItem(call))
        });
      } else {
        this.setState({
          ...this.state,
          [call]: "Add Data on Wordpress!"
        });
      }
    });
    await fetchWordpress(calls);
    this.setState({
      ...this.state,
      banner: JSON.parse(localStorage.getItem("banner")),
      pages: JSON.parse(localStorage.getItem("pages")),
      logo: JSON.parse(localStorage.getItem("logo")),
      guild: JSON.parse(localStorage.getItem("guild")),
      posts: JSON.parse(localStorage.getItem("posts"))
    });
  }

  render() {
    const { banner, pages, logo, guild, posts } = this.state;
    if (!banner && !pages && !logo && !guild) {
      return <div>Loading</div>;
    }
    return (
      <div className="Home">
        <Header pagesData={pages} logoData={logo} />
        <Banner bannerData={banner} />
        <GuildTitle guildData={guild} pagesData={pages} />
        <FeaturedBlogs postsData={posts} />
        <Footer />
      </div>
    );
  }
}

export default Home;
