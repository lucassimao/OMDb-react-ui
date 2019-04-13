import React from "react";

const SearchContext = React.createContext({
  keyword: "brazil",
  year: 2019,
  searching:false,
  years: [],
  results: [],
  handleKeywordChange() {},
  handleYearChange() {},
  handleSearchRequest() {},
  handleTypeChange() {},
  getResults() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
