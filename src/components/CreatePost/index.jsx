import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './index.css'
import profilDummy from '../../image/user.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CreatePost() {
    const [show, setShow] = useState(false);

    const toggleDropDownClose = () => {
        setShow(false);
    }

    const toggleDropDown = () => {
        setShow(!show);
    }
    return (
        <>
            <Card className="fontWeight-create">
                <div className="d-flex">
                    <div className="d-flex createContainer flex-grow-1 ms-4">
                        <h5 className="ms-3">Create Announcement or Events</h5>
                    </div>
                    <div className="my-auto d-flex position-relative">
                        {!show ? <i className="fas fa-plus-circle me-4 fa-3x"
                            onBlur={() => toggleDropDownClose()}
                            onClick={() => toggleDropDown()}
                            tabIndex="0"></i> : null}
                        {show && (
                            <div className="card position-absolute text-center positionAbsolute" style={{ width: '9rem' }}>
                                <Link to="/create-announcement">Announcement</Link>
                                <Link to="/create-event">Event</Link>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CreatePost
