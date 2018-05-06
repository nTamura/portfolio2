import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Nic Tamura</h1>
      <h3>
        I am a Vancouver based <span>Web Developer</span> with a strong, technical background in computer servicing.
        {/* <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>. */}
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
