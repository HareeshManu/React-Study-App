import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className ="footer-container">
        <Container classname="footer-container">
          <Row className="footer-row">
            <Col lg="3">
                <Row className="add-color">ABOUT US</Row>
                <Row>Lorem Ipsum has been the industry's standard dummy text when an unknown printer took a galley of type.</Row>
            </Col>
            <Col lg="3">
                <Row className="add-color">CATEGORIES</Row>
                <Row>Crime Books</Row>
                <Row>Love And Romance</Row>
                <Row>Computers</Row>
            </Col>
            <Col lg="3">
                <Row className="add-color">SHOPPING GUIDE</Row>
                <Row>FAQs</Row>
                <Row>Terms And Conditions</Row>
                <Row>Shipping Method</Row>
            </Col>
            <Col lg="3">
                <Row className="add-color">RECENT POSTS</Row>
                <Row>Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum</Row>
            </Col>
          </Row>
          <Row className="footer-style">
              <Col>Copyright © 2020 Joomla Bookstore Demo. All Rights Reserved. Designed by Themeparrot.com.</Col>
          </Row>
          <Row className="footer-style">
            <Col>Joomla! is Free Software released under the GNU General Public License.</Col>
          </Row>
        </Container>
      </div>
  );
};
export default Footer;