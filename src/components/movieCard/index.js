import React from 'react';

import Card from 'react-bootstrap/Card';

import './style.css'

export default function MovieCard({ movie }) {

    return (
        <Card className='d-flex justify-content-center'>
            <Card.Img variant="top" src={movie.Poster} />

            <p class='title'>{movie.Title}</p>
        </Card>
    )
}
