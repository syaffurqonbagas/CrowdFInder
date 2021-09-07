import React, { useRef, useEffect, useState } from 'react'
import './index.scss'
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function Bio(props) {

    const [show, setShow] = useState(false);


    return (

        <div className='bio pb-2'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Bio</h5>

                <div className="my-auto d-flex position-relative">
                    <i className="button-edit fa fa-edit"
                        onClick={() => setShow(true)}
                    ></i>

                </div>
            </div>
            <div className="body mt-2">
                <p>{props.bio}</p>
            </div>
            {show ?
                <Form className='modal-edit'>
                    <Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{ fontWeight: '700' }}>Bio Edit</Form.Label>
                        <Form.Control className='modal-textarea' as="textarea" />
                    </Form.Group>
                    <div className="button">
                        <Button className='me-3' variant="primary" type="submit">
                            save
                        </Button>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Cancel
                        </Button>
                    </div>
                </Form>
                : null}
        </div >
    )
}


export default Bio
