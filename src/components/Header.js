import React from 'react';
const Header = (props) => {
  return (
    <>
<section id="header">
    <div class="container-fluid">
    <i class="icon fa fa-check-circle fa-4x"></i>
    <h3>Easy to use.</h3>

    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">tindog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">MY CART</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">REGISTER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">COMPARE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
</div>
</section>
  </>
  )
} 
export default Header;
