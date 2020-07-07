/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import MovieCard from '../movieCard'

import './style.css'

export default function MovieList() {
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
        <div class='d-flex flex-row justify-content-around flex-wrap'>
            {
                movies.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))
            }
        </div>
    );
}
