import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import SmallCardMyEvent from '../../components/SmallCardMyEvent'
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent.jsx'
import MyPagination from '../../components/MyPagination/MyPagination'
import { getPost } from '../../redux/action/post'
import { getComment } from '../../redux/action/comment'


function HomePage() {
    const dispatch = useDispatch()
    const {listPost, loading} = useSelector((state) => state.posts);
    const comment = useSelector((state) => state.comments);
    
    useEffect(() => {
        dispatch(getPost())
        dispatch(getComment())
    }, [dispatch]);

    console.log('comment',comment)
    // console.log('data', listPost)

    return (
        <>
            <div className="container mt-5">
                <div className="d-flex mt-3">
                    <TopicMe />
                    <div className="w-100 ms-4">
                        <CreatePost />

                        <div>
                            <div className="d-flex mt-4 mb-3">
                                <h5 className="flex-grow-1 my-auto" style={{ fontSize: '22px', fontWeight: '700' }}>Your Events</h5>
                                <p className="my-auto text-secondary" style={{ fontSize: '18px', fontWeight: '400' }}>See All Events</p>
                            </div>
                            <div className="wrapper mx-auto mb-5">
                            {listPost?.filter(post => post.type[0] === 'event').filter((post, idx) => idx < 10).map((post, id) => (
                                <SmallCardMyEvent key={id} title={post.title}/>
                            ))}
                            </div>
                        </div>

                        <div>
                            {listPost?.filter(post => post.type[0] === 'announcement').map((post, id) => (
                                <LargeCardMyEvent key={id} content={post.content} image={post.image} interest={post.interest} location={post.location} like={post.like.length} userName={post.user_id.fullname} />
                            ))}
                            <div className="text-center my-5">
                                <MyPagination />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default HomePage
