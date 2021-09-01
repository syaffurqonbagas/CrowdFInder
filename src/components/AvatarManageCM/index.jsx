import React from "react"
import { Link } from "react-router-dom"
import { Card, Container, Button, Badge } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';

function AvatarManageCm(props) {
    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={user} />
            </div>
            <Card.Body className='title-cm'>
                <h4>{props.comunityname}</h4>
                <div className="comunity-badge my-2">
                    <h5>Comunity</h5>
                </div>
                <h5><TiLocation />{props.location}</h5>

            </Card.Body>
            <Card.Body className='cardbody d-flex align-items-center flex-column'>
                <Button className='my-4' style={{ width: '70%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                    Comunity Setting
                </Button>
            </Card.Body>

        </Card>

    )
}


export default AvatarManageCm
