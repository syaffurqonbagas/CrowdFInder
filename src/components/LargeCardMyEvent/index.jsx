import React from 'react'
import './index.css'
import user from '../../img/user.png'
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import image from '../../img/largeCardDummy.jpeg'


function LargeCardMyEvent() {
    return (
        <>
            <div className="divider my-3 mb-3"></div>
            <div className="head-container">

                <div className="d-flex">
                    <img src={user} alt="" className="profilePic" />
                    <div className="headText container-fluid d-block">
                        <p className="d-flex justify-content-end m-0">...</p>
                        <div className="headText-main d-flex">
                            <div className="my-auto"><h5>Inoki Ardhi</h5></div>
                            <div className="headText-badge rounded-pill ms-3 me-auto">Design</div>
                            <div><i class="fas fa-map-marker-alt ms-auto me-0"></i> Sumbawa</div>
                        </div>
                        <p>1 hours ago</p>
                    </div>
                </div>

                <div>
                    <Card>
                        <div className="w-75 ms-3 mt-3 mb-4">
                            <p className="fontSize">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quaerat commodi reprehenderit similique ad soluta omnis nesciunt minima, sequi numquam et officia suscipit iusto minus libero ea reiciendis distinctio odit?</p>
                            <img className="imageSize" src={image} alt="" />
                        </div>

                        <div className="btnGroup d-inline-flex">
                            <button className="flex-grow-1"><i class="fas fa-thumbs-up"></i>Like(10)</button>
                            <button className="flex-grow-1"><i class="fas fa-comment-dots"></i>Comment(15)</button>
                            <button className="flex-grow-1"><i class="fas fa-share-alt"></i>Share</button>
                        </div>

                    </Card>

                </div>
            </div>
        </>
    )
}

export default LargeCardMyEvent
