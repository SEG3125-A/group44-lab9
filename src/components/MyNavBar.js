// This file implements the nav bar
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Rent from '../pages/Rent';
import FAQ from '../pages/FAQ';
import Locations from '../pages/Locations';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

function MyNavBar() {
  const { t } = useTranslation();

  return (
    <div>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>

            <Navbar.Brand href="/">
              
              <img
                alt=""
                src="./images/logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}
              (Y)OUR CAR
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto">
                <Nav.Link href="/" style={{ fontSize: '20px' }}>{t("rent_tap")}</Nav.Link>
                <Nav.Link href="/faq" style={{ fontSize: '20px' }}>{t("faq_tap")}</Nav.Link>
                <Nav.Link href="/locations" style={{ fontSize: '20px' }}>{t("location_label_tap")}</Nav.Link>
              </Nav>

              <Nav className="justify-content-end">
                <LanguageSelector />
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Rent />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>

      </Router>
    </div>
  );
}


export default MyNavBar;