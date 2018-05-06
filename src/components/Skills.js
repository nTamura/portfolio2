import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        My current technology focus consists of the MERN stack (MongoDB, Express, Node, and React), but am familiar with a range of other languages and frameworks as well. Some of the tech that I work with (but not limited to) includes:
      </p>
      <p className="skills-list">
        <span>HTML, CSS, SASS, JS (ES6), Ruby</span><br />
        <span>React, Node, Express, Rails</span><br />
        <span>MongoDB, Postgres, FireBase</span><br />
        <span>REST, JSON, PWA, Git, Heroku</span><br />
      </p>

      {/* <div className="bars">
        <ul className="skills">
          <li>
            <em>Photoshop</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Illustrator</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Wordpress</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Nodejs</em>
          </li>
        </ul>
      </div> */}
    </div>
  </div>
);
export default Skills;
