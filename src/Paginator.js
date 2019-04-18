import React from "react";
import { Consumer } from "./SearchContext";
import "./css/paginator.css";

class _Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.maxPaginationButtons = window.matchMedia("(min-width:800px)").matches
      ? 9
      : window.matchMedia("(min-width:600px)").matches
      ? 7
      : window.matchMedia("(min-width:400px)").matches
      ? 4
      : 3;
  }

  buildPages = start => {
    const pages = [];
    start = start - ((start - 1) % this.maxPaginationButtons);
    const end = Math.min(
      this.props.ctx.totalPages,
      start + this.maxPaginationButtons - 1
    );

    for (var i = start; i <= end; ++i) pages.push(i);
    return pages;
  };

  render() {
    const { totalPages, resultPage, changePage } = this.props.ctx;

    return totalPages > 1 ? (
      <ul className="paginator">
        {resultPage > 1 ? (
          <li
            className="paginator-previous"
            onClick={_ => changePage(resultPage - 1)}
          >
            &#x2B05;
          </li>
        ) : (
          ""
        )}

        {this.buildPages(resultPage).map(page => (
          <li
            className={page == resultPage ? "selected page" : "page"}
            key={page}
            onClick={_ => changePage(page)}
          >
            {page}
          </li>
        ))}

        {resultPage < totalPages ? (
          <li
            className="paginator-next"
            onClick={_ => changePage(resultPage + 1)}
          >
            &#x27a1;
          </li>
        ) : (
          ""
        )}
      </ul>
    ) : (
      ""
    );
  }
}
const Paginator = () => {
  return <Consumer>{context => <_Paginator ctx={context} />}</Consumer>;
};

export default Paginator;
