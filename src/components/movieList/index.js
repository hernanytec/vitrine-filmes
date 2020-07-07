/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import MovieCard from '../movieCard';

import './style.css'

export default function MovieList({ apiUrl }) {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [totalResults, setTotalResults] = useState(0)

    useEffect(() => {
        async function loadMovies() {
            const response = await fetch(`http://www.omdbapi.com/?apikey=516f0a3&s=Batman&page=${page}`)
            const data = await response.json()

            //caso haja dados a partir da url
            if (data.Response === "True") {
                setMovies(data.Search)
                setTotalResults(data.totalResults)
            }
        }

        loadMovies()
    }, [page])


    let pages = []

    for (let i = 1; i <= Math.ceil(totalResults / 10); i++) {
        pages.push(i)
    }


    return (
        <>
            <div className='movies'>
                {
                    movies.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                }
            </div>

            <div className='paginator'>
                <ul>
                    <li className={page === 1 ? 'disabled' : null} onClick={() => setPage(page - 1)}>Anterior</li>
                    {
                        pages.map(p => (
                            <li
                                key={p}
                                className={p === page ? 'actual' : null}
                                onClick={e => setPage(parseInt(e.target.innerHTML))}
                            >
                                {p}
                            </li>
                        ))
                    }
                    <li className={page === pages.length ? 'disabled' : null} onClick={() => setPage(page + 1)}>Próximo</li>
                </ul>
            </div>
        </>
    );
}
