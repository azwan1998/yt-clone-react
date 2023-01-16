import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
        <div className="header__left">
        <MenuIcon />
        <img
            className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
            alt=""
        />
        </div>
        <div className="header__input">
        <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="search" type="text"/>
        <SearchIcon className="header__inputButton"/>  
        </div>
        <div className="header__icon">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar
            alt="Azwan"
            src="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        />
        </div>
    </div>
    
  );
}

export default Header