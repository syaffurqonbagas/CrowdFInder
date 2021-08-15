import React from "react"
import { Container } from "react-bootstrap"
import './index.scss'
import { HiPencilAlt } from 'react-icons/hi';

function Bio() {
    return (

        <div className='bio pb-2'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Bio</h5>
                <HiPencilAlt />
            </div>
            <div className="body mt-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor neque porta odio tellus. Vulputate ut sit leo nunc ipsum lacus egestas mi aliquet. Interdum morbi leo cursus ultrices augue nulla est. Pulvinar nunc non vulputate sed nunc amet. At dignissim enim maecenas ut odio.</p>
            </div>
        </div>

    )
}


export default Bio
