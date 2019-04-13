import React from "react";
import { render } from "react-dom";
import OmdbApi from "./api/OmdbApi";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import { Provider } from "./SearchContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "brazil",
      year: 2019,
      results: [],
      handleKeywordChange: this.handleKeywordChange,
      handleYearChange: this.handleYearChange,
      getResults: this.getResults,
      handleSearchRequest: this.handleSearchRequest
    };
  }

  componentDidMount() {
    this.handleSearchRequest();
  }

  handleKeywordChange = event => {
    this.setState({
      keyword: event.target.value
    });
  };
  handleYearChange = event => {
    this.setState({
      year: event.target.value
    });
  };
  getResults = _ => {
    return this.state.results;
  };

  handleSearchRequest = _ => {
    new OmdbApi().search(this.state.keyword).then(results => {
      this.setState({ results: results.Search });
    });
  };
  render() {
    return (
      <div className="container">
        <Provider value={this.state}>
          <SearchBox />
          <SearchResult />
        </Provider>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
