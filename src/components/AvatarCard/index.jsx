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
                <Button className='my-4' style={{ width: '70%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                    Profile Setting
                </Button>
                <h5 >  <Link style={{ color: '#D82671', fontWeight: '700', textDecoration: 'none', fontSize: '16px' }} to="/">Logout</Link></h5>
            </Card.Body>
        </Card>

    )
}


export default AvatarCard
