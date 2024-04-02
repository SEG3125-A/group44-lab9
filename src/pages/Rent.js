// This file renders the rent page
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import MultiStepProgressBar from '../components/ProgressBar/MultiStepProgressBar'
import { useState } from "react";
import "./Rent.css";
import FormQuestions from "../components/RentCarForm/FormQuestions";
import MultiStepForm from "../components/RentCarForm/MultiStepForm";
import { useTranslation } from 'react-i18next';

function Rent() {
  const { t } = useTranslation();

  // default state is 1
  const [index, setIndex] = useState(1);

  const totalPageCount = FormQuestions.length;

  const [validated, setValidated] = useState(false);

  // initialize it as an empty object
  const [pagesAnswers, setPageAnswers] = useState({});

  const onPagesAnswerUpdate = (step, answerObj) => {
    // ""..pagesAnswers" keep the previous pagesAnswers, just update a particular answer
    setPageAnswers({...pagesAnswers, [step]: answerObj});
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Check if it's the last step and the form is valid
    if (index === totalPageCount && form.reportValidity() === true) {
      // prevent the form from being submitted
      event.preventDefault();
      event.stopPropagation();
    }

    // Set form validation flag
    setValidated(true);

    // Move to next step if it's not the last step
    if (index < totalPageCount && form.reportValidity() === true) {
      // if (index < totalPageCount) {
      event.preventDefault();
      event.stopPropagation();

      nextButton();
      setValidated(false);
    }
  };

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
    <div className="container col-md-8">
      <h1>{t("rent_tap")}</h1>

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
              <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Card.Body>

                  {/* Pass the parameters "index"(step number) and "FormQuestions" to the component "MultiStepForm" */}
                  <MultiStepForm step={index} list={FormQuestions} onPageUpdate={onPagesAnswerUpdate} pagesAnswers={pagesAnswers} />
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <Button onClick={backButton} disabled={index === 1} variant="secondary">{t("back_button_msg")}</Button>

                  {/* we handle the submit through the Form "onSubmit" property by using the function handleSubmit() */}
                  <Button type="submit" variant="primary">{index === totalPageCount ? t('submit_button_msg') : t('next_button_msg')}</Button>
                </Card.Footer>

              </Form>

            </Card>
          </Row>
        </Container>
      </div>



    </div>
  );
}

export default Rent;
