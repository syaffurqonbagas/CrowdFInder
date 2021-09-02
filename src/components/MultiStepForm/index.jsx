import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Register } from "../../redux/action/user";
import "./index.css";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GogglePlayStore.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MultiStep() {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    role: "",
    email: "",
    password: "",
    username: "",
    fullname: "",
    location: "",
    interest: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (page > 3) {
      alert("register successs");
    }
  }, [page]);

  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const changeInterest = (e) => {
    if (form.interest.length <= 5) {
      setForm({
        ...form,
        interest: form.interest.find((item) => item === e.target.value)
          ? form.interest.filter((item) => item !== e.target.value)
          : [...form.interest, e.target.value],
      });
    }
  };

  const changeStep = (type) => {
    if (type === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    (dispatch(
      Register(
        form.role,
        form.email,
        form.password,
        form.username,
        form.fullname,
        form.location,
        form.interest
      )
    )) 
    // {
    //   alert("register successfully");
    //   window.location.replace("/signin");
    // }
  };

  console.log("form", form);

  return (
    <>
      <Form onSubmit={(e) => handleRegister(e)}>
        {page === 1 ? (
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
                  <div className="box my-auto" style={{ width: "25rem" }}>
                    <Form>
                      <div>
                        <Form.Group className="d-flex mt-3 justify-content-center">
                          <h2 className="mt-auto">Sign Up</h2>
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicFullName"
                        >
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Fullname"
                            value={form.name}
                            name="fullname"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicUserName"
                        >
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            value={form.username}
                            name="username"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicEmail"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="example@gmail.com"
                            value={form.email}
                            name="email"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            name="password"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Col>
                            <button
                              disabled={!form.email || !form.password}
                              className="button-signup mt-3 width-nokay"
                              type="submit"
                              onClick={() => changeStep("next")}
                            >
                              SignUp
                            </button>
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
        ) : null}

        {/* ================================================= */}

        {page === 2 ? (
          <div className="container-city">
            <div className="d-flex">
              <div className="w-100">
                <div className="Citybgimage-left">
                  <div className="left-city"></div>
                </div>
              </div>

              <div className="w-100">
                <div className="Citybgimage-right justify-content-center">
                  <div className="Right-City d-flex justify-content-center"></div>
                </div>
              </div>
            </div>
            <div className="content-city">
              <div className="city">
                <Container>
                  <div className="content-form d-flex justify-content-center">
                    <Form className="mt-5 mb-5">
                      <h2>Welcome to CrowdFinder</h2>
                      <h3>Helps you to find right community</h3>
                      <div className="interest ms-3">
                        <div className="content-interest justify-content-center">
                          <p>
                            <i class="fas fa-map-marker-alt"></i> Where is city
                            you live in?
                          </p>
                          <p>Let people find you greate thoughts</p>
                          <div style={{ width: "85%" }}>
                            <Form.Group className="mb-3" controlId="interest">
                              <Form.Control
                                type="text"
                                placeholder="Type a city’s name"
                                value={form.location}
                                name="location"
                                onChange={(e) => changeForm(e)}
                              />
                            </Form.Group>
                            <p>Create Acount as :</p>
                            <Form.Group className="mb-3 ">
                              <Col>
                                <div>
                                  <input
                                    class="form-radio-input"
                                    type="radio"
                                    name="role"
                                    placeholder="User"
                                    value="user"
                                    onChange={(e) => changeForm(e)}
                                  />
                                  <label>User</label>
                                </div>
                                <div>
                                  <input
                                    class="form-radio-input"
                                    type="radio"
                                    name="role"
                                    placeholder="Community"
                                    value="community"
                                    onChange={(e) => changeForm(e)}
                                  />
                                  <label>Community</label>
                                </div>
                              </Col>
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                              <Button
                                onClick={() => changeStep("prev")}
                                style={{ width: "10rem" }}
                              >
                                Prev
                              </Button>
                              <Button
                                onClick={() => changeStep("next")}
                                style={{ width: "10rem" }}
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
        ) : null}

        {/* ================================================ */}

        {page === 3 ? (
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
                        There a lot of people and community waiting you! Let's
                        be part of them
                      </p>
                      <p>
                        We will find you the communities and pople which fit
                        with your interesting topics. So let's find them
                      </p>
                      <Row>
                        {/* {Coll 1} */}
                        <Col>
                          <div className="Cekbox">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="sports"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "sports"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">sports</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="finance"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "finance"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">finance</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="automotive"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "automotive"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">automotive</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="politics"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "politics"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">politics</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="design"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "design"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">design</label>
                            </div>
                          </div>
                        </Col>
                        {/* {Col 2} */}

                        <Col>
                          <div className="Cekbox">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="cook"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "cook"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">cook</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="tech"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "tech"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">tech</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="religion"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "religion"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">religion</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="art"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "art"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">art</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="music"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "music"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">music</label>
                            </div>
                          </div>
                        </Col>
                        {/* {Coll 3} */}

                        <Col>
                          <div className="Cekbox">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="business"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "business"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">business</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="psychology"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "psychology"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">psychology</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="tourism"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "tourism"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">tourism</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="bike"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "bike"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">bike</label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                placeholder="enter your interest"
                                value="science"
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== "science"
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                              <label class="form-check-label">science</label>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <div className="">
                        <p>You can choose Max 5 Interest</p>
                        <div className="button-choseiterest">
                          <Row>
                            <Col>
                              <div className="d-flex">
                                <Button
                                  onClick={() => changeStep("prev")}
                                  className="mb-4"
                                  style={{ width: "10rem" }}
                                >
                                  Prev
                                </Button>
                                {/* <Link to="/signin"> */}
                                <Button
                                  type="submit"
                                  className="mb-4"
                                  style={{ width: "10rem" }}
                                  onClick={handleRegister}
                                >
                                  Next
                                </Button>
                                {/* </Link> */}
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
        ) : null}
      </Form>
    </>
  );
}
