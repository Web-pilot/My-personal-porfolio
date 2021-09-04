import React, {useState} from "react";

//img
import logo from '../image/pilot-logo.jpg';

//icons
import {FaListUl, FaBackspace} from 'react-icons/fa';
import WelcomePage from "./WelcomePage";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   
   const handleOpenMenu = () => {
      setIsOpen(prev => !prev)
   }

  return (
    <header>
      <div className="container">
         <nav className='navbar'>
            <div className="logo">
               <img src={logo} alt='' />
               PILOT
            </div>
            <ul className={isOpen ? 'open_and_close' : ''}>
               <li><a href='@' className='active'>HOME</a></li>
               <li><a href='@'>ABOUT</a></li>
               <li><a href='@'>PORTFOLIO</a></li>
               <li><a href='@'>CONTACT</a></li>
               <li><a href='@'>SERVICES</a></li>
            </ul>
               <div className="menu" onClick={handleOpenMenu}>
                  {!isOpen ? <FaListUl /> : <FaBackspace />}
               </div>
         </nav>
      <WelcomePage />
      </div>
      <div className="partial_background"></div>
    </header>
  );
};

export default Header;
