import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const dataURL =
      "http://localhost/headless-wp/wordpress/wp-json/wp/v2/movies?_embed";
    const getData = await axios.get(dataURL);
    this.setState({
      movies: getData.data
    });
  }

  render() {
    let movies;
    if (this.state.movies.length > 0) {
      movies = this.state.movies.map((movie, index) => {
        return (
          <div key={index}>
            <img
              src={
                movie._embedded["wp:featuredmedia"][0].media_details.sizes.large
                  .source_url
              }
              alt="movie poster"
            />
            <p>
              <strong>Title:</strong> {movie.title.rendered}
            </p>
            <p>
              <strong>Release Year:</strong> {movie.acf.release_year}
            </p>
            <p>
              <strong>Rating:</strong> {movie.acf.rating}
            </p>
            <p>
              <strong>Description:</strong> {movie.acf.description}
            </p>
          </div>
        );
      });
    }

    return (
      <div>
        <h2>Star Wars Movies</h2>
        {movies}
      </div>
    );
  }
}

export default App;
