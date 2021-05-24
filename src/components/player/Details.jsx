import React from 'react'
import SaiImage from '../../images/saistavan.jpeg'
import './AudioPlayer.css'

export default function Details() {
    return (
        <div className= "player--details" >
        <div className="details-img">
            <img  src={SaiImage} alt="Sai Baba image" />
        </div>
        </div>
    )
}
