import React from 'react'

//component
import SocialIcons from './SocialIcons';
//image
import image from '../image/paul.jpg';
//icons
//link
import {Link } from 'react-router-dom';
const WelcomePage = () => {
   return (
      <div className='welcome_page'>
         <div className="info_about_me">
            <h5>HEY THERE!</h5>
            <h1>I'M CHA'S PAUL</h1>
            <h4>WEB DEVELOPER</h4>
            <div className="social_icons">
               {SocialIcons.map((link) => {
                  return <a href={link.url} key={link.id}>{link.icon}</a>
               })}
            </div>
            <h1>
               <Link to='/project'>
                  <button className='btn-primary'>PROJECT</button>
               </Link>
            </h1>
         </div>
         {/* <div className="info_about_me_image">
            <img src={image} alt="" />
         </div> */}
      </div>
   )
}

export default WelcomePage
