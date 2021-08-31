import React, { useRef, useEffect, useState } from 'react'
import { Container, Badge, Row, Col } from "react-bootstrap"
import './index.scss'
import { HiPencilAlt } from 'react-icons/hi';
import { Form, Button } from 'react-bootstrap';

function InterstTopicNoEdit(props) {
    const [show, setShow] = useState(false);

    return (
        <div className='Topic py-3'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Interest Topic</h5>
            </div>
            <div className="body mt-2 d-flex">
                <Badge className='topicuser' pill >
                    {props.list}
                </Badge>
            </div>
        </div>
    )
}


export default InterstTopicNoEdit
