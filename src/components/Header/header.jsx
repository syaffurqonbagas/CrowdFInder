import React from "react";
import { Navbar, Container, Nav, FormControl, Form } from "react-bootstrap";
import LogoCrowdFinder from "../../Asset/LogoCrowdFinder";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header ">
        <Navbar>
          <Container>
            <Navbar.Brand className="header-logo" href="/signin">
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
                <Nav.Link href="#">Feeds</Nav.Link>
                <Nav.Link href="#">Notification</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
