import React from "react"
import { Card, Image, Button, Container } from "react-bootstrap"
import user from '../../image/user.png'
import './index.scss'

function ListCardPeople(props) {
    return (
        <div className='pb-3'>
            <Card className='ListCard' style={{ borderRadius: '10px' }}>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <div className="user-detail d-flex ms-1 ">
                        <div className="image">
                            <img src={user} />
                        </div>
                        <div className="user-title ms-4">
                            <h5>{props.fullname}</h5>
                            <p>Comunity Manager</p>
                        </div>
                    </div>
                    <div>
                        <Button style={{ fontSize: '14px', fontWeight: '700' }} size='lg' variant="secondary">Unfollow</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}


export default ListCardPeople
