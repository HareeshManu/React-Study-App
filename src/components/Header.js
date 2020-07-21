import React, { useState } from 'react';
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
  Carousel
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
import slider1 from "../assets/slider_image_01.png";
import slider2 from "../assets/slider_image_02.png";
import slider3 from "../assets/slider_image_03.png";


const Header = (props) => {
  const[index,setIndex] =useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
<section id="header">
<div className="top-header">
<Container>
  <Row>
    <Col xs={12} sm={6}>
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
    <Col xs={12} sm={6}>
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
  <Container fluid>
  <Row>
    <Col> <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
  </Row>
</Container>
</section>
  </>
  )
} 
export default Header;
