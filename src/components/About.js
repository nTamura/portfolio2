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
          I am a Full-Stack Developer with a strong, technical background in computer servicing. I am a ramen junkie, super-average snowboarder, wanna-be guitarist, and a PC enthusiast. I originally started my journey with BCIT's Computer Information Systems Administration program for computer networking, but decided that it was not for me. I grabbed the Network Administrative Technician Associates Cert, then moved on with a job as a computer technician. Seeing that there was not a lot of opportunities to move up, I decided it was a time for a career change.
        </p>
        <p>
          Since then, I have graduated from CodeCore's Full-Stack Development Bootcamp, worked a few jobs as a developer, and have happily been clacking away on my keyboard.
        </p>
      </div>
    </div>
  </section>
);

export default About;
