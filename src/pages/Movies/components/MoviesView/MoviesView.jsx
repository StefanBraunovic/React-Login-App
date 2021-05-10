import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import MovieTable from '../../../../components/Movies/components/MovieTable'
import NavbarTop from '../../../../components/navbar/NavbarTop';

export default function MoviesPage({ movies, setMovies }) {
  const history = useHistory();

  const onAddNewMovieButonHandler = () => {
    history.push('/movies/new');
  };

  const deleteMovie = (id) => {
    const newMovies = _.cloneDeep(movies).filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };

  const moviesList = movies.map((movie) => (
    <Col s={12} md={6} xl={4} key={movie.id}>
      <MovieTable {...movie} deleteMovie={deleteMovie} />
    </Col>
  ));
  return (
    <div>
      <h2 className="text-center mb-4">Filmovi</h2>
      <Container>
      <NavbarTop/>
      <Button
          onClick={onAddNewMovieButonHandler}
          variant="success"
          style={{
            position: 'absolute',
            top: '3rem',
            right: '4rem',
            boxShadow: '5px 3px 6px rgba(0, 0, 0, .4)',
            marginTop:'70px'
          }}
        >
          + Add Movie
        </Button>
        <Row className="g-3">{moviesList}</Row>
     
      </Container>
    </div>
  );
}
