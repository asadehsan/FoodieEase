import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function CustomNavbar() {
  const [cartView, setCartView] = useState(false);
  const data = useCart();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const buttonStyle = {
    margin: '0 5px',
  };

  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand className="fs-1 fst-italic pl-3" as={Link} to="/">
        FoodieEase
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-grow-1">
          <Nav.Link as={Link} to="/" className="nav-link active fs-5">
            Home
          </Nav.Link>
          {isAuthenticated && (
            <Nav.Link as={Link} to="/myOrder" className="nav-link active fs-5">
              My Orders
            </Nav.Link>
          )}
        </Nav>
        <div className="d-none d-lg-flex align-items-center ml-auto">
          {isAuthenticated && (
            <>
              <div
                className="btn bg-white text-success mx-2"
                style={buttonStyle}
                onClick={() => setCartView(true)}
              >
                My Cart {""}
                <Badge pill bg="danger"> {data.length} </Badge>
              </div>
              <div
                className="btn bg-white text-danger mx-2"
                style={buttonStyle}
                onClick={handleLogout}
              >
                Logout
              </div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Nav.Link as={Link} to="/login" className="btn bg-white text-success mx-2">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/createuser" className="btn bg-white text-success mx-2">
                SignUp
              </Nav.Link>
            </>
          )}
        </div>
        <div className="d-flex d-lg-none justify-content-center w-100 mt-2">
          {isAuthenticated && (
            <>
              <div
                className="btn bg-white text-success mx-2"
                style={buttonStyle}
                onClick={() => setCartView(true)}
              >
                My Cart {""}
                <Badge pill bg="danger"> {data.length} </Badge>
              </div>
              <div
                className="btn bg-white text-danger mx-2"
                style={buttonStyle}
                onClick={handleLogout}
              >
                Logout
              </div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Nav.Link as={Link} to="/login" className="btn bg-white text-success mx-2">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/createuser" className="btn bg-white text-success mx-2">
                SignUp
              </Nav.Link>
            </>
          )}
        </div>
        {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
      </Navbar.Collapse>
    </Navbar>
  );
}
