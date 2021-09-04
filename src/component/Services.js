import React from "react";

import { FaCode, FaKeyboard, FaUserFriends } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container service">
      <h5>SERVICES</h5>
      <h1>What Services I Offer</h1>
      <div className="service_flex">
        <div className="flex-item flex_1">
          <div className="icon_div">
            <FaCode className="icon" />
          </div>
          <h4>Web Developement</h4>
          <small>
            Fruit saw for brought fish forth had ave is man a that their Two he
            is dominion evening their Fruit saw for brought fish forth
          </small>
          <h5>LEARN MORE</h5>
        </div>

        <div className="flex-item flex_1">
          <div className="icon_div">
            <FaUserFriends className="icon" />
          </div>
          <h4>Coding Instructor</h4>
          <small>
            Fruit saw for brought fish forth had ave is man a that their Two he
            is dominion evening their Fruit saw for brought fish forth
          </small>
          <h5>LEARN MORE</h5>
        </div>

        <div className="flex-item flex_1">
          <div className="icon_div">
            <FaKeyboard className="icon" />
          </div>
          <h4>Typist</h4>
          <small>
            Fruit saw for brought fish forth had ave is man a that their Two he
            is dominion evening their Fruit saw for brought fish forth
          </small>
          <h5>LEARN MORE</h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
