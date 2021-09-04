import { useEffect, useState } from "react";
import React from "react";
import { logout, getCurrentUser } from "../../redux/action/user";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  NavDropdown,
  Col
} from "react-bootstrap";
import LogoCrowdFinder from "../../Asset/LogoCrowdFinder";
import "./header.css";
import { Link } from "react-router-dom";



const Header = () => {
  const userrole = useSelector((state) => state.userData.user)
  const { isLoggedIn, user } = useSelector((state) => state.userData)
  const dispatch = useDispatch()
  const { CurrentUser, setCurrentUser } = useState(null)
  const Logout = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.location.replace("/");
  };

  useEffect(() => {
    dispatch(getCurrentUser());

  }, [dispatch])



  //  console.log('testing',user)
  return (
    <>
      <div className="header">
        <Navbar >
          <Container>
            <Link to="/home"><Navbar.Brand className="header-logo">
              <LogoCrowdFinder />
            </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-around">
              {isLoggedIn && (
                <>

                  <Nav className="me-auto">
                    <Form className="search-bar d-flex">
                      <FormControl
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </Form>
                  </Nav>
                  {/* {} */}
                  <Nav className="Feed-Notification">
                    <Link to="/home"
                      style={{
                        textDecoration: 'none', color: 'black'
                        , display: "flex", flexDirection: 'column',
                        justifyContent: "center", alignItems: 'center', marginRight: "2rem"
                      }} >
                      <i style={{ color: "white" }} className="fa fa-home fa-lg"></i>
                      <p>Feeds</p>
                    </Link>
                    <Link to="/home" style={{
                      textDecoration: 'none', color: 'black'
                      , display: "flex", flexDirection: 'column',
                      justifyContent: "center", alignItems: 'center', marginRight: "2rem"
                    }} >
                      <i style={{ color: "white" }} className="fa fa-bell fa-lg">
                      </i>
                      <Col>
                        <p>Notification</p></Col>
                    </Link>
                  </Nav>
                  <Nav>
                    < NavDropdown style={{ padding: '0px', width: '61px', height: '80px' }} title={<div className="text-center avatar">
                      <img src={`https://ui-avatars.com/api/?name=${user?.fullname}&background=random&length=1&rounded=true&size=35`} alt="..." />
                    </div>} id="collasible-nav-dropdown">
                      {userrole.role === "community" ?
                        <NavDropdown.Item><Link to="/manage-comunity" style={{ textDecoration: 'none', color: 'black' }} >Profile cm</Link></NavDropdown.Item> :
                        <NavDropdown.Item><Link to="/profile" style={{ textDecoration: 'none', color: 'black' }} >Profile</Link></NavDropdown.Item>}
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={Logout}>
                        Sign Out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div >
    </>
  );
};

export default Header;
