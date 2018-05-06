import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Life</h3>
          <p className="info">
            Master in Graphic Design
            <span>&bull;</span>
            <em className="date">April 2007</em>
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede
            mollis pretium.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>School of Cool Designers</h3>
          <p className="info">
            B.A. Degree in Graphic Design
            <span>&bull;</span>
            <em className="date">March 2003</em>
          </p>

          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat
          </p>
        </div>
      </div>
    </div>
  </div>
);

{/* <h2>Technologies</h2>
<p className="address">
  <span>HTML, CSS, SASS, JavaScript (ES6), Ruby</span><br />
  <span>React, Node, Express, Ruby on Rails</span><br />
  <span>MongoDB, Postgres, FireBase, Heroku</span><br />
  <span>REST API, JSON, PWA, Git</span><br />
</p> */}

export default Education;
