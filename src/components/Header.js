import React from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faGooglePlusG,
  faYoutube,
  faInstagram,
  faLinkedinIn
}  from "@fortawesome/free-brands-svg-icons";
import './../App.css';
import '../styles/Header.css';
import logo from "../assets/bookstore_blue.png";


const Header = (props) => {
  return (
    <>
<section id="header">
<div className="top-header">
<Container>
  <Row>
    <Col sm={6}>
    <Navbar bg="white" expand="lg">
      <Navbar.Toggle/>
      <Navbar.Collapse  className="justify-content-start">
        <Nav className="mr-auto">
          <Nav.Link className= "navigation-item" href="#home">
            <FontAwesomeIcon
                icon={faTwitter}
                fixedWidth
                className="mr-2 align-middle"
              />
          </Nav.Link>
          <Nav.Link className= "navigation-item" href="#link"> <FontAwesomeIcon
                icon={faFacebook}
                fixedWidth
                className="mr-2 align-middle"
              />
          </Nav.Link>
          <Nav.Link className= "navigation-item" href="#link"> <FontAwesomeIcon
                icon={faGooglePlusG}
                fixedWidth
                className="mr-2 align-middle"
              />
          </Nav.Link>
          <Nav.Link className= "navigation-item" href="#link"> <FontAwesomeIcon
                icon={faYoutube}
                fixedWidth
                className="mr-2 align-middle"
              />
          </Nav.Link>
          <Nav.Link className= "navigation-item" href="#link"> <FontAwesomeIcon
                icon={faLinkedinIn}
                fixedWidth
                className="mr-2 align-middle"
              />
          </Nav.Link>
          <Nav.Link className= "navigation-item" href="#link"> <FontAwesomeIcon
                icon={faInstagram}
                fixedWidth
                className="mr-2 align-middle"
              />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Col>
    <Col sm={6}>
    <Navbar bg="white" expand="lg">
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Nav.Link className= "navigation-item" href="#home">MY CART</Nav.Link>
      <Nav.Link className= "navigation-item" href="#link">REGISTER</Nav.Link>
      <Nav.Link className= "navigation-item" href="#link">COMAPRE</Nav.Link>
      <Nav.Link className= "navigation-item" href="#link">LOGIN</Nav.Link>
      </Navbar.Collapse>      
    </Navbar>
    </Col>
  </Row>
  </Container>
  </div>
  <div className="search-header">
  <Container>
    <Row  className="justify-content-md-center">
      <Col md={3} xs={12} sm={3}>
        <Image src={logo} width="auto"
                          height="50"
                          rounded/>
      </Col>
      <Col md={6} xs={8} sm={5}>
      <Form >
        <FormControl type="text" placeholder="Search..." className="search-box mr-sm-2" />
        <Button variant="outline-success" className="search-button">
        <FontAwesomeIcon
                  icon={faSearch}
                  fixedWidth
                  className="mr-2 align-middle"
                />
        </Button>
      </Form>
      </Col>
      <Col md={3} xs={4} sm={4}>
      <Row>
        <Col md={6} className="cart-section">
        <FontAwesomeIcon
                  icon={faShoppingCart}
                  fixedWidth
                  className="mr-2 align-middle"
        />
        <span className="cart-item-count">1</span>
        </Col>
        <Col md={6} className="cart-section">
        <FontAwesomeIcon
                  icon={faHeart}
                  fixedWidth
                  className="mr-2 align-middle"
        />
        </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  </div>
  <Container className="lastHeader">
  <Row>
    <Col> 
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Nav.Link className= "link-item" href="#home">HOME</Nav.Link>
          <Nav.Link className= "link-item" href="#link">BOOKS</Nav.Link>
          <Nav.Link className= "link-item" href="#link">E-BOOKS</Nav.Link>
          <Nav.Link className= "link-item" href="#link">JOOMLA PAGE</Nav.Link>
          <Nav.Link className= "link-item" href="#link">BLOG</Nav.Link>
          <Nav.Link className= "link-item" href="#link">CONTACT</Nav.Link>
          <Nav.Link className= "link-item" href="#link">FEATURE</Nav.Link>
        </Navbar.Collapse>      
      </Navbar>
    </Col>
  </Row>
</Container>
</section>
  </>
  )
} 
export default Header;
