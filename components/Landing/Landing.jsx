"use client"
import "./landing.css"

import Orb from "../Orb";
import TextType from "../TextType";
import Navbar from "../navbar/Navbar";

const Landing = () => {
  return (
    <section className="page">
      <Navbar/>
      <div
        className="orb-layer"
        style={{ width: "100%", height: "100vh", position: "absolute" }}
      >
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
      <div className="content">
        
        <div className="intro-text">
          <TextType
            text={["Hi..!", "I'm Abhishek Verma", " a passionate developer."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            texts={["Welcome !", "Build some amazing experiences!"]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
