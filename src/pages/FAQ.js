import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import ContactUsButton from "../components/contactUsButton";
import FAQList from "../components/FAQList";
import { useTranslation } from 'react-i18next';

function renderFAQ(question, answer) {
  const { t } = useTranslation();

  return (
    <Col className="col-md-12 mt-4 mb-1">
      <Row>
        <h5>{t(question)}</h5>
      </Row>

      <Row>
        {/* ps-5: (padding start) add padding to the left side of an element */}
        <p className="ps-5">{t(answer)}</p>
      </Row>
    </Col>
  );
}

function FAQ() {
  const { t } = useTranslation();
  
  const [searchQuery, setSearchQuery] = useState(''); // State variable to store the search query
  const [filteredFAQ, setFilteredFAQ] = useState(FAQList); // State variable to store the filtered FAQ items

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state
    filterFAQ(event.target.value); // Call the filterFAQ function with the new search query
  };

  // Function to filter the FAQ items based on the search query
  const filterFAQ = (query) => {
    const filtered = FAQList.filter((faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFAQ(filtered); // Update the filtered FAQ items state
  };

  return (
    <div className="tabcontent container col-md-8">
      <h1>{t("faq_tap")}</h1>

      <div class="faq-page-search">
        <Form class="form-inline my-2 my-lg-0 search-block">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange} // Call handleSearchChange function on input change
          />
        </Form>
      </div>

      <br />
      
      {filteredFAQ.map((faq, index) => (
        renderFAQ(faq.question, faq.answer)
      ))}

      <ContactUsButton />
    </div>
  );
}

export default FAQ;
