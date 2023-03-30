import React from 'react';
import '../styles/Stream.css';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SettingsIcon from '@mui/icons-material/Settings';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import WidthWideIcon from '@mui/icons-material/WidthWide';
import FullscreenIcon from '@mui/icons-material/Fullscreen';


function Stream() {
  return (
    <div className='stream'>
      <h1 className='hAJeter'>* Insérer un live de qualité ici *</h1>

      <div className='stream__bottom'> 
        <div className='stream__bottomLeft'>
            <PauseIcon className='stream__icons' fontSize='small' sx={{ color: 'white'}}/>
            <VolumeUpIcon className='stream__icons' fontSize='small' sx={{ color: 'white'}}/>
            <input className='slider' type="range" min="1" max="50" />
        </div>
        <div className='stream__bottomRight'>
            <SettingsIcon className='stream__icons' fontSize='small' sx={{ color: 'white'}}/>
            <MovieCreationIcon className='stream__icons' fontSize='small' sx={{ color: 'white'}}/>
            <WidthWideIcon className='stream__icons' fontSize='small' sx={{ color: 'white'}}/>
            <FullscreenIcon className='stream__icons' fontSize='small' sx={{ color: 'white'}}/>
        </div>
      </div>
      <div className='stream__Onlive'>
        <p>Live</p>
      </div>
    </div>
  )
}

export default Stream
