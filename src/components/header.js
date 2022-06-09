import React from "react";
import favorite from "../images/theme-icons/favorite-icon.png";
import user from "../images/theme-icons/user-icon.png";
import cart from "../images/theme-icons/cart-icon.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from "../images/logo.svg";
import tshirtsSvg from "../images/svg/tshirt.svg";
import { Link } from "react-router-dom";
function HeaderApp() {
  return (
    <div className="container_header">
      <Navbar expand="lg">
        <Container fluid>
          <div className="col-md-2">
          <Navbar.Brand Link to="/">
            <img className="logo_image" src={logo} alt="logo" />
          </Navbar.Brand>
          </div>
          <div className="col-md-5"><input type="search" className="form-control custom-search" placeholder="Search For Products, Brands & Categories" /></div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="d-none">
            <Nav
              className="navbar_dropdown me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <button className="header_dropdown_button">Mens</button>
              <div className="navbar_dropdown_content">
                <div className="col">
                  <Link to="/products/tshirts">
                    <img className="svg_icon" src={tshirtsSvg} alt="shirts" />
                    <span class="text-menu-1">T-shirts</span>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/products/shorts">
                    <img className="svg_icon" src={tshirtsSvg} alt="shirts" />
                    <span class="text-menu-1">Shorts</span>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/products/jeans">
                    <img className="svg_icon" src={tshirtsSvg} alt="shirts" />
                    <span class="text-menu-1">Jeans</span>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/products/trousers">
                    <img className="svg_icon" src={tshirtsSvg} alt="shirts" />
                    <span class="text-menu-1">Trousers</span>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/products/lowers">
                    <img className="svg_icon" src={tshirtsSvg} alt="shirts" />
                    <span class="text-menu-1">Lowers</span>
                  </Link>
                </div>
              </div>
            </Nav>
            
            <span className="counter-container me-4">
              <img src={favorite} />
              <span className="counter-badage">0</span>
            </span>
            <img src={user} className="me-4"/>
            <span className="counter-container me-4">
            <img src={cart} /> 
            <span className="counter-badage">0</span>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="custom-navbar">
        <ul>
          <li>All categories</li>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/products/details">New Arrivals</Link></li>
          <li><Link to="/products/tshirts">Trending</Link></li>
          <li><Link to="/products/tshirts">Deals For You</Link></li>
          <li><Link to="/products/tshirts">Discounts</Link></li>
          <li><Link to="/products/tshirts">Weekly offers</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderApp;
