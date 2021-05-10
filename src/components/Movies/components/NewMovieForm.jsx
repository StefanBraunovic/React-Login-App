import React, { useState } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarTop from '../../navbar/NavbarTop'

export default function NewMovieForm({ movies, setMovies }) {
  const history = useHistory();

  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');


  const getNewId = () => {
    return movies.length + 1
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newMovies = _.cloneDeep(movies);
    newMovies = [
      {
        id: getNewId(),
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
      <Container>
        <NavBarTop/>
        <Row  className="justify-content-md-center">
          <Col md={4} className="text-center">
            <div className="form-fields-container pe-5 ps-5">
              <Form.Group className="mb-4" controlId="movieName">
                <Form.Label>Naziv filma</Form.Label>
                <Form.Control
                  type="text"
                  value={movieTitle}
                  placeholder="Unesite ime filma..."
                  onChange={(e) => setMovieTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="movieYear">
                <Form.Label>Godina izdavanja</Form.Label>
                <Form.Control
                  type="number"
                  from={1900}
                  to={2021}
                  value={movieYear}
                  placeholder="Unesite godinu izdavanja..."
                  onChange={(e) => setMovieYear(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                type="submit"
                className="mb-4 w-100"
              >
              Add Movie
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </Form>
  );
}
