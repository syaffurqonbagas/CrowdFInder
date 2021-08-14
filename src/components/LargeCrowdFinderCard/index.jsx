import React from "react"
import { Card, Container } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import post from '../../image/postexamp.jpeg'



function LargeCrowdFinderCard() {
    return (
        <Container>
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

                </Card>
            </div>
        </Container >
    )
}


export default LargeCrowdFinderCard
