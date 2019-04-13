import React from "react";
import { render } from "react-dom";
import OmdbApi from "./api/OmdbApi";

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    new OmdbApi().moviesByYear(2019).then(movie => {
      console.log(movie);
      this.setState({ movie });
    });
  }

  render() {
    if (this.state.movie) {
      return (
        <div>
          <h1> {this.state.movie.Title} </h1>
          <img src={this.state.movie.Poster} />
          <p>{this.state.movie.Plot}</p>
        </div>
      );
    } else return <h1> wait ...</h1>;
  }
}
render(<App />, document.getElementById("root"));
