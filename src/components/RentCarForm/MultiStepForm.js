// This file renders each step on Rent page

// This file takes the parameter "list" from the file "FormQuestions", 
// then displays the questions on each "FormItem" component

import { useState } from 'react';
import { FormItem } from "./FormItem";
import { Form, Row, Col } from "react-bootstrap";
import SelectableCard from "../Card/SelectableCard";

// Render the items horizontally for the first step
function renderFormItemRow(title, items) {
    return (
        <Row className="mt-3 mb-3">
            <Col>
                <Form.Label column>
                    <h5>{title}</h5>
                </Form.Label>
            </Col>

            {items?.map((item, index) => (
                <Col key={item.label}>
                    <FormItem item={item} />
                </Col>
            ))
            }
        </Row>
    )
}

// Render the car type in a grid
function renderCarTypeGrid(items) {
    const [selectedItemId, setSelectedItemId] = useState(null);

    // Update the 'selectedItemId' state to the clicked card's ID
    const handleCardClick = (itemId) => {
        setSelectedItemId(itemId);
    };

    return (
        <Row xs={1} md={2} className="g-4">
            {items?.map((item, index) => (
                <Col key={item.label}>
                    <SelectableCard
                        key={item.id}
                        myItem={item}

                        /* To make a list of cards where only one can be selected at a time, you can manage the selection state in a parent component.  */
                        // pass the state to the child component
                        isSelected={item.id === selectedItemId}

                        // pass a callback function from the parent to handle the selection
                        // set up a click event handler for the card, and when clicked, it calls the handleCardClick function with the ID of the clicked item as an argument
                        handleClick={() => handleCardClick(item.id)} />
                </Col>
            ))}
        </Row>
    )
}

// render from step 1 to step 3 on "Rent" page
function MultiStepForm(props) {
    const { step, list } = props;

    return (

        <div className="text-left">
            {step === 1 && (
                // wrap multiple JSX elements in a parent element
                <>
                    {renderFormItemRow('Pickup', list[step - 1].pickup)}
                    {renderFormItemRow('Drop-off', list[step - 1].dropoff)}
                </>
            )}
            {step === 2 && (
                <>
                    <h3>Select car type</h3>
                    {renderCarTypeGrid(list[step - 1].car)}
                </>
            )}
            {step === 3 && (
                <>
                    <h3></h3>
                    { }
                </>
            )}
        </div>
    )
}

export default MultiStepForm;