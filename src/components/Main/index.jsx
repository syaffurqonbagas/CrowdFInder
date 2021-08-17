import React from 'react'
import Back from "../../Asset/background.png";
import "./index.css"

const index = () => {
    return (
        <div className="background-main d-flex">
            <img
                className="Kanan justify-content-center"
                src={Back}
                alt="back"
                width="50%"
              />
              <img
                className="Kiri justify-content-center"
                src={Back}
                alt="back"
                width="50%"
              />
        </div>
    )
}

export default index
