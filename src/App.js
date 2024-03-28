import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MultiStepProgressBar from './components/MultiStepProgressBar';
import MyNavBar from './components/MyNavBar';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
    // default state is 1
    const [index, setIndex] = useState(1);
  
    return (
      <div>
        <MyNavBar />

        {/* className="h-100": A height of 100%  */}
        <Container className="h-100">
          <Row className='h-100'>
            <Col className='align-self-center'>
              <MultiStepProgressBar step={index}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default App;