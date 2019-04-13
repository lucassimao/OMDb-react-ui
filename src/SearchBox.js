import React from "react";
import { Consumer } from "./SearchContext";

const SearchBox = () => {
  return (
    <Consumer>
      {ctx => (
        <div className="search-box">
          <input
            onKeyDown={evt =>
              evt.keyCode === 13 ? ctx.handleSearchRequest() : null
            }
            onChange={ctx.handleKeywordChange}
            placeholder="keyword ..."
            defaultValue={ctx.keyword}
          />
          <select
            value={ctx.year}
            onChange={ctx.handleYearChange}
            onBlur={ctx.handleYearChange}
          >
            <option value="">All</option>
            {ctx.years.map(y => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select
            value={ctx.type}
            onChange={ctx.handleTypeChange}
            onBlur={ctx.handleTypeChange}
          >
            <option value="">All</option>
            {ctx.types.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button onClick={ctx.handleSearchRequest} type="button">
            Search
          </button>
        </div>
      )}
    </Consumer>
  );
};

export default SearchBox;
