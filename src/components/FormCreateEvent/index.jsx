import React from 'react'
import './index.css'
import { InputGroup, FormControl, Card, Button, FormSelect, FloatingLabel } from 'react-bootstrap'

function FormCreateEvent() {
    return (
        <>
            <div className="container">
                <h5>Create an event</h5>
                <p>Put your awesome photo to get more people!</p>

                <Card className="cardSize mb-3">
                    <Button className="rounded-pill my-auto mx-auto" variant="light"><i class="far fa-image me-2"></i>Add Image</Button>
                </Card>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="How do you call this event?"
                    aria-label="How do you call this event?"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="What date?"
                    aria-label="What date?"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="&#xf133; What time?"
                    aria-label="What time?"
                    aria-describedby="basic-addon3"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="&#xf133; Where?"
                    aria-label="Where?"
                    aria-describedby="basic-addon4"
                    />
                </InputGroup>

                    <FloatingLabel className="mb-3" controlId="floatingSelect" label="What Category This Event Is?" >
                        <FormSelect aria-label="Floating label select example">
                            <option></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </FormSelect>
                    </FloatingLabel>
               

                <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FormControl 
                    as="textarea" 
                    placeholder="Tell people more about this event"
                    rows={3} 
                    />
                </InputGroup>

                <Button className="float-end">Post event</Button>

            </div>
        </>
    )
}

export default FormCreateEvent
