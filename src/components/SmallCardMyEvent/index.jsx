import React from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import ImgDummy from '../../img/cardImgDummy.jpeg'

function SmallCardMyEvent() {
    return (
        <>
            <Card className="mx-1 sizeCard mt-2" style={{ minWidth: '16rem' }}>
                <Card.Img variant="top" src={ImgDummy} />
                <Card.Body>
                    <h6 className="font mb-3" style={{ fontSize: '14px', fontWeight: '700' }}>Festival Makanan Nusantara (Bintang tamu 3 juri masterchef)</h6>
                    <div className="mx-2 d-flex dateTime">
                        <div className="flex-grow-1">
                            <i className="fa fa-calendar me-3"></i>
                            <label>11/12/2020</label>
                        </div>
                        <div>
                            <i className="fa  fa-clock-o me-3"></i>
                            <label>20.00 PM</label>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default SmallCardMyEvent
