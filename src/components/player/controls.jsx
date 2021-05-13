import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons'

export default function controls() {
    return (
        <div className="control">
        <button className="control_PlayButton">
            <FontAwesomeIcon icon = {faPause} />
        </button>
        </div>
    )
}
