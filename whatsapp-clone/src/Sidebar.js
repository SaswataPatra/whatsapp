import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { IconButton, Avatar } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChats from './SidebarChats.js';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fccu27-1.fna.fbcdn.net/v/t39.30808-6/273314615_2034416220070159_6185220210243182673_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0gz07NARtkcAX_gsUXo&_nc_ht=scontent.fccu27-1.fna&oh=00_AT_U9_S2kDVq-LyncoYYv9cfr-H0KLARu08CI2scBX06sQ&oe=6295DA80" />
        <div className="sidebar__rightHeader">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
      <div className="sidebar__searchContainer">
      <SearchIcon/>
      <input placeholder="Search or start new chat" type="text"></input>
      </div>
      </div>


        <div className="sidebar__chats">
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        </div>
    </div>
  );
}

export default Sidebar;
