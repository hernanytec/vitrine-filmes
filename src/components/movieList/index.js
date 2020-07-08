/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import MovieCard from '../movieCard';

import './style.css'

import notFound from '../../assets/not_found.svg'
export default function MovieList({ apiUrl }) {

    const [selectedPage, setSelectedPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [totalResults, setTotalResults] = useState(0)

    async function loadMovies() {
        const response = await fetch(apiUrl + `&page=${selectedPage}`)
        const data = await response.json()

        //caso haja dados a partir da url
        if (data.Response === "True") {
            setMovies(data.Search)
            setTotalResults(data.totalResults)
        } else {
            setMovies([])
            setTotalResults(0)
        }
    }

    useEffect(() => {
        loadMovies()
    }, [selectedPage])

    useEffect(() => {
        loadMovies()
        setSelectedPage(1)
    }, [apiUrl])


    let paginatorPages = []

    for (let index = 1; index <= Math.ceil(totalResults / 10); index++) {
        paginatorPages.push(index)
    }

    return (
        <>
            <div className='movies-gallery'>
                {
                    totalResults > 0
                        ?
                        movies.map(movie => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))

                        : <div className='not-found-container'>
                            <img style={{ width: '300px', height: '300px' }} alt='nenhum resultado encontrado' src={notFound} />
                            <p>Não encontramos nenhum filme com esse título :(</p>
                        </div>
                }
            </div>

            {
                totalResults > 0 ?
                    <div className='paginator'>

                        <ul>
                            <li className={selectedPage === 1 ? 'disabled' : null}
                                onClick={() => setSelectedPage(selectedPage - 1)}>Anterior</li>
                            {

                                paginatorPages.slice(Math.max(selectedPage - 3, 0), selectedPage + 3).map(page => (
                                    <li
                                        key={page}
                                        className={page === selectedPage ? 'selected' : null}
                                        onClick={e => setSelectedPage(parseInt(e.target.innerHTML))}
                                    >
                                        {page}
                                    </li>
                                ))
                            }
                            <li className={selectedPage === paginatorPages.length ? 'disabled' : null}
                                onClick={() => setSelectedPage(selectedPage + 1)}>Próxima</li>
                        </ul>
                    </div>
                    : null
            }
        </>
    );
}
