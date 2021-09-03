import { useEffect, useState } from "react";
import React from "react";
import { logout, getCurrentUser } from "../../redux/action/user";
import { useSelector, useDispatch } from "react-redux";
// import {searchFunction, clearPost} from "../../redux/action/post"
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


const Header = () => {
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
  }, [])

  // const searchPost = (e) => {
  //   if (e.target.value) {
  //     dispatch(searchFunction(e.target.value));
  //   } else {
  //     dispatch(clearPost());
  //   }
  // };

  // const debounce = (func, timeout = 500) => {
  //   let timer;
  // return (...args)=>{
  //   clearTimeout(timer);
  //   timer = setTimeout(()=>{
  //     func.apply(this, args);
  //   }, timeout)
  // }}

  // const debounceSearch = debounce((e) => searchPost(e));

//  console.log('testing',user)
  return (
    <>
      <div className="header">
        <Navbar>
          <Container>
            <Navbar.Brand className="header-logo" href="/home">
              <LogoCrowdFinder />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {isLoggedIn && (
                <>
                  <Nav className="me-auto">
                    <Form className="search-bar d-flex">
                      <FormControl
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        // onChange={(e) => debounceSearch(e)}
                      />
                    </Form>
                  </Nav>
                  {/* {} */}
                  <Nav className="Feed-Notification">
                    <Nav.Link href="/home"><i class="fa fa-home fa-lg"></i><Col><p>Feeds</p></Col></Nav.Link>
                    <Nav.Link href="#"><i class="fa fa-bell fa-lg"></i><Col><p>Notification</p></Col></Nav.Link>
                  </Nav>
                  <Nav>
                    < NavDropdown style={{ padding: '0px', width: '61px', height: '80px' }} title={<div className="text-center avatar">
                      <img src={`https://ui-avatars.com/api/?name=${user?.fullname}&background=random&length=1&rounded=true&size=35`} alt="..." />
                    </div>} id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
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
