import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import "./City.css";
import { Col, Row } from "react-bootstrap";

const City = (props) => {
  return (
    <div className="container-city">
      <Row>
        <Col className="p-0">
          <div className="Citybgimage-left">
            <div className="left-city"></div>
          </div>
        </Col>

        <Col className="p-0">
          <div className="Citybgimage-right justify-content-center">
            <div className="Right-City d-flex justify-content-center"></div>
          </div>
        </Col>
      </Row>
      <div className="content-city">
        <div className="city mt-3">
          <Container>
            <div className="content-form d-flex justify-content-center">
              <Form className="mt-5">
                <h2>Welcome to CrowdFinder</h2>
                <h3>Helps you to find right community</h3>
                <div className="interest ms-4">
                  <div className="content-interest justify-content-center">
                    <p>Where is city you live in?</p>
                    <p>Let people find you greate thoughts</p>
                    <div style={{ height: "10rem", width: "85%" }}>
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
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default City;
