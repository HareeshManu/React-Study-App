import React, { useState }  from "react";
import {Container, Row, Col, Image, Collapse, Button, Table} from 'react-bootstrap';
import '../styles/Book-Details.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import NumericInput from 'react-numeric-input';
const BookDetailsSection = (props)=> {
    const [quantity, setQuantity] = useState(1);
    const [selectedBook, setSelectedBook] = useState([
      {
        "id": 1,
        "code" : "TP1",
        "name": "Life style book1",
        "image": "book/book8.png",
        "pictures": ["book/book7.png", "book/book8.png", "book/book9.png"],
        "stock": 16,
        "price": 200,
        "discount": 20,
        "salePrice": 180,
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "rating": 4,
        "bookName": "Sakshi",
        "authorName": "Lewis Carol",
        "publisher": "Theme Paret",
        "language" : ["English","french", "Hindi", "Malayalam"],
        "dimention": "0 x 0 x 0",
        "width" : 10,
        "quantity" : 1,
      },
    ]
    );
    function handleClick(e) {
        debugger;
        e.preventDefault();
        var cartItems = [];
        var existingCartItems = localStorage.getItem('booksCart');
        if(!existingCartItems) {
            cartItems.push((selectedBook));
            localStorage.setItem('booksCart', JSON.stringify(cartItems));
        } else {
            cartItems = JSON.parse(existingCartItems);
            cartItems.splice(cartItems.findIndex(function(i){
                return i.id === selectedBook.id;
            }), 1);
            cartItems.push((selectedBook));
            localStorage.removeItem('booksCart');
            localStorage.setItem('booksCart', JSON.stringify(cartItems));
        }
    }
    function setBookQuantity(e) {
        debugger;
        console.log(e);
        selectedBook[0].quantity = e;
        setSelectedBook([...selectedBook], selectedBook);
        console.log(selectedBook.quantity);
    }
    return (
        <div>
            <Container classname="book-details-container">
            {/* <Row> */}
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            {/* </Row> */}
            <Row className="details-section" md={12}>
                <Col className="book-image" xs={6} md={3} lg={3} thumbnail>
                        <Image md={3}
                        src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book8.png" rounded />
                </Col>
                <Col className="book-details-col" xs={6} md={3} lg={3} thumbnail>
                    <Row className="book-title-row">
                        <span className="book-name"><h4 className="book-title">{selectedBook[0].name}</h4></span>
                    </Row>
                    <Row className="price-details">
                        <Row>
                            <span className="price-text-styles">Price: </span> <span className="primary-price">${selectedBook[0].price}</span> <span className="actual-price"> ${selectedBook[0].salePrice}</span>
                        </Row>
                        <Row>
                            <span className="price-text-styles">Product Code: </span> <span>{selectedBook[0].code}</span>
                        </Row>
                    </Row>
                    <Row className="add-to-cart-row">
                        <Row>
                            <label className="qty-text">Qty: </label>
                            <NumericInput className="book-count" min={1} value={selectedBook[0].quantity} onChange={setBookQuantity}/> 
                        </Row>
                        <Row>
                            <Button className="add-to-cart-button" onClick={handleClick}>Add to Cart</Button>
                        </Row>
                    </Row>
                    <Row className="book-details-section">
                        <Row>
                            <span>DETAILS :</span>
                        </Row>
                        <Row className="details-table">
                            <Table striped bordered hover size="sm">
                                <thead className="header-styles">
                                    <tr>
                                        <th>Book Details</th>
                                        <th>Author Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{selectedBook[0].name}</td>
                                        <td>{selectedBook[0].authorName}</td>
                                    </tr>
                                    <tr>
                                        <td>Publisher</td>
                                        <td>{selectedBook[0].publisher}</td>
                                    </tr>
                                    <tr>
                                        <td>Language</td>
                                        <td>English</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Row>
                </Col>
            </Row>
            </Container>
        </div>
      );
}
export default BookDetailsSection;