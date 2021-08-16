import React from 'react'
import './index.css'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap'

function FormCreatePost() {
    return (
        <>
             <div className="head-container container">

                <div className="d-flex">
                    <div className="headText container-fluid">
                        <h5>Create a post</h5>
                        <div className="headText-main d-flex mb-3">
                            <p className="m-0 flex-grow-1">What would you like to share today?</p>
                            {/* <div className="headText-badge rounded-pill ms-3">Design</div> */}
                            <select className="MyBadge flex-end">
                                <option value="volvo">Design</option>
                                <option value="saab">Art</option>
                                <option value="fiat">Politic</option>
                                <option value="audi">Sport</option>
                            </select>
                        </div>
                        <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <FormControl 
                            as="textarea" 
                            placeholder="Type something...."
                            rows={3} 
                            />
                        </InputGroup>
                        <Button className="rounded-pill d-block" variant="light"><i class="far fa-image me-2"></i>Add Image</Button>
                        <Button className="float-end">Post</Button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default FormCreatePost
