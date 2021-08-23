import React from 'react'
import './index.css'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import SmallCardMyEvent from '../../components/SmallCardMyEvent'
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent.jsx'
import MyPagination from '../../components/MyPagination/MyPagination'


function HomePage() {
    return (
        <>
            <div className="container">
                <div className="d-flex mt-3">
                    <TopicMe/>
                    <div className="w-100 ms-4">
                        <CreatePost/>

                        <div>
                            <div className="d-flex mt-4 mb-3">
                                <h5 className="flex-grow-1 my-auto" style={{fontSize: '22px', fontWeight:'700'}}>Your Events</h5>
                                <p className="my-auto" style={{fontSize: '18px', fontWeight:'400'}}>See All Events</p>
                            </div>
                            <div className="wrapper mx-auto mb-5">
                                <SmallCardMyEvent/>
                                <SmallCardMyEvent/>
                                <SmallCardMyEvent/>
                                <SmallCardMyEvent/>
                                <SmallCardMyEvent/>
                                <SmallCardMyEvent/>
                            </div>
                        </div>

                        <div>
                            <LargeCardMyEvent/>
                            <LargeCardMyEvent/>
                        </div>

                    </div>
                </div>

                <div className="text-center mt-5">
                    <MyPagination/>
                </div>
            </div>
        </>
    )
}

export default HomePage
