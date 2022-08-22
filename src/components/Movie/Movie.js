import React from "react";
import "./Movie.css";
const Movie = (props) => {
  return (
    <li className="movie">
      <h1>{props.title}</h1>
      <h3>{props.data}</h3>
      <p>{props.text}</p>
    </li>
  );
};

export default Movie;
