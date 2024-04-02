import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';

function Step3() {
    const { t } = useTranslation();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <h4>{t("contact_info_label")}</h4>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>{t("first_name_label")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                    />
                    <Form.Control.Feedback>{t("looks_good_msg")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>{t("last_name_label")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                    />
                    <Form.Control.Feedback>{t("looks_good_msg")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>{t("email_address_label")}</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="name@example.com"
                    />
                    <Form.Control.Feedback type="invalid">
                        {/* Please enter a valid email. */}
                        {t("email_invalid_feedback_msg")}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-5">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>{t("phone_label")}</Form.Label>
                    <Form.Control type="number" required />
                    <Form.Control.Feedback type="invalid">
                        {/* Please provide a valid phone number. */}
                        {t("phone_invalid_feedback_msg")}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <h4>{t("payment_info_label")}</h4>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>{t("card_number_label")}</Form.Label>
                    <Form.Control type="number" required />
                    <Form.Control.Feedback type="invalid">
                        {/* Please provide a valid card number. */}
                        {t("card_number_invalid_feedback_msg")}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>{t("billing_address_label")}</Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid">
                        {/* Please provide a valid address. */}
                        {t("address_invalid_feedback_msg")}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="2" controlId="validationCustom05">
                    <Form.Label>{t("cvv_label")}</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label = {t("form_check_label")} // Agree to terms and conditions
                    feedback = {t("form_check_feedback_msg")} // You must agree before submitting.
                    feedbackType="invalid"
                />
            </Form.Group>
        </Form >
    );
}

export default Step3;