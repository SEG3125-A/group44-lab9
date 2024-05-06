import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import ContactUsButton from "../components/contactUsButton";
import FAQList from "../components/FAQList";
import { useTranslation } from 'react-i18next';
import "./FAQ.css";

function renderFAQ(question, answer, index, t) {
/**
 *  Calling 'useTranslation' hook inside the renderFAQ function, 
 *  which is a violation of the rules of hooks because hooks 
 *  should only be called at the top level of functional 
 *  components or custom hooks, not inside nested functions.
 */

  return (
    <Col key={index} className="col-md-12 mt-4 mb-1">
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

  // Function to filter the FAQ items based on the search query (Search questions)
  const filterFAQ = (query) => {
    const filtered = FAQList.filter((faq) =>
    // t(faq.question): Fetching the translated question using the label
      t(faq.question).toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFAQ(filtered); // Update the filtered FAQ items state
  };

  return (
    <div className="tabcontent container col-md-8">
      <h1>{t("faq_tap")}</h1>

      <div className="faq-page-search">
        <Form className="form-inline my-2 my-lg-0 search-block">
          <input
            id="searchFaq"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Questions"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange} // Call handleSearchChange function on input change
          />
        </Form>
      </div>

      <br />
      
      {filteredFAQ.map((faq, index) => (
        // Each child in a list should have a unique "key" prop
        // index: assign index as a unique "key" prop to each child component
        renderFAQ(faq.question, faq.answer, index, t)
      ))}

      <ContactUsButton />
    </div>
  );
}

export default FAQ;
