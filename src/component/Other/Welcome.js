import React from "react";

import SocialIcons from "../SocialIcons";

import { Link, useLocation } from "react-router-dom";

const Welcome = () => {
const location = useLocation();
const locationText = location.pathname.split("/")[1];

  return (
    <section>
      <article className="general_welcome_page">
         <h1>{locationText.toUpperCase()}</h1>
        <div className="social_icons">
          {SocialIcons.map((link) => {
            return (
              <Link to={link.url} key={link.id}>
                {link.icon}
              </Link>
            );
          })}
        </div>
      </article>
      <div className="partial_background"></div>
    </section>
  );
};

export default Welcome;
