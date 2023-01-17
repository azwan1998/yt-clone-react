import React from 'react';
import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image, channel, subs, verified, noOfVideos, desc}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow__logo' src={image} alt={channel} />
        <div className='channelRow__text'>
            <h4>{channel} {verified && <CheckCircleIcon />}</h4>
            <p>{subs} subscibers . {noOfVideos} videos</p>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ChannelRow;