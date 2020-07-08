import React from 'react';

import Card from 'react-bootstrap/Card';

import './style.css'

export default function MovieCard({ movie, handleClick }) {

    return (
        <Card onClick={e => handleClick(movie.imdbID)} className='d-flex justify-content-center'>
            <Card.Img variant="top" src={movie.Poster} />

            <p className='title'>{movie.Title}</p>
        </Card>
    )
}
