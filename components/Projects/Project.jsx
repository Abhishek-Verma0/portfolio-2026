"use client";
import React, { useState, useEffect } from "react";

import "./Project.css";

import TiltedCard from "../TiltedCard";

const project = [
  {
    name: "Secure-Creds",
    github: "",
    img: "https://ik.imagekit.io/Mr01Wick/Secure-creds.png?updatedAt=1770091042475",
    altText: "secure-creds",
    captionText: "Secure-Creds",
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
  const [cardDimensions, setCardDimensions] = useState({
    width: "280px",
    height: "280px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardDimensions({ width: "280px", height: "280px" });
      } else if (window.innerWidth < 1024) {
        setCardDimensions({ width: "350px", height: "280px" });
      } else {
        setCardDimensions({ width: "500px", height: "300px" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="proj-page" id="project">
      <h1 className="my-work"> My Work</h1>

      <div className="all-container">
        <div className="single-project">
          <a href="https://github.com/Abhishek-Verma0/Artsy-AI" target="_blank">
            <TiltedCard
              imageSrc="https://ik.imagekit.io/Mr01Wick/Artsy.png?updatedAt=1770091043312"
              altText="Artsy AI"
              captionText="Artsy"
              containerHeight={cardDimensions.height}
              containerWidth={cardDimensions.width}
              imageHeight={cardDimensions.height}
              imageWidth={cardDimensions.width}
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
              containerHeight={cardDimensions.height}
              containerWidth={cardDimensions.width}
              imageHeight={cardDimensions.height}
              imageWidth={cardDimensions.width}
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
              containerHeight={cardDimensions.height}
              containerWidth={cardDimensions.width}
              imageHeight={cardDimensions.height}
              imageWidth={cardDimensions.width}
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
            href="https://github.com/Abhishek-Verma0/Fitness-Streak-Tracker"
            target="_blank"
          >
            <TiltedCard
              imageSrc="https://ik.imagekit.io/Mr01Wick/streak.webp"
              altText="Fitness-streak"
              captionText="Fitness-Streak"
              containerHeight={cardDimensions.height}
              containerWidth={cardDimensions.width}
              imageHeight={cardDimensions.height}
              imageWidth={cardDimensions.width}
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
