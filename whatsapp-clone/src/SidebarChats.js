import React from 'react'
import { IconButton, Avatar } from "@mui/material";
import "./SidebarChats.css"
function SidebarChats() {
  return (
    <div className="sidebarChat">
    <Avatar/>
    <div className="sidebarChat__info">
    <h3>Name</h3>
    <p>info</p>
    </div>
    </div>
  )
}

export default SidebarChats