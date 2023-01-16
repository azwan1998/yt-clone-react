import React from 'react';
import SidebarRow from "./SidebarRow.js";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltLinedIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreOutLinedIcon from '@mui/icons-material/ExpandMore';

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={ HomeIcon } title="Home"/>
        <SidebarRow Icon={ WhatshotIcon } title="Trending"/>
        <SidebarRow Icon={ SubscriptionsIcon } title="Subscription"/>
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow Icon={ThumbUpAltLinedIcon} title="Liked Videos"/>
        <SidebarRow Icon={ExpandMoreOutLinedIcon} title="Show More"/>
        <hr/>
    </div>
  )
}

export default Sidebar;