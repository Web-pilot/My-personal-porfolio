import React from 'react'

// import image from '../image/me.png';

import {FaFacebookF, FaInstagram, FaRegEnvelope} from 'react-icons/fa';

const WelcomePage = () => {
   return (
      <div className='welcome_page'>
         <div className="info_about_me">
            <h5>HEY THERE!</h5>
            <h1>I AM PAUL SMART</h1>
            <h4>CREATIVE WEB DEVELOPER</h4>
            <div className="social_icons">
               <a href="@"><FaFacebookF clasName='icon'/></a>
               <a href='@'><FaInstagram clasName='icon'/></a> 
               <a href='@'><FaRegEnvelope clasName='icon'/> </a>
            </div>
            <h1>
               <button className='btn-primary'>PORTOFILIO</button>
            </h1>
         </div>
         <div className="info_about_me_image">
            {/* <img src={image} alt="" /> */}
         </div>
      </div>
   )
}

export default WelcomePage
