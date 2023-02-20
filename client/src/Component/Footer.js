import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
const Footer = () => {
  return (
    <>
    <div className='mt-4' style={{backgroundColor:'black'}}>
    <div class="d-flex justify-content-center"  >
        <div className='mt-2'><LinkContainer to="/"><a href="">HOME |</a></LinkContainer></div>
        <div className='mt-2'><LinkContainer to="/about"><a href="">ABOUT  |</a></LinkContainer></div>
        <div className='mt-2'><LinkContainer to="/contact"><a href="">Contact Us </a></LinkContainer></div>
    </div>
     <div className='mt-3' >
        <p className='text-center' style={{color:'white'}} >&copy; 2023 CruiseHub.com</p>
     </div>

     </div>
       

  
    </>
  );
}

export default Footer;
