import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

export default function Log() {
  return (
    <div className='logbackground'>
      <Container>
        <Row>
          <Col className='image'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/laptop-with-profile-3178509-2670451.png" height={400} width={500} alt="Image" />
          </Col>
          <Col className='content'>
            <h1 className='loginheading'> Member Login </h1>
            <Form>
              <Form.Group controlId="email">
                <Form.Control type="text" placeholder=" Enter your Email" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className='logbutton'type="submit">Login</Button>
            </Form>
            <p>Forgot <span>Username <span id='slash'> / </span> Password?</span></p>
            <h3>Create your account <FaArrowRight /> </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
