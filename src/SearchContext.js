import React from "react";

const SearchContext = React.createContext({
  keyword: "brazil",
  year: 2019,
  results: [],
  handleKeywordChange() {},
  handleYearChange() {},
  handleSearchRequest() {},
  getResults() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
