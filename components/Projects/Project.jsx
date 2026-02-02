"use client";
import React from "react";


import FloatingLines from '../FloatingLines';
import TiltedCard from '../TiltedCard';
const Project = () => {
  return (
    <div className="page">
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

          <div>
              <a href="https://google.com" target="_blank">
                  
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar"
          captionText="Kendrick Lamar"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={
              <p className="tilted-card-demo-text">Kendrick Lamar</p>
            }
            />
            </a>
      </div>
    </div>
  );
};

export default Project;
