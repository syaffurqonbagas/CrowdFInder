import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import post from '../../image/postexamp.jpeg'
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { RiGroupFill } from 'react-icons/ri'

function LargeCrowdFinderCard() {
    return (

        <div className='lrg-crwd'>
            <div className="title py-3">
                <div className="avatar-post d-flex align-items-center">
                    <div className="image mb-3">
                        <img src={user} />
                    </div>
                    <div className="avatar-title ms-3 ">
                        <div className="user-posted d-flex ">
                            <h5>Anpaman</h5>
                            <h5 className='post ms-3' >Posted an event</h5>
                            <HiOutlineDotsHorizontal class="icon-edit" />
                        </div>
                        <p>3h ago</p>
                    </div>
                </div>
            </div>
            <Card className='body p-2'>

                <div className="image-post" style={{ backgroundImage: `url(${post})` }}>
                </div>

                <Row className='pt-3'>
                    <h6>Festival Makanan Nusantara (Bintang tamu 3 juri Master Cheff)</h6>
                </Row>
                <Row>
                    <Col md={2}><p><AiFillCalendar /> 22/09/2021</p></Col>
                    <Col><p><AiFillClockCircle /> 09.00 AM</p></Col>
                </Row>
                <Row>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, nesciunt ad assumenda temporibus, voluptatibus deleniti dolorem vitae aliquam nam exercitationem eveniet eaque nihil non vero?</p>
                </Row>
                <Row className='mb-3'>
                    <Col md={5} ><RiGroupFill />129 people attend this</Col>
                    <Col md={{ span: 3, offset: 4 }}
                        style={{ textAlign: 'right' }}
                    ><a href='#'>See Detail</a></Col>
                </Row>



            </Card>
        </div>

    )
}


export default LargeCrowdFinderCard
