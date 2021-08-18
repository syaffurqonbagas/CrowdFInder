import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarCard from '../../components/AvatarCard';
import Hero from '../../components/Hero';
import Comunity from './comunity';


import './index.scss'
import People from './people';

function MyCrowd(props) {

    const [isAbout, setIsAbout] = useState(true)

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

                            <h5 className={`${isAbout ? "is-active" : ""} `} onClick={() => setIsAbout(true)} >Comunity</h5>
                            <h5 className={`${!isAbout ? "is-active" : ""} `} onClick={() => setIsAbout(false)} >People</h5>
                        </div>
                        {isAbout ? <Comunity /> : <People />}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default MyCrowd;