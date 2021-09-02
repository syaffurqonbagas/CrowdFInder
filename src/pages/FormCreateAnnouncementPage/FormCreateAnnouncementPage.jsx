import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormCreateAnnouncement from '../../components/FormCreatePost'
import { postAnnouncement } from '../../redux/action/announcement'
import { Form } from 'react-bootstrap'

function FormCreateAnnouncementPage() {
    const dispatch = useDispatch()
    const announcement = useSelector((state) => state.announcements.listAnnouncement);

    const [state, setState] = useState({
        content : "",
        interest : "",
        image : ""
    });

    let formData = new FormData();

    const imageFile = (e) => {
        console.log(e.target.files[0]);
        formData.append('file', e.target.files[0]);
        setState({...state, image: formData});
        
    }

    const handlePostAnnouncement = (e) => {
        e.preventDefault();
        const data = state;
        dispatch(postAnnouncement(data))
    };

    console.log(state);

 

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
                   <FormCreateAnnouncement
                   title={(e) => setState({...state, title: e.target.value})}
                   content={(e) => setState({...state, content: e.target.value})}
                   interest={(e) => setState({...state, interest: e.target.value})}
                   image={imageFile}
                   onClick={(e) => handlePostAnnouncement(e)}/>
                </div>
            </div>
        </>
    )
}

export default FormCreateAnnouncementPage
