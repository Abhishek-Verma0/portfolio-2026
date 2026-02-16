"use client";

import ScrambledText from "../ScrambledText";
import TextArcEffect from "../text-arc-effect";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-arc">
          <TextArcEffect />
        </div>

        <div className="about-text">
          <ScrambledText
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            I'm a curious developer with keen interest in Web Development and
            Machine Learning. As a good learner, I enjoy exploring new
            technologies, building practical projects, and continuously
            improving my skills through hands-on experience.
          </ScrambledText>
        </div>
      </div>
    </section>
  );
};

export default About;
