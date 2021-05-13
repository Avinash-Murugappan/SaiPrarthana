import ReactAudioPlayer from 'react-audio-player';
import React from 'react'
import Details from './Details'
import Audio from '../../audio/sainath_ stavan_manjiri_mp3.mp3'
import './AudioPlayer.css'

export default function AudioPlayer() {

    return (
        <div className="AppPlayer">

        <div className="player">
         <Details/>
        <ReactAudioPlayer
            src={Audio}
            controls
        />
    </div>
        </div>
    )
}
