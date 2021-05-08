import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container,Col,Row } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


const Login = ()=>{
  const history = useHistory();

  const onLogin = ()=>{
    localStorage.setItem('role', 'admin');
    history.push('/home')
  }

    return <div>
  <Container >
    <Row  className="justify-content-md-center">
        <Col xs="auto" >
          <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={() => onLogin()}>
                Submit
              </Button>
          </Form>
      </Col>
    </Row>
  </Container>
</div>
}

export default Login;