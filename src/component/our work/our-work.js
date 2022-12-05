import React from 'react';
import './our-work.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Ourwork() {
  return (
    <section style={{background:'#121216' ,width:'100%' ,height:'100vh', position:'relative'}}>
      <div className='content-container-slick'>
        <div className='content-one-slick'>
          <div className='content-one-button'>
          <button className='prev-button'><ArrowBackIosNewIcon /></button>
          <button className='next-button'><ArrowForwardIosIcon/></button>
          </div>
          <div className='content-one-head'>
          <h2 className='our-work-head'>Our Work</h2>
          </div>
          <div className='content-one-slick-move'>
            <h3 className='content-first-slick'>Health care</h3>
            <h4 className='content-second-slick'>Medikeeper</h4>
            <p className='content-third-slick'>We update Medikeeper's healthcare Website design</p>
            <button className='button-slick-one'></button>
            <button className='button-slick-two'></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ourwork;