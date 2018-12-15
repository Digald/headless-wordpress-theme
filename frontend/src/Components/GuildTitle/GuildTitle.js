import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GuildTitle.css";

/**
 * This contains the large guild name as the title on the front page, and below it, the pages created on wordpress
 */

class GuildTitle extends Component {
  render() {
    const { guildData, pagesData } = this.props;
    return (
      <div className="GuildTitle">
        <h1 className="GuildTitle__title">{guildData[0].title.rendered}</h1>
        <div className="GuildTitle__divider" />
        <ul className="GuildTitle__pages">
          {pagesData.map(page => {
            return (
              <Link
                to={`/pages/${page.title.rendered
                  .replace(" ", "-")
                  .toLowerCase()}/${page.id}`}
                key={page.id}
              >
                <li className="GuildTitle__pages__page">
                  {page.title.rendered}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GuildTitle;
