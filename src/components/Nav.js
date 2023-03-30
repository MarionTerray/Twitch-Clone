import React, { useState } from 'react';
import '../styles/Nav.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ChainesNav from './ChainesNav';
import { ChannelData } from '../TempoData';

function Nav() {
  const [showNav, setShowNav] = useState(true);
  

  const setNavBar = () => {
    if (showNav) {
      setShowNav(false)
    }else {
      setShowNav(true)
    }
  } ;

  return (
    <div className='nav'>
      <div className='nav__foryou'>
          <p>Pour vous</p>
          {showNav ? 
            <ArrowBackIosIcon onClick={setNavBar} className='nav__icons' fontSize='small' />
           : <ArrowForwardIosIcon onClick={setNavBar} className='nav__icons' fontSize='small' />
          }
      </div>
        <div className='nav__suivi'>
              <div className='nav__suiviTop'>
                <p >CHAÎNES SUIVIES</p>
                <SwapVertIcon fontSize='small' />
              </div>
              <div className='nav__chaines'> 
              {ChannelData.map(({ id, nom, img, jeux, nbreViews }) =>
                <ChainesNav 
                        key={id}
                        image={img}
                        nom={nom}
                        jeux={jeux}
                        view={nbreViews}
                    />
              )}
              
              </div>
              <p className='nav_afficherPlus'>Afficher plus</p>
        </div>


        <div className='nav__reco'>
            <p className='nav__title'>CHAÎNES RECOMMANDEES</p>
            <div className='nav__chaines'>
                    <ChainesNav 
                        image='https://tse3.mm.bing.net/th?id=OIP.Nkm6DgiQfsTIEwREzOld8wHaHW&pid=Api'
                        nom='The VioletOne'
                        jeux='My little pony'
                        view='10,7'
                    />
            </div>
            <p className='nav_afficherPlus'>Afficher plus</p>
        </div>


        <div className='nav__autreSpec'>
              <p className='nav__title'>CHAÎNES POPULAIRES</p>
              <div className='nav__chaines'>
                  <ChainesNav 
                        image='https://tse3.mm.bing.net/th?id=OIP.FzUXCR9ITGNK_z2MgGICDQHaFj&pid=Api'
                        nom='Vera'
                        jeux='Chess'
                        view='8,9'
                    />
              </div>
              <p className='nav_afficherPlus'>Afficher plus</p>
          </div>
      </div>
    
  )
}

export default Nav
