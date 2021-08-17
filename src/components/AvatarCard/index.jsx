import React from "react"
import { Link } from "react-router-dom"
import { Card, Container, Button } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';

function AvatarCard() {
    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={user} />
            </div>
            <Card.Body className='title'>
                <h4>Username</h4>
                <h5><TiLocation />Jakarta</h5>
            </Card.Body>

            <Card.Body className='cardbody d-flex align-items-center flex-column'>
                <Button className='my-4' style={{ width: '100%' }} variant="primary" size="lg">
                    Profile Setting
                </Button>
                <h5>
                    <Link to="/">LogOut</Link></h5>
            </Card.Body>
        </Card>

    )
}


export default AvatarCard
