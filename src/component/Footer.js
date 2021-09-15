import React from "react";

//component
import LinkItems from "./LinkItems";
import SocialIcons from "./SocialIcons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <h2>WEB PILOT</h2>
      </div>
      <div className="footer_links">
        <ul>
          {LinkItems.map((links) => {
            return (
              <li key={links.id}>
                <Link to={links.url}>{links.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social_links">
        <div className="social_icons">
          {SocialIcons.map((link) => {
            return (
              <a href={link.url} key={link.id}>
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
      <h5 className="copyright">
        <small>Copyright &copy;2021 All right reserve | made by webpilot</small>
      </h5>
    </footer>
  );
};

export default Footer;
