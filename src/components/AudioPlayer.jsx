import ReactAudioPlayer from 'react-audio-player';
import React from 'react'
import Audio from '../audio/sainath_ stavan_manjiri_mp3.mp3'

export default function AudioPlayer() {
    return (
        <div >
            <ReactAudioPlayer
  src={Audio}
  autoPlay
  controls
/>
        </div>
    )
}
