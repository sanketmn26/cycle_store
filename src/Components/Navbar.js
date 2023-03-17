import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/bicycle.png'
import Cart from './Cart';
import { useCart } from "react-use-cart";
import LoginModal from './LoginModal';

const Navbar = () => {

  const { totalUniqueItems } = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3">
        <div className="container-fluid nav-container">
          <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" style={{ width: '70px' }} /></NavLink>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse px-0 close" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item mx-2" >
                <NavLink className="nav-link text-white" aria-current="page" to="/"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">HOME</span></NavLink>

              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link text-white" to="/shop"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">SHOP</span></NavLink>
              </li>


              <li className="nav-item mx-2">
                <NavLink className="nav-link text-white" to="/about"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">ABOUT US</span></NavLink>
              </li>


              <li className="nav-item mx-2">
                <NavLink className="nav-link text-white" to="/contact"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">CONTACT</span></NavLink>
              </li>
            </ul>

            <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span id="cart-btn" type="button" className=" mx-4 mx-lg-2  text-light ps-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <div id="item-icon"><i className="fa-solid fa-xl fa-cart-shopping "></i></div>
              <div id="item-num">{totalUniqueItems}</div>
            </span></span>

            <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span id="user-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="nav-link ms-4 ms-lg-2 text-white user"><i className="fa-regular fa-xl fa-user ms-0"></i></span></span>
          </div>
        </div>
      </nav >


      {/* cart */}

      < Cart />

      {/* Login Window */}

      <LoginModal />
    </>
  );
}

export default Navbar;