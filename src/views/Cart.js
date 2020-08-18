import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
import Header from '../components/Header';
import {Breadcrumb, Table, Container,Button, Image,Row,Col,Form,Alert} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.css';


const Cart = (props)=> {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [estimateTax, setEstimateTax] = useState(false);
  const [taxComponent, setTaxComponent] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [myCartItem, setMyCartItem] = useState([
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
      "authorName": "kakkanadan",
      "publisher": "Theme Paret",
      "language" : ["English","french", "Hindi", "Malayalam"],
      "dimention": "0 x 0 x 0",
      "width" : 10,
      "quantity":1
    },
    {
      "id": 2,
      "code" : "TP1",
      "name": "Life style book2",
      "image": "book/book8.png",
      "pictures": ["book/book7.png", "book/book8.png", "book/book9.png"],
      "stock": 16,
      "price": 200,
      "discount": 20,
      "salePrice": 180,
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "rating": 4,
      "bookName": "Sakshi",
      "authorName": "kakkanadan",
      "publisher": "Theme Paret",
      "language" : ["English","french", "Hindi", "Malayalam"],
      "dimention": "0 x 0 x 0",
      "width" : 10,
      "quantity":1
    },
    {
      "id": 3,
      "code" : "TP1",
      "name": "Life style Book3",
      "image": "book/book8.png",
      "pictures": ["book/book7.png", "book/book8.png", "book/book9.png"],
      "stock": 16,
      "price": 200,
      "discount": 20,
      "salePrice": 180,
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "rating": 4,
      "bookName": "Sakshi",
      "authorName": "kakkanadan",
      "publisher": "Theme Paret",
      "language" : ["English","french", "Hindi", "Malayalam"],
      "dimention": "0 x 0 x 0",
      "width" : 10,
      "quantity":1
    },
  ]
  );
  const getTotalCosts = () => {
    var subTotal=0;
    myCartItem.map(item => (
      subTotal += item.price * item.quantity)
      )

      return taxComponent? subTotal+100  :subTotal;
  };
  const getSubTotal = () => {
    var subTotal=0;
    myCartItem.map(item => (
      subTotal += item.price * item.quantity)
      )

      return subTotal;
  };
  const getItemTotal =  (item) => {
      return item.price * item.quantity;
  };

  function removeFunction (item)
  {
    return myCartItem.filter(function (val) {
    return val.id !== item.id;
    });
  }
 
  return (
  <div> <Header itemCount={myCartItem.length}/>
  <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>MyCart</Breadcrumb.Item>
</Breadcrumb>
{myCartItem.length > 0 &&
<Container className="bookCart">
  <Row>
    <Col  md={8} xs ={12}>
<Table bordered>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
  {myCartItem.map(item => (     
    <tr>
      <td> <span> <Image className="cart-item-Image" src="http://demo.themeparrot.com/bookstore_new/images/themeparrot/books/book8.png" rounded /></span><span>{item.name}</span><br/>
      <span>Unit Price ${item.price}</span></td>
      <td>
       <NumericInput className="book-count" min={1} value={item.quantity} onChange={event => {myCartItem.map(items => items.id === item.id && (items.quantity = event));
        setMyCartItem([...myCartItem], myCartItem);}
        }/> 
       
     <Button className="cart-button"> <FontAwesomeIcon
                icon={faTrashAlt}
                fixedWidth
                className="mr-2 align-middle cartIcon"
                onClick={() =>  {setMyCartItem(myCartItem.filter(items => items.id !== item.id));setShow(true)}}
              /></Button>
      
      </td>
       <td><span className="rightAlign">${ getItemTotal(item)}</span></td>
    </tr>
     ))}
  </tbody>
</Table>
<Row className="leftAlignItems">
  <Col md={4} xs ={4}><Button className="cart-button">Continue Shopping</Button></Col>
  {/* <Col md={4} xs ={4}><Button className="cart-button updateCart">Update</Button></Col> */}
</Row>
</Col>

<Col  md={4} xs ={8}>
<Row><span className="cartTotal">Cart Totals</span></Row>
<Row>
<Table className="cart-Item-tbl">
  <tbody>
    <tr>
      <th>
        Sub Total
      </th>
      <td><span className="rightAlign">${getSubTotal()}</span></td>
    </tr>
    {taxComponent &&
    <tr>
      <th>
      Estimated Tax
      </th>
      <td><span className="rightAlign">$100</span></td>
    </tr>
    }
    <tr>
      <th>
       Total
      </th>
      <td><span className="rightAlign">${getTotalCosts()}</span></td>
    </tr>
  </tbody>
</Table>
</Row>
<Row>
<Button className="cart-button">Proceed To Checkout</Button>
</Row>
 <Row className="estimateTax">

      <Col md={8}>
        <Form.Check
          type="checkbox"
          label="Estimate shipping and tax"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={(event) =>  {setEstimateTax(!estimateTax)}}
        />
        </Col>
  </Row> 
  {estimateTax &&
    <Table borderless>
    <tr>
      <td> <Form.Label>Country</Form.Label></td>
      <td><Form>
  <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Control as="select" size="sm" custom>
      <option>India</option>
      <option>America</option>
      <option>Australia</option>
      <option>UAE</option>
      <option>Uk</option>
    </Form.Control>
  </Form.Group>
  </Form>
  </td>
  </tr>
  <tr>
      <td> <Form.Label>State/ Province</Form.Label></td>
      <td><Form>
  <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Control as="select" size="sm" custom>
      <option>India</option>
      <option>America</option>
      <option>Australia</option>
      <option>UAE</option>
      <option>Uk</option>
    </Form.Control>
  </Form.Group>
  </Form>
  </td>
  
  </tr>
  <tr><td> <Form.Label>Pin</Form.Label></td><td> <Form.Group controlId="exampleForm.SelectCustomSizeSm">
  <Form.Control size="sm"/> </Form.Group></td>
  </tr>
  <Row>
<Button className="cart-button" onClick={() =>setTaxComponent(true)}>Estimate Tax</Button>
</Row>

      </Table>
    }
</Col>
</Row>
</Container>
       }
       {myCartItem.length == 0 &&  show &&<Container>
<Row>
<Alert className="cart-update-alert" onClose={() => setShow(false)} dismissible>
<Alert.Heading className="cart-alert-heading">Notice</Alert.Heading>
  <p>
Cart updated successfully
</p>
</Alert>
      </Row> </Container> }
      {myCartItem.length == 0 &&
      <Container>
      <Row className="no-item">
      No items found in the cart
        </Row>

      </Container>
      }
     
</div>
  )
}

export default Cart;
