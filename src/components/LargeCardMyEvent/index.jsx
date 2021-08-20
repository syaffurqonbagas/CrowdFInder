import React from 'react'
import './index.css'
// import user from '../../img/user.png'
import user from '../../image/user.png'
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import image from '../../img/largeCardDummy.jpeg'


function LargeCardMyEvent() {
    return (
        <>
            <div className="divider my-3 mb-3"></div>
            <div className="head-container">

                <div className="d-flex">
                    <div className="imageAvatar">
                        <img src={user}/>
                    </div>
                    <div className="headText container-fluid d-block">
                        <p className="d-flex justify-content-end m-0">...</p>
                        <div className="headText-main d-flex">
                            <div className="my-auto" style={{ fontSize: '20px', fontWeight: '700' }}>
                                Inoki Ardhi</div>
                            <div className="headTextBadge rounded-pill ms-3 me-auto">Design</div>
                            <div style={{ fontSize: '18px', fontWeight: '400', color: '#828282' }} ><i class="fas fa-map-marker-alt ms-auto me-0"></i> Sumbawa</div>
                        </div>
                        <p style={{ fontSize: '16px', fontWeight: '400', color: '#4F4F4F' }}>1 hours ago</p>
                    </div>
                </div>

                <div>
                    <Card>
                        <div className="w-75 ms-3 mt-3 mb-4">
                            <p className="fontSize">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quaerat commodi reprehenderit similique ad soluta omnis nesciunt minima, sequi numquam et officia suscipit iusto minus libero ea reiciendis distinctio odit?</p>
                            <img className="imageSize" src={image} alt="" />
                        </div>

                        <div className="btnGroup d-inline-flex">
                            <button className="button-card flex-grow-1"><i class="fas fa-thumbs-up"></i>Like(10)</button>
                            <button className="button-card flex-grow-1"><i class="fas fa-comment-dots"></i>Comment(15)</button>
                            <button className="button-card flex-grow-1"><i class="fas fa-share-alt"></i>Share</button>
                        </div>

                    </Card>

                </div>
            </div>
        </>
    )
}

export default LargeCardMyEvent
