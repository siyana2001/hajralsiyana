import React from 'react';
import './social.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Social() {
  return (
    <div className='sociback' style={{ backgroundImage: `url('https://png.pngtree.com/background/20230613/original/pngtree-galaxy-wallpaper-backgrounds-free-picture-image_3408160.jpg')` }}>
      <h1 className='socailname'>SOCIAL BUTTON</h1>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col className='button-container'>
            <Button className='button' variant="warning">Like</Button>
          </Col>
          <Col className='button-container'>
            <Button className='button' variant="light">Comment</Button>
          </Col>
          <Col className='button-container'>
            <Button className='button' variant="primary">Share</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

