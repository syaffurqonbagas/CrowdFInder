import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GogglePlayStore.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  return (
    <div className="container-signup">
      <div className="d-flex">
          <div className="Fullbgimage-left w-100">
            <div className="left d-flex align-items-center">
              <div>
                <img
                  className="Logo justify-content-center"
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
                  className="d-inline-block align-top"
                />
            </div>
          </div>
        </div>

        <div className="Fullbgimage-right justify-content-center w-100">
          <div className="Right d-flex justify-content-center">
            <div
              className="box my-auto"
              style={{width: "25rem" }}
            >
              <Form>
                <div>
                  <Form.Group className="d-flex mt-3 justify-content-center">
                    <h2 className="mt-auto">Sign Up</h2>
                  </Form.Group>
                  <Form.Group className="mb-3 mx-4" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group className="mb-3 mx-4" controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control />
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
                      <Link to="/multistep">
                        <button
                          className="button-signup mt-3 width-nokay"
                          type="submit"
                        >
                          SignUp
                        </button>
                      </Link>
                    </Col>
                    <p className="text-center mt-3">
                      Already have an account ?{" "}
                      <Link to="/signin">Sign in</Link>
                    </p>
                  </Form.Group>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
