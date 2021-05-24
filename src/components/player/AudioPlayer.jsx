import ReactAudioPlayer from 'react-audio-player';
import React from 'react'
import Details from './Details'
import Audio from '../../audio/sainath_ stavan_manjiri_mp3.mp3'
import './AudioPlayer.css'

export default function AudioPlayer() {

    return (
        <div className="AppPlayer">

        <div className="player">
        <div className="item-1"><Details/></div>
         <div className="item-2">
           <h2 className="details-title">Sainath Stavan Manjiri</h2>
        <h4 className="details-artist">Pramod Medhi</h4>
         <ReactAudioPlayer
            src={Audio}
            controls
        /></div>

    </div>
        </div>
    )
}
