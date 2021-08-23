import React from "react"
import { Link } from "react-router-dom"
import { Card, Container, Button, Badge } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';

function AvatarManageCm() {
    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={user} />
            </div>
            <Card.Body className='title-cm'>
                <h4>Comunity Name</h4>
                <div className="comunity-badge my-2">
                    <h5>Comunity</h5>
                </div>
                <h5><TiLocation />Jakarta</h5>
            </Card.Body>


        </Card>

    )
}


export default AvatarManageCm
