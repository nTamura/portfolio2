import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  // autoplay: true,
  speed: 1500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

// linkedin API to GET recommendations and map

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="twelve columns">
          <h1>LinkedIn Recommendations</h1>
          <hr />
          <ul>
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                    Nic was an amazing addition to the BrainStation team. I had the privilege of hiring him to assist me in starting the Brainstation Full-time Program in Vancouver. Together, we built the very first cohort in Fall 2017. Nic was completely self-autonomous and always knew exactly what needed to be done. He was both an empathetic Teaching Assistant that always knew what was going on in the class with students, and also developed and streamlined our administrative processes. Nic's development skills flourished as he mentored students and he was always trying out new technology and making recommendations for the program. I trusted Nic's opinions completely and always knew that his feedback was coming from a thoughtful and insightful place. Many of his recommendations have shaped the program into what it is today. To his next opportunity, Nic brings well-rounded experience in technology and development, as well as a strong work ethic, and relaxed easy-going demeanour. It was truly an honour to work with Nic at BrainStation and his presence will be missed as he moves on to his next opportunity.
                  </p>
                  <cite>Jonathan Bluks, Lead Web Developemnt Educator</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    I was so lucky to have Nic as my teaching assistant during my time at BrainStation. He is an extremely capable developer and really emphasized and taught me the importance of writing clean code, pulling resources and tackling problems in a logical and organized manner. I always learned so much whenever I had questions to ask him as he always made me reevaluate my thinking process and supported my learning in so many ways. I was also fortunate enough to have him as the lead for my pod through school and his enthusiasm for technology and openness to learn about new things kept me motivated and excited about the tech industry - as well as giving me inspiration to always be exploring new realms of code. He is a very pragmatic coder and passed along a lot of his knowledge. I'm going to miss sharing food with him at lunch and I'm so excited to see where he goes after his time with us.
                  </p>
                  <cite>Annie Ng, Frontend Developer</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    I was very fortunate to have Nic as a teaching assistant during my time at BrainStation. Not only is he a brilliant developer but a patient and dedicated mentor. I learned a lot from Nic, he taught me the importance of neat code, strategic debugging and thorough research. He always had a way to make me step back and rethink my approach, helping me become a better coder. I’ll always be grateful for the multiple times he encouraged me in moments of self-doubt, he was a devoted and pragmatic TA. But most of all, it was Nic’s love for programming and learning that inspired me to stay focussed and motivated throughout the cohort. It’s not every day that you have the opportunity to work alongside people you admire and I look forward to seeing what’s in store for Nic.
                  </p>
                  <cite>Sandra Illi, Junior Frontend & UI Developer</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    I had the utmost pleasure working along side Nic as a Teaching assistant at BrainStation. His showcase of work ethic, professionalism and passion for learning new development tools will forever be a strong example of what I look for in a mentor and/or colleague.
                  </p>
                  <p>
                    Nic's ability to make work flow and daily tasks autonomous had me in awe. Not only did he value workplace efficiency, he was able to research and learn new tools himself then apply them to make the workplace as 'lean' as possible.
                  </p>
                  <p>
                    As a developer myself, I learned a tremendous amount from Nic. From taking the initiative to learn new technologies to understanding and troubleshooting any bugs efficiently. The students at BrainStation and as well as myself, owe Nic a great deal for helping us grow into the developers we are today.
                  </p>
                  <p>
                    To the team that may be so lucky to have Nic as a Full Stack Developer. He is an talented developer, a strong mentor and will be an exceptional asset to any team.
                  </p>
                  <cite>Anthony Wong, Fullstack Developer</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    With his vast knowledge and experience, Nic provided me and my classmates at BrainStation tremendous value as a Teaching Assistant. His ability to analyze problems, as well as articulate what I needed to improve on helped me become a significantly better full stack web developer. Along with this extensive knowledge, I view Nic as a tremendously inspiring programmer that has clear passion for technology. He constantly introduced new resources and techniques that I found valuable to my learning. He also led lectures that I found engaging and insightful.
                  </p>
                  <p>
                    What I appreciate most about Nic is his commitment to myself and classmates. He constantly made himself available outside of class time whenever we needed guidance and was encouraging and supportive throughout the intensive bootcamp process. Additionally, he has made the effort to give me career advice whenever I had asked him for help.
                  </p>
                  <p>
                    It has been a privilege to have been mentored by Nic.
                  </p>
                  <cite>Tomy Reyes, Junior Fullstack Developer</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    Nic is a technically gifted individual. I've had the pleasure of working with Nic while he was a senior technician at NCIX and currently as he assists me in developing a website and online presence. Nic is always professional and presents an air of confidence and competence. He will always get the job done with effective communication and efficient methodology.
                  </p>
                  <cite>Rick Quach, IT Principal</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    A logical, dependable and organized person. What he doesn't know, he'll learn quickly and perform beyond expectation. I would highly recommend Nic to any prospective employer.
                  </p>
                  <cite>Ryuji Kita, Tech Department Manager</cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>

      </div>
    </div>
  </section>
);

export default Testimonials;
