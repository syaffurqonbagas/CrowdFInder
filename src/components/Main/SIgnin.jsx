import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
// import Logo from "../../Asset/logo.png";

const Signin = () => {
  return (
    <div className="container-Signin">
      <Form>
        <div className="content-signin d-flex mt-3 justify-content-center">
          <div style={{ height: "30rem", width: "20rem" }}>
            <Form.Group className="d-flex mt-3 justify-content-center">
              <h2 className="mt-auto">Sign In</h2>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group>
              <Link to="/home">
              <Button
                className="mt-4 width-nokay"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
              </Link>
              <p className="mt-5 text-muted text-center signFoot">
                don't have an account?{" "}
                <Link to="/">
                  Sign Up
                </Link>
              </p>
            </Form.Group>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Signin;
