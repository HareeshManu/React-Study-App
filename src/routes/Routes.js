import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../views/Home';
import Cart from '../views/Cart';
import Checkout from '../views/Checkout';
import Booking from '../views/Booking';
import Profile from '../views/Profile';
const Routes = () => {
  return (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/addtocart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/confirmation">
          <Booking/>
        </Route>
        <Route exact path="/login">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  </>
)};

export default Routes;