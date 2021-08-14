import React from "react"
import { Container, Badge } from "react-bootstrap"
import './index.scss'
import { HiPencilAlt } from 'react-icons/hi';

function InterstTopic() {
    return (
        <Container>
            <div className='Topic'>
                <div className="title d-flex justify-content-between align-items-center">
                    <h5>Interest Topic</h5>
                    <HiPencilAlt />
                </div>
                <div className="body mt-2">
                    <Badge className='topicuser' pill bg="primary">
                        Culture exhange
                    </Badge>
                </div>
            </div>
        </Container >
    )
}


export default InterstTopic
