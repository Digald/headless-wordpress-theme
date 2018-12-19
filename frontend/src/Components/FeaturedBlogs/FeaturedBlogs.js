import React, { Component } from "react";
import "./FeaturedBlogs.css";

/**
 * The component at the bottom of the front-page that displays the featured blogs of the site. It includes the latest blog post, and a pinned or sticky post that will never rotate out. Usually an information post.
 */

class FeaturedBlogs extends Component {
  state = {};
  /**
   * In a component did mount, pop off the last value of array and pass it to state, and then use that post for the start here section
   */
  componentWillMount() {
    const startingPost = this.props.postsData.slice(-1);
    this.setState({
      ...this.state,
      startingPost
    });
  }

  render() {
    const { postsData } = this.props;
    const {startingPost} = this.state;
    console.log(startingPost);
    return (
      <div className="FeaturedBlogs">
        <div className="FeaturedBlogs__section">
          <h2>Latest News</h2>
          <div className="FeaturedBlogs__divider" />
          <h3>{postsData[0].title.rendered}</h3>
          <p className="FeaturedBlogs__latest-news__excerpt">
            {postsData[0].excerpt.rendered}
          </p>
        </div>
        <div className="FeaturedBlogs__section">
          <h2>Start Here</h2>
          <div className="FeaturedBlogs__divider" />
          <h3>{startingPost[0].title.rendered}</h3>
          <p>{startingPost[0].excerpt.rendered}</p>
        </div>
      </div>
    );
  }
}

export default FeaturedBlogs;
