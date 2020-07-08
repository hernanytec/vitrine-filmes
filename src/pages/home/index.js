import React, { useState } from 'react';

import './style.css'

import MovieList from '../../components/movieList'
import SearchBar from '../../components/searchbar'

import BASE_URL from '../../service/api'

export default function Home({ history }) {

    const [movieSearch, setMovieSearch] = useState('batman')

    //redireciona para a pagina de detalhes
    const handleMovieClick = movieID => {
        history.push(`movie/${movieID}`)
    }

    return (
        <div className='app-container'>
            <SearchBar onSubmitQuery={setMovieSearch} />
            <MovieList handleMovieClick={handleMovieClick} apiUrl={BASE_URL + `&s=${movieSearch}`} />
        </div>
    )
}
