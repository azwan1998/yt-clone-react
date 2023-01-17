import React from 'react'
import "./VideoRow.css";

function VideoRow({ view, subs, desc, timestamp, channel, image, title } ) {
  return (
    <div className='videoRow'>
        <img src={image} alt={channel}/>
        <div className='videoRow__text'>
            <h3>{title}</h3>
            <p className='videoRow__headline'>
                {channel} . {""}
                <span className='videoRow__sub'>
                  <span className='videoRow__subNumber'>
                    {subs} Subscibers
                  </span>{" "}
                </span>
                {view} views . {timestamp}
            </p>
            <p className='videoRow__description'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default VideoRow