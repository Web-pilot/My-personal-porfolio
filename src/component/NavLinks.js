import React, { useState, useEffect } from "react";

//component
import LinkItems from "./LinkItems";
import { useLocation } from "react-router";

//icons
import { FaListUl, FaBackspace } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const windowScroll = () => {
       setIsOpen(false);
      let height = window.scrollY;
      if (height > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", windowScroll);
  }, [scroll]);

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const location = useLocation();

  const closeNavbarOnclick = () => {
    setIsOpen(false);
  };
 
  return (
    <>
      <nav className={`navbar ${scroll && "scroll"}`}>
        <div className="container navbar-flex">
          <div className="logo">PILOT</div>
          <ul className={isOpen ? "open_and_close" : ""}>
            {LinkItems.map((links) => {
              return (
                <li key={links.id}>
                  <Link
                    to={links.url}
                    className={location.pathname === links.url && "active"}
                    onClick={closeNavbarOnclick}
                  >
                    {links.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="menu" onClick={handleOpenMenu}>
            {!isOpen ? <FaListUl /> : <FaBackspace />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavLinks;
