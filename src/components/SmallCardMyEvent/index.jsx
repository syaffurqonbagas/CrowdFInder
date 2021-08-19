import React from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import ImgDummy from '../../img/cardImgDummy.jpeg'

function SmallCardMyEvent() {
    return (
        <>
            <Card className="mx-1 sizeCard" style={{minWidth: '16rem'}}>
                <Card.Img variant="top" src={ImgDummy} />
                <Card.Body>
                    <h6 className="font mb-3">Festival Makanan Nusantara (Bintang tamu 3 juri masterchef)</h6>
                    <div className="mx-2 d-flex">
                        <div className="flex-grow-1">
                            <i class="fas fa-calendar me-3"></i>
                            <label>11/12/2020</label>
                        </div>
                        <div>
                            <i class="fas fa-clock me-3"></i>
                            <label>20.00 PM</label>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            {/* <Card className="boxinoki" style={{minWidth: '17rem'}}>
                box
            </Card> */}
        </>
    )
}

export default SmallCardMyEvent
