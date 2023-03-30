import React from 'react';
import '../styles/ChainesNav.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function ChainesNav({ image, nom, jeux, view }) {
  return (
    <div className='nav__chainesElement'>
            <img className='nav__chaineIcon' src={image} alt='' />
            <div className='nav_chainesElementsInfo'>
                 <p className='nav__chaineName'>{nom}</p>
                 <p className='nav__chaineGame'>{jeux}</p>
            </div>
            <div className='nav__chaineView'>
                <FiberManualRecordIcon className='nav__chaineViewIcon' fontSize='x-small' sx={{ color: '#e20029'}}/>
                <p className='nav__chaineViewCount'>{view}k</p>
            </div>
    </div>
  )
}

export default ChainesNav
