import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const City = (props) => {
  return (
    <div className="mt-3 justify-content-center">
      <Container>
        <Form>
          <h2>Welcome to CrowdFinder</h2>
          <h3>Helps you to find right community</h3>
          <div className="interest ms-4">
            <div className="content-interest justify-content-center">
              <p>Where is city you live in?</p>
              <p>Let people find you greate thoughts</p>
              <div style={{ height: "30rem", width: "35rem" }}>
                <Form.Group className="mb-3" controlId="interest">
                  <Form.Control placeholder="Type a city’s name" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                  onClick={props.onClick}
                    className="button"
                    style={{ width: "20rem" }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default City;
