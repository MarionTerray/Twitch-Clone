import React from 'react';
import '../styles/Header.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InboxIcon from '@mui/icons-material/Inbox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://www.freepnglogos.com/uploads/twitch-logo-transparent-png-20.png'
            alt=''/>
            <p>Suivis</p>
            <p>Parcourir</p>
            <MoreVertIcon className='header__icons' />

        </div>
        <div className='header__center'>
          <input type="text" placeholder='Rechercher'></input>
          <button><SearchIcon  fontSize='medium'/></button>
        </div>
        <div className='header__right'>
            <NotificationsActiveIcon className='header__icons' fontSize='small'/>
            <InboxIcon className='header__icons'fontSize='small'/>
            <ChatBubbleOutlineIcon className='header__icons'fontSize='small'/>
            <div className='header__right_bits'>
              <DiamondIcon className='header__icons'fontSize='small'/>
              <p>Acheter des Bits</p>
            </div>
            
            <AccountCircleIcon className='header__icons header__avatar' fontSize='large' color='secondary' />
        </div>
    </div>
  )
}

export default Header
