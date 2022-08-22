import React from "react";
import Movie from "./Movie";
import "./MovieList.css";

const MovieList = (props) => {
  return (
    <ul className="movies-list">
      {props.movies.map((movie, index) => {
        return (
          <Movie
            key={index}
            title={movie.title}
            text={movie.openingText}
            date={movie.releaseDate}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
