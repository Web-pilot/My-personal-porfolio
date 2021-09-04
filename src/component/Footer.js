import React from 'react'

import { FaFacebookF, FaInstagram, FaRegEnvelope, FaTwitter} from 'react-icons/fa'

const Footer = () => {
   return (
      <footer>
         <div className="logo">
            <h2>WEB PILOT</h2>
         </div>
         <div className="footer_links">
         <ul>
               <li><a href='@'>HOME</a></li>
               <li><a href='@'>ABOUT</a></li>
               <li><a href='@'>PORTFOLIO</a></li>
               <li><a href='@'>CONTACT</a></li>
               <li><a href='@'>SERVICES</a></li>
            </ul>
         </div>
         <div className="social_links">
         <div className="social_icons">
               <a href="@"><FaFacebookF clasName='icon'/></a>
               <a href='@'><FaInstagram clasName='icon'/></a> 
               <a href='@'><FaRegEnvelope clasName='icon'/> </a>
               <a href='@'><FaTwitter clasName='icon'/> </a>
            </div>
         </div>
         <h5 className="copyright">
            <small>Copyright &copy;2021 All right reserve | made by webpilot</small>
         </h5>
      </footer>
   )
}

export default Footer
