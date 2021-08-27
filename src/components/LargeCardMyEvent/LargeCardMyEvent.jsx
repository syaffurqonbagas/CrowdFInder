import React from "react";
import "./LargeCardMyEvent.css";
// import user from '../../img/user.png'
import user from '../../image/user.png'
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap'
import image from '../../img/largeCardDummy.jpeg'
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";


function LargeCardMyEvent() {
    const [show, setShow] = useState(false);
    const [showComment, setShowComment] = useState(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setShow(false));

    const commentRef = useRef();


    const toggleComment = () => {
        setShowComment(!showComment);
    }

    const toggleDropDown = () => {
        setShow(!show);
    }

    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },

            [ref, handler]
        );
    }

    return (
        <>
            <div className="divider mt-5 mb-5"></div>
            <div className="headContainer">

                <div className="d-flex">
                    <div className="imageAvatar mb-4 me-2">
                        <img src={user} />
                    </div>
                    <div className="headText container-fluid d-block mb-2">

                        <div ref={ref} className="d-flex justify-content-end m-0 positionRelative">
                            <i class="fa fa-ellipsis-h"
                                onClick={() => toggleDropDown()}
                                tabIndex="0"></i>
                            {show && (
                                <div className="card position-absolute text-center stylingHover" style={{ width: '7rem' }}>
                                    <div>Edit</div>
                                    <div>Delete</div>
                                </div>
                            )}
                        </div>

                        <div className="headTextMain d-flex align-content-center">
                            <label
                                className="my-auto"
                                style={{ fontSize: "20px", fontWeight: "400" }}
                            >
                                Inoki Ardhi
                            </label>
                            <label className="headTextBadge rounded-pill ms-3 me-auto">
                                Design
                            </label>
                            <label
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#828282",
                                }}
                            >
                                <i class="fa fa-map-marker ms-auto me-0 fa-xs"></i> Sumbawa
                            </label>
                        </div>
                        <label
                            style={{ fontSize: "16px", fontWeight: "400", color: "#4F4F4F" }}
                        >
                            1 hours ago
                        </label>
                    </div>
                </div>

                <div>
                    <Card>
                        <div className="w-75 ms-3 mt-3 mb-4">
                            <p className="font-size">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                                quaerat commodi reprehenderit similique ad soluta omnis nesciunt
                                minima, sequi numquam et officia suscipit iusto minus libero ea
                                reiciendis distinctio odit?
                            </p>
                            <img className="imageSize" src={image} alt="" />
                        </div>

                        <div className="btnGroup d-inline-flex">
                            <button className="button-card flex-grow-1">
                                <i className="fa fa-thumbs-o-up"></i>Like(10)
                            </button>
                            <button className="button-card flex-grow-1" onClick={() => toggleComment()}>
                                <i className="fa fa-commenting-o"></i>Comment(15)
                            </button>
                            <button className="button-card flex-grow-1">
                                <i className="fa fa-share-alt"></i>Share
                            </button>
                        </div>
                    </Card>

                    <div className="hideComment" ref={commentRef} style={showComment ? { height: commentRef.current.scrollHeight + 'px' } : { height: '0px' }}>
                        <div className="commentCard py-3">
                            <InputGroup className="fontWeightSize-formEvent">
                                <FormControl
                                    className="mx-3 rounded-pill sizeText"
                                    placeholder="Type your comment"
                                    rows={1}
                                />
                            </InputGroup>
                            <div className="position-relative toTheLeft">
                                <Button className="rounded-circle btnStyle-largeCard" variant="secondary"><i class="fa fa-paper-plane"></i></Button>
                            </div>
                        </div>

                        <div className="commentCard py-3 text-center" style={{ fontWeight: '400', fontSize: '16px' }}>
                            <Link className="text-decoration-none text-secondary">Load more comment</Link>
                        </div>

                        <div className="commentCard py-3 px-3">
                            <div className="d-flex mb-2 fontCircular" style={{ fontWeight: '450', fontSize: '18px' }}>
                                <div className="flex-grow-1" >Bagas Louphe Semuach</div>
                                <div style={{ color: '#828282' }}>3h ago</div>
                            </div>
                            <div style={{ fontWeight: '400', fontSize: '16px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sint obcaecati laudantium quo quod aspernatur ea sed praesentium debitis ipsum enim, accusamus eveniet, inventore vitae possimus adipisci nostrum soluta! Laboriosam.</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LargeCardMyEvent;
