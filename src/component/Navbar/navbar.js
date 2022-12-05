import React, { useState } from 'react';
import Imgh from './image/new_logo.svg';
import './navbar.css';
import VideoBG from './video/Createape-video.mp4';
import  Circle_one_imgh from './image/demo-logo.png';
import EastIcon from '@mui/icons-material/East';
import Sectionone from '../anomation-scroll-down/section-one';

function Navbar() {
  const [color,SetColor]=useState(false)

  const changeColor=()=>{
    if(window.scrollY >= 70){
      SetColor(true)
    }
    else{
      SetColor(false)
    }
  }

  window.addEventListener("scroll",changeColor)

  return (
    <div className='sectionone-container'>
      <video className='video-background' autoPlay loop muted><source src={VideoBG} type="video/mp4"/></video>
    <div className={color ?'navbar-container navbar-container-bg' :'navbar-container'}>
        <div className='navbar-logo'>
        <img src={Imgh} alt="logo">
        </img>
        
        </div>
        <div className='navbar-list'>
            <ul className='navbar-ul'>
                <li className='navbar-li'><a className='navbar-link-home' href='html'>Home</a></li>
                <li className='navbar-li'><a className='navbar-link' href='html'>Services</a></li>
                <li className='navbar-li'><a className='navbar-link' href='html'>Our Work</a></li>
                <li className='navbar-li'><a className='navbar-link' href='html'>Abouts</a></li>
                <li className='navbar-li'><a className='navbar-link' href='html'>Blog</a></li>
                <li className='navbar-li'><a className='navbar-link' href='html'>Jobs</a></li>
                <li className='navbar-li'><a className='navbar-link' href='html'>Contact</a></li>
            </ul>
            </div> 
            <div className='Navbar-button'>
                <button className='button-navbar'>Start a Projects</button>
            </div>
    </div>
    <div className='content-section-one'>
              <div className='content-sub-one'>
                <h2 class="title-1">Elevating Your User’s Experience</h2>
              </div>
              <div className='content-sub-two'>
                <button className='button-one'>Start a Projects</button>
                <button className='button-two'>View our Work</button>
              </div>
            </div>
            <div className='content-sub-three'>
              <div className='circle-one'>
                <img src={Circle_one_imgh} alt='' width={80} height={80}/>
              </div>
              <div className='circle-one'>
              <img src={Circle_one_imgh} alt='' width={80} height={80}/>
                </div>
                <div className='circle-one'>
                <img src={Circle_one_imgh} alt='' width={80} height={80}/>
                </div>
            </div>
            <div className='content-show-link'>
            {/* <a className='show-anger' href='some'>Show all Awards<ArrowRightAltIcon /></a> */}
            <a className='show-anger' href='some'>Show all Awards<use className='EastIcon'><EastIcon /></use></a>
            </div>
            <Sectionone/>
         
  </div>

  )
}


export default Navbar
