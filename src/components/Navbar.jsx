import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function CustomNavbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const buttonStyle = {
    margin: '0 5px',
  };

  const navLinkStyle = {
    paddingLeft: '10px',
  };

  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand className="fs-1 fst-italic pl-3" as={Link} to="/">
        FoodieEase
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-grow-1">
          <Nav.Link as={Link} to="/" className="nav-link active fs-5" style={navLinkStyle}>
            Home
          </Nav.Link>
          {localStorage.getItem("authToken") && (
            <Nav.Link as={Link} to="/myOrder" className="nav-link active fs-5" style={navLinkStyle}>
              My Orders
            </Nav.Link>
          )}
        </Nav>
        {localStorage.getItem("authToken") ? (
          <>
            <div className="d-flex d-lg-none justify-content-center w-100">
              <div
                className="btn bg-white text-success"
                style={buttonStyle}
                onClick={() => setCartView(true)}
              >
                My Cart {""}
                <Badge pill bg="danger"> {data.length} </Badge>
              </div>
              <div
                className="btn bg-white text-danger"
                style={buttonStyle}
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
            {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
            <div className="btn bg-white text-success mx-2 d-none d-lg-block" onClick={() => setCartView(true)}>
              My Cart {""}
              <Badge pill bg="danger"> {data.length} </Badge>
            </div>
            <div className="btn bg-white text-danger mx-2 d-none d-lg-block" onClick={handleLogout}>
              Logout
            </div>
          </>
        ) : (
          <div className="d-flex d-lg-none justify-content-center w-100">
            <Nav.Link as={Link} to="/login" className="btn bg-white text-success" style={buttonStyle}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/createuser" className="btn bg-white text-success" style={buttonStyle}>
              SignUp
            </Nav.Link>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}





