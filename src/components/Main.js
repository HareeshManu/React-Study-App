import React , { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Carousel,
  Card,
  Tab,
  Tabs,
  Navbar,
  Form,
  Button
} from "react-bootstrap";
import '../styles/Main.css';
import Images from './Images';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import slider1 from "../assets/slider_image_01.png";
import slider2 from "../assets/slider_image_02.png";
import slider3 from "../assets/slider_image_03.png";
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
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
</Container>
<Container className="middle-section">
{/* <div > */}
  <Container fluid className="book-list">
    <Row>
      <Col md={4} xs={6} >
        <div className="slide-image">
          <Image src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/slideshow/read1.jpg" rounded />
          <div class="overlay">
              <h2>Book Collection</h2>
              <p><a href="#home"> <em class="fa fa-plus-square"></em> </a></p>
            </div>
        </div> 
      </Col>
      <Col  md ={4}  xs={6} >
        <div className="slide-image">
            <Image src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/slideshow/read2.jpg" rounded />
            <div class="overlay">
              <h2>Best Offer</h2>
              <p><a href="#home"> <em class="fa fa-plus-square"></em> </a></p>
            </div>
        </div> 
      </Col>
      <Col  md ={4}  xs={12} >
        <div className="slide-image">
            <Image src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/slideshow/read3.jpg" rounded />
            <div class="overlay">
              <h2>Top Selling Books</h2>
              <p><a href="#home"> <em class="fa fa-plus-square"></em> </a></p>
            </div>
        </div> 
      </Col>
    </Row>
  </Container>
{/* </div> */}
<div className="home-section">
    <Container>
      <div className="fp-product">
        <h3 class="module-title"><span>Featured products</span></h3>
        <Row>
            <Col md={3} xs ={12} className="card-image">
              <div className="card-area">
              <Card style={{ width: '16rem'  }}>
                <Card.Img className="image"  variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book8.png" />
                <Card.Body style={{ paddingBottom: '0' }} >
                  <Card.Title>Life style </Card.Title>
                  <Card.Text class="price-container">
                  <div class="base-price strike">
                  $300.00 </div>
                  <div class="sale-price">
                  $280.00 
                  </div>
                </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </Col>
            <Col md={3} xs ={12} className="card-image">
            <div className="card-area">
              <Card style={{ width: '16rem' }}>
              <Card.Img className="image"  variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book2.png" />
              <Card.Body style={{ paddingBottom: '0' }} >
                <Card.Title>Vacation</Card.Title>
                <Card.Text class="price-container">
                  <div class="base-price strike">
                  $250.00 </div>
                  <div class="sale-price">
                  $200.00 
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            </Col>
            <Col md={3} xs ={12} className="card-image">
            <div className="card-area">
            <Card style={{ width: '16rem' }}>
              <Card.Img className="image" variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book1.png" />
              <Card.Body style={{ paddingBottom: '0' }} >
                <Card.Title>Heroes Proved </Card.Title>
                <Card.Text class="price-container">
                  <div class="base-price strike">
                  $250.00 </div>
                  <div class="sale-price">
                  $180.00 
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            </Col>
            <Col md={3} xs ={12} className="card-image">
            <div className="card-area">
            <Card style={{ width: '16rem' }}>
              <Card.Img className="image"  variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book6.png" />
              <Card.Body style={{ paddingBottom: '0' }} >
                <Card.Title>Business ethics</Card.Title>
                <Card.Text class="price-container">
                  <div class="base-price strike">
                  $400.00 </div>
                  <div class="sale-price">
                  $300.00 
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            </Col>
        </Row>
      </div>
    </Container>
</div>
<div class="blog-section">
<Container>

  <div class='tab-heading'>
  <h3> 
    <span>LATEST FROM OUR BLOG</span>
    </h3>
  </div>

  <Tabs className="justify-content-center" defaultActiveKey="home" id="uncontrolled-tab-example">
  <Tab eventKey="home" className="book-tab" title="Latest Books">
  <Container className="tab-books">
    <Row className="justify-content-center">   
    <Col  md ={4} xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog4.jpg" />
  <Card.Body className="latest-books">
    <Card.Title>A Collection Of Poems</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>
<Col  md ={4}  xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog3.jpg" />
  <Card.Body className="latest-books">
    <Card.Title>Top Selling Books</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>
<Col  md ={4}  xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog2.jpg"  />
  <Card.Body className="latest-books">
    <Card.Title>Your Most Recommended Books</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>
    </Row>
</Container>
  </Tab>
  <Tab eventKey="profile" title="Top Selling Books">
  <Container className="tab-books">
    <Row>   
    <Col  md ={4} xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog8.jpg"  />
  <Card.Body className="latest-books">
    <Card.Title>A Collection Of Poems</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>
<Col  md ={4}  xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog1.jpg" />
  <Card.Body className="latest-books">
    <Card.Title>Top Selling Books</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>
<Col  md ={4}  xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog6.jpg"  />
  <Card.Body className="latest-books">
    <Card.Title>Top Selling Books</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>

    </Row>
</Container>
  </Tab>
  <Tab eventKey="contact" title="Recent Books">
  <Container className="tab-books">
    <Row>   
    <Col  md ={4} xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog9.jpg"  />
  <Card.Body className="latest-books">
    <Card.Title>Top Selling Books</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>
<Col  md ={4}  xs={12} >
    <Card>
  <Card.Img variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog1.jpg" />
  <Card.Body className="latest-books">
    <Card.Title>Top Selling Books</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>
<Col  md ={4}  xs={12} >
    <Card>
  <Card.Img variant="top"src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/blog/blog7.jpg"  />
  <Card.Body className="latest-books">
    <Card.Title>Top Selling Books</Card.Title>
    <Card.Text>
     <div class="latest-date"> 08-Sep-2014</div>
   <div class="latest-books-desc"> Nulla eleifend vel risus eget ultricies. Praesent sed tortor sem. Vestibulum...</div>
    </Card.Text>
    <Button className="read-more" variant="primary">Read more</Button>
  </Card.Body>
</Card>
</Col>

    </Row>
</Container>
  </Tab>
</Tabs>
  </Container>
</div>
<Images/>
<div className="latest-products">
  <Container>
  <h3 class="product-title">
    <span>Latest Products</span>
  </h3>
  <Row>
    <Col md={3} sm={6} className="product-item">
    <div className="individual-product">
      <div class="overlay">
        <div class="tag"><span>NEW</span></div>
      </div>
      <Card style={{ width: '16rem'  }}>
        <Card.Img className="image"  variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book3.png" />
      </Card>
      
    </div>
    </Col>
    <Col md={3} sm={6} className="product-item">
    <div className="individual-product">
      <div class="overlay">
        <div class="tag"><span>NEW</span></div>
      </div>
      <Card style={{ width: '16rem'  }}>
        <Card.Img className="image"  variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book2.png" />
      </Card>
    </div>
    </Col>
    <Col md={3} sm={6} className="product-item">
    <div className="individual-product">
      <div class="overlay">
        <div class="tag"><span>NEW</span></div>
      </div>
      <Card style={{ width: '16rem'  }}>
        <Card.Img className="image"  variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book5.png" />
      </Card>
    </div>
    </Col>
    <Col md={3} sm={6} className="product-item">
    <div className="individual-product">
      <div class="overlay">
          <div class="tag"><span>NEW</span></div>
      </div>
      <Card style={{ width: '16rem'  }}>
        <Card.Img className="image"  variant="top" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book3.png" />
      </Card>
    </div>
    </Col>
  </Row>

  </Container>

</div>
<div className="news-letter">
  <Container>
    <Row style={{ marginBottom: '40px' }}>
      <Col md={5} style={{ left: '5%' }}>
      <h3 class="news-letter-title"><span>Subscribe now</span></h3> 
      </Col>
      <Col md={7}>
         <div class="news-letter-text">FOR COUPONS, NEWSLETTERS, AND MORE!</div> 
      </Col>
    </Row>
    <Row>
      <Col style={{ margin: '0% 24%' }}>
      <Navbar>
        <Form inline>
        <FontAwesomeIcon
                icon={faEnvelope}
                fixedWidth
                className="mr-2 align-middle"
              />
          <input type="text" placeholder="Enter your email" className="email-input" />
          <Button className="subscribe-btn" type="submit">Subscribe</Button>
        </Form>
      </Navbar>
      </Col>
    </Row>
  </Container>
</div>
</Container>
</>
  )
}

export default Main;
