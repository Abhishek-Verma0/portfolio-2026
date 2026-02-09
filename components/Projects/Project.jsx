"use client";
import React from "react";

import "./Project.css"


import TiltedCard from "../TiltedCard";


const project = [
  {
    name: "Secure-Creds",
    github: "",
    img: "https://ik.imagekit.io/Mr01Wick/Secure-creds.png?updatedAt=1770091042475",
    altText: "secure-creds",
    captionText:"Secure-Creds",
  },
  {
    name: "Artsy AI",
    github: "",
    img: "https://ik.imagekit.io/Mr01Wick/Artsy.png?updatedAt=1770091043312",
  },
  {
    name: "Snake Game(C)",
    link: "",
    img: "../../public/images/Snake.png",
  },
];




const Project = () => {
  return (
    <div className="page" id="project">

      <h1 className="my-work"> My Work</h1>

      <div className="all-container">
        <div className="single-project">
          <a href="https://github.com/Abhishek-Verma0/Artsy-AI" target="_blank">
            <TiltedCard
              imageSrc="https://ik.imagekit.io/Mr01Wick/Artsy.png?updatedAt=1770091043312"
              altText="Artsy AI"
              captionText="Artsy"
              containerHeight="300px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={<p className="tilted-card-demo-text">Artsy AI</p>}
            />
          </a>
        </div>
        {/* project 2 */}
        <div className="single-project">
          <a
            href="https://github.com/Abhishek-Verma0/PETV83L-Abhishek-Verma-Secure-Credential-Manager-With-Key-Encryption"
            target="_blank"
          >
            <TiltedCard
              imageSrc="https://ik.imagekit.io/Mr01Wick/Secure-creds.png?updatedAt=1770091043312"
              altText="Secure-Creds"
              captionText="Secure-Creds"
              containerHeight="300px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text">Secure-Creds</p>
              }
            />
          </a>
        </div>

        {/* 3rd -project */}
        <div className="single-project">
          <a
            href="https://github.com/Abhishek-Verma0/Snake-Game"
            target="_blank"
          >
            <TiltedCard
              imageSrc="https://ik.imagekit.io/Mr01Wick/classic-snake.jpg"
              altText="Classic-Snake"
              captionText="Classic-Snake"
              containerHeight="300px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text">Classic Snake</p>
              }
            />
          </a>
        </div>

        {/* project 4 */}
        <div className="single-project">
          <a
            href="github.com/Abhishek-Verma0/Fitness-Streak-Tracker"
            target="_blank"
          >
            <TiltedCard
              imageSrc="https://ik.imagekit.io/Mr01Wick/streak.webp"
              altText="Fitness-streak"
              captionText="Fitness-Streak"
              containerHeight="300px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text">Fitness-Streak</p>
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
