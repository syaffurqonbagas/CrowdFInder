import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateAnnouncement from '../../components/FormUpdateAnnouncement'
import { postAnnouncement } from '../../redux/action/announcement'
import { Form } from 'react-bootstrap'

function FormCreateAnnouncementPage() {
    const dispatch = useDispatch()
    const announcement = useSelector((state) => state.announcements.listAnnouncement);
    // const [title, setTitle] = useState();
    // const [content, setContent] = useState();
    // const [interest, setInterest] = useState();
    // const [image, setImage] = useState();
    const [state, setState] = useState({
        title : "",
        content : "",
        interest : "",
        image : ""
    });

    
    const handlePostAnnouncement = (e) => {
        e.preventDefault();
        const data = state;
        dispatch(postAnnouncement(data));
    }

    console.log(state)

    
    // const changeState = (e) => {
    //     setState({
    //         ...state,
    //         [e.target.name] : e.target.value
    //     })
    // }
    
    // const handlePostAnnouncement = (e) => {
    //     e.preventDefault();
    //     const data = {...state}
    //     dispatch(postAnnouncement(data));
    // }

    // console.log('state', state);

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                {/* <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Create a announcement</h5> */}
                   <FormUpdateAnnouncement
                   title={(e) => setState({...state, title: e.target.value})}
                   content={(e) => setState({...state, content: e.target.value})}
                   interest={(e) => setState({...state, interest: e.target.value})}
                   image={(e) => setState({...state, image: e.target.value})}
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
