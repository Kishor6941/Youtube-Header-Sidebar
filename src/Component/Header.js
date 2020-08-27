import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__right">
        <VideoCallSharpIcon className="header__rightIcon" />
        <AppsIcon className="header__rightIcon" />
        <NotificationsIcon className="header__rightIcon" />
        <Avatar
          alt="Kishor Phawade"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu--zow_7DryUDGYls4kkhvAU56qtu-f3NeZ3itX=s32-c-mo"
        />
      </div>
    </div>
  );
};

export default Header;
