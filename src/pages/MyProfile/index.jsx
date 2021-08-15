import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarCard from '../../components/AvatarCard';
import Bio from '../../components/Bio';
import Hero from '../../components/Hero';
import InterstTopic from '../../components/InterestTopic';
import ListCard from '../../components/ListCard';
import './index.scss'

function MyProfile(props) {
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
                            <h5>About</h5>
                            <h5>Activities</h5>
                        </div>
                        <Bio />
                        <hr />
                        <InterstTopic />
                        <hr />
                        <div className="myCrowd d-flex justify-content-between py-3">
                            <h5>My Crowd</h5>
                            <h5>See detail</h5>
                        </div>
                        <ListCard />
                        <ListCard />
                        <ListCard />

                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default MyProfile;