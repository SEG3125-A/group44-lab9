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
                        type="text"
                        placeholder={item.label}
                        id={item.id}
                    />
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
                        type="date"
                        id={item.id}
                    />
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
                        type="time"
                        id={item.id}
                    />
                </>
            )
        case 'card':
            return (
                <>
                    <Form.Label>
                        {item.label}
                    </Form.Label>

                    <Form.Control
                        type="date"
                        id={item.id}
                    />
                </>
            )
            break;
    }
}