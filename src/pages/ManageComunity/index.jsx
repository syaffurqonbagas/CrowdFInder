import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarCard from '../../components/AvatarCard';
import AvatarManageCm from '../../components/AvatarManageCM';

import Hero from '../../components/Hero';
import About from './about';
import Event from './Event';
import './index.scss'
import Post from './Post';

function ManageComunity(props) {

    const [isAbout, setIsAbout] = useState(1)

    const toggle = (index) => {
        setIsAbout(index);
    }

    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarManageCm />
                    </Col>
                    <Col>
                        <div className="button-menu d-flex">

                            <h5 className={`${isAbout === 1 ? "is-active" : "not-active"}`} onClick={() => toggle(1)} >About</h5>
                            <h5 className={`${isAbout === 2 ? "is-active" : "not-active"}`} onClick={() => toggle(2)} >Events</h5>
                            <h5 className={`${isAbout === 3 ? "is-active" : "not-active"}`} onClick={() => toggle(3)} >Post</h5>
                        </div>
                        {isAbout === 1 ? <About /> : ''}
                        {isAbout === 2 ? <Event /> : ''}
                        {isAbout === 3 ? <Post /> : ''}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default ManageComunity;