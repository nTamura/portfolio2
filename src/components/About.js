import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns m-profile">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Nic</h2>
        <hr />
        <p>
          I am a full-stack developer with a strong, technical background in computer servicing. I am a ramen junkie, super-average snowboarder, wanna-be guitarist, and a PC enthusiast. I originally started at BCIT's CISA program for computer networking, but decided that it was not for me. Since then, I have graduated from CodeCore's Full-Stack Development Bootcamp and have happily been clacking away on my keyboard.
        </p>

      </div>
    </div>
  </section>
);

export default About;
