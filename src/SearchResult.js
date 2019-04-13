import React from "react";
import { Consumer } from "./SearchContext";

const SearchResult = props => {
  return (
    <ul className="movie-list">
      <Consumer>
        {ctx =>
          ctx.results ? (
            ctx.results.map(movie => (
              <li key={movie.imdbID}>
                <h2 className="movie-title"> {movie.Title} </h2>
                <img src={movie.Poster} />
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