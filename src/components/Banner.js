import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Nic Tamura</h1>
      <h3>
        Vancouver based <span>Web Developer</span> with a strong, technical background in computer servicing
      </h3>
      {/* <h3></h3> */}
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
