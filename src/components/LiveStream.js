import React from 'react';
import '../styles/LiveStream.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IosShareIcon from '@mui/icons-material/IosShare';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stream from './Stream';
import { ChannelData } from '../TempoData';

function LiveStream() {
 const item = ChannelData[Math.floor(Math.random()*ChannelData.length)];

  
  return (
    <div className='liveStream'>
      <div className='liveStream__video'>
          <Stream />
      </div>
      <div className='liveStream__infoLive'>
        <div className='liveStream__infoLive__left'>
          <div className='StreamInfo__icone'>
            <img src={item.img} alt='' />
            <p className='StreamInfo__icone_LiveOn'>LIVE</p>
          </div>  
          <div className='StreamInfo__text'>
            <h2>{item.nom}</h2>
            <h3>{item.titreLive}</h3>
            <div className='StreamInfo__textCategorie'>
                <p className='jeux'>{item.jeux}</p> 
                <p className='langue'>Français</p>
            </div>
            
          </div> 
          
        </div>
        
        <div className='liveStream__infoLive__right'>
            <div className='liveStream__infoLive__rightTop'>
              <FavoriteIcon className='infoLive__icons' fontSize='small' />
              <NotificationsNoneIcon className='infoLive__icons' fontSize='small' />
              <button>
                <StarBorderIcon fontSize='small' />
                <p>S'abonner</p>
                <KeyboardArrowDownIcon fontSize='small' />
              </button>

            </div>
            <div className='liveStream__infoLive__rightBot'>
              <div className='liveStream__views'>
                <PermIdentityIcon fontSize='small' sx={{ color: '#c50024'}}/>
                <p>{item.nbreViews} k</p>
              </div>
              <p className='liveStreal__timer'>01:31:54</p>
              <IosShareIcon className='infoLive__icons' fontSize='small' />
              <MoreVertIcon className='infoLive__icons' fontSize='small' />
            </div>
        </div>
      </div>
      <div className='liveStream__infoChaine'>
        <div className='liveStream__infoChaine__left'>
          <h3>Concernant le streamer</h3>
          <p><strong>548,7 k</strong> followers</p>
          <p>Description du streamer et de son contenu.</p>
        </div>
        <div className='liveStream__infoChaine__right'>
          <div className='socialLink'>
            <TwitterIcon fontSize='small' />
            <p>Twitter</p>
          </div>
          <div className='socialLink'>
            <InstagramIcon fontSize='small' />
            <p>Instagram</p>
          </div>
          <div className='socialLink'>
            <YouTubeIcon fontSize='small' />
            <p>YouTube</p>
          </div>
          <div className='socialLink'>
            <ShoppingCartIcon fontSize='small' />
            <p>Boutique</p>
          </div>
        </div>
      </div>
      <div className='liveStream__personnalisationChaine'>

      </div>
    </div>
  )
}

export default LiveStream
