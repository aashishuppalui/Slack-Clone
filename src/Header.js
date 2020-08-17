import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        {/* Avatar for logged in user */}
        <Avatar
          className="header_avatar"
          // alt="aashish_uppal"
          // src="https://lh3.googleusercontent.com/ogw/ADGmqu8_DnAThXtEru4IVaZB3r2stGghZJSq7G428uA4=s32-c-mo"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* time icon */}
        <AccessTimeIcon />
      </div>

      <div className="header_search">
        {/* Search icon */}
        <SearchIcon />
        {/* input</div> */}
        <input placeholder="Search your favorite channel" type="text" />
      </div>

      <div className="header_right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
