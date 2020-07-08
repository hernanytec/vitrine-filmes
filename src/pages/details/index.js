import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'

import BASE_URL from '../../service/api'

import './style.css'

export default function Details({ match }) {

    const movieId = match.params.id
    const [movie, setMovie] = useState([])


    const createDataChart = value => {
        let positive = 0
        let negative = 0

        if (value.includes('/')) {
            positive = parseFloat(value.split('/')[0])
            negative = parseFloat(value.split('/')[1]) - positive
        } else if (value.includes('%')) {
            positive = parseFloat(value.split('%')[0])
            negative = 100 - positive
        }

        return {
            labels: ['positive', 'negative'],
            datasets: [
                {
                    data: [positive.toFixed(1), negative.toFixed(1)],
                    backgroundColor: ['#04c45b', '#5e5e5e'],
                    borderColor: 'rgba(255,255,255, .2)',
                    borderWidth: 2
                }
            ]
        }
    }

    useEffect(() => {
        async function loadMovie() {
            const response = await fetch(BASE_URL + `&i=${movieId}&plot=full`)
            const data = await response.json()

            //caso a id seja invalida
            if (data.Response === "False") {
                setMovie([])
            } else {
                setMovie(data)
            }
        }

        loadMovie()
    }, [movieId])

    return (
        <div className='details-container'>
            <div className='header'>
                <img alt="capa do filme" src={movie.Poster} />

                <div id='info'>
                    <h1 id='title'>{movie.Title}</h1>
                    <span id='year'>{movie.Year}</span >
                    <span id='duration'>{movie.Runtime}</span>
                    <hr />
                    <p id='description'>{movie.Plot}</p>
                    <p id='cast'>Cast: {movie.Actors}.</p>
                </div>
            </div>

            <div className='ratings-container'>
                <h1>Ratings</h1>
                <div className='charts'>
                    {
                        movie.Ratings && movie.Ratings.map((rate, idx) => (
                            <div key={idx} >
                                <Doughnut
                                    data={createDataChart(rate.Value)}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }} />

                                <p id="rate-value">{rate.Value}</p>
                                <p>{rate.Source}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}