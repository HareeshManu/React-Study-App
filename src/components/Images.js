import React from 'react';
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import '../styles/Main.css';
import '../styles/Images.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Images = (props) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
<div className="image-gallery">
  <Container>
    <Row>
      <Col className="image-gallery-section">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        <div> 
            <img
                className="image-gallery-dimensions"
                alt="book"
                src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book1.png"
                  />
        </div>
        <div> 
            <img
                className="image-gallery-dimensions"
                alt="book"
                src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book2.png"
                  />
        </div>
        <div>
            <img
                className="image-gallery-dimensions"
                alt="book"
                src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book3.png"
                  />
            </div>
        <div>
            <img
                className="image-gallery-dimensions"
                alt="book"
                src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book4.png"
                  />
        </div>
        <div>
            <img
            className="image-gallery-dimensions"
            alt="book"
            src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book5.png"
            />
        </div>
        <div> 
            <img
            className="image-gallery-dimensions"
            alt="book"
            src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book6.png"
            />
        </div>
        <div> 
            <img
            className="image-gallery-dimensions"
            alt="book"
            src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book7.png"
            />
        </div>
        <div> 
            <img
            className="image-gallery-dimensions"
            alt="book"
            src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book8.png"
            />
        </div>
        <div> 
            <img
            className="image-gallery-dimensions"
            alt="book"
            src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book9.png"
            />
        </div>
      </Carousel>
      </Col>
    </Row>
  </Container>
</div>
</>
  )
}

export default Images;
