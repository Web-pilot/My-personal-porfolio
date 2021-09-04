import React from "react";

import image from '../image/landingpage.jpg';
import large from '../image/welcome-image.jpg'
const Project = () => {
  return (
    <div className="container">
      <div className="sub__container">
        <h5>PROJECT</h5>
        <h1>Check Out Some Of My Work</h1>

         <div className="grid">
            <div className="grid_large">
              <div className="content">
               <h1>
                  <h4>Shopping Cart</h4>
               </h1>
                 <img src={large} alt="" />
              </div>
            </div>
            <div className="grid_top_right">
            <div className="content">
               <h1>
                  <h4>Designer</h4>
               </h1>
                 <img src={image} alt="" />
              </div>
            </div>
            <div className="grid_small_middle_left">
            <div className="content">
               <h1>
                  <h4>Designer</h4>
               </h1>
                 <img src={image} alt="" />
              </div>
            </div>
            <div className="grid_small_middle_right">
            <div className="content">
               <h1>
                  <h4>Designer</h4>
               </h1>
                 <img src={image} alt="" />
              </div>
            </div>
            <div className="grid_small_bottom_left">
            <div className="content">
               <h1>
                  <h4>Designer</h4>
               </h1>
                 <img src={image} alt="" />
              </div>
            </div>
            <div className="grid_small_bottom_right">
            <div className="content">
               <h1>
                  <h4>Designer</h4>
               </h1>
                 <img src={image} alt="" />
              </div>
            </div>
            </div>
         </div>
      </div>
  );
};

export default Project;
