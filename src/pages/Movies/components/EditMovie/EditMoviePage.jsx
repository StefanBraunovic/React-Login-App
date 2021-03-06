import React from 'react';
import EditMovieForm from '../../../../components/Movies/components/EditMovieForm';

export default function EditMoviePage({ movies, setMovies }) {
  return (
    <>
      <h2 className="text-center mb-4">Edit movie</h2>
      <EditMovieForm movies={movies} setMovies={setMovies} />;
    </>
  );
}
