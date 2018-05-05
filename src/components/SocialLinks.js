import React from "react";
import {
  FaAngellist,
  FaGithub,
  FaLinkedinSquare
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a target="_blank" href="https://www.linkedin.com/in/nictamura/">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/nTamura">
        <FaGithub />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://angel.co/ntamura">
        <FaAngellist />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
