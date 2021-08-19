import React from "react";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  NavDropdown,
} from "react-bootstrap";
import LogoCrowdFinder from "../../Asset/LogoCrowdFinder";
import "./header.css";

const Header = () => {

  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <>
      <div className="header ">
        <Navbar>
          <Container>
            <Navbar.Brand className="header-logo" href="/home">
              <LogoCrowdFinder />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Form className="d-flex search-bar">
                  <FormControl
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Form>
                <Nav.Link href="#"><i class="fas fa-home"></i>Feeds</Nav.Link>
                <Nav.Link href="#"><i class="fas fa-bell"></i>Notification</Nav.Link>
              </Nav>
              {/* {} */}

              <Nav>
                <div className="text-center">
                  <img className="rounded" alt="..." />
                </div>
                <NavDropdown title={`Hi, user`} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout} href="/">
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
