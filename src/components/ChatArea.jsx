import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import MessageSelf from "./MessageSelf"
import MessageOthers from "./MessageOthers"
import "./myStyles.css"
// import { useNavigate } from 'react-router-dom'

const ChatArea = () => {
  var conversations = ([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today"
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today"
    },
  ])
  var props = conversations[0]
  return (
    <div className='chatArea-container'>
      <div className="chatArea-header">
        <p className='con-icon'>{props.name[0]}</p>
        <div className="header-text">
          <p className='con-title'>{props.name}</p>
          <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
      </div>
      <div className="text-input-area">
        <input placeholder='Type a message' className='search-box' />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
