// This file renders the rent page
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MultiStepProgressBar from '../components/ProgressBar/MultiStepProgressBar'
import { useState } from "react";
import "./Rent.css";
import FormQuestions from "../components/RentCarForm/FormQuestions";
import MultiStepForm from "../components/RentCarForm/MultiStepForm";

function Rent() {
  // default state is 1
  const [index, setIndex] = useState(1);

  // decrease the index number by 1 when the "Back" button is clicked
  const backButton = () => {
    if (index > 1) {
      setIndex(index => index - 1);
    }
  }

  // increase the index number by 1 when the "Next" button is clicked
  const nextButton = () => {
    if (index < 3) {
      setIndex(index => index + 1);
    }
  }

  return (
    <div className="tabcontent container col-md-8">
      <h1>Rent</h1>

      <div className="progressbar">
        {/* className="h-100": A height of 100%  */}
        <Container className="h-100">
          <Row className='h-100'>
            <Col className='align-self-center'>

              <MultiStepProgressBar step={index} />
            </Col>
          </Row>

          <Row>
            <Card>
              <Card.Body>

                {/* Pass the parameters "index"(step number) and "FormQuestions" to the component "MultiStepForm" */}
                <MultiStepForm step={index} list={FormQuestions} />

              </Card.Body>

              <Card.Footer className="d-flex justify-content-between">
                <Button onClick={backButton} disabled={index === 1} variant="secondary">Back</Button>
                <Button onClick={nextButton} variant="primary">Next</Button>
              </Card.Footer>

            </Card>
          </Row>
        </Container>
      </div>



    </div>
  );
}

export default Rent;
