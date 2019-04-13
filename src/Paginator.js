import React from "react";
import { Consumer } from "./SearchContext";

const buildPages = totalPages => {
  const pages = [];
  for (var i = 1; i <= totalPages; ++i) pages.push(i);

  return pages;
};

const Paginator = _ => (
  <Consumer>
    {ctx => (
      <ul className="paginator">
        {buildPages(ctx.totalPages).map((page, index) => (
          <li
            className={index + 1 == ctx.resultPage ? "selected" : ""}
            key={page}
            onClick={_ => ctx.changePage(index + 1)}
          >
            {page}
          </li>
        ))}
      </ul>
    )}
  </Consumer>
);

export default Paginator;
