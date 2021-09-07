import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AvatarCard from '../../components/AvatarCard';
import AvatarManageCm from '../../components/AvatarManageCM';

import Hero from '../../components/Hero';
import { getPostById } from '../../redux/action/postById';
import About from './about';
import Event from './Event';
import './index.scss'
import Post from './Post';

function ManageComunity(props) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userData.user)
    const [isAbout, setIsAbout] = useState(1)

    const toggle = (index) => {
        setIsAbout(index);
    }

    useEffect(() => {
        dispatch(getPostById(1, user.id))
        console.log(user.id)
    })


    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarManageCm comunityname={user.username} location={user.location} photo={`https://ui-avatars.com/api/?name=${user?.fullname}&background=random&length=1&rounded=true&size=35`} />
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