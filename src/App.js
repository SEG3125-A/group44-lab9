import React from 'react';
import ContactUsButton from './contactUsButton'
import LanguageSelector from './LanguageSelector';
import MultiStepProgressBar from './components/MultiStepProgressBar';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
    // default state is 1
    const [index, setIndex] = useState(1);
  
    return (
      <div>
        {/* className="h-100": A height of 100%  */}
        <Container className="h-100">
          <Row className='h-100'>
            <Col className='align-self-center'>
              <MultiStepProgressBar step={index}/>
            </Col>
          </Row>
        </Container>

        <LanguageSelector/>
        <ContactUsButton/>
      </div>
    );
  }

export default App;