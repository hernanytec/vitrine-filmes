/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import MovieCard from './components/movieCard'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function loadMovies() {
      const response = await fetch('http://www.omdbapi.com/?s=Batman&page=1&apikey=516f0a3')
      const data = await response.json()
      setMovies(data.Search)
    }

    loadMovies()
  }, [])

  return (
    <div className="App">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default App;
