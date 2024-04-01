// This file renders each step on Rent page

// This file takes the parameter "list" from the file "FormQuestions", 
// then displays the questions on each "FormItem" component

import { useState, useEffect } from 'react';
import { FormItem } from "./FormItem";
import { Form, Row, Col, Alert } from "react-bootstrap";
import SelectableCard from "../Card/SelectableCard";
import Step3 from './Step3';

// Render the items horizontally for the first step
// function renderFormItemRow(title, items) {
//     return (
//         <Row className="mt-3 mb-3">
//             <Col>
//                 <Form.Label column>
//                     <h5>{title}</h5>
//                 </Form.Label>
//             </Col>

//             {items?.map((item, index) => (
//                 <Col key={item.label}>
//                     <FormItem item={item} onChange={updateAnswers} />
//                 </Col>
//             ))
//             }
//         </Row>
//     )
// }

// // Render the car type in a grid
// function renderCarTypeGrid(items) {
//     const [selectedItemId, setSelectedItemId] = useState(null);

//     // Update the 'selectedItemId' state to the clicked card's ID
//     const handleCardClick = (itemId) => {
//         setSelectedItemId(itemId);
//     };

//     return (
//         <Row xs={1} md={2} className="g-4">
//             {items?.map((item, index) => (
//                 <Col key={item.label}>
//                     <SelectableCard
//                         key={item.id}
//                         myItem={item}

//                         /* To make a list of cards where only one can be selected at a time, you can manage the selection state in a parent component.  */
//                         // pass the state to the child component
//                         isSelected={item.id === selectedItemId}

//                         // pass a callback function from the parent to handle the selection
//                         // set up a click event handler for the card, and when clicked, it calls the handleCardClick function with the ID of the clicked item as an argument
//                         handleClick={() => handleCardClick(item.id)} />
//                 </Col>
//             ))}
//         </Row>
//     )
// }

// render from step 1 to step 3 on "Rent" page
function MultiStepForm(props) {
    const { step, list } = props;

    const [answers, setAnswers] = useState({ index: props.step });

    const updateAnswers = (value, category) => {
        setAnswers({ ...answers, [category]: value })
    }

    useEffect(() => {

        if (Object.keys(answers).length > 1) {
            props.onPageUpdate(answers.index, answers);
            setAnswers({index: props.step})
        } else{
            setAnswers({index: props.step})
        }
    }, [props.step])

    const [selectedItemId, setSelectedItemId] = useState(null);

    // Update the 'selectedItemId' state to the clicked card's ID
    const handleCardClick = (itemId) => {
        setSelectedItemId(itemId);
    };

    return (

        <div className="text-left">
            {step === 1 && (
                <>
                    <Row className="mt-3 mb-3">
                        <Col>
                            <Form.Label column>
                                <h5>Pickup</h5>
                            </Form.Label>
                        </Col>
                        {list[step - 1].pickup?.map((item, index) => (
                            <Col key={item.label}>
                                <FormItem item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step] ? props.pagesAnswers[props.step][item.value] : null} />
                            </Col>
                        ))}
                    </Row>
                    <Row className="mt-3 mb-3">
                        <Col>
                            <Form.Label column>
                                <h5>Drop-off</h5>
                            </Form.Label>
                        </Col>
                        {list[step - 1].dropoff?.map((item, index) => (
                            <Col key={item.label}>
                                <FormItem item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step] ? props.pagesAnswers[props.step][item.value] : null} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
            {step === 2 && (
                <>
                    <h3>Select car type</h3>
                    <Row xs={1} md={2} className="g-4">
                        {list[step - 1].car?.map((item, index) => (
                            <Col key={item.label}>
                                <SelectableCard
                                    key={item.id}
                                    myItem={item}
                                    isSelected={item.id === selectedItemId}
                                    handleClick={() => handleCardClick(item.id)} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
            {step === 3 && (
                <Step3 />
            )}
            {step === 4 && (
                <Alert variant="success">
                    Form submitted successfully!
                </Alert>
            )}
        </div>
    )
}

export default MultiStepForm;