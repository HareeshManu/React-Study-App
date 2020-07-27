import React , { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Carousel,
  Tab,
  Tabs
} from "react-bootstrap";
import '../styles/Main.css';


import slider1 from "../assets/slider_image_01.png";
import slider2 from "../assets/slider_image_02.png";
import slider3 from "../assets/slider_image_03.png";
import book1 from "../assets/imag1_files/book1.png";
import book8 from "../assets/imag1_files/book8.png";
import book6 from "../assets/imag1_files/book6.png";
import book2 from "../assets/imag1_files/book2.png";
import blog5 from "../assets/imag1_files/blog5.jpg";
import blog6 from "../assets/imag1_files/blog6.jpg";
import blog7 from "../assets/imag1_files/blog7.jpg";
import blog8 from "../assets/imag1_files/blog7.jpg";
const Main = (props) => {
  const[index,setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Container fluid>
    <Row>
      <Col> 
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
</Container>
<div className="book-list">
  <Container>
    <Row>
      <Col sm ={3} md ={4} xs={12} >
        <div className="slide-image">
          <Image src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/slideshow/read1.jpg" rounded />
          <div class="overlay">
              <h2>Book Collection</h2>
              <p><a href="#home"> <em class="fa fa-plus-square"></em> </a></p>
            </div>
        </div> 
      </Col>
      <Col sm ={3} md ={4}  xs={12} >
        <div className="slide-image">
            <Image src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/slideshow/read2.jpg" rounded />
            <div class="overlay">
              <h2>Best Offer</h2>
              <p><a href="#home"> <em class="fa fa-plus-square"></em> </a></p>
            </div>
        </div> 
      </Col>
      <Col sm ={6} md ={4}  xs={12} >
        <div className="slide-image">
            <Image src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/slideshow/read3.jpg" rounded />
            <div class="overlay">
              <h2>Top Selling Books</h2>
              <p><a href="#home"> <em class="fa fa-plus-square"></em> </a></p>
            </div>
        </div> 
      </Col>
    </Row>
    <Row className="center-align latest-heading-section">
      <Col>FEATURED PRODUCTS</Col>
    </Row>
    <Row className="add-margin latest-box-section">
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book8}
                    />
                </Row>
                <Row className="latest-content-section">
                    <Col>Content</Col>
                </Row>
            </Container>
        
        </Col>
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book2}
                    />
                </Row>
                <Row className="latest-content-section">
                    <Col>Content</Col>
                </Row>
            </Container>
        </Col>
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book1}
                    />
                </Row>
                <Row className="latest-content-section">
                        <Col>Content</Col>
                </Row>
            </Container>
        </Col>
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book6}
                    />
                </Row>
                <Row className="latest-content-section">
                    <Col>Content</Col>
                </Row>
            </Container>
        </Col>
    </Row>

{/* Blog section */}

    <Row className="center-align blog-section-add-margin">
      <Col className="add-color">LATEST FROM OUR BLOG</Col>
    </Row>
    <Row className="justify-content-center">
      <Col style={{textAlign: "center"}}>
        <Tabs className="justify-content-center">
          <Tab eventKey="latestbooks" title="LATEST BOOKS">
            <Row className="blog-section-add-margin">
              <Col lg={4} md={4} sm={4} xs={6} className="text-align-center">
                <Container fluid className="zero-margin-padding">
                  <img
                      className="blog-image-dimensions"
                      src={blog5}
                  />
                </Container>
                <Container fluid>
                  <Row className="justify-content-center">
                    <h5> A Collection of Poems</h5>
                  </Row>
                </Container>
              
              
              </Col>
              <Col lg={4} md={4} sm={4} xs={6} className="text-align-center">
                <Container fluid className="zero-margin-padding">
                  <img
                      className="blog-image-dimensions"
                      src={blog6}
                  />
                </Container>
              
              </Col>
              <Col lg={4} md={4} sm={4} xs={6} className="text-align-center">
                <Container fluid className="zero-margin-padding">
                  <img
                      className="blog-image-dimensions"
                      src={blog7}
                  />
                </Container>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="BESTSELLING BOOKS">
            <Row className="blog-section-add-margin">
              <Col lg={4} md={4} sm={4} xs={6} className="text-align-center">
                <Container fluid className="zero-margin-padding">
                  <img
                      className="blog-image-dimensions"
                      src={blog8}
                  />
                </Container>
              
              </Col>
              <Col lg={4} md={4} sm={4} xs={6} className="text-align-center">
                <Container fluid className="zero-margin-padding">
                  <img
                      className="blog-image-dimensions"
                      src={blog5}
                  />
                </Container>
              
              </Col>
              <Col lg={4} md={4} sm={4} xs={6} className="text-align-center">
                <Container fluid className="zero-margin-padding">
                  <img
                      className="blog-image-dimensions"
                      src={blog7}
                  />
                </Container>
              
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="setting" title="RECENT BOOKS">
            <p>this is recents tab</p>
          </Tab>
       
        </Tabs>
      </Col>
    </Row>

    {/* short carousel */}


{/* Latest section */}
<Row className="center-align latest-heading-section">
      <Col>LATEST PRODUCTS</Col>
    </Row>
    <Row className="add-margin latest-box-section">
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book8}
                    />
                </Row>
            </Container>
        
        </Col>
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book2}
                    />
                </Row>
            </Container>
        </Col>
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book1}
                    />
                </Row>
            </Container>
        </Col>
        <Col lg={3} md={4} xs={6} className="book-column">
            <Container className="latest-container">
                <Row>
                    <img
                        className="book-image-style"
                        src={book6}
                    />
                </Row>
            </Container>
        </Col>
    </Row>


  </Container>
  {/* <Latest/> */}
</div>
</>
  )
}

export default Main;
