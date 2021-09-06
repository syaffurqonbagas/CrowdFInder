import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Card, Form, Button, Modal } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';
import { useDispatch } from "react-redux"
import { logout } from "../../redux/action/user"
import './responsive.scss'
import Swal from "sweetalert2"

function AvatarCard(props) {
    const dispatch = useDispatch();
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const { body, setBody } = useState({
        password: ""

    })
    function handleShow() {
        setFullscreen('sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down');
        setShow(true);
    }

    const Logout = (e) => {
        e.preventDefault();
        dispatch(logout());
        window.location.replace("/")
    }

    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={props.photo} />
            </div>
            <Card.Body className='title'>
                <h4>{props.username}</h4>
                <h5><TiLocation />{props.location}</h5>
            </Card.Body>

            <Card.Body className='show-example-btn cardbody d-flex align-items-center flex-column'>
                <Button onClick={handleShow} className='my-4' style={{ width: '70%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                    Profile Setting
                </Button>


                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Profile
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setShow(false)}> Save</Button>
                        <Button variant='secondary' onClick={() => setShow(false)}> Cancel</Button>
                    </Modal.Footer>
                </Modal>

                <h5 style={{ color: '#D82671', fontWeight: '700', textDecoration: 'none', fontSize: '16px', cursor: 'pointer' }} onClick={Logout}>  Logout</h5>
            </Card.Body>
        </Card >

    )
}


export default AvatarCard
