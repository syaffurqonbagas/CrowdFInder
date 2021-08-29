import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import FormCreateEvent from '../../components/FormCreateEvent'
import { postEvent } from '../../redux/action/event'



function FormCreateEventPage() {
    const dispatch = useDispatch()
    const event = useSelector((state) => state.events.posts);
    

    useEffect(() => {
        dispatch(postEvent())
    }, [dispatch]);

    
    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                   <FormCreateEvent/>
                </div>
            </div>
        </>
    )
}

export default FormCreateEventPage
