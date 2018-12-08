import React, { Component } from "react";
import "./GuildTitle.css";

/**
 * This contains the large guild name as the title on the front page, and below it, the pages created on wordpress
 */

class GuildTitle extends Component {
  render() {
    console.log(this.props.guildData);
    return <div className="GuildTitle">
        <h1>{this.props.guildData[0].title.rendered}</h1>
    </div>;
  }
}

export default GuildTitle;