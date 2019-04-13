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
      years: [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
      types: ["movie", "series", "episodes"],
      year: "",
      type: "movie",
      searching: false,
      results: [],
      handleKeywordChange: this.handleKeywordChange,
      handleYearChange: this.handleYearChange,
      handleTypeChange: this.handleTypeChange,
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

  handleTypeChange = event => {
    this.setState({
      type: event.target.value
    });
  };
  getResults = _ => {
    return this.state.results;
  };

  handleSearchRequest = _ => {
    this.setState({ searching: true });
    const { keyword, type, year } = this.state;
    new OmdbApi().search(keyword, type, year).then(results => {
      this.setState({ results: results.Search, searching: false });
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
