import React from "react";

import image from "../image/paul.jpg";
import { Link } from "react-router-dom";
import InfoAboutMe from "./InfoAboutMe";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="about_section">
        <div className="about_image">
          <img src={image} alt="" />
        </div>
        {InfoAboutMe.map((info) => {
          return (
            <div className="about_text" key={info.id}>
              <h5>{info.heading}</h5>
              <h1>{info.sub_heading}</h1>

              <article>
                {info.paragraph.map((para) => {
                  return <article key={para.id}>
                  <h5>{}</h5>
                  <p>{para.p}</p>
                  </article>;
                })}
              </article>

              <h1>
                <Link to="/contact">
                  <button className="btn-primary">CONTACT</button>
                </Link>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
