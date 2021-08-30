import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormCreateAnnouncement from '../../components/FormCreatePost'
import { postAnnouncement } from '../../redux/action/announcement'
import { Form } from 'react-bootstrap'

function FormCreateAnnouncementPage() {
    const dispatch = useDispatch()
    const announcement = useSelector((state) => state.announcements.listAnnouncement);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [interest, setInterest] = useState();
    const [image, setImage] = useState();
    
    const handlePostAnnouncement = (e) => {
        e.preventDefault();
        const data = {title, interest, content, image}
        dispatch(postAnnouncement(data));
    }

    console.log(interest, content, image)

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                   <FormCreateAnnouncement
                   title={(e) => setTitle(e.target.value)}
                   content={(e) => setContent(e.target.value)}
                   interest={(e) => setInterest(e.target.value)}
                   image={(e) => setImage(e.target.value)}
                   onClick={(e) => handlePostAnnouncement(e)}/>
                </div>
                <div className="input-image">
                    <Form.Group controlId="formFile" className="mb-3 ">
                        <Form.Control type="file" />
                    </Form.Group>
                </div>
            </div>
        </>
    )
}

export default FormCreateAnnouncementPage
