import React from "react";
import { Consumer } from "./SearchContext";
import spinner from "./img/Spinner-1s-200px.gif";
import "./css/searchresult.css";

const handleImgError = evt => {
  evt.target.onerror = null;
  evt.target.src =
    "https://via.placeholder.com/300?text=Sorry+image+is+not+available+anymore";
};

const SearchResult = props => {
  return (
    <Consumer>
      {ctx => {
        return ctx.searching ? (
          <div className="loader">
            <img src={spinner} alt="wait ..." />
          </div>
        ) : (
          <ul className="movie-list">
            {ctx.results ? (
              ctx.results.map((movie, index) => (
                <li key={`${movie.imdbID}-${index}`}>
                  <h2 className="movie-title">{movie.Title}</h2>
                  <img
                    className="movie-banner"
                    src={movie.Poster}
                    onError={handleImgError}
                  />
                  <section className="movie-details">
                    <p className="movie-plot">{movie.Plot}</p>
                    <span className="movie-year">Year: {movie.Year}</span>
                    <span className="movie-type">Type: {movie.Type}</span>
                    <p className="link-imdb">
                      <a
                        target="_blank"
                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                      >
                        Link IMDb
                      </a>
                    </p>
                  </section>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        );
      }}
    </Consumer>
  );
};

export default SearchResult;
