"use client"

import "./about.css"




import Hyperspeed from "../Hyperspeed"; 


const About = () => {
  return (
    <section className="page about">


      <div className="abt-desc">
        <div className="desc-bg">
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [12, 80],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 526344,
                islandColor: 657930,
                background: 0,
                shoulderLines: 1250072,
                brokenLines: 1250072,
                leftCars: [14177983, 6770850, 12732332],
                rightCars: [242627, 941733, 3294549],
                sticks: 242627,
              },
            }}
          />
        </div>
        <div className="desc-cont">
          <div className="desc-title">About me</div>
          <p>
            Passionate about technology and continuous improvement, I enjoy
            learning and adapting to new tools and platforms. I approach
            challenges with curiosity and a problem-solving mindset. Building
            efficient and practical solutions motivates me. I value hands-on
            learning and real-world experience. Always eager to grow, learn, and
            contribute.
          </p>
        </div>


      </div>

    </section>
  );
}

export default About
