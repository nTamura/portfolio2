import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I am a passionate computer geek with a strong, technical background in computer servicing. I am a food junkie, super-average snowboarder, computer enthusiast and an avid gamer. I am a graduate of CodeCore in 2017, but before that I was at BCIT for Computer Networking.
        </p>
        <hr />
        <h2>Technologies</h2>
        <p className="address">
          <span>HTML, CSS, SASS, JavaScript (ES6), Ruby</span><br />
          <span>React, Node, Express, Ruby on Rails</span><br />
          <span>MongoDB, Postgres, FireBase, Heroku</span><br />
          <span>REST API, JSON, PWA, Git</span><br />
        </p>
      </div>
    </div>
  </section>
);

export default About;
