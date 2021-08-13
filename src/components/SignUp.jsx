import {Form, Button} from "react-bootstrap"

const SignUp = () => {
  return (
    <div>
      <Form>
        <div style={{ height: "30rem" }}>
          <Form.Group className="d-flex mt-3 justify-content-center">
            <h2 className="mt-auto">Sign Up</h2>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group>
            <Button
              className="mt-4 width-nokay"
              variant="primary"
              type="submit"
            >
              REGISTER
            </Button>
            <p className="text-center mt-3">
              Already have an account ?{" "}
              <a>
                Sign in
              </a>
            </p>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
