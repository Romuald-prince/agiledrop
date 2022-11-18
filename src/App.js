import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import "./App.scss";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY_API}&language=en-US&page=1`
    );
    const movies = await data.json();

    setPopular(movies.results);
    setFiltered(movies.results);
  };
  const showMoreItems = () => {
    setVisible((preValue) => preValue + 20);
  };
  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="popular-movies">
        {filtered.slice(0, visible).map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>

      <button onClick={showMoreItems} className="load">
        Load More
      </button>
    </div>
  );
}

export default App;
