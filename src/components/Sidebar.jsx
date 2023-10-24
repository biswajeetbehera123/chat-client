import React, { useState } from 'react'
import "./myStyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import NightlightIcon from '@mui/icons-material/Nightlight';
// import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  // const [lighttheme, setLightTheme] = useState(true)

  const [conversations, setConversations] = useState([
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

  const navigate = useNavigate();

  return (
    <div className='sidebar-container'>
      <div className={'sb-header'}>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton onClick={() => navigate("users")}>
            <PersonAddIcon />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={() => navigate("create-groups")}>
            <AddCircleIcon />
          </IconButton>
          {/* <IconButton onClick={() => {
            setLightTheme((prevValue) => {
              return !prevValue
            })
          }}>
            {lighttheme &&
              <NightlightIcon />
            }
            {!lighttheme && <LightModeIcon />}
          </IconButton> */}
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder='Search' className='search-box' />
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation) => {
          return <ConversationsItem props={conversation} key={conversation.name} />
        })}

      </div>
    </div>
  )
}

export default Sidebar
