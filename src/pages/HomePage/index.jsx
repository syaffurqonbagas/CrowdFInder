import React from 'react'
import './index.css'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import SmallCardMyEvent from '../../components/SmallCardMyEvent'
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent.jsx'


function HomePage() {
    return (
        <>
            <div className="container">
                <div className="d-flex mt-3">
                    <TopicMe/>
                    <div className="w-100 ms-4">
                        <CreatePost/>

                        <div>
                            <div className="d-flex mt-3">
                                <h5 className="flex-grow-1">Your Events</h5>
                                <p>See All Events</p>
                            </div>
                            <div className="wrapper">
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
            </div>
        </>
    )
}

export default HomePage
