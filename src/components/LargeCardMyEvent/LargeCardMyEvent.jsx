import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnClickOutside from "./useOnClickOutside";
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap'
import "./LargeCardMyEvent.css";
import user from '../../image/user.png'
// import image from '../../img/largeCardDummy.jpeg'
import { getComment, postComment } from "../../redux/action/comment";
import { putLike } from "../../redux/action/like";
import { getPost } from "../../redux/action/post";


function LargeCardMyEvent(props) {
    const {
        contentCard, image, interest, location, like, comment, userName, idPost, action
    } = props;

    const dispatch = useDispatch();
    const { listComment, loading } = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(getComment(idPost))
    }, [dispatch]);

    //post comment
    const [body, setBody] = useState({
        content: "",
    });

    const changeComment = (e) => {
        setBody({ ...body, content: e.target.value });

    };

    const handlePostComment = async (e) => {
        e.preventDefault();
        await dispatch(postComment(idPost, body));
        // await dispatch(getComment(idPost))
    };

    //like post
    const likes = useSelector((state) => state.likes.like);

    const handleLikes = async (e) => {
        // e.preventDefault();
        await dispatch(putLike(idPost))
        await dispatch(getPost())
    }

    // console.log('ini id post',idPost)

    // hide and show ellipsis menu
    const [show, setShow] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setShow(false));

    //hide and show comment
    const [showComment, setShowComment] = useState(false);
    const commentRef = useRef();
    const toggleComment = () => {
        setShowComment(!showComment);
    };
    const toggleDropDown = () => {
        setShow(!show);
    };

    // console.log('likes', likes)
    // console.log('body gaes', body)
    // console.log('listcomment', listComment)
    return (
        <>
            <div className="divider  my-3 mb-5"></div>
            <div className="headContainer">

                <div onClick={action} className="d-flex">
                    <div className="imageAvatar mb-4 me-2">
                        <img src={user} />
                    </div>
                    <div className="headText container-fluid d-block mb-2">

                        <div ref={ref} className="d-flex justify-content-end m-0 positionRelative">
                            <i className="fa fa-ellipsis-h"
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
                                {userName}
                            </label>
                            <label className="headTextBadge rounded-pill ms-3 me-auto">
                                {interest}
                            </label>
                            <label
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#828282",
                                }}
                            >
                                <i className="fa fa-map-marker ms-auto me-0 fa-xs"></i> {location}
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
                                {contentCard}
                            </p>
                            <img className="imageSize" src={image} alt="" />
                        </div>

                        <div className="btnGroup d-inline-flex">
                            <button className="button-card flex-grow-1" onClick={() => handleLikes()}>
                                <i className="fa fa-thumbs-o-up" ></i>Like({like})
                            </button>
                            <button className="button-card flex-grow-1" onClick={() => toggleComment()}>
                                <i className="fa fa-commenting-o"></i>Comment({comment})
                            </button>
                            <button className="button-card flex-grow-1">
                                <i className="fa fa-share-alt"></i>Share
                            </button>
                        </div>
                    </Card>

                    <div className="hideComment" ref={commentRef} style={showComment ? { height: commentRef.current.scrollHeight + 'px' } : { height: '0px' }}>
                        <div className="commentCard py-3">
                            <InputGroup className="fontWeightSize-formEvent" onSubmit={() => handlePostComment()}>
                                <FormControl
                                    className="mx-3 rounded-pill sizeText"
                                    placeholder="Type your comment"
                                    rows={1}
                                    name="content"
                                    onChange={(e) => changeComment(e)}
                                />
                            </InputGroup>
                            <div className="position-relative toTheLeft">
                                <Button className="rounded-circle btnStyle-largeCard" variant="secondary" onClick={handlePostComment}><i class="fa fa-paper-plane"></i></Button>
                            </div>
                        </div>

                        {/* <div className="commentCard py-3 text-center" style={{ fontWeight: '400', fontSize: '16px' }}>
                            <Link className="text-decoration-none text-secondary">Load more comment</Link>
                        </div> */}

                        {listComment.length > 0 && listComment?.filter((item) => item.post_id === idPost).map((item, idx) => (
                            <div key={idx} className="commentCard py-3 px-3">
                                <div className="d-flex mb-2 fontCircular" style={{ fontWeight: '450', fontSize: '18px' }}>
                                    <div className="flex-grow-1" >{item.user_id.fullname}</div>
                                    <div style={{ color: '#828282' }}>3h ago</div>
                                </div>
                                <div style={{ fontWeight: '400', fontSize: '16px' }}>{item.content}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default LargeCardMyEvent;
