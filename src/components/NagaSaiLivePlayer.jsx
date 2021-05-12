import React from 'react'
import ReactPlayer from 'react-player';
import "./NagaSaiLivePlayer.css"


function NagaSaiLivePlayer() {

return(
    <>
    <div className="player-wrapper">
    <ReactPlayer 
    url="https://youtu.be/mI63qi6V_zc" 
    className="react-player" 
    width="100%" 
    height="100%"
    controls 
    />
    </div>
     </>
)
}

export default NagaSaiLivePlayer;
