import React from 'react'
import './index.css'
import { Card,Button, InputGroup, FormControl } from 'react-bootstrap'
import { useState } from 'react'

function CreateCommunityForm() {
    const [img, setImg] = useState('')

    const imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2){
          setImg(reader.result)
        } else if(reader.readyState === null){
            setImg('')
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }

    return (
        <>
            <div className="container">
                <h5>Create a community</h5>
                <p>Put your awesome photo to get more people!</p>

                <Card className="cardSize mb-3">
                    <img src={img} alt="" />
                    <input type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler} />
                    <label className="rounded-pill btnStyle centeringBtn" htmlFor="input"><i class="far fa-image me-2"></i>Add Image</label>
                    {/* <Button className="rounded-pill centeringBtn" htmlFor="input" variant="light"><i class="far fa-image me-2"></i>Add Image</Button> */}
                </Card>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="What is your community name?"
                    aria-label="What is your community name?"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="What is the category?"
                    aria-label="What is the category?"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="What is your role?"
                    aria-label="What is your role?"
                    aria-describedby="basic-addon3"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Add People (type a username)"
                    aria-label="Add People (type a username)"
                    aria-describedby="basic-addon4"
                    />
                </InputGroup>

                <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FormControl 
                    as="textarea" 
                    placeholder="Tell people more about this event"
                    rows={3} 
                    />
                </InputGroup>

                <Button className="float-end" variant="secondary">Post event</Button>

            </div>
        </>
    )
}

export default CreateCommunityForm
