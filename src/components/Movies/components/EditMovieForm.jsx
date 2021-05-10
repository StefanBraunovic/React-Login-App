import React, { useState } from 'react';
import _ from 'lodash';
import { useParams, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditMovieForm({ movies, setMovies }) {
  const { movieId } = useParams();
  const history = useHistory();
  const movie = movies.filter((movie) => movie.id === +movieId)[0];

  const [movieTitle, setMovieTitle] = useState(movie.title);
  const [movieYear, setMovieYear] = useState(movie.year);
 


  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newMovies = _.cloneDeep(movies).filter((mov) => mov.id !== movie.id);
    newMovies = [
      {
        id: +movieId,
        title: movieTitle,
        year: movieYear,
      
      },
      ...newMovies,
    ];
    setMovies(newMovies);
    history.replace('/movies');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Container >
        <Row className="justify-content-md-center">
          <Col md={4} className="text-center">
            <div className="form-fields-container pe-5 ps-5">
              <Form.Group className="mb-4" controlId="movieName">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  type="text"
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="movieYear">
                <Form.Label>Year Realese</Form.Label>
                <Form.Control
                  type="number"
                  from={1900}
                  to={2021}
                  value={+movieYear}
                  onChange={(e) => setMovieYear(e.target.value)}
                />
              </Form.Group>

            

              <Button
                variant="outline-primary"
                type="submit"
                className="mb-4 w-100"
              >
               Save
              </Button>
            </div>
          </Col>
    
        </Row>
      </Container>
    </Form>
  );
}
