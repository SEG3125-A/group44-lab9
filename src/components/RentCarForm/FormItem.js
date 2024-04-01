// This file includes all the form items 

import { Form } from "react-bootstrap";

export const FormItem = ({ item }) => {
    // Create different fields based on the type of questions
    switch (item.type) {
        case 'text':
            return (
                <>
                    <Form.Label>
                        {item.label}
                    </Form.Label>

                    <Form.Control
                        required
                        type="text"
                        placeholder={item.label}
                        id={item.id}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a location.
                    </Form.Control.Feedback>
                </>
            )
            break;
        case 'date':
            return (
                <>
                    <Form.Label>
                        {item.label}
                    </Form.Label>

                    <Form.Control
                        required
                        type="date"
                        id={item.id}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </>
            )
            break;
        case 'time':
            return (
                <>
                    <Form.Label>
                        {item.label}
                    </Form.Label>

                    <Form.Control
                        required
                        type="time"
                        id={item.id}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </>
            )
        case 'card':
            return (
                <>
                    <Form.Label>
                        {item.label}
                    </Form.Label>

                    <Form.Control
                        required
                        type="date"
                        id={item.id}
                    />
                </>
            )
            break;
    }
}