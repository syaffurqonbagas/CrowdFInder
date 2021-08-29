import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import FormCreateAnnouncement from '../../components/FormCreatePost'
import { postAnnouncement } from '../../redux/action/announcement'




function FormCreateAnnouncementPage() {

    const dispatch = useDispatch()
    const announcement = useSelector((state) => state.announcements.listAnnouncement);
    
    console.log('announ', announcement)

    useEffect(() => {
        dispatch(postAnnouncement())
    }, [dispatch]);

   

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                   <FormCreateAnnouncement/>
                </div>
            </div>
        </>
    )
}

export default FormCreateAnnouncementPage
