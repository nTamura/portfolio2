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
          I am a Full-Stack Developer with a strong, technical background in computer servicing. I am a ramen junkie, super-average snowboarder, wanna-be guitarist, and a PC enthusiast. I originally started my journey with BCIT's Computer Information Systems Administration program for computer networking, but decided that it was not for me. I grabbed the Network Administrative Technician Associates Cert, then moved on with a job as a computer technician where I excelled at servicing and builds.
        </p>
        <p>
          Wanting to do more, I decided it was a time for a career change. I discovered the world of web development, and the rest is history.
        </p>
        <p>
          Since then, I have graduated from CodeCore's Full-Stack Development Bootcamp, did some freelancing, worked with a startup, and completed 2 cohorts as a teaching assistant at BrainStation.
        </p>
      </div>
    </div>
  </section>
);

export default About;
