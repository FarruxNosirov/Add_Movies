import React, { useRef } from "react";
import "./AddMovies.css";

const AddMovies = (props) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    props.onAddMovie(movie);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className="control">
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className="control">
        <label htmlFor="release-date">Release Date</label>
        <input type="text" id="release-date" ref={releaseDateRef} />
      </div>
      <button>Add Movies</button>
    </form>
  );
};

export default AddMovies;
