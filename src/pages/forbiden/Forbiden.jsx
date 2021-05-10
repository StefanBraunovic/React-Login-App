import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

const Forbidden = () => {
    const history = useHistory();
    return <Container >
        <Row  className="justify-content-md-center">
           <Col  md={4} className="text-center">
        This page is forbidden! Please log in!
        <button className="primary" onClick={() => history.push('/login')}>Log in</button>
           </Col> 
        </Row>
    </Container>
}

export default Forbidden;