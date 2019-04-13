import React from "react";
import { Consumer } from "./SearchContext";
import spinner from "./img/Spinner-1s-200px.gif";

const handleImgError = evt => {
  evt.target.onerror = null;
  evt.target.src =
    "https://via.placeholder.com/300?text=Sorry+image+is+not+available+anymore";
};

const SearchResult = props => {
  return (
    <ul className="movie-list">
      <Consumer>
        {ctx =>
          ctx.searching ? (
            <img src={spinner} alt="wait ..." />
          ) : ctx.results ? (
            ctx.results.map((movie, index) => (
              <li key={`${movie.imdbID}-${index}`}>
                <h2 className="movie-title"> {movie.Title} </h2>
                <img src={movie.Poster} onError={handleImgError} />
                <section className="movie-details">
                  <p className="movie-plot">{movie.Plot}</p>
                  <span className="movie-year">Year: {movie.Year}</span>
                  <span className="movie-type">Type: {movie.Type}</span>
                  <p>
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
          )
        }
      </Consumer>
    </ul>
  );
};

export default SearchResult;
