import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarCard from '../../components/AvatarCard';
import AvatarComunity from '../../components/AvatarComunity';
import Hero from '../../components/Hero';
import About from './about';
import './index.scss'
import Post from './Post';

function ComunityProfile(props) {

    const [isAbout, setIsAbout] = useState(true)

    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarComunity />
                    </Col>
                    <Col>
                        <div className="button-menu d-flex">

                            <h5 className={`${isAbout ? "is-active" : ""} `} onClick={() => setIsAbout(true)} >About</h5>
                            <h5 className={`${!isAbout ? "is-active" : ""} `} onClick={() => setIsAbout(false)} >Events</h5>
                            <h5 className={`${!isAbout ? "is-active" : ""} `} onClick={() => setIsAbout(false)} >Post</h5>
                        </div>
                        {isAbout ? <About /> : <Post />}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default ComunityProfile;