import React from 'react'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import FormCreateEvent from '../../components/FormCreateEvent'



function FormCreateEventPage() {
    return (
        <>
            <div className="container">
                <div className="d-flex mt-3">
                    <TopicMe/>
                    <div className="w-100 ms-4">
                        <CreatePost/>

                        <div className="mt-4 mb-5">
                           <FormCreateEvent/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FormCreateEventPage
