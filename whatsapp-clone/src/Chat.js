import React from 'react'
import { IconButton, Avatar } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import './Chat.css'
function Chat() {
  return (
    <div className='chat'>
    <div className="chatHeader">
    <Avatar/>
    <div className="chatHeader__info">
    <h3>Room name</h3>
    <p>Last seen at ....</p>
    </div>
    <div className="chatheader__Right">
    <IconButton><SearchIcon/></IconButton>
    <IconButton><AttachFileIcon/></IconButton>
    <IconButton><MoreVertIcon/></IconButton>
    
    </div>
    </div>

    <div className="chat__body">
    <p className='chat__message'>
    <span className="chat__name">Saswata</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>

    <p className='chat__message chat__receiver'>
    <span className="chat__name">Saswata</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>

    <p className='chat__message'>
    <span className="chat__name">Saswata</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
    </div>

    <div className="chat__footer">
    <InsertEmoticonIcon/>

    <form>
    <input type ="text" placeholder="type your message here"></input>
    <button type="submit">send a message</button>
    </form>
    <KeyboardVoiceIcon/>
    </div>
    </div>
  )
}

export default Chat