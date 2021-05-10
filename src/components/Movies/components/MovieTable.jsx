import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { useHistory } from 'react-router';

export default function MovieTable({
  id,
  title,
  year,
  deleteMovie,
}) {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/movies/${id}`);
  };

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    deleteMovie(id);
  };

  return (
    <Table striped bordered hover variant="dark"  onClick={onClickHandler}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Year</th>
      <th>Delete</th>
      {/* <th>Username</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{title}</td>
      <td>{year}</td>
      <td><Button  style={{marginLeft:"20px"}}   variant="danger"  onClick={onDeleteHandler}>X</Button></td>
   
    </tr>

  </tbody>
</Table>
  );
  
}

