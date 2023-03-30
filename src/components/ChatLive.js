import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import '../styles/ChatLive.css';
import GroupIcon from '@mui/icons-material/Group';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DiamondIcon from '@mui/icons-material/Diamond';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function ChatLive() {
    const [showNav, setShowNav] = useState(true);
    const [message, setMessage] = useState('');

    //const postMessage = () => {
    //setMessage= React.getElementById('messagePostChat').value;
     // let newElement = React.createElement("p", message);
     //ReactDOM.render(newElement, document.getElementsByClassName('chatLive__Messages'))
   //}
   // console.log(message)
    

  const setNavBar = () => {
    if (showNav) {
      setShowNav(false)
    }else {
      setShowNav(true)
    }
  } ;

  return (
    <div className='chatLive'>
    <div className='chatLive__chat'>
        <div className='chatLive__header'>
        {showNav ? 
            <ArrowBackIosIcon onClick={setNavBar} className='nav__icons' fontSize='small' />
           : <ArrowForwardIosIcon onClick={setNavBar} className='nav__icons' fontSize='small' />
          }
            <p className='chatLive__headerTitle'>CHAT DU STREAM</p>
            <GroupIcon className='nav__icons chatLive__icons' fontSize='small' />
        </div>
        <div className='chatLive__TopGifter'>
            <ArrowBackIosIcon fontSize='small' />
            <div></div>
            <ArrowForwardIosIcon fontSize='small'/>
        </div>
        <div className='chatLive__Messages'>
            
        </div>
        <div className='chatLive__inputText'>
        <div className='input'>
          <StarBorderIcon className='chat__icons' fontSize='small' />

          <input  type="text" placeholder='Envoyer un message'
          name='messageChat' id='messagePostChat'/>  

          <DiamondIcon className='chat__icons' fontSize='small' />
          <SentimentSatisfiedAltIcon className='chat__icons' fontSize='small' />
        </div>
        <div className='underInput'>
          <div className='underInput__left'>
            <RadioButtonCheckedIcon fontSize='small' />
            <p>2,5 k</p>
          </div>
          <div className='underInput__right'>
            <SettingsIcon className='chat__icons' fontSize='small' />

             <button onClick={postMessage}>Chat</button>

          </div>
          
        </div>

        </div>

    </div>
    </div>
  )
}

export default ChatLive
