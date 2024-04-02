import { Form, Row, Col, Accordion } from "react-bootstrap";
import ContactUsButton from "../components/contactUsButton";
import LocationList from "../components/LocationList"
import { useTranslation } from 'react-i18next';

function renderLocation(location) {
  const { t } = useTranslation();

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={location.event_key} key={location.region}>
          <Accordion.Header>{location.region}</Accordion.Header>
          <Accordion.Body>
            {location.store.map((store, index) => (
              <div key={index} className="mb-4">
                <h5>{store.store_name}</h5>
                <p>{store.address}</p>
                <Row>
                  <Col className="col-sm-6">
                    <h6>
                      {/* Hour Of Operation */}
                      {t("hour_of_operation_label")}
                    </h6>
                    {store.hour_of_operation.map((hour, index) => (
                      <Row key={index} className="mb-1">
                        <Col className="text-start">
                          <strong>
                            {t(hour.day)}
                          </strong>
                        </Col>
                        <Col className="text-start">
                          {hour.time}
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

function Locations() {
  const { t } = useTranslation();

  return (
    <div className="container col-md-8">
      <h1>{t("location_label_tap")}</h1>
      <>
        {LocationList.map((location, index) => (
          <div key={index}>
            {renderLocation(location)}
          </div>
        ))}
      </>

      <ContactUsButton />
    </div>
  );
}

export default Locations;
