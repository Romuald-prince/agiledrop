import React from "react";

function Movie({ movie }) {
  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
      <h2>{movie.title}</h2>
    </div>
  );
}

export default Movie;
