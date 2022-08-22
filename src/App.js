import React, { useState, useCallback, useEffect } from "react";

import "./App.css";
import AddMovies from "./components/AddMovies/AddMovies";
import MovieList from "./components/Movie/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const featchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-https-d084f-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong?");
      }
      const data = await response.json();

      const loadeMovies = [];

      for (const key in data) {
        loadeMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadeMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    featchMoviesHandler();
  }, [featchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-https-d084f-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Fount no movies</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isloading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovies onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={featchMoviesHandler}>Featch Movies </button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
