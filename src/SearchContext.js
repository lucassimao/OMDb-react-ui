import React from "react";

const SearchContext = React.createContext({
  keyword: "brazil",
  year: 2019,
  searching: false,
  years: [],
  results: [],
  resultPage: 1,
  totalPages: 1,
  pageSize: 10,
  handleKeywordChange() {},
  handleYearChange() {},
  handleSearchRequest() {},
  handleTypeChange() {},
  changePage(idx) {},
  getResults() {}
});

export default SearchContext;
export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
