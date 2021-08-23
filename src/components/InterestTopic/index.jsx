import React from "react"
import { Container, Badge } from "react-bootstrap"
import './index.scss'
import { HiPencilAlt } from 'react-icons/hi';

function InterstTopic() {
    return (
        <div className='Topic py-3'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Interest Topic</h5>
                <HiPencilAlt />
            </div>
            <div className="body mt-2 d-flex wrapper">
                <Badge className='topicuser' pill >
                    Culture exhange
                </Badge>
            </div>
        </div>
    )
}


export default InterstTopic
