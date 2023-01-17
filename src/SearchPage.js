import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import "./SearchPage.css"
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>Filter</h2>     
        </div>
        <hr/>
        <ChannelRow
        image="./ronaldo.jpeg"
        channel="Real Madrid"
        verified
        subs="9.3M"
        noOfVideos={14}
        desc="merupakan club terbaik di dunia dimana pun mereka berada, just keep do it"
        />
        <hr/>
        <VideoRow
        view="970k"
        subs="9.3M"
        desc="merupakan club terbaik di dunia dimana pun mereka berada, just keep do it"
        timestamp="6 minute ago"
        channel="Real Madrid"
        title="ronaldo from "
        image="./roanldo.jpeg"
        
        
        />
    </div>
  )
}

export default SearchPage