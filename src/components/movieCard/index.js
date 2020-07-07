import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MovieCard({ movie }) {

    return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>)
}
