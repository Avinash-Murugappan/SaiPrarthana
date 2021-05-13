import React from 'react'
import SaiImage from '../../images/saistavan.jpeg'
import './AudioPlayer.css'

export default function Details() {
    return (
        <div className= "player--details" >
        <div className="details-img">
            <img  src={SaiImage} alt="Sai Baba image" />
        </div>
        <h4 className="details-title">Sainath Stavan Manjiri</h4>
        <h4 className="details-artist">Pramod Medhi</h4>
        </div>
    )
}
