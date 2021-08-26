import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AvatarCard from '../../components/AvatarCard';
import Hero from '../../components/Hero';
import { getUser } from '../../redux/action/user';


import About from './about';
import Activities from './activities';


import './index.scss'

function MyProfile(props) {
    const user = useSelector((state) => state.userData)
    const [isAbout, setIsAbout] = useState(true)
    const dispatch = useDispatch()
    const Token = localStorage.getItem('Token')

    useEffect(() => {
        dispatch(getUser());
        console.log('yuhu', user)
    }, [])



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

                            <h5 className={`${isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(true)} >About</h5>
                            <h5 className={`${!isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(false)} >Activities</h5>
                        </div>
                        {isAbout ? <About /> : <Activities />}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default MyProfile;