import React, { useRef, useEffect, useState } from 'react'
import { Container, Badge, Row, Col } from "react-bootstrap"
import './index.scss'
import { HiPencilAlt } from 'react-icons/hi';
import { Form, Button } from 'react-bootstrap';

function InterstTopic(props) {
    const [show, setShow] = useState(false);

    return (
        <div className='Topic py-3'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Interest Topic</h5>
                <div className="my-auto d-flex position-relative">
                    <i className="button-edit fa fa-edit"
                        onClick={() => setShow(true)}
                    ></i>

                </div>
            </div>
            <div className="body mt-2 d-flex">
                {props.userInterest?.map((interest) => (<Badge className='topicuser' pill >
                    {interest}
                </Badge>))}
            </div>
            {show ?
                <div className='modal-edit mt-5'>

                    <div className="body-multi">
                        <div >
                            <Form.Label style={{ fontWeight: '700' }}>Interest Topic Edit</Form.Label>
                            {/* {Coll 1} */}
                            <div className="d-flex justify-content-between my-4">
                                <div>
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
                                </div>
                                {/* {Col 2} */}

                                <div>
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
                                </div>
                                {/* {Coll 3} */}

                                <div>
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
                                </div>
                            </div>

                            <div className="button">
                                <Button className='me-3' variant="primary" type="submit">
                                    save
                                </Button>
                                <Button variant="secondary" onClick={() => setShow(false)}>
                                    Cancel
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>
                : null}
        </div>
    )
}


export default InterstTopic
