import React from "react";
import { render } from "react-dom";
import OmdbApi from "./api/OmdbApi";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import { Provider } from "./SearchContext";
import Paginator from "./Paginator";

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
      pageSize: 10,
      resultPage: 1,
      totalPages: 1,
      handleKeywordChange: this.handleKeywordChange,
      handleYearChange: this.handleYearChange,
      handleTypeChange: this.handleTypeChange,
      getResults: this.getResults,
      handleSearchRequest: this.handleSearchRequest,
      changePage: this.changePage
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

  changePage = page => {
    this.setState({ searching: true });
    const { keyword, type, year } = this.state;

    new OmdbApi().search(keyword, type, year, page).then(results => {
      this.setState({
        results: results.Search,
        searching: false,
        resultPage: page,
        totalPages: results.Search
          ? +results.totalResults / results.Search.length
          : 0
      });
    });
  };

  handleSearchRequest = _ => {
    this.changePage(1);
  };
  render() {
    return (
      <div className="container">
        <Provider value={this.state}>
          <SearchBox />
          <Paginator />
          <SearchResult />
        </Provider>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
