"use client"

import "./about.css"



import ScrambledText from "../ScrambledText"
import TextArcEffect from "../text-arc-effect";



const About = () => {
  return (
    <section className="page-about" id="about">


   <TextArcEffect />
    
      <p>
        <ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars=".:"
        >
          
I'm a curious developer with keen interest in Web Development and Machine Learning. As a good learner, I enjoy exploring new technologies, building practical projects, and continuously improving my skills through hands-on experience.
</ScrambledText>
   </p>


    </section>
  );
}

export default About
