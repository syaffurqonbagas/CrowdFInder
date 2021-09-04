import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ChooseInterest.css";

const ChooseInterest = (props) => {
  return (
    <div className="container-interest">
      <div className="d-flex">
        <div className="w-100">
          <div className="bgimage-left">
            <div className="left-interest"></div>
          </div>
        </div>

        <div className="w-100">
          <div className="bgimage-right justify-content-center">
            <div className="Right-interest d-flex justify-content-center"></div>
          </div>
        </div>
      </div>

      <div className="yes">
        <div className="choose-interest">
          <Container>
            <div className="content-interest mt-5 justify-content-center">
              <div className="interest my-3 mx-3">
                <h3>What topic are you interesting in?</h3>
                <p>
                  There a lot of people and community waiting you! Let's be part
                  of them
                </p>
                <p>
                  We will find you the communities and pople which fit with your
                  interesting topics. So let's find them
                </p>
                <Row>
                  {/* {Coll 1} */}
                  <Col>
                    <div className="Cekbox">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="sports"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          sports
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="finance"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          finance
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="automotive"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          automotivee
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="politics"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          politics
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="design"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          design
                        </label>
                      </div>
                    </div>
                  </Col>
                  {/* {Col 2} */}

                  <Col>
                    <div className="Cekbox">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="cook"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          cook
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="tech"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          tech
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="religion"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          religion
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="art"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          art
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="music"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          music
                        </label>
                      </div>
                    </div>
                  </Col>
                  {/* {Coll 3} */}

                  <Col>
                    <div className="Cekbox">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="business"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          business
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="psychology"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          psychology
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="tourism"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          tourism
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="bike"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          bike
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="science"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          science
                        </label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="">
                  <p>You can choose Max 5 Interest</p>
                  <div className="button-choseiterest">
                    <Row>
                      <Col>
                        <div>
                          <Link to="/home">
                            <Button
                              className="button mb-4"
                              onClick={props.onClick}
                              style={{ width: "10rem" }}
                            >
                              Next
                            </Button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ChooseInterest;
