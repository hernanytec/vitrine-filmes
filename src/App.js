import React, { useState } from 'react';

import './App.css'

import MovieList from './components/movieList'
import SearchBar from './components/searchbar'

export default function App() {

  const [movieSearch, setMovieSearch] = useState('batman')
  const url = `http://www.omdbapi.com/?apikey=516f0a3&s=${movieSearch}`

  return (
    <div className='app-container'>
      <SearchBar onSubmitQuery={setMovieSearch} />
      <MovieList apiUrl={url} />
    </div>
  )
}
