import React, { useRef, useEffect, useState } from 'react'
import './index.scss'
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function Bio() {
    const ref = useRef();
    useOnClickOutside(ref, () => setShow(false));
    const [show, setShow] = useState(false);

    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },

            [ref, handler]
        );
    }

    const toggleDropDown = () => {
        setShow(!show);
    }

    return (

        <div className='bio pb-2'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Bio</h5>

                <div ref={ref} className="my-auto d-flex position-relative">
                    <i className="button-edit fas fa-edit"
                        onClick={() => toggleDropDown()}
                        tabIndex="0"></i>
                    {show && (
                        <Form className='position-absolute modal-edit'>
                            <div className="modal-body">
                                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{ fontWeight: '700' }}>Bio Edit</Form.Label>
                                    <Form.Control className='modal-textarea' as="textarea" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    )}
                </div>
            </div>
            <div className="body mt-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor neque porta odio tellus. Vulputate ut sit leo nunc ipsum lacus egestas mi aliquet. Interdum morbi leo cursus ultrices augue nulla est. Pulvinar nunc non vulputate sed nunc amet. At dignissim enim maecenas ut odio.</p>
            </div>
        </div >

    )
}


export default Bio
