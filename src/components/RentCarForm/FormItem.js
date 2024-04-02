// This file includes all the form items 

import { Form } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export const FormItem = ({ item, onChange, answer }) => {
    const [currentValue, setCurrentValue] = useState(answer || null);

    const handleChange = (value) => {
        setCurrentValue(value);
        onChange(value, item.value);
    }

    const { t } = useTranslation();

    // Create different fields based on the type of questions
    switch (item.type) {
        case 'text':
            return (
                <>
                    <Form.Label>
                        {t(item.label)}
                    </Form.Label>

                    <Form.Control
                        required
                        type="text"
                        onChange={(e) => handleChange(e.target.value, item.value)}
                        placeholder={t(item.label)}
                        id={item.id}
                        value={currentValue}
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
                        {t(item.label)}
                    </Form.Label>

                    <Form.Control
                        required
                        type="date"
                        onChange={(e) => handleChange(e.target.value, item.value)}
                        id={item.id}
                        value={currentValue}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </>
            )
            break;
        case 'time':
            return (
                <>
                    <Form.Label>
                        {t(item.label)}
                    </Form.Label>

                    <Form.Control
                        required
                        type="time"
                        onChange={(e) => handleChange(e.target.value, item.value)}
                        id={item.id}
                        value={currentValue}
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
                        onChange={(e) => handleChange(e.target.value, item.value)}
                        id={item.id}
                    />
                </>
            )
            break;
    }
}