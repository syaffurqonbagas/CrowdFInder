import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateAnnouncement from '../../components/FormUpdateAnnouncement/FormUpdateAnnouncement'
import { postAnnouncement } from '../../redux/action/announcement'
import { Form } from 'react-bootstrap'

function FormUpdateAnnouncementPage() {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        content : "",
        interest : "",
        image : ""
    });

    
    const handleUpdateAnnouncement = (e) => {
        e.preventDefault();
        const data = state;
        dispatch(postAnnouncement(data));
    }

    console.log(state)

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
                   onClick={(e) => handleUpdateAnnouncement(e)}/>
                </div>
            </div>
        </>
    )
}

export default FormUpdateAnnouncementPage
