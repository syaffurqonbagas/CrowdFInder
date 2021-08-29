import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormCreateEvent from '../../components/FormCreateEvent'
import { postEvent } from '../../redux/action/event'



function FormCreateEventPage() {
    const dispatch = useDispatch()
    const event = useSelector((state) => state.events.posts);
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [location, setLocation] = useState();
    const [interest, setInterest] = useState();
    const [content, setContent] = useState();
    const [date, setDate] = useState();


  const handlePostEvent = (e) => {
      e.preventDefault();
      dispatch(postEvent(title, image, location, interest, content, date));
  }

    console.log(interest);
    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                   <FormCreateEvent 
                   title={(e) => setTitle(e.target.value)}
                   location={(e) => setLocation(e.target.value)}
                   interest={(e) => setInterest(e.target.value)}
                   content={(e) => setContent(e.target.value)}
                   date={(e) => setDate(e.target.value)}
                   onClick={(e) => handlePostEvent(e)}/>
                </div>
            </div>
        </>
    )
}

export default FormCreateEventPage
