import React from 'react';
import '../styles/Checkout.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Checkout = (props) => {
  return (
    <>
    <Header/>
    <Container fluid className="checkout-container">
      <Row bsPrefix="justify-content-start">
        <Col md={{ span: 8, offset: 2 }}>
          <div className="checkout-title">Checkout</div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="checkout-options border">
          Checkout Options
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 6, offset: 1 }} md={{ span: 4, offset: 2}}>
          <h2>New Customer</h2>
        </Col>
        <Col xs={{ span: 6, offset: 1 }} md={{ span: 3}}>
          hoi
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="checkout-options border">
          Account & Billing Details
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          Account & Billing Details Component is here
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="checkout-options border">
          Shipping Address
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          Shipping Address Component is here
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="checkout-options border">
          Shipping & Payment Methods 
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          Shipping & Payment Methods Component is here
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="checkout-options border">
          Confirm order
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          Confirm order component is here
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default Checkout;
