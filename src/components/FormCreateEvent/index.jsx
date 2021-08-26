import React, {useState} from 'react'
import './index.css'
import { InputGroup, FormControl, Card, Button, FormSelect, FloatingLabel } from 'react-bootstrap'

function FormCreateEvent() {
    const [img, setImg] = useState(null);
    const [error, setError] = useState(false);
  
    const imageHandler = (e) => {
      const selected = e.target.files[0];
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && allowedTypes.includes(selected.type)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          setImg(reader.result);
        };
        reader.readAsDataURL(selected);
      } else {
        setError(true);
      }
    };

    return (
        <>
            <div className="container-fluid" style={{padding: '0 0'}}>
                <h5 style={{fontSize:'22px', fontWeight:'700'}}>Create an event</h5>
                <p style={{fontSize:'18px', fontWeight:'400'}}>Put your awesome photo to get more people!</p>

                <Card className="cardSize mb-3">
                    {img ? <img src={img} alt="" /> : <div></div>}
                    <input
                        type="file"
                        name="image-upload"
                        id="input"
                        accept="image/*"
                        onChange={imageHandler}
                    />
                    
                    {img ? (
                    <button
                    className="rounded-pill btnStyle centeringBtn"
                    onClick={() => setImg(null)}
                    >
                        <i class="fa fa-picture-o  me-2"></i>remove image
                    </button>
                    ) : ( 
                    <label className="rounded-pill btnStyle centeringBtn" htmlFor="input">
                        <i class="fa fa-picture-o  me-2"></i>Add Image
                    </label>
                    )}
                </Card>

                <InputGroup className="mb-3 fontWeightSize-formEvent">
                    <FormControl
                        placeholder="How do you call this event?"
                        aria-label="How do you call this event?"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        style={{fontFamily: 'Mulish, FontAwesome, sans-serif'}}
                        placeholder="&#xf133; What date?"
                        aria-label="What date?"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>


                <InputGroup className="mb-3">
                    <FormControl
                        placeholder=" What time?"
                        aria-label="What time?"
                        aria-describedby="basic-addon3"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        style={{fontFamily: 'Mulish, FontAwesome, sans-serif'}}
                        placeholder="&#xf041; Where?"
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

                <div className="d-flex justify-content-end">
                    <Button className="px-5" variant="secondary">Post event</Button>
                </div>

            </div>
        </>
    )
}

export default FormCreateEvent
