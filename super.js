import React from 'react';
import './super.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Row, Col } from 'react-bootstrap';

function Cric() {
  return (
    <div className='superback' style={{ backgroundImage: `url('https://wallpaper.dog/large/20465778.jpg')` }}>
      <h1 className='supername text-center'>Super over league</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col className='text-center'>
            <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" height={200} width={200} alt="RCB Logo" />
          </Col>
          <Col className='text-center'>
            <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" height={200} width={200} alt="CSK Logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cric;
