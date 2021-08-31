import React from 'react'
import './index.css'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import SmallCardMyEvent from '../../components/SmallCardMyEvent'
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent.jsx'
import MyPagination from '../../components/MyPagination/MyPagination'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPost } from '../../redux/action/post'


function HomePage() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.listPost);


    useEffect(() => {
        dispatch(getPost())
    }, [dispatch]);

    // console.log(posts)

    const user = localStorage.getItem('user');
    // const token = user.data.token;
    console.log('tes' + user);


    console.log('data', posts)

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
                                <SmallCardMyEvent />
                                <SmallCardMyEvent />
                                <SmallCardMyEvent />
                                <SmallCardMyEvent />
                                <SmallCardMyEvent />
                                <SmallCardMyEvent />
                            </div>
                        </div>

                        <div>
                            <LargeCardMyEvent />
                            <LargeCardMyEvent />
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
