import React from 'react';
import '../styles/Checkout.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
        <Col xs={{ span: 11, offset: 1 }} md={{ span: 4, offset: 2}} className="new-customer">
          <h2>New Customer</h2>
          <p>Checkout Options</p>
          <label for="register"> <input type="radio"  name="account" value="register" checked= "checked"></input><span class="register-account">Register account </span> </label>
          <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
          <Button as="input" type="submit" value="Continue" id="button-account" />{' '}
        </Col>
        <Col xs={{ span: 11, offset: 1 }} md={{ span: 3}} className="new-customer">
          <h2>Returning Customer</h2>
          <label for="username"><span class="login-labels">Username</span></label><br/>
          <input type="text" name="username" value="username"/><br/><br/>
          <label for="password"><span class="login-labels">Password</span></label><br/>
          <input type="password" name="password" value="password"/><br/><br/>
          <Button as="input" type="submit" value="Login" id="button-signin" />{' '}<br/><br/>
          <a href="#" target="_blank">Forgot your password</a>
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
