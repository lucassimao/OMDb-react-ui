import React from "react";
import { Consumer } from "./SearchContext";

const SearchBox = () => {
  return (
    <Consumer>
      {ctx => (
        <div className="search-box">
          <input
            onChange={ctx.handleKeywordChange}
            placeholder="keyword ..."
            defaultValue={ctx.keyword}
          />
          <button onClick={ctx.handleSearchRequest} type="button">
            Search
          </button>
        </div>
      )}
    </Consumer>
  );
};

export default SearchBox;
