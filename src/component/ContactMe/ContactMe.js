import React from "react";

import Welcome from "../Other/Welcome";

import { FaEnvelope, FaHome, FaPhone} from 'react-icons/fa';
const ContactMe = () => {
  return (
    <>
      <Welcome />
      <section className="container">
         <div className="contact_location_info">
         <h5><FaHome /><span>Lagos Nigeria</span></h5>
         <h5><FaPhone /><span>+2348158099730</span></h5>
         <h5><FaEnvelope /><span>ochagwupaul295@gmaail.com</span></h5>
         </div>
        <form>
          <h1>Leave A message</h1>
          <textarea
            name="text"
            rows="10"
            placeholder="Send me some message"
            className="text-area"
          ></textarea>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="example@gmail.com" />
          <input type="submit" value="SEND MESSAGE" className="btn-primary" />
        </form>
      </section>
    </>
  );
};

export default ContactMe;
