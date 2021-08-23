import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GogglePlayStore.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
// import Logo from "../../Asset/logo.png";

const Signin = () => {
  return (
    <div className="container-Signin">
      <Row>
        <Col className="p-0">
          <div className="Signinbg-left">
            <div className="left-signin">
              <img
                className="Logo-Cf mt-5 justify-content-center"
                src={Logo}
                alt="logo"
              />
              <h2>Let’s make your own crowd!</h2>
              <img
                src={PlayStore}
                alt="playstore"
                width="175"
                height="55"
                className="d-inline-block align-top"
              />
              <img
                src={AppStore}
                alt="appstore"
                width="175"
                height="65"
                className="d-inline-block align-top mt-1"
              />
            </div>
          </div>
        </Col>

        <Col className="p-0">
          <div className="Signinbg-right justify-content-center">
            <div className="Right-signin d-flex justify-content-center">
              <div
                className="box-signin my-auto"
                style={{ height: "30rem", width: "25rem" }}
              >
                <Form>
                  <div>
                    <Form.Group className="d-flex mt-3 justify-content-center">
                      <h2 className="mt-auto">Login</h2>
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mx-4"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mx-4"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group>
                      <Col>
                      <Link to="/home">
                        <button
                          className="button-signin mt-3 width-nokay"
                          type="submit"
                        >
                          Login
                        </button>
                      </Link>
                      </Col>
                      <p className="mt-4 text-muted text-center signFoot">
                        don't have an account? <Link to="/">Sign Up</Link>
                      </p>
                    </Form.Group>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
