"use client"

import "./about.css"



import Magnet from '../Magnet'


import Skill from "../skills/Skill";


const About = () => {
  return (
    <section className="page about" id="about">
      <div className="abt-desc">
        <div className="desc-bg">

        </div>
        <div className="abt-cont">
          <div className="desc-cont">
            <div className="abt-head">
              <Magnet padding={50} disabled={false} magnetStrength={50}>
                <p>About</p>
              </Magnet>
            </div>

            <div className="abt-text">

            <p>
              Passionate about technology and continuous improvement, I enjoy
              learning and adapting to new tools and platforms. I value hands-on
              learning and real-world experience. Always eager to grow, learn,
              and contribute.
            </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About
