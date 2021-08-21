import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './index.css'
import profilDummy from '../../img/profilDummy.jpeg'

function CreatePost() {
    return (
        <>
            <Card className="ukuran">
                <div className="d-flex">
                    <div className="d-flex createContainer flex-grow-1">
                        <img src={profilDummy} style={{width: '74px' }} className="image ms-3" alt="" />
                        <h5 className="ms-3">Create Post or Events</h5>
                    </div>
                    <i className="fas fa-plus-circle me-4 my-auto fa-3x"></i>
                </div>
            </Card>
        </>
    )
}

export default CreatePost
