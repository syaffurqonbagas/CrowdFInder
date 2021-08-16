import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarCard from '../../components/AvatarCard';
import Hero from '../../components/Hero';
import About from './about';
import Activities from './activities';


import './index.scss'

function MyProfile(props) {

    const [isAddAbout, setIsAddAbout] = useState(true)

    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarCard />
                    </Col>
                    <Col>
                        <div className="button-menu d-flex">
                            <h5 onClick={() => setIsAddAbout(true)} >About</h5>
                            <h5 onClick={() => setIsAddAbout(false)} >Activities</h5>
                        </div>
                        {isAddAbout ? <About /> : <Activities />}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default MyProfile;